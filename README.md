# S&S Director — v1.3

La app hermana de **S&S Companion** para quien dirige *Stars & Sorcery*: crea
amenazas, calibra encuentros y genera botín, zonas y facciones. PWA estática:
sin build, sin dependencias, funciona sin conexión.

## Novedades v1.3 — Manuales del 11-10-2026

`CACHE_VERSION` es `ss-director-v15` y `RULES_DATA_VERSION`,
`v1-monstruos-guia-r8`. Los manuales se leen de
`OneDrive\S&S\Official\Stars_and_Sorcery_v1_Paquete_Completo_1`.

- **Daño**: cada NA tiene un ajuste que se suma a cada ataque (NA 1, +1; NA 3,
  −2…). Con 4 PA o más son **dos Ataques Normales** que se reparten los dados
  —el primero lleva el impar—, y la ficha enseña una tarjeta para cada uno.
  Un Arrollador Grande o mayor tiene al menos 4 PA desde NA 5.
- **PV** ×1,5: (50 + NA × (5 + CON)) × 1,5, hacia abajo.
- **Dragón**: Telepatía, INT Fuerte además de los dos del Rol, Aliento gratis y
  Uso de Axiomas obligatorio; Enorme o Colosal. **Dracónido**, tipo nuevo
  (wyverns, dracos): Aliento pagado, INT y CAR Débiles. **Wyvern** en el
  bestiario (44 criaturas).
- **Rasgos de especie**: cada Rasgo puede marcarse «De especie»,
  «Definitoria» y, en un jefe, «Racial mayor» (en la tarjeta del Rasgo). Uno
  de especie de combate es gratis si no pasa de Potencial 1, 2 o 3 según el NA;
  los de narrativa (Resurgir, Pesadillas…), siempre; el Aliento de un dragón,
  también; y el racial mayor de un jefe. La Aptitud definitoria lleva su
  línea **«Protección»** (Notas → Señal y contexto).
- **NA de encuentro** de cada criatura: su NA + 1 por cada 2 de exceso de
  Potencial + jefe 3 (4 desde NA 6) + Aptitud de daño en área (3 o 2; en un
  jefe, uno menos) + 1 si es Enorme o Colosal + 1 si usa Axiomas. La revisión
  final lo dice como el Manual: «Encuentro: cuenta como NA…».
- **Varias criaturas**: cuenta 1 la que está a 0 o 1 NA de la más fuerte; ½ a
  2 o 3; ¼ a 4. El NA sube +2 con 1½, +3 con 2, +4 con 3, +6 con 4 o 5, +7 con
  6 o 7 y +9 con 8 o más.
- **Tabla de dificultad nueva** (Manual de Monstruos, Cap. 4): para Nivel 1–2,
  NA 3 · 4 · 5 · 6+; para 3–4, 4 · 5 · 6 · 7+; para 5–6, 8 · 9 · 10 · 11+…
- **Asistente de diez pasos**, como el Manual: idea, NA (con la tabla de
  dificultad y «cuántas iguales»), tipo y tamaño, Rol, atributos,
  estadísticas, la especie, Potencial, el jefe (solo si lo es: racial mayor y
  objeto mágico) y el cierre (NA de encuentro, señal, contexto, cuándo huye).
- **Estados** (Mesa → combate): ahora se leen del Manual Básico. Cambian: Aturdido
  es el más severo (no actúa ni reacciona; crítico cuerpo a cuerpo), Paralizado
  deja hablar y salvar, y el daño de Sangrado, Desgarro, Trauma y Envenenado
  tiene tipo.
- **Roles**: Ataque Masivo ya no cuesta PA (una vez por ronda, al impactar);
  el Represor tiene Represión (3 PA, 1/ronda).
- **Bestiario**: las 44 criaturas salen de las fórmulas y su NA de encuentro
  coincide con su línea «Encuentro». Los objetos de los jefes y Comandantes
  van sumados a mano, como en la ficha impresa.

## v1.2 — Manuales del 2-10-2026: atributos y fórmulas

El Manual de Monstruos y la Guía han cambiado cómo se construye una criatura:
ya no se lee una fila de estadísticas, **se calcula como un personaje**.

- **Atributos**: cada criatura tiene FUE, DES, CON, INT, SAB y CAR, cada uno
  **Fuerte**, **Normal** o **Débil**. El Rol decide los dos Fuertes, el tipo
  sugiere los Débiles y el tamaño toca FUE, DES y CON. Se ven y se editan en
  Combate → «Atributos y Moral», y tienen paso propio en el asistente.
- **Fórmulas**: ataque = Competencia + el mayor de FUE o DES · daño por turno
  = dado de daño del NA + ese modificador · Guardia = 10 + Competencia + DES ·
  PV = 50 + NA × (5 + CON) · Salvaciones = modificador, más la Competencia en
  los dos Fuertes · CD = 8 + Competencia + ½ NA + el Fuerte más alto ·
  Iniciativa = DES. Todo sale solo en la ficha.
- **Roles**: ya no suman ni restan PV o Guardia; deciden atributos. Quedan los
  ajustes del Manual (Arrollador +1d6 al daño, Hostigador +10 pies, Explorador
  +15 pies e Iniciativa +4, Guardián +1 de Armadura y −10 pies).
- **Tamaño**: cambia atributos, no PV ni Guardia. Enorme y Colosal suman +1 al
  NA del encuentro.
- **«Peso» ahora es «Potencial»** en toda la app.
- **Hordas**: una horda es una sola criatura de NA efectivo (grupo +2, banda
  +4, turba +6); ya no suma los PV de sus miembros. A mitad de vida se divide
  en dos de NA 2 puntos menor.
- **NA del encuentro**: los pasos son ahora de 2 en 2 —una criatura de dos NA
  menos cuenta ½ y de cuatro menos ¼; si suman 2–3, +2 NA; 4–7, +4; 8 o más,
  +6—. Un jefe sube 2.
- **Moral**: toda criatura con INT Débil deja de tirarla, sea del tipo que sea.
- **Vulnerabilidad** ×1,5 (antes el doble) y **Frágil** deja la CON en Débil.
- **Estúpida ahora se llama Crédula**, y la ficha del Ogro ya da su CD bien
  (12 = su CD − 5). Las amenazas guardadas con Estúpida la cambian solas.
- **Bestiario**: las 43 criaturas —también las 13 de la Guía, que antes iban
  con números a mano— salen de las fórmulas. Solo queda fijado a mano lo que
  viene del equipo o de la propia criatura (la Armadura del Mercenario, la
  velocidad del Oso…).
- **Tus amenazas guardadas** se abren con las reglas nuevas: sus dos
  Salvaciones fuertes pasan a ser sus atributos Fuertes (o los de su Rol) y
  sus cifras se recalculan. Lo que habías fijado a mano en Estadísticas se
  conserva y la ficha lo marca frente a la fórmula; las criaturas traídas del
  bestiario antiguo pierden sus números impresos, que ya no valen.
- **Dones de Poder** (Guía, Cap. 9): la Biblioteca sirve tal cual para las
  Capacidades de Don, pero la app no lleva los Puntos de Don ni desplaza la
  fila de dificultad del grupo.

## v1.1 — Manuales del 1-10-2026

- **PV de tres y cuatro cifras**: en «Estado», el número que se toca para
  escribir los PV quedaba recortado a partir de 100 (la columna medía 74 px
  fijos, heredados de Companion). Ahora el campo mide tantas cifras como el
  máximo —150, 750 o 1.460 caben enteros— y, si hace falta sitio, es el rótulo
  «Puntos de Vida» el que se parte en dos líneas.
- **Roles con nombre nuevo**: Bruto → **Arrollador**, Controlador →
  **Represor**, Emboscador → **Acechador**. Las amenazas guardadas, los
  archivos exportados y las copias de seguridad con los nombres antiguos se
  abren igual: se convierten al cargarlas.
- **Adiós al Valor de Amenaza**: los manuales ya no lo usan. La Mesa calcula el
  **NA del encuentro** de la Guía (Cap. 2) y lo compara con el NA que
  corresponde a cada dificultad para el nivel del grupo. Cada línea del encuentro dice lo que cuenta. Con cinco o
  seis personajes, +1 NA en cada dificultad; con dos o tres, −1.
- **Ficha**: donde ponía «Valor de Amenaza» pone «Al calibrar», el NA con el
  que entra en esa cuenta.
- **Textos de ayuda** al día con la redacción nueva del Manual (la señal, el
  contexto táctico, los jefes).
- El bestiario y las tablas se han vuelto a generar desde los .docx.

## v1.0 — Primera versión

Fuentes: *Manual de Monstruos v1* y *Guía del Director v1*, con apoyo del
*Manual Básico v1* para estados y tipos de daño.

- **Amenazas** (pantalla de Inicio): roster con retrato, igual que el de
  personajes de Companion. Desliza a la derecha para ordenar y a la izquierda
  para borrar.
- **Ficha de amenaza**, cuatro pestañas deslizables:
  - **Perfil**: retrato (elegir foto y recortar), nombre e idea · NA, tipo,
    tamaño, Rol y estructura (normal, jefe u horda) · PV en mesa ·
    Estadísticas (Velocidad, Alcance, Iniciativa y Moral).
  - **Combate**: atributos, Salvaciones y Moral · ataque y daño con dado ·
    Defensa (Guardia, Armadura y Guardia Desprevenida, que pierde la
    Competencia). Todo sale de las fórmulas del Manual; al editar cada tarjeta,
    el valor de la fórmula va al lado del tuyo, con «Volver a las fórmulas».
  - **Rasgos**: barra de Potencial, Rasgos gratuitos de tipo y habilidad de Rol
    puestos solos, Biblioteca de 183 piezas en 16 familias, Dado de Uso de
    las Aptitudes (se tira y se degrada), rasgos propios.
  - **Notas**: señal y contexto táctico · fases, guarida y victoria
    alternativa de los jefes · revisión final · notas.
- **Asistente de creación**: los pasos del Manual (idea, NA, tipo y tamaño,
  Rol, atributos, estadísticas, Rasgos, señal, contexto). El dado de la cabecera
  hace una **criatura al azar** con las tablas del Cap. 9. Se apaga en Ajustes.
- **Plantillas** (menú de la ficha): Anciana, No-muerta, Alfa, Cría… y las
  otras ocho.
- **Bestiario**: 43 criaturas —30 del Manual de Monstruos y 13 de la Guía—
  que se traen al roster con un toque.
- **Mesa del Director**, cuatro pestañas. Se guarda sola.
  - **Encuentro**: NA del encuentro y dificultad en vivo según el nivel y el
    tamaño del grupo; iniciativa, PV, estados y Moral en combate; encuentros
    guardados.
  - **Botín**: botín de la sesión por nivel; generación modular de objetos
    mágicos (rareza, tipo, propiedades con el techo de bono de su rareza,
    maldición opcional, las tres preguntas); tesoro guardado; consulta de
    Focos, Módulos, maldiciones y costes.
  - **Zonas**: Dado de Riesgo y Reacción; «la zona en una ficha» con sus dos
    Etiquetas (2d20) y su Reloj de Amenaza; peligros y trampa al azar.
  - **Facciones**: Fuerza, Astucia y Riqueza, PG, objetivo (d8), activos;
    conflicto entre dos facciones; acciones del Turno y noticias del mundo.
- **Heredado de Companion sin cambios**: letras propias (Moderno y Clásico),
  cuatro tamaños de letra, fondos de pantalla, tarjetas plegables con
  resumen, editar/confirmar/cancelar por tarjeta y modo edición, tirada con
  dado e historial, Ventaja/Desventaja, exportar e importar JSON (en el móvil,
  la hoja de compartir), copia de seguridad de todo, editor de reglas,
  autodiagnóstico y actualización.
- **Pantalla de carga propia**: la mano esquelética del icono, latiendo.
- **Identidad de color propia**: tres temas —**Cripta** (predeterminado),
  **Forja** y **Muerte viviente**— en lugar de Art Déco, Vacío y Arcano.

## Decisiones sobre las reglas

Donde los libros se contradicen o callan, la app hace esto (y todo se puede
cambiar en el Editor de Reglas):

- **Atributos Débiles del tipo**: el Manual los «sugiere», a veces con una
  disyuntiva («DES o INT», «e INT si no tiene mente»). La app pone uno por
  defecto (el Gigante, INT) y deja cambiarlos; el bestiario trae los de cada
  criatura tal como están impresos.
- **Sin Rol y Esbirro**: sus dos Fuertes son libres. De entrada se ponen los
  más propios de su tipo (una bestia, DES y CON) y se cambian en la ficha.
- **Tamaño que deja un atributo en Débil** (FUE del Diminuto, DES del
  Colosal): vale −2 aunque el Rol lo haga Fuerte, pero su Salvación sigue
  sumando la Competencia. Así salen el Enjambre de Ratas y el Titán.
- **Los Rasgos cuentan en las cifras**: Piel Gruesa suma su Armadura, Evasiva
  su Guardia, Lenta resta su velocidad (desde el 11-10, la ficha impresa del
  Manual también).
- **Rasgo de especie gratuito**: el Manual dice «uno, el que elijas». La app
  elige el de más Potencial que quepa en el tope de su NA. La Aptitud
  definitoria cuenta como Rasgo de especie.
- **Piezas del bestiario que no están en la Biblioteca** (Garras Paralizantes,
  Toque Paralizante, Mirada Dominante, Hijos de la Noche, Forma de Niebla…):
  se traen como Rasgos propios, con el Potencial que hace cuadrar su línea
  «Encuentro». Las de la Guía no gastan Potencial, como siempre, y su Aptitud de
  área se marca con lo que su línea «Encuentro» le suma.
- **Uso de Axiomas** cuesta 3 si algún Axioma es de Nivel 4 o más (el bestiario
  lo trae así; en una amenaza tuya, ajústalo en la pieza).
- **NA de encuentro**: el jefe, la Aptitud de área, el tamaño, los Axiomas, el
  NA efectivo de la horda y el exceso de Potencial se aplican a la criatura
  antes de buscar «la más fuerte». Lo que puede invocar no se suma solo: la
  Mesa lo recuerda.
- **Entre 1 y 1½ criaturas equivalentes** el NA no sube (el Manual empieza en
  1½). **Menos de cuatro esbirros solos**: si no llegan a sumar 1, el NA baja
  (dos esbirros, 3 menos; uno, 6).
- **Grupo de un solo personaje**: la Guía no da ajuste; se resta 2 NA a cada
  dificultad y se recuerda el Filo del Protagonista.
- **Anomalías Cósmicas**: aún no tienen ficha propia.

## Probar en local

```bash
python -m http.server 8736
```

El service worker se vuelve a registrar en cada carga. Para ver un cambio sin
pelear con la caché: da de baja el worker y borra las cachés, ejecuta
`python herramientas/verify.py` y abre `_verify.html?v=<algo único>`. Bórralo
al terminar.

- **Autodiagnóstico**: `?check=1`. Comprueba, entre otras cosas, que las 44
  criaturas del bestiario salen de las fórmulas —atributos, PV, Guardia,
  Armadura, ataque, daño, CD, Iniciativa, velocidad y Moral, frente a lo
  impreso—, que su NA de encuentro es el de su línea «Encuentro» y que el NA
  de varias criaturas da lo que dan los ejemplos de la Guía. Fija antes el
  ancho de la ventana (390×844): con el panel oculto da falsos «texto que se
  sale».
- **Sube `CACHE_VERSION`** (`sw.js`) en cada cambio, y `RULES_DATA_VERSION`
  (`js/storage.js`) cuando cambie `js/reglas.js`.
- Todos los archivos van en **CRLF**: `python herramientas/crlf.py`.
- **Icono**: `Bone_Chill_Icon.webp` es el favicon. Los PNG de instalación
  (`icono-192.png`, `icono-512.png`) salen de él con
  `python herramientas/gen_iconos.py`; si lo cambias, vuelve a ejecutarlo y
  sube `CACHE_VERSION`.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Pantallas, tarjetas y paneles |
| `css/main.css` | La hoja de Companion, con sus colores convertidos en variables |
| `css/temas.css` | Las tres paletas. **Generado**: `herramientas/gen_temas.py` |
| `css/director.css` | Las piezas nuevas (dificultad, combate, Potencial…) |
| `js/reglas.js` | Base de reglas. **Generado**: `herramientas/gen_reglas.py` |
| `js/base.js` | Piezas genéricas de Companion: gestos, dados, recorte, ajustes |
| `js/app.js` | Núcleo: pantallas, roster, secciones, guardado, bestiario |
| `js/amenaza.js` | La ficha: cálculo (`calcCr`) y tarjetas |
| `js/biblioteca.js` | Biblioteca de Rasgos y Aptitudes |
| `js/mesa.js` | Mesa del Director |
| `js/asistente.js` | Asistente de los diez pasos del Manual |
| `js/editor.js` | Editor de reglas |
| `js/storage.js` | IndexedDB `ss-director` (claves `ssd_*`) |
| `js/respaldo.js` · `historial.js` · `plegables.js` · `autocheck.js` | Copias, tiradas, tarjetas plegables, autodiagnóstico |
| `herramientas/` | `gen_reglas.py` (lee los .docx), `gen_temas.py`, `gen_iconos.py`, `crlf.py`, `verify.py` |

Los datos viven en el dispositivo: amenazas, Mesa, reglas editadas y fondos en
IndexedDB (`ss-director`); las preferencias, en `localStorage` con el prefijo
`ssd_`. Nada se comparte con S&S Companion aunque se publiquen en el mismo
dominio.

## Pendiente

- Ficha propia para las Anomalías Cósmicas (Manual de Monstruos, Cap. 8).
- Las plantillas de no-muerte mayor del Manual (Vampiro, Liche y Caballero de
  la Muerte, Cap. 4) no están en el menú Plantillas: vienen como texto, no en
  la tabla. El bestiario sí trae al Vampiro Señorial, al Liche y al Caballero.
- Selector de Axiomas del Catálogo para el Rasgo «Uso de Axiomas» (hoy se
  anotan a mano y la ficha calcula su Nivel máximo, CD y Reserva).
- Si las dos apps se publican en el mismo dominio: el service worker de
  Companion borra al activarse todas las cachés que no sean las suyas, también
  la de Director. No se pierde ningún dato, pero Director tendría que volver a
  descargarse con conexión. El arreglo va en el `sw.js` de Companion (filtrar
  por su prefijo, como hace el de Director).
