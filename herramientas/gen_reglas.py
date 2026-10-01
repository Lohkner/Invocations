# -*- coding: utf-8 -*-
"""Genera js/reglas.js (DEFAULT_DB de S&S Director) a partir de los manuales
de Stars & Sorcery en .docx: el Manual de Monstruos y la Guía del Director.

Uso (desde la carpeta del proyecto):
    python herramientas/gen_reglas.py
    python herramientas/gen_reglas.py <carpeta con los docx>

Después de regenerar: sube STORAGE.RULES_DATA_VERSION (js/storage.js) y
CACHE_VERSION (sw.js), y pasa el autodiagnóstico (?check=1): comprueba que las
criaturas del Manual siguen saliendo de la fórmula y caben en su Peso.

Los docx no se abren en su sitio (OneDrive devuelve PermissionError): se
copian antes a una carpeta temporal. Los iconos de tipo de Talento son
imágenes (t_pasivo.png y compañía), no texto: se convierten en marcadores
como [t_pasivo].
"""
import re, json, sys, os, unicodedata, zipfile, html, shutil, tempfile
sys.stdout.reconfigure(encoding='utf-8')
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FUENTE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.expanduser('~'), 'OneDrive', 'S&S', 'Ultimate')
OUT = os.path.join(RAIZ, 'js', 'reglas.js')


def extraer(nombre):
    """Texto de un docx, línea a línea; las filas de tabla salen como «ROW: | a | b»."""
    tmp = os.path.join(tempfile.mkdtemp(prefix='ssd_'), nombre)
    shutil.copyfile(os.path.join(FUENTE, nombre), tmp)
    with zipfile.ZipFile(tmp) as z:
        x = z.read('word/document.xml').decode('utf-8')
    x = re.sub(r'<w:tab/>', '\t', x)
    x = re.sub(r'<w:drawing>(?:(?!</w:drawing>).)*?name="((?:t|f)_[a-z]+)\.png"(?:(?!</w:drawing>).)*?</w:drawing>',
               lambda m: '<w:t>[' + m.group(1) + ']</w:t>', x, flags=re.S)
    out = []
    for para in re.findall(r'<w:p[ >].*?</w:p>|<w:tr[ >]|</w:tr>|<w:tc[ >]', x, flags=re.S):
        if para.startswith('<w:tr'):
            out.append('[TR]'); continue
        if para == '</w:tr>':
            out.append('[/TR]'); continue
        if para.startswith('<w:tc'):
            out.append('|'); continue
        estilo = re.search(r'<w:pStyle w:val="([^"]+)"', para)
        t = html.unescape(''.join(a or b for a, b in re.findall(r'<w:t(?: [^>]*)?>([^<]*)</w:t>|(\t)', para)))
        if t.strip():
            pre = '#' + estilo.group(1) + ' ' if estilo and re.match(r'(Heading|Ttulo|Title)', estilo.group(1)) else ''
            out.append(pre + t)
    txt = '\n'.join(out)
    txt = re.sub(r'\[TR\]\n?(.*?)\n?\[/TR\]', lambda m: 'ROW: ' + ' '.join(m.group(1).split('\n')), txt, flags=re.S)
    return txt.split('\n')


M = extraer('Stars_and_Sorcery_Manual_de_Monstruos_v1.docx')
G = extraer('Stars_and_Sorcery_Guia_del_Director_v1.docx')


def slug(s):
    s = unicodedata.normalize('NFD', s.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]+', '_', s).strip('_')


def cells(row):
    assert row.startswith('ROW: |'), row
    return [c.strip() for c in row[len('ROW: |'):].split(' | ')]


def find(L, text, start=0, exact=False):
    for i in range(start, len(L)):
        if (L[i] == text) if exact else (text in L[i]):
            return i
    raise KeyError(text)


def rows_from(L, i):
    """Filas ROW consecutivas a partir de la primera que haya desde i."""
    while not L[i].startswith('ROW: |'):
        i += 1
    out = []
    while i < len(L) and L[i].startswith('ROW: |'):
        c = cells(L[i]); i += 1
        if c == ['Ilustración']: break
        out.append(c)
    return out, i


def num(s):
    return int(s.replace('+', '').replace('−', '-').replace('.', ''))


# ───────────────────────── Tabla por NA ─────────────────────────
i = find(M, '#Heading2 Estadísticas por Nivel de Amenaza')
rows, _ = rows_from(M, i)
NA = {}
for r in rows[1:]:
    na, pv, ga, atk, dano, pa, salv, cd, peso, va = r
    g, a = [x.strip() for x in ga.split('/')]
    sf, sd = [x.strip() for x in salv.split('/')]
    NA[na] = {
        'name': 'NA ' + na, 'pv': 4 if na == '0' else num(pv), 'g': int(g), 'a': int(a),
        'atk': num(atk), 'dano': dano, 'pa': int(pa), 'sf': num(sf), 'sd': num(sd),
        'cd': int(cd), 'peso': int(peso), 'va': num(va),
    }
ETIQ_NA = {'0': 'Civil', '1': 'Novato', '3': 'Veterano', '10': 'Élite', '12': 'Legendario'}
for k, v in ETIQ_NA.items():
    NA[k]['etiqueta'] = v

# ───────────────────────── Roles ─────────────────────────
i = find(M, '#Heading2 Roles', exact=True)
rows, _ = rows_from(M, i)
ROL_MOD = {
    'bruto': dict(pvNa=10, dano=2, g=-2), 'hostigador': dict(pvNa=-5, g=2, vel=10),
    'controlador': dict(dano=-2), 'comandante': {}, 'soporte': dict(pvNa=-8, dano=-1),
    'explorador': dict(pvNa=-3, vel=15, ini=4), 'artillero': dict(pvNa=-5, dano=2, g=-1),
    'emboscador': dict(pvNa=-3, g=1), 'guardian': dict(pvNa=5, a=1, vel=-10),
    'esbirro': dict(esbirro=True),
}
ROL_HAB = {  # nombre de la habilidad, tipo y coste (el texto sale de la tabla)
    'bruto': ('Ataque Masivo', 'Aptitud', '2 PA'), 'hostigador': ('Flanqueo', 'Rasgo', ''),
    'controlador': ('Control de Zona', 'Aptitud', '3 PA'), 'comandante': ('Aura de Mando', 'Aura', ''),
    'soporte': ('Restaurar', 'Aptitud', '2 PA'), 'explorador': ('Primero en Llegar', 'Rasgo', ''),
    'artillero': ('Posición', 'Rasgo', ''), 'emboscador': ('Primer Golpe', 'Modificador', ''),
    'guardian': ('Custodia', 'Reacción', ''), 'esbirro': ('Esbirro', 'Rasgo', ''),
}
ROLES = {}
for nombre, mod, hab in rows[1:]:
    k = slug(nombre)
    hn, ht, hc = ROL_HAB[k]
    txt = re.sub(r'^[^:]{3,22}(?:\s*\([^)]*\))?:\s*', '', hab) if k not in ('controlador', 'soporte', 'explorador', 'esbirro') else hab
    txt = re.sub(r'^\d PA:\s*', '', txt)
    txt = txt[0].upper() + txt[1:]
    e = {'name': nombre, 'mod': mod, 'hab': hn, 'habTipo': ht, 'habCoste': hc, 'habTxt': txt}
    e.update(ROL_MOD[k])
    ROLES[k] = e
ROLES['esbirro']['habTxt'] = 'Cae con cualquier golpe que le quite sus PV. Sin Rasgos propios salvo los de tipo. No tira Moral: huye cuando cae su líder o la mitad de su grupo. Todos los esbirros de un mismo tipo actúan en la misma Iniciativa.'

# ───────────────────────── Tamaños ─────────────────────────
i = find(M, '#Heading2 Tamaño', exact=True)
rows, _ = rows_from(M, i)
TAM_PV = {'×½': .5, '×¾': .75, '×1': 1, '×1¼': 1.25, '×1½': 1.5, '×2': 2}
TAM = {}
for nombre, ej, pv, g, alc, esp in rows[1:]:
    TAM[slug(nombre)] = {'name': nombre, 'ej': ej, 'pv': TAM_PV[pv], 'pvTxt': pv,
                         'g': 0 if g == '—' else num(g), 'alcance': alc, 'espacio': esp}

# ───────────────────────── Biblioteca ─────────────────────────
FAM_KEYS = ['ataque', 'defensa', 'movilidad', 'sentidos', 'control', 'mente', 'vitalidad', 'elementos',
            'sobrenatural', 'manada', 'sigilo', 'forma', 'tecnologia', 'mando', 'guarida', 'debilidades']
MODS = {
    'piel_gruesa': {'a': 2}, 'caparazon': {'a': 3, 'vel': -10}, 'evasiva': {'g': 2}, 'veloz': {'vel': 20},
    'varias_cabezas': {'pa': 1}, 'lenta': {'vel': -10}, 'cobarde': {'moral': -4}, 'fragil': {'pvMult': .75},
    'sin_rendicion': {'noMoral': True},
}
MULTI = {'resistencia', 'inmunidad', 'inmunidad_a_estados'}
PIDE = {
    'resistencia': 'Un tipo físico o dos de energía', 'inmunidad': 'Tipo de daño', 'inmunidad_a_estados': 'Dos estados',
    'vulnerabilidad': 'Tipo de daño', 'aversion': 'Material o símbolo', 'aliento': 'Tipo de energía',
    'regeneracion': 'Daño que la detiene (Fuego, Ácido…)', 'uso_de_axiomas': 'Axiomas que conoce (hasta tres)',
    'trucos': 'Los dos Trucos', 'tentaculos': 'Cuántos (de 2 a 4)', 'absorcion_elemental': 'Tipo de energía',
    'muro_elemental': 'Elemento', 'estallido_al_morir': 'Elemento', 'fundirse_con_el_elemento': 'Elemento',
    'nombre_verdadero': 'El nombre (para el Director)', 'resurgir': 'Su núcleo', 'ligada_al_lugar': 'El lugar',
    'victoria_alternativa': 'La condición', 'maldicion': 'Tipo de tirada', 'proyectiles': 'Qué lanza',
    'cuerpo_hueco': 'Qué lleva dentro', 'nucleo_expuesto': 'Dónde está',
}
i = find(M, '#Heading2 La Biblioteca')
fin = find(M, 'Capítulo 4', i, exact=True)
FAM, RASGOS = {}, {}
fk = iter(FAM_KEYS)
j = i + 1
while j < fin:
    if M[j].startswith('#Heading3 '):
        k = next(fk)
        nombre = M[j][10:]
        desc = M[j + 1]
        rows, j2 = rows_from(M, j + 2)
        FAM[k] = {'name': nombre, 'txt': desc}
        lst = []
        for n, nm, tipo, peso, efecto in rows[1:]:
            partes = [p.strip() for p in tipo.split('·')]
            e = {'id': slug(nm), 'name': nm, 'tipo': partes[0], 'peso': num(peso), 'txt': efecto}
            for p in partes[1:]:
                if re.search(r'PA|fuera de combate', p):
                    e['coste'] = p
                else:
                    e['frec'] = p
            if e['id'] in MODS: e['mod'] = MODS[e['id']]
            if e['id'] in MULTI: e['multi'] = True
            if e['id'] in PIDE: e['pide'] = PIDE[e['id']]
            lst.append(e)
        RASGOS[k] = lst
        j = j2
    else:
        j += 1
assert len(RASGOS) == 16, len(RASGOS)
POR_ID = {}
for k, lst in RASGOS.items():
    for e in lst:
        assert e['id'] not in POR_ID, e['id']
        POR_ID[e['id']] = (k, e)
POR_NOMBRE = {e['name']: e for _, e in POR_ID.values()}
print('piezas de biblioteca:', len(POR_ID))

# dado de cada familia en la tabla aleatoria
i = find(M, 'ROW: | d20 | Familia | Dado')
rows, _ = rows_from(M, i)
for (rango, nombre, dado), k in zip(rows[1:], FAM_KEYS):
    FAM[k]['d20'] = rango
    FAM[k]['dado'] = dado.split(' ')[0]

# ───────────────────────── Tipos ─────────────────────────
i = find(M, 'ROW: | Tipo | Rasgos de tipo (gratuitos)')
rows, _ = rows_from(M, i)
TIPO_EXTRA = {
    'bestia': dict(elige=[['olfato_agudo', 'vision_en_la_oscuridad']], salvDef=['DES', 'CON'], noMoral='int4'),
    'humanoide': dict(salvDef=['FUE', 'CON'], equipo=True),
    'gigante': dict(gratis=[{'id': 'gigantismo'}], salvDef=['FUE', 'CON'], tamMin='grande'),
    'monstruosidad': dict(gratisFam={'fam': 'forma', 'peso': 1}, salvDef=['FUE', 'CON']),
    'dragon': dict(gratis=[{'id': 'vision_en_la_oscuridad'}, {'id': 'inmunidad', 'nota': 'su elemento'}], exige=['aliento'], salvDef=['DES', 'CON']),
    'no_muerto': dict(gratis=[{'id': 'vigor_inagotable'}, {'id': 'inmunidad_a_estados', 'nota': 'Envenenado y Aterrado'}], salvDef=['CON', 'SAB']),
    'espiritu': dict(gratis=[{'id': 'telepatia'}], salvDef=['DES', 'SAB']),
    'constructo': dict(gratis=[{'id': 'vigor_inagotable'}, {'id': 'inmunidad_a_estados', 'nota': 'Envenenado y Encantado'}], salvDef=['FUE', 'CON'], noMoral='nunca'),
    'maquina': dict(gratis=[{'id': 'vigor_inagotable'}, {'id': 'sistemas_redundantes'}], salvDef=['CON', 'INT'], noMoral='nunca'),
    'elemental': dict(gratis=[{'id': 'inmunidad', 'nota': 'su elemento'}, {'id': 'fundirse_con_el_elemento'}], salvDef=['CON', 'DES']),
    'extraplanar': dict(gratis=[{'id': 'telepatia'}, {'id': 'resistencia', 'nota': 'dos tipos de energía'}], salvDef=['SAB', 'CAR']),
    'feerico': dict(gratis=[{'id': 'voluntad_de_hierro'}], exige=['aversion'], salvDef=['DES', 'CAR']),
    'aberracion': dict(gratis=[{'id': 'mente_ajena'}, {'id': 'vision_en_la_oscuridad'}], salvDef=['INT', 'SAB']),
    'planta_u_hongo': dict(gratis=[{'id': 'inmunidad_a_estados', 'nota': 'Cegado y Ensordecido'}, {'id': 'camuflaje'}], salvDef=['CON', 'FUE']),
    'cieno': dict(gratis=[{'id': 'forma_amorfa'}, {'id': 'sentido_sismico'}], salvDef=['CON', 'FUE']),
    'mutante': dict(gratisFam={'fam': 'forma'}, salvDef=['CON', 'SAB']),
}
TIPOS = {}
for nombre, rasgos, salv, deb in rows[1:]:
    k = slug(nombre)
    e = {'name': nombre, 'txt': rasgos, 'salv': salv, 'deb': deb}
    e.update(TIPO_EXTRA[k])
    for gr in e.get('gratis', []):
        assert gr['id'] in POR_ID, gr
    TIPOS[k] = e
assert len(TIPOS) == 16


# ───────────────────────── Tablas sueltas ─────────────────────────
def tabla1(L, ancla, col=1, desde=0):
    i = find(L, ancla, desde)
    rows, _ = rows_from(L, i)
    # Dos tablas pegadas en el docx salen como filas seguidas: se corta en la
    # siguiente cabecera («d12 | …»).
    cuerpo = []
    for r in rows[1:]:
        if re.match(r'^(d\d+|n\.º)$', r[0]): break
        cuerpo.append(r)
    return [r[col] for r in cuerpo if len(r) > col and r[col]]


TABLAS = {}
def T(k, nombre, filas):
    TABLAS[k] = {'name': nombre, 'filas': filas}

T('fases', 'Fases de jefe (d12)', tabla1(M, 'ROW: | d12 | La transformación'))
T('guarida', 'Acciones de Guarida (d12)', tabla1(M, 'ROW: | d12 | Acción de Guarida'))
T('victoria', 'Victoria alternativa (d10): el combate termina si el grupo…', tabla1(M, 'ROW: | d10 | El combate termina si el grupo'))
T('bandas', 'Composición de bandas (d12)', tabla1(M, 'ROW: | d12 | Composición'))
T('forma', 'Aspecto: forma base (d20)', tabla1(M, 'ROW: | d20 | Forma base', 1))
T('rasgoVisible', 'Aspecto: rasgo visible (d20)', tabla1(M, 'ROW: | d20 | Forma base', 3))
T('mueve', 'Aspecto: se mueve… (d12)', tabla1(M, 'ROW: | d12 | Se mueve', 1))
T('ataca', 'Aspecto: ataca con… (d12)', tabla1(M, 'ROW: | d12 | Se mueve', 3))
T('quiere', 'Comportamiento: qué quiere (d20)', tabla1(M, 'ROW: | d20 | Qué quiere', 1))
T('pelea', 'Comportamiento: cómo pelea (d12)', tabla1(M, 'ROW: | d20 | Qué quiere', 3))
T('habitat', 'Hábitat (d20)', tabla1(M, 'ROW: | d20 | Hábitat', 1))
T('senal', 'La señal (d20)', tabla1(M, 'ROW: | d20 | Hábitat', 3))
T('botinCae', 'Lo que deja al caer (d12)', tabla1(M, 'ROW: | d12 | Lo que deja al caer'))
T('nomNucleo', 'Nombres: artículo y núcleo (d20)', tabla1(M, 'ROW: | d20 | Artículo y núcleo', 1))
T('nomRaiz', 'Nombres: raíz sonora (d20)', tabla1(M, 'ROW: | d20 | Artículo y núcleo', 3))
T('nomEpiteto', 'Nombres: epíteto (d20)', tabla1(M, 'ROW: | d20 | Artículo y núcleo', 5))
T('nomFin', 'Nombres: terminaciones', ['ax', 'ith', 'ora', 'un', 'esh', 'ul'])
T('trampaDisp', 'Trampa: disparador (d12)', tabla1(M, 'ROW: | d12 | Disparador | Efecto | Señal', 1))
T('trampaEfecto', 'Trampa: efecto (d12)', tabla1(M, 'ROW: | d12 | Disparador | Efecto | Señal', 2))
T('trampaSenal', 'Trampa: señal (d12)', tabla1(M, 'ROW: | d12 | Disparador | Efecto | Señal', 3))

i = find(G, '#Heading3 El Dado de Riesgo (1d6)')
rows, _ = rows_from(G, i)
T('riesgo', 'Dado de Riesgo (d6)', [f'{r[1]} — {r[2]}' for r in rows[1:]])
i = find(G, '#Heading3 Tabla de Reacciones PNJ (2d10)')
rows, _ = rows_from(G, i)
T('reaccion', 'Reacción de PNJ (2d10): 2–5 · 6–10 · 11–15 · 16–19 · 20', [r[1] for r in rows[1:]])
T('objFaccion', 'Objetivos de Facción (d8)', tabla1(G, 'ROW: | d8 | Objetivo'))
T('objTipo', 'Objeto mágico: tipo (d12)', ['Arma cuerpo a cuerpo', 'Arma a distancia', 'Armadura', 'Escudo', 'Capa o vestimenta',
   'Accesorio (anillo, amuleto, brazalete)', 'Consumible (poción, pergamino)', 'Joya o gema', 'Herramienta especializada',
   'Foco', 'Documento o mapa arcano', 'Objeto extraño (no identificable a primera vista)'])
T('objHistoria', 'Objeto mágico: las tres preguntas', ['¿Quién lo creó y con qué propósito?', '¿Cuál fue su momento de mayor poder o infamia?',
   '¿Qué quiere ahora el objeto, o qué creen los que lo conocen que «quiere» hacer?'])
T('revision', 'Revisión final de una criatura', ['¿Se puede ver venir? Tiene una señal, y sus Aptitudes más peligrosas se anuncian.',
   '¿Obliga a decidir? Si la respuesta óptima es siempre «pegarle más fuerte», le falta algo.',
   '¿Se puede descubrir su punto débil? Si tiene una Debilidad, el grupo tiene forma de averiguarla antes o durante el encuentro.',
   '¿Sabe cuándo huir? Anota su Moral o la condición en la que abandona la pelea.'])
T('moralMods', 'Modificadores de Moral', ['+2 · Líder especialmente carismático o intimidante', '+3 · Defienden algo que no pueden abandonar',
   '−2 · Han sufrido un Golpe Crítico devastador', '−2 · Su líder acaba de caer', '−1 · El terreno ofrece una huida fácil y visible'])
T('moralCuando', 'Cuándo comprobar la Moral', ['Cae el líder visible del grupo enemigo.', 'La mitad o más del grupo ha sido incapacitada o muerta.',
   'Aparece un terror sobrenatural o una amenaza desproporcionada.', 'Un enemigo recibe un golpe que supera la mitad de sus PV de una vez.'])
for k, t in TABLAS.items():
    assert t['filas'], k
print({k: len(t['filas']) for k, t in TABLAS.items()})

# ───────────────────────── Plantillas ─────────────────────────
i = find(M, 'ROW: | d12 | Plantilla | NA | Cambios')
rows, _ = rows_from(M, i)
PL_AUTO = {  # lo que la app aplica sola; el resto queda descrito en `txt`
    'anciana': dict(na=2, gana=['voluntad_de_hierro']),
    'no_muerta': dict(na=0, tipo='no_muerto', gana=['toque_necrotico', 'vulnerabilidad'], notas={'vulnerabilidad': 'Radiante'}),
    'espectral': dict(na=1, tipo='espiritu', gana=['incorporeo'], pierdeFam=['forma']),
    'infernal': dict(na=1, tipo='extraplanar', gana=['cuerpo_igneo', 'aversion'], notas={'aversion': 'sal consagrada'}),
    'mecanizada': dict(na=1, tipo='maquina', gana=['arma_montada', 'vulnerabilidad'], notas={'vulnerabilidad': 'Rayo'}, a=2),
    'colosal': dict(na=2, tam=2, gana=['pisoton', 'gigantismo'], pierdeFam=['sigilo']),
    'enjambre': dict(na=0, horda=True, gana=['enjambre']),
    'corrupta': dict(na=1, tipo='mutante', gana=['aura_toxica']),
    'cristalina': dict(na=1, gana=['piel_gruesa', 'reflejar_axiomas', 'vulnerabilidad'], notas={'vulnerabilidad': 'Contundente'}),
    'sombria': dict(na=1, gana=['paso_de_sombra', 'oscuridad_viva', 'fotosensible']),
    'alfa': dict(na=1, rol='comandante', gana=['lider_de_manada']),
    'cria': dict(na=-2, tam=-1, gana=['cobarde'], pierdeMayor=True),
}
PLANT = {}
for n, nombre, na, cambios in rows[1:]:
    k = slug(nombre)
    e = {'name': nombre, 'naTxt': na, 'txt': cambios}
    e.update(PL_AUTO[k])
    for g in e.get('gana', []):
        assert g in POR_ID, g
    PLANT[k] = e

# ───────────────────────── Peligros ─────────────────────────
i = find(M, 'ROW: | d20 | Peligro | NA | Condición')
rows, _ = rows_from(M, i)
PELIGROS = {}
for n, nombre, na, txt in rows[1:]:
    cond, senal, cons = [p.strip() for p in txt.split(' · ', 2)]
    PELIGROS[slug(nombre)] = {'name': nombre, 'na': int(na), 'cond': cond, 'senal': senal, 'cons': cons}
assert len(PELIGROS) == 20

# ───────────────────────── Bestiario (Manual de Monstruos) ─────────────────────────
ROL_K = {v['name']: k for k, v in ROLES.items()}
TAM_K = {v['name'].lower(): k for k, v in TAM.items()}
TIPO_K = {v['name']: k for k, v in TIPOS.items()}
ESTADOS_N = ['Sangrado', 'Desgarro', 'Trauma', 'Envenenado', 'Ignición', 'Ralentizado', 'Aturdido', 'Conmocionado', 'Cegado',
             'Aterrado', 'Paralizado', 'Apresado', 'Derribado', 'Encantado', 'Ensordecido', 'Maldito', 'Petrificado']


def rasgo_de(nombre, txt=None, nota=None, gratis=False):
    e = POR_NOMBRE[nombre]
    r = {'id': e['id']}
    if txt: r['txt'] = txt
    if nota: r['nota'] = nota
    if gratis: r['gratis'] = True
    return r


def parse_dano(s):
    m = re.match(r'(\d+d\d+(?:[+−-]\d+)?)\s*(.*)$', s)
    formula = m.group(1).replace('−', '-')
    resto = m.group(2)
    arma = ''
    ma = re.search(r'\(([^)]*)\)\s*$', resto)
    if ma:
        arma = ma.group(1); resto = resto[:ma.start()].strip()
    return formula, resto, arma


def parse_gratis(par):
    """Rasgos de tipo entre paréntesis → lista de rasgos gratis."""
    out = []
    for trozo in re.split(r'[;.]\s*', par):
        trozo = trozo.strip()
        if not trozo: continue
        sub = [trozo] if ':' in trozo else [t.strip() for t in trozo.split(',')]
        for t in sub:
            m = re.match(r'Inmune a (.+)$', t)
            if m:
                cosas = m.group(1)
                es_estado = any(e in cosas for e in ESTADOS_N)
                out.append(rasgo_de('Inmunidad a Estados' if es_estado else 'Inmunidad', nota=cosas, gratis=True)); continue
            m = re.match(r'Resistencia a (.+)$', t)
            if m:
                out.append(rasgo_de('Resistencia', nota=m.group(1), gratis=True)); continue
            nm = None
            for cand in sorted(POR_NOMBRE, key=len, reverse=True):
                if t.startswith(cand):
                    nm = cand; break
            if nm:
                resto = t[len(nm):].strip(' :')
                out.append(rasgo_de(nm, txt=(resto[0].upper() + resto[1:]) if ':' in t and resto else None,
                                    nota=None if ':' in t else (resto or None), gratis=True))
    return out


def calc_pv(na, rol, tam, jefe):
    b = NA[str(na)]
    if rol == 'esbirro':
        return max(1, na * 2)
    pv = b['pv'] + ROLES.get(rol, {}).get('pvNa', 0) * na
    pv = pv * TAM[tam]['pv']
    pv = int(pv + 0.5)
    return pv * 2 if jefe else pv


def calc_g(na, rol, tam):
    return NA[str(na)]['g'] + ROLES.get(rol, {}).get('g', 0) + TAM[tam]['g']


BEST = {}
i0 = find(M, '#Heading1 Bestiario')
i1 = find(M, '#Heading2 Hordas y enjambres')
j = i0
errores = []
while j < i1:
    if M[j].startswith('#Heading3 '):
        m = re.match(r'#Heading3 (.+) \(NA (\d+)\)', M[j])
        nombre, na = m.group(1), int(m.group(2))
        st = [p.strip() for p in M[j + 1].split(' · ')]
        palabras = st[0].split(' ')
        tam = TAM_K[palabras[-1].lower()]
        tipo = TIPO_K[' '.join(palabras[:-1])]
        c = {'nombre': nombre, 'na': na, 'tipo': tipo, 'tam': tam, 'rol': '', 'estructura': 'normal',
             'rasgos': [], 'fuente': 'Manual de Monstruos', 'manual': {}}
        imp = {}
        for p in st[1:]:
            if p in ROL_K: c['rol'] = ROL_K[p]
            elif p == 'Sin Rol': pass
            elif p == 'Jefe': c['estructura'] = 'jefe'
            elif p.startswith('PV '): imp['pv'] = int(p[3:])
            elif p.startswith('Guardia '): imp['g'] = int(p[8:])
            elif p.startswith('Armadura '): imp['a'] = int(p[9:])
            elif p.startswith('Velocidad '): imp['vel'] = int(re.match(r'Velocidad (\d+)', p).group(1))
            elif p.startswith('Ataque '): imp['atk'] = num(p[7:])
            elif p.startswith('Daño '):
                f, tp, arma = parse_dano(p[5:])
                imp['dano'] = f; c['danoTipo'] = tp; c['ataqueNombre'] = arma[0].upper() + arma[1:] if arma else ''
            elif p.startswith('PA '): imp['pa'] = int(p[3:])
            elif p.startswith('Salvaciones:'):
                c['salv'] = re.findall(r'\b(FUE|DES|CON|INT|SAB|CAR)\b', p)[:2]
            elif p.startswith('CD '): imp['cd'] = int(p[3:])
            elif p.startswith('Moral '):
                imp['moral'] = None if p.endswith('—') else int(p[6:])
            else: errores.append((nombre, 'stat?', p))
        k = j + 2
        while k < i1 and not M[k].startswith('#Heading') and not M[k].startswith('ROW:'):
            ln = M[k]
            if ln.startswith('('):
                fin_par = ln.rfind(')') if ln.rstrip().endswith(')') else ln.find(')')
                # el paréntesis de tipo es el primero; puede llevar paréntesis dentro
                depth = 0
                for idx, ch in enumerate(ln):
                    if ch == '(': depth += 1
                    elif ch == ')':
                        depth -= 1
                        if depth == 0:
                            fin_par = idx; break
                c['rasgos'] += parse_gratis(ln[1:fin_par])
                resto = ln[fin_par + 1:].strip()
                if resto: c['rolNota'] = resto
            elif ln.startswith('Señal. '): c['senal'] = ln[7:]
            elif ln.startswith('Contexto táctico. '): c['contexto'] = ln[18:]
            elif ln.startswith('Esbirro:') or ln.startswith('Custodia (Reacción)'): pass
            elif ln.startswith('Equipo:'): c['equipo'] = ln[8:]
            else:
                m2 = re.match(r'([^.]+)\. (.+)$', ln)
                if m2 and m2.group(1) in POR_NOMBRE:
                    r = rasgo_de(m2.group(1), txt=m2.group(2))
                    if r['id'] == 'vulnerabilidad':
                        mm = re.search(r'daño (?:de )?(\w+)', m2.group(2))
                        r['nota'] = mm.group(1)
                    c['rasgos'].append(r)
                else:
                    errores.append((nombre, 'línea?', ln[:60]))
            k += 1
        # comprobación de la fórmula frente a lo impreso
        pv = calc_pv(na, c['rol'], tam, c['estructura'] == 'jefe')
        g = calc_g(na, c['rol'], tam)
        if pv != imp['pv']: errores.append((nombre, 'PV', pv, imp['pv']))
        if g != imp['g']: errores.append((nombre, 'Guardia', g, imp['g']))
        base = NA[str(na)]
        a_calc = base['a'] + ROLES.get(c['rol'], {}).get('a', 0)
        if a_calc != imp['a']:
            c['manual']['armadura'] = imp['a']      # equipo (Mercenario Veterano)
        if base['atk'] != imp['atk']: errores.append((nombre, 'Ataque', base['atk'], imp['atk']))
        if imp.get('moral') is None and tipo == 'bestia': c['moralNoTira'] = True
        c['impreso'] = {'pv': imp['pv'], 'g': imp['g'], 'a': imp['a'], 'vel': imp.get('vel')}
        if not c['manual']: del c['manual']
        BEST[slug(nombre)] = c
        j = k
    else:
        j += 1

# Vuelo y trepar: la velocidad concreta del bestiario va en la nota del Rasgo
VEL_NOTA = {'dron_centinela': ('vuelo', '30 pies'), 'fuego_fatuo': ('vuelo', '30 pies'), 'arpia': ('vuelo', '40 pies'),
            'manticora': ('vuelo', '50 pies'), 'elemental_de_tormenta': ('vuelo', '60 pies'),
            'serafin_ceniciento': ('vuelo', '60 pies'), 'dragon_rojo_adulto': ('vuelo', '80 pies')}
for k, (rid, nota) in VEL_NOTA.items():
    for r in BEST[k]['rasgos']:
        if r['id'] == rid: r['nota'] = nota

# Las dos hordas del Manual, a mano (su ficha no sigue el formato de las demás)
def lineas_tras(titulo, n):
    i = find(M, titulo)
    return M[i + 1:i + 1 + n]
cx = lineas_tras('#Heading3 Colmena Xenomorfa', 8)
BEST['colmena_xenomorfa'] = {
    'nombre': 'Colmena Xenomorfa', 'na': 3, 'tipo': 'monstruosidad', 'tam': 'mediano', 'rol': 'hostigador',
    'estructura': 'horda', 'miembros': 8, 'salv': ['DES', 'CON'], 'danoTipo': 'Perforante', 'ataqueNombre': '',
    'rasgos': [rasgo_de('Sangre Ácida', gratis=True), rasgo_de('Colmena', txt='Mientras viva la reina, no tiran Moral y comparten lo que perciben.'),
               rasgo_de('Trepadora')],
    'senal': cx[6][7:], 'contexto': cx[7][18:], 'fuente': 'Manual de Monstruos',
    'impreso': {'pv': 120, 'g': 14, 'a': 1, 'vel': 40},
}
nn = lineas_tras('#Heading3 Enjambre de Nanitos', 6)
BEST['enjambre_de_nanitos'] = {
    'nombre': 'Enjambre de Nanitos', 'na': 1, 'tipo': 'maquina', 'tam': 'diminuto', 'rol': '',
    'estructura': 'horda', 'miembros': 6, 'salv': ['CON', 'INT'], 'danoTipo': 'Energía', 'ataqueNombre': '',
    'rasgos': [rasgo_de('Vigor Inagotable', gratis=True), rasgo_de('Sistemas Redundantes', gratis=True),
               rasgo_de('Enjambre', gratis=True),
               rasgo_de('Ácido Corrosivo', txt='Su ataque añade 1d6 de Ácido y aplica Desgarro (Ud6): se comen la armadura.')],
    'senal': nn[4][7:], 'contexto': nn[5][18:], 'fuente': 'Manual de Monstruos',
    'notas': 'Velocidad 30 pies (vuelo).',
    'impreso': {'pv': 30, 'g': 13, 'a': 0, 'vel': 30},
}
assert cx[6].startswith('Señal. ') and nn[4].startswith('Señal. '), (cx[6], nn[4])

# ───────────────────────── Bestiario básico de la Guía ─────────────────────────
GUIA_TT = {  # tipo y tamaño no vienen en la Guía: se asignan por lo que la criatura es
    'Lobo': ('bestia', 'mediano'), 'Esqueleto': ('no_muerto', 'mediano'), 'Zombie': ('no_muerto', 'mediano'),
    'Orco': ('humanoide', 'mediano'), 'Oso Pardo': ('bestia', 'grande'), 'Azotamente / Mente Devoradora': ('aberracion', 'mediano'),
    'Gigante de la Tormenta': ('gigante', 'enorme'), 'Licántropo / Hombre Lobo': ('monstruosidad', 'mediano'),
    'Caballero de la Muerte': ('no_muerto', 'mediano'), 'Jefe de Tribu': ('humanoide', 'mediano'),
    'Acólito de la Ceniza': ('humanoide', 'mediano'), 'Batidor': ('humanoide', 'mediano'), 'Enjambre de Ratas': ('bestia', 'diminuto'),
}
ICONO_TIPO = {'[t_pasivo]': 'Rasgo', '[t_disparador]': 'Reacción', '[t_modificador]': 'Modificador', '✦': 'Aptitud'}
i0 = find(G, '#Heading1 Bestiario básico')
i1 = find(G, '#Heading1 Referencia del Director')
j = i0
while j < i1:
    if G[j].startswith('#Heading2 '):
        m = re.match(r'#Heading2 (.+?) \((?:Horda de )?NA (\d+)', G[j])
        nombre, na = m.group(1), int(m.group(2))
        tipo, tam = GUIA_TT[nombre]
        st = [p.strip() for p in G[j + 1].split(' · ')]
        c = {'nombre': nombre.split(' / ')[0], 'na': na, 'tipo': tipo, 'tam': tam, 'rol': '', 'estructura': 'normal',
             'rasgos': [], 'fuente': 'Guía del Director', 'manual': {}}
        extra = []
        for p in st:
            if p.startswith('Rol: '):
                r = p[5:]
                c['rol'] = '' if r == 'Sin Rol' else ROL_K[r]
            elif p == 'Jefe': c['estructura'] = 'jefe'
            elif p.startswith('Horda de'): c['estructura'] = 'horda'; c['miembros'] = 6
            elif p.startswith('PV '): c['manual']['pv'] = int(re.match(r'PV (\d+)', p).group(1))
            elif p.startswith('Guardia '): c['manual']['guardia'] = int(p[8:])
            elif p.startswith('Armadura '): c['manual']['armadura'] = int(p[9:])
            elif p.startswith('Velocidad '):
                c['manual']['vel'] = int(re.match(r'Velocidad (\d+)', p).group(1))
                if '/' in p: extra.append(p.split('/', 1)[1].strip())
            elif p.startswith('Ataque '): c['manual']['ataque'] = num(p[7:])
            elif p.startswith('Daño '):
                f, tp, arma = parse_dano(p[5:])
                c['manual']['dano'] = f; c['danoTipo'] = tp; c['ataqueNombre'] = arma[0].upper() + arma[1:] if arma else ''
            elif p.startswith('Iniciativa '): pass
            elif p.startswith('Salvaciones:'):
                c['salv'] = re.findall(r'\b(FUE|DES|CON|INT|SAB|CAR)\b', p)[:2]
                c['salvTxt'] = p[13:]
            elif p.startswith('Moral '):
                if p.endswith('—'): c['moralNoTira'] = True
                else: c['manual']['moral'] = int(p[6:])
            else: extra.append(p)
        for x in extra:
            c['rasgos'].append({'custom': True, 'name': x.split(':')[0].split(' a ')[0].split(' al ')[0] if len(x) > 40 else x,
                                'tipo': 'Rasgo', 'peso': 0, 'txt': x})
        k = j + 2
        ctx = []
        while k < i1 and not G[k].startswith('#Heading') and not G[k].startswith('ROW:'):
            ln = G[k]
            m2 = re.match(r'([^(:]+) \(([^)]*)\): (.+)$', ln)
            if ln.startswith('Contexto táctico. '): ctx.append(ln[18:])
            elif m2 and (m2.group(2).split(',')[0].strip() in ICONO_TIPO):
                partes = [x.strip() for x in m2.group(2).split(',')]
                r = {'custom': True, 'name': m2.group(1), 'tipo': ICONO_TIPO[partes[0]], 'peso': 0, 'txt': m2.group(3)[0].upper() + m2.group(3)[1:]}
                for x in partes[1:]:
                    if 'PA' in x: r['coste'] = x
                    elif x.startswith('Ud'): r['frec'] = x
                    elif 'pies' in x: r['tipo'] = 'Aura'; r['txt'] = f'Radio de {x}: ' + r['txt'][0].lower() + r['txt'][1:]
                c['rasgos'].append(r)
            elif ctx: ctx.append(ln)
            else: errores.append((nombre, 'línea guía?', ln[:60]))
            k += 1
        c['contexto'] = '\n\n'.join(ctx)
        key = slug(c['nombre'])
        assert key not in BEST, key
        BEST[key] = c
        j = k
    else:
        j += 1
print('bestiario:', len(BEST))
for e in errores:
    print('  AVISO', e)

# ───────────────────────── Encuentros ─────────────────────────
PRESUP = {
    '1-2': {'name': 'Nivel 1–2', 'f': 2, 'e': 4, 'p': 8, 'm': 16, 'estandar': '1', 'serio': '2', 'mortal': '3+'},
    '3-4': {'name': 'Nivel 3–4', 'f': 4, 'e': 8, 'p': 16, 'm': 32, 'estandar': '2–3', 'serio': '4', 'mortal': '5+'},
    '5-6': {'name': 'Nivel 5–6', 'f': 16, 'e': 32, 'p': 64, 'm': 128, 'estandar': '4–5', 'serio': '6', 'mortal': '7+'},
    '7-8': {'name': 'Nivel 7–8', 'f': 64, 'e': 128, 'p': 256, 'm': 512, 'estandar': '6–7', 'serio': '8', 'mortal': '9+'},
    '9-10': {'name': 'Nivel 9–10', 'f': 256, 'e': 512, 'p': 1024, 'm': 2048, 'estandar': '8–9', 'serio': '10', 'mortal': '11+'},
}
# comprobación con la tabla de la Guía
i = find(G, 'ROW: | Nivel del grupo | Fácil | Estándar | Peligroso | Mortal')
rows, _ = rows_from(G, i)
for r, k in zip(rows[1:], PRESUP):
    p = PRESUP[k]
    assert [num(r[1]), num(r[2]), num(r[3]), num(r[4].rstrip('+'))] == [p['f'], p['e'], p['p'], p['m']], r
GRUPO_TAM = {'1': 0.25, '2': 0.5, '3': 0.75, '4': 1, '5': 1.25, '6': 1.5}

# ───────────────────────── Botín ─────────────────────────
i = find(G, 'ROW: | Nivel del grupo | Riqueza acumulada')
rows, _ = rows_from(G, i)
RIQUEZA = {}
for nv, acum, ses, obj in rows[1:]:
    a, b = [num(x) for x in re.findall(r'[\d.]+', ses)]
    RIQUEZA[nv] = {'name': 'Nivel ' + nv, 'acum': acum, 'sesion': ses, 'sesMin': a, 'sesMax': b, 'objetos': obj}
i = find(G, 'ROW: | Inversión | Coste | Efecto')
rows, _ = rows_from(G, i)
COSTES = {slug(r[0]): {'name': r[0], 'coste': r[1], 'txt': r[2]} for r in rows[1:]}

i = find(G, 'ROW: | Rareza | NA equivalente | Sintonía')
req, _ = rows_from(G, i)
i = find(G, 'ROW: | Resultado | Rareza')
res, _ = rows_from(G, i)
i = find(G, 'ROW: | Rareza | Nivel apropiado | Ataque')
tec, _ = rows_from(G, i)
D6 = {r[1]: r[0] for r in res[1:]}
TECHO = {r[0]: r for r in tec[1:]}
PROPS_N = {'Común': 0, 'Infrecuente': 1, 'Raro': 2, 'Muy Raro': 3, 'Legendario': 4, 'Artefacto Único': 5}
RAREZAS = {}
for nombre, na, sint, nivel in req[1:]:
    t = TECHO.get(nombre)
    e = {'name': nombre, 'd6': D6[nombre], 'na': na, 'sintonia': sint, 'nivel': nivel, 'props': PROPS_N[nombre]}
    if t:
        e.update({'atk': t[2], 'def': t[3], 'cd': t[4], 'dano': t[5], 'precio': t[6]})
    else:
        e.update({'atk': '+3 y único', 'def': '+3 y único', 'cd': '+3', 'dano': '+1d10', 'precio': 'no comprable'})
    RAREZAS[slug(nombre)] = e
i = find(G, 'ROW: | d20 | Propiedad | Descripción breve')
rows, _ = rows_from(G, i)
PROPS = {}
for rango, nombre, txt in rows[1:]:
    nums = [int(x) for x in re.findall(r'\d+', rango)]
    e = {'name': nombre, 'd20': rango, 'min': nums[0], 'max': nums[-1], 'txt': txt}
    PROPS[slug(nombre)] = e
PROPS['bono_de_ataque']['bono'] = 'atk'
PROPS['bono_defensivo']['bono'] = 'def'
PROPS['dano_elemental']['bono'] = 'dano'
i = find(G, 'ROW: | Maldición | Efecto activo')
rows, _ = rows_from(G, i)
MALD = {slug(r[0]): {'name': r[0], 'txt': r[1], 'cura': r[2]} for r in rows[1:]}
i = find(G, 'ROW: | Tipo | Ud | Fuente afín | Resonancia | Coste')
rows, _ = rows_from(G, i)
FOCOS = {slug(r[0]): {'name': r[0], 'ud': r[1], 'fuente': r[2], 'txt': r[3], 'coste': r[4]} for r in rows[1:]}
i = find(G, 'ROW: | Módulo | CD instalación')
rows, _ = rows_from(G, i)
MODULOS = {slug(r[0]): {'name': r[0], 'cd': r[1], 'tipo': r[2], 'txt': r[3], 'coste': r[4]} for r in rows[1:]}

# ───────────────────────── Etiquetas de Zona ─────────────────────────
i = find(G, 'ROW: | d20 | Etiqueta | d20 | Etiqueta')
rows, fin_t = rows_from(G, i)
NOMBRES_ET = {}
for a, na_, b, nb in rows[1:]:
    NOMBRES_ET[int(a)] = na_; NOMBRES_ET[int(b)] = nb
ETIQ = {}
for n in range(1, 21):
    nm = NOMBRES_ET[n]
    idx = find(G, f'{n} — {nm} ', fin_t)
    desc = G[idx][len(f'{n} — {nm} '):]
    e = {'name': nm, 'txt': desc}
    for campo, ln in zip(['enemigo', 'aliado', 'complicacion', 'objeto', 'lugar'], G[idx + 1:idx + 6]):
        etq, val = ln.split(': ', 1)
        assert slug(etq) == campo, (etq, campo)
        e[campo] = val
    ETIQ[str(n)] = e

# ───────────────────────── Facciones ─────────────────────────
i = find(G, 'ROW: | Facción | F | A | R | PG | Activos representativos')
rows, _ = rows_from(G, i)
FACC = {}
for nombre, f, a, r, pg, act in rows[1:]:
    if not f.isdigit(): continue
    FACC[slug(nombre)] = {'name': nombre, 'f': int(f), 'a': int(a), 'r': int(r), 'activos': act}
i = find(G, 'ROW: | Acción | Atributo | Efecto')
rows, _ = rows_from(G, i)
ACC = {slug(r[0]): {'name': r[0], 'attr': r[1], 'txt': r[2]} for r in rows[1:]}

# ───────────────────────── Estados (Manual Básico, Cap. 10) ─────────────────────────
ESTADOS = {
    'sangrado': ('Sangrado', 'Ud6', '1d4 Físico por turno. Las curaciones solo restauran la mitad.'),
    'desgarro': ('Desgarro', 'Ud6', '2 de daño por turno. −1 de Armadura (o de Guardia si no lleva).'),
    'trauma': ('Trauma', 'Ud4', '1d6 Físico por turno. Desventaja en las tiradas de FUE.'),
    'envenenado': ('Envenenado', 'Ud8', '1d6 por turno. Desventaja en ataques y habilidades.'),
    'ignicion': ('Ignición', 'Ud6', '1d10 de Fuego por turno, +1 acumulativo cada turno que el Ud no degrada.'),
    'ralentizado': ('Ralentizado', 'Ud6', 'Movimiento a la mitad. Sin Paso Táctico gratuito.'),
    'aturdido': ('Aturdido', 'Ud4', 'Sin Reacciones ni acciones de 3 PA. Ventaja para quien lo ataque.'),
    'conmocionado': ('Conmocionado', 'Ud6', 'Desventaja en la primera tirada de cada turno. Sus fuentes de Ventaja quedan canceladas.'),
    'cegado': ('Cegado', 'Ud4', 'Desventaja en sus ataques. Ventaja para quien lo ataque.'),
    'aterrado': ('Aterrado', 'Ud4', 'Desventaja en todas sus tiradas mientras perciba la fuente. No puede acercarse a ella.'),
    'paralizado': ('Paralizado', 'Ud4', 'No se mueve ni gasta PA. Ventaja contra él; cuerpo a cuerpo a 5 pies es Crítico.'),
    'apresado': ('Apresado', '', 'Velocidad 0. Desventaja en sus ataques y Salvaciones de DES. Ventaja para quien lo ataque.'),
    'derribado': ('Derribado', '', 'En el suelo: levantarse cuesta movimiento. Ventaja cuerpo a cuerpo contra él.'),
    'encantado': ('Encantado', 'Ud6', 'Ve a la fuente como aliada y no puede atacarla. Recibir daño de ella lo rompe.'),
    'ensordecido': ('Ensordecido', 'Ud6', 'No oye. Inmune a los efectos basados en el sonido.'),
    'maldito': ('Maldito', 'Ud8', 'Desventaja en un tipo de tirada, según la fuente.'),
    'petrificado': ('Petrificado', '', 'Como Paralizado, con Resistencia a todo el daño.'),
    'desprevenido': ('Desprevenido', '', 'No ha actuado o no ve venir el golpe: pierde el escudo y las Reacciones.'),
}
ESTADOS = {k: {'name': n, 'ud': ud, 'txt': t} for k, (n, ud, t) in ESTADOS.items()}
DANOS = ['Cortante', 'Perforante', 'Contundente', 'Fuego', 'Frío', 'Rayo', 'Ácido', 'Veneno', 'Energía', 'Sónico',
         'Fuerza', 'Psíquico', 'Necrótico', 'Radiante']
TABLAS['danos'] = {'name': 'Tipos de daño', 'filas': DANOS}

DB = {
    'na': NA, 'roles': ROLES, 'tamanos': TAM, 'tipos': TIPOS, 'familias': FAM, 'rasgos': RASGOS,
    'plantillas': PLANT, 'peligros': PELIGROS, 'bestiario': BEST, 'tablas': TABLAS,
    'presupuestos': PRESUP, 'grupoTam': GRUPO_TAM,
    'riqueza': RIQUEZA, 'costes': COSTES, 'rarezas': RAREZAS, 'propiedades': PROPS,
    'maldiciones': MALD, 'focos': FOCOS, 'modulos': MODULOS,
    'etiquetas': ETIQ, 'faccionesEj': FACC, 'accionesFaccion': ACC, 'estados': ESTADOS,
}
js = ('/* ══════════════════════════════════════════\n'
      '   BASE DE DATOS DE REGLAS — S&S Director\n'
      '   Generada desde el Manual de Monstruos v1 y la Guía del Director v1.\n'
      '   Se puede editar entera desde el Editor de Reglas de la app; al cambiar\n'
      '   este archivo, sube STORAGE.RULES_DATA_VERSION (js/storage.js).\n'
      '══════════════════════════════════════════ */\n'
      'const DEFAULT_DB = ' + json.dumps(DB, ensure_ascii=False, indent=1) + ';\n')
with open(OUT, 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(js)
print('escrito', OUT, len(js), 'bytes')
for k, v in DB.items():
    print(' ', k, len(v))
