/* ══════════════════════════════════════════════════════════════
   ASISTENTE DE CREACIÓN DE AMENAZAS
   Los ocho pasos del Manual de Monstruos, Cap. 4, uno por pantalla:
   Idea · NA · Tipo y tamaño · Rol · Estadísticas · Rasgos · Señal ·
   Contexto táctico. «Empieza por lo que el grupo va a sentir. Los
   números vienen después, y casi solos.»

   Trabaja directamente sobre app.cr —la ficha está oculta mientras
   dura—, así que no calcula nada por su cuenta: usa calcCr() y la misma
   Biblioteca que la ficha. Por eso «A mano» puede abandonarlo en
   cualquier paso sin perder lo ya decidido.
══════════════════════════════════════════════════════════════ */
(function () {
  const $ = id => document.getElementById(id);
  const PASOS = ['La idea', 'El NA', 'Tipo y tamaño', 'Rol', 'Estadísticas', 'Rasgos', 'La señal', 'Contexto'];
  const ULTIMO = PASOS.length - 1;
  let paso = 0, pintado = -1, abierto = false;
  const el = (t, c, x) => app.h(t, c, x);
  const cr = () => app.cr;

  /* ── Paso 1 · La idea ─────────────────────────────────────────── */
  function pasoIdea(b) {
    b.appendChild(el('p', 'wiz-hint', 'Una frase: qué es y qué problema plantea.'));
    const idea = document.createElement('textarea');
    idea.value = cr().idea; idea.style.minHeight = '84px';
    idea.placeholder = 'Una araña que caza desde el techo y se lleva a quien se queda atrás.';
    idea.setAttribute('aria-label', 'La idea de la criatura');
    idea.addEventListener('input', () => { cr().idea = idea.value; pie(); });
    b.appendChild(app._campo('La idea', idea));

    const nombre = document.createElement('input');
    nombre.type = 'text'; nombre.value = cr().nombre; nombre.placeholder = 'ej. Tejedora del Techo'; nombre.autocomplete = 'off';
    nombre.setAttribute('aria-label', 'Nombre de la criatura');
    nombre.addEventListener('input', () => { cr().nombre = nombre.value; pie(); });
    const caja = el('div', 'dir-con-dado');
    caja.append(nombre, app._botonDado('Nombre al azar', () => { nombre.value = cr().nombre = app._nombreAzar(); pie(); }));
    b.appendChild(app._campo('Nombre', caja));

    const sub = el('div', 'wiz-sub');
    sub.appendChild(el('span', 'fl', 'Retrato (opcional)'));
    const marco = el('div', 'port-card-edit wiz-retrato');
    marco.setAttribute('role', 'button'); marco.tabIndex = 0;
    marco.setAttribute('aria-label', 'Elegir el retrato de la criatura');
    const img = document.createElement('img');
    img.alt = 'Retrato'; img.src = app._retratoOk(cr().retrato) ? cr().retrato : DEFAULT_PORTRAIT;
    const hint = el('div', 'port-hint'); hint.appendChild(el('span', null, cr().retrato ? 'Cambiar Retrato' : 'Elegir Retrato'));
    marco.append(img, hint);
    const elegir = () => $('img_input').click();
    marco.onclick = elegir;
    marco.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); elegir(); } };
    const centro = el('div', 'wiz-retrato-caja'); centro.appendChild(marco);
    sub.appendChild(centro);
    b.appendChild(sub);
  }

  /* ── Paso 2 · El NA ───────────────────────────────────────────── */
  function pasoNA(b) {
    b.appendChild(el('p', 'wiz-hint', 'Según el peso que debe tener en la escena. Parte de la tabla de calibrado de la Guía: estándar, serio o mortal para el nivel del grupo.'));
    const g = app.mesa.grupo;
    b.appendChild(app._campo('Nivel del grupo', app._paso(g.nivel, 1, 10, n => { g.nivel = n; app.guardarMesa(); pintar(); }, 'el nivel del grupo', 'Nivel ' + g.nivel)));
    const f = app._filaEncuentro(g.nivel);
    const opciones = [
      ['Estándar', f.estandar, 'Un rival digno.'],
      ['Serio', f.serio, 'Exige recursos.'],
      ['Mortal', f.mortal, 'Puede matar a alguien.'],
    ];
    opciones.forEach(([n, rango, t]) => {
      const nums = String(rango).match(/\d+/g).map(Number);
      const desde = nums[0], hasta = /\+/.test(rango) ? 99 : nums[nums.length - 1];
      const sel = cr().na >= desde && cr().na <= hasta;
      b.appendChild(app.tarjetaOpcion(n, 'NA ' + rango, t, '', sel, () => { cr().na = Math.min(15, desde); cr().pvAct = null; pintar(); }));
    });
    const sub = el('div', 'wiz-sub');
    const B = app.DB.na[cr().na];
    sub.appendChild(app._campo('Nivel de Amenaza', app._paso(cr().na, 0, 15, n => { cr().na = n; cr().pvAct = null; pintar(); }, 'el Nivel de Amenaza',
      'NA ' + cr().na + (B.etiqueta ? ' · ' + B.etiqueta : ''))));
    sub.appendChild(app._info(`PV ${B.pv} · Guardia ${B.g} / Armadura ${B.a}\nAtaque ${app._signo(B.atk)} · Daño ${B.dano} · PA ${B.pa}\nCD ${B.cd} · Peso ${B.peso}`));
    b.appendChild(sub);
  }

  /* ── Paso 3 · Tipo y tamaño ───────────────────────────────────── */
  function pasoTipo(b) {
    b.appendChild(el('p', 'wiz-hint', 'El tipo es su naturaleza: da Rasgos gratuitos y sugiere sus Salvaciones fuertes y una debilidad coherente.'));
    const tams = Object.entries(app.DB.tamanos).map(([k, x]) => [k, x.name]);
    b.appendChild(app._campo('Tamaño', app._select(tams, cr().tam, k => { cr().tam = k; cr().pvAct = null; pintar(); }, 'Tamaño')));
    const tm = app.DB.tamanos[cr().tam];
    b.appendChild(app._info(`${tm.ej}\nPV ${tm.pvTxt} · Guardia ${tm.g ? app._signo(tm.g) : '—'} · Alcance ${tm.alcance}`));
    const sub = el('div', 'wiz-sub');
    Object.entries(app.DB.tipos).forEach(([k, t]) => {
      const sel = cr().tipo === k;
      sub.appendChild(app.tarjetaOpcion(t.name, t.salv, t.txt, 'Debilidad coherente: ' + t.deb, sel, () => {
        if (cr().tipo !== k) {
          cr().tipo = k;
          app._ponerRasgosDeTipo(cr());
          cr().salv = (t.salvDef || cr().salv).slice(0, 2);
          if (t.tamMin && app.ORDEN_TAM.indexOf(cr().tam) < app.ORDEN_TAM.indexOf(t.tamMin)) cr().tam = t.tamMin;
        }
        pintar();
      }));
      if (sel) (t.elige || []).forEach(grupo => {
        const actual = cr().rasgos.find(r => r.gratis && r.origen === 'tipo' && grupo.includes(r.id));
        const caja = el('div', 'wiz-sub wiz-inline');
        caja.appendChild(app._campo('Elige su Rasgo de tipo', app._seg(grupo.map(id => [id, app._libIdx()[id]?.e.name || id]), actual?.id || grupo[0], id => {
          if (actual) actual.id = id; else cr().rasgos.unshift({ uid: app._uid(), id, gratis: true, origen: 'tipo' });
          pintar();
        }, 'Rasgo de tipo')));
        sub.appendChild(caja);
      });
    });
    b.appendChild(sub);
  }

  /* ── Paso 4 · Rol ─────────────────────────────────────────────── */
  function pasoRol(b) {
    b.appendChild(el('p', 'wiz-hint', 'Uno o ninguno: cómo se comporta cuando ya está en escena. Se entiende mejor en el grupo que la acompaña que en su propia ficha.'));
    b.appendChild(app._campo('Estructura', app._seg([['normal', 'Normal'], ['jefe', 'Jefe'], ['horda', 'Horda']], cr().estructura,
      k => { cr().estructura = k; cr().pvAct = null; pintar(); }, 'Estructura')));
    if (cr().estructura === 'jefe') b.appendChild(app._info('PV ×2 y +2 de Peso. Usa al menos una: Acción de Jefe, Turno Doble o un séquito. Al calibrar el encuentro sube un NA.'));
    if (cr().estructura === 'horda') {
      const inp = document.createElement('input');
      inp.type = 'number'; inp.min = 2; inp.max = 999; inp.value = cr().miembros; inp.inputMode = 'numeric';
      inp.setAttribute('aria-label', 'Miembros de la horda');
      inp.addEventListener('change', () => { cr().miembros = Math.max(2, Math.min(999, parseInt(inp.value, 10) || 2)); pintar(); });
      b.appendChild(app._campo('Miembros', inp, 'las estadísticas son las de cada uno'));
      const H = app._horda(cr().miembros);
      b.appendChild(app._info(H.marea ? 'Marea (31 o más): registro Planetario, Daño de Escala.'
        : `${H.n}: NA efectivo ${cr().na + H.na}${H.dados ? ` · daño +${H.dados} dado${H.dados > 1 ? 's' : ''}` : ''}. Un solo turno; doble daño de área; a mitad de vida se divide.`));
    }
    const sub = el('div', 'wiz-sub');
    sub.appendChild(app.tarjetaOpcion('Sin Rol', 'estadísticas base', 'Usa los números de su NA tal cual.', '', !cr().rol, () => { cr().rol = ''; cr().pvAct = null; pintar(); }));
    Object.entries(app.DB.roles).forEach(([k, r]) => {
      sub.appendChild(app.tarjetaOpcion(r.name, '', r.mod, `${r.hab}: ${r.habTxt}`, cr().rol === k, () => { cr().rol = k; cr().pvAct = null; pintar(); }));
    });
    b.appendChild(sub);
  }

  /* ── Paso 5 · Estadísticas ────────────────────────────────────── */
  function pasoStats(b) {
    const S = app.calcCr(cr());
    b.appendChild(el('p', 'wiz-hint', 'Salen de la tabla por NA, ajustadas por Rol y Tamaño. Elige sus dos Salvaciones fuertes y ponle nombre a su ataque.'));
    const grid = el('div', 'def-grid');
    const celda = (rot, val, cls) => { const c = el('div', 'def-cell' + (cls ? ' ' + cls : '')); c.append(el('span', 'def-lbl', rot), el('span', 'def-val', String(val))); return c; };
    grid.append(celda('Guardia', S.guardia, 'def-cell--guardia'), celda('Armadura', S.armadura), celda('CD', S.cd));
    const g1 = el('div', 'dir-stats');
    g1.append(app._stat('PV', String(S.pv)), app._stat('Ataque', app._signo(S.ataque)), app._stat('Daño', S.dano), app._stat('PA', String(S.pa)));
    const g2 = el('div', 'dir-stats dir-stats-3');
    g2.append(app._stat('Velocidad', S.vel + ' pies'), app._stat('Moral', S.noMoral ? 'no tira' : String(S.moral)), app._stat('Al calibrar', app._txtCalibrar(S)));
    const marco = el('div', 'wiz-panelito');
    marco.append(grid, g1, g2);
    b.appendChild(marco);

    const sub = el('div', 'wiz-sub');
    sub.appendChild(el('span', 'fl', `Salvaciones fuertes (${app._signo(S.sf)}) — elige dos`));
    const sg = el('div', 'saves-grid dir-sin-filete');
    app.ATTRS.forEach(a => {
      const on = cr().salv.includes(a);
      const box = el('button', 'svsbox' + (on ? ' prof' : ''));
      box.type = 'button'; box.setAttribute('aria-pressed', String(on));
      box.append(el('span', 'svslbl', a), document.createTextNode(app._signo(on ? S.sf : S.sd)));
      box.onclick = () => {
        if (on) cr().salv = cr().salv.filter(x => x !== a);
        else { cr().salv.push(a); if (cr().salv.length > 2) cr().salv.shift(); }
        pintar();
      };
      sg.appendChild(box);
    });
    sub.appendChild(sg);
    sub.appendChild(el('p', 'wiz-hint', `Su tipo sugiere: ${S.tipo.salv}.`));
    b.appendChild(sub);

    const sub2 = el('div', 'wiz-sub');
    const n = document.createElement('input');
    n.type = 'text'; n.value = cr().ataqueNombre; n.placeholder = 'ej. Quelíceros'; n.autocomplete = 'off';
    n.setAttribute('aria-label', 'Nombre del ataque');
    n.addEventListener('input', () => { cr().ataqueNombre = n.value; });
    const tipos = [['', '— Sin tipo —']].concat((app.DB.tablas.danos?.filas || []).map(x => [x, x]));
    if (cr().danoTipo && !tipos.some(t => t[0] === cr().danoTipo)) tipos.push([cr().danoTipo, cr().danoTipo]);
    const g = el('div', 'g2 dir-g2');
    g.append(app._campo('Su ataque', n), app._campo('Tipo de daño', app._select(tipos, cr().danoTipo, v => { cr().danoTipo = v; }, 'Tipo de daño')));
    sub2.appendChild(g);
    b.appendChild(sub2);
  }

  /* ── Paso 6 · Rasgos y Aptitudes ──────────────────────────────── */
  function pasoRasgos(b) {
    const S = app.calcCr(cr());
    b.appendChild(el('p', 'wiz-hint', 'Empieza por la pieza que sostiene la idea; después, lo que la hace jugable (movilidad, defensa); por último, una Debilidad si quieres que el grupo pueda descubrir algo.'));
    const carga = el('div', 'dir-load');
    carga.append(el('span', 'dir-load-lbl', 'Peso'), el('span', 'dir-load-val', `${S.pesoGastado}/${S.pesoMax}`));
    const barra = el('div', 'lbar'); const fill = el('div', 'lfill' + (S.exceso ? ' dir-exceso' : ''));
    fill.style.width = (S.pesoMax ? Math.min(100, S.pesoGastado / S.pesoMax * 100) : (S.pesoGastado ? 100 : 0)) + '%';
    barra.appendChild(fill);
    b.append(carga, barra);
    if (S.exceso) b.appendChild(el('p', 'dir-aviso', `Excede en ${S.exceso}` + (S.exceso >= 2 ? `: al calibrar cuenta como NA ${S.naEnc}.` : ': con 2 de exceso contará como +1 NA.')));
    (S.tipo.exige || []).forEach(id => {
      if (!cr().rasgos.some(r => r.id === id)) b.appendChild(el('p', 'dir-aviso', `${S.tipo.name}: debe tener ${app._libIdx()[id]?.e.name || id}.`));
    });
    const abrir = el('button', 'btn btn-gold dir-ancho'); abrir.type = 'button';
    abrir.textContent = 'Abrir la Biblioteca';
    abrir.onclick = () => app.abrirBiblioteca();
    b.appendChild(abrir);

    const sub = el('div', 'wiz-sub');
    if (S.rol && S.rol.hab) sub.appendChild(app.tarjetaOpcion(S.rol.hab, 'de Rol', S.rol.habTxt, '', true, () => {}));
    S.infos.forEach(x => {
      const gratis = S.esGratis(x);
      const tag = gratis ? 'de tipo ✓' : (x.i.peso < 0 ? 'devuelve 1 · quitar' : `Peso ${x.i.peso} · quitar`);
      sub.appendChild(app.tarjetaOpcion(x.i.name + (x.r.nota ? ` (${x.r.nota})` : ''), tag, x.i.txt, app._lineaTipo(x.i), true, () => {
        if (x.r.gratis) { app.toast('Es un Rasgo de su tipo', 'info'); return; }
        cr().rasgos = cr().rasgos.filter(r => r !== x.r);
        pintar();
      }));
    });
    b.appendChild(sub);

    // Debilidades coherentes con su tipo, a un toque
    const nombres = String(S.tipo.deb || '').split(',').map(t => t.trim().replace(/\s*\(.*\)$/, '')).filter(Boolean);
    const sugeridas = app.DB.rasgos.debilidades.filter(e => nombres.includes(e.name) && !cr().rasgos.some(r => r.id === e.id));
    if (sugeridas.length && S.nDebs < 2) {
      const s2 = el('div', 'wiz-sub');
      s2.appendChild(el('span', 'fl', 'Debilidad coherente con su tipo'));
      sugeridas.forEach(e => s2.appendChild(app.tarjetaOpcion(e.name, 'añadir · devuelve 1', e.txt, '', false, () => { app.ponerRasgo(e.id, true); pintar(); })));
      b.appendChild(s2);
    }
  }

  /* ── Paso 7 · La señal ────────────────────────────────────────── */
  function pasoSenal(b) {
    b.appendChild(el('p', 'wiz-hint', 'Qué percibe el grupo antes de verla: huellas, olor, un silencio, restos.'));
    const ta = document.createElement('textarea');
    ta.value = cr().senal; ta.style.minHeight = '84px';
    ta.placeholder = 'Hilos pegajosos a la altura de la cabeza; ratas envueltas; ningún eco en la galería.';
    ta.setAttribute('aria-label', 'La señal');
    ta.addEventListener('input', () => { cr().senal = ta.value; pie(); });
    const caja = el('div', 'dir-con-dado');
    caja.append(ta, app._botonDado('Señal al azar', () => { ta.value = cr().senal = app._azar(app.DB.tablas.senal.filas); pie(); }));
    b.appendChild(app._campo('La señal', caja));
    const sub = el('div', 'wiz-sub');
    [['habitat', 'Hábitat', 'habitat'], ['quiere', 'Qué quiere', 'quiere'], ['pelea', 'Cómo pelea', 'pelea'], ['botin', 'Lo que deja al caer', 'botinCae']].forEach(([k, rot, tabla]) => {
      const inp = document.createElement('input');
      inp.type = 'text'; inp.value = cr()[k]; inp.autocomplete = 'off'; inp.placeholder = 'Opcional';
      inp.setAttribute('aria-label', rot);
      inp.addEventListener('input', () => { cr()[k] = inp.value; });
      const c = el('div', 'dir-con-dado');
      c.append(inp, app._botonDado(`${rot} al azar`, () => {
        inp.value = cr()[k] = app._azar(app.DB.tablas[tabla].filas).replace(/NA × (\d+)/g, (_, n) => String(cr().na * parseInt(n, 10)));
      }));
      sub.appendChild(app._campo(rot, c));
    });
    b.appendChild(sub);
  }

  /* ── Paso 8 · Contexto táctico ────────────────────────────────── */
  function pasoContexto(b) {
    b.appendChild(el('p', 'wiz-hint', '¿Qué problema le plantea al grupo? No qué puede hacer, sino qué decisiones obliga a tomar. Una o dos frases.'));
    const ta = document.createElement('textarea');
    ta.value = cr().contexto; ta.style.minHeight = '96px';
    ta.placeholder = 'No pelea: elige al último de la fila, lo inmoviliza y se lo lleva. El grupo decide entre perseguirla hacia su terreno o dejar atrás a un compañero.';
    ta.setAttribute('aria-label', 'Contexto táctico');
    ta.addEventListener('input', () => { cr().contexto = ta.value; pie(); });
    b.appendChild(app._campo('Contexto táctico', ta));
    const S = app.calcCr(cr());
    const sub = el('div', 'wiz-sub');
    sub.appendChild(el('span', 'fl', 'Así queda'));
    sub.appendChild(app._info(`${cr().nombre || 'Sin nombre'} — ${app._etiquetaNA(cr())} · ${app._lineaCr(cr())}\n` +
      `PV ${S.pv} · Guardia ${S.guardia} · Armadura ${S.armadura} · Ataque ${app._signo(S.ataque)} · Daño ${S.dano}\n` +
      `Peso ${S.pesoGastado}/${S.pesoMax} · al calibrar, ${app._txtCalibrar(S)}`));
    b.appendChild(sub);
  }

  const PINTORES = [pasoIdea, pasoNA, pasoTipo, pasoRol, pasoStats, pasoRasgos, pasoSenal, pasoContexto];

  function queFalta() {
    const c = cr();
    switch (paso) {
      case 0:
        if (!c.idea.trim()) return 'Escribe la idea en una frase';
        return c.nombre.trim() ? '' : 'Ponle un nombre';
      case 4: return c.salv.length === 2 ? '' : 'Elige dos Salvaciones fuertes';
      case 6: return c.senal.trim() ? '' : 'Toda amenaza tiene señal';
      case 7: return c.contexto.trim() ? '' : 'Escribe el contexto táctico';
    }
    return '';
  }

  function pie() {
    const falta = queFalta();
    $('wiz_next').disabled = !!falta;
    $('wiz_next').textContent = paso === ULTIMO ? 'Crear amenaza' : 'Continuar';
    $('wiz_why').textContent = falta;
  }

  function pintar() {
    $('wiz_ttl').textContent = PASOS[paso];
    $('wiz_sub').textContent = `Paso ${paso + 1} de ${PASOS.length}`;
    const bars = $('wiz_bars'); bars.textContent = '';
    PASOS.forEach((_, i) => bars.appendChild(el('span', 'wiz-bar' + (i === paso ? ' on' : (i < paso ? ' done' : '')))));
    const b = $('wiz_body');
    const y = pintado === paso ? b.scrollTop : 0;
    b.textContent = '';
    PINTORES[paso](b);
    b.scrollTop = y;
    pintado = paso;
    pie();
  }

  function cerrar() {
    abierto = false;
    $('wiz_panel').classList.remove('fs-open');
    document.body.style.overflow = '';
    app._retratoRecortado = null;
    app._alCerrarBiblioteca = null;
  }
  function abrir() {
    app.limpiarFicha();
    app.cr = app.nuevaCr();
    app._nombreOriginal = '';
    app.modo = 'ficha';
    paso = 0; pintado = -1; abierto = true;
    app._retratoRecortado = () => { if (abierto) pintar(); };
    app._alCerrarBiblioteca = () => { if (abierto) pintar(); };
    $('wiz_panel').classList.add('fs-open');
    document.body.style.overflow = 'hidden';
    pintar();
  }

  /** Sale del asistente a la ficha con lo que haya. `completo` = terminado:
      la ficha se queda en resumen; a medias, con el perfil en edición. */
  function volcar(completo) {
    const c = app.cr;
    cerrar();
    app._abrirFicha(c, '');
    app._markUnsaved();
    if (!completo) {
      app.editSection('personal');
      app.editSection('identity');
      app.toast('Ficha abierta: lo que elegiste sigue ahí', 'info');
    } else app.toast(`${c.nombre} lista — revisa la ficha y guarda`, 'ok');
  }

  $('wiz_back').onclick = () => {
    if (paso > 0) { paso--; pintar(); return; }
    cerrar();
    app.showScreen('home');
  };
  $('wiz_next').onclick = () => {
    if (queFalta()) return;
    if (paso === ULTIMO) { volcar(true); return; }
    paso++; pintar();
  };
  $('wiz_manual').onclick = () => volcar(false);
  $('wiz_dado').onclick = () => {
    const na = paso >= 1 ? app.cr.na : null;
    app.cr = app.criaturaAlAzar(na);
    volcar(true);
  };

  /* ── Interruptor en Ajustes ───────────────────────────────────── */
  const CLAVE = 'ssd_asistente';
  const leer = () => { try { return localStorage.getItem(CLAVE) !== '0'; } catch (e) { return true; } };
  const sincronizar = () => { const b = $('wiz_toggle_btn'); if (b) b.setAttribute('aria-pressed', String(app.asistenteActivo)); };
  app.asistenteActivo = leer();
  app.toggleAsistente = function () {
    this.asistenteActivo = !this.asistenteActivo;
    try { localStorage.setItem(CLAVE, this.asistenteActivo ? '1' : '0'); } catch (e) { /* la sesión sigue */ }
    sincronizar();
    this.toast(this.asistenteActivo
      ? 'Asistente activado — «Nueva amenaza» te guiará por los ocho pasos'
      : 'Asistente desactivado — «Nueva amenaza» abrirá la ficha en blanco', 'ok');
  };
  const _open = app.openSettings;
  app.openSettings = function () { const r = _open.apply(this, arguments); sincronizar(); return r; };

  app.newChar = function () {
    if (!app.asistenteActivo) return app.nuevaAmenazaManual();
    abrir();
  };
  app.abrirAsistente = abrir;
  app._asistenteAbierto = () => abierto;
})();
