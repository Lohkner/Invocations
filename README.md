# S&S Director — v1.0

La app hermana de **S&S Companion** para quien dirige *Stars & Sorcery*: crea
amenazas, calibra encuentros y genera botín, zonas y facciones. PWA estática:
sin build, sin dependencias, funciona sin conexión.

## Novedades v1.0 — Primera versión

`CACHE_VERSION` es `ss-director-v6` y `RULES_DATA_VERSION`,
`v1-monstruos-guia-r1`.

Fuentes: *Manual de Monstruos v1* y *Guía del Director v1* (30-9-2026), con
apoyo del *Manual Básico v1* para estados y tipos de daño.

- **Amenazas** (pantalla de Inicio): roster con retrato, igual que el de
  personajes de Companion. Desliza a la derecha para ordenar y a la izquierda
  para borrar.
- **Ficha de amenaza**, cuatro pestañas deslizables:
  - **Perfil**: retrato (elegir foto y recortar), nombre e idea · NA, tipo,
    tamaño, Rol y estructura (normal, jefe u horda) · PV en mesa.
  - **Combate**: estadísticas calculadas —tabla por NA → Rol → Tamaño →
    Rasgos → jefe u horda—, con el valor de la curva al lado del tuyo y el
    botón «Ajustar a la curva» · ataque y daño con dado · salvaciones,
    iniciativa y Moral.
  - **Rasgos**: barra de Peso, Rasgos gratuitos de tipo y habilidad de Rol
    puestos solos, Biblioteca de 183 piezas en 16 familias, Dado de Uso de
    las Aptitudes (se tira y se degrada), rasgos propios.
  - **Notas**: señal y contexto táctico · fases, guarida y victoria
    alternativa de los jefes · revisión final · notas.
- **Asistente de creación**: los ocho pasos del Manual (idea, NA, tipo y
  tamaño, Rol, estadísticas, Rasgos, señal, contexto). El dado de la cabecera
  hace una **criatura al azar** con las tablas del Cap. 9. Se apaga en Ajustes.
- **Plantillas** (menú de la ficha): Anciana, No-muerta, Alfa, Cría… y las
  otras ocho.
- **Bestiario**: 43 criaturas —30 del Manual de Monstruos y 13 de la Guía—
  que se traen al roster con un toque.
- **Mesa del Director**, cuatro pestañas. Se guarda sola.
  - **Encuentro**: presupuesto en Valor de Amenaza por nivel y tamaño del
    grupo; dificultad en vivo; iniciativa, PV, estados y Moral en combate;
    encuentros guardados.
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

- **Vulnerabilidad**: el doble de daño, como dicen el Manual de Monstruos y el
  bestiario de la Guía. El Manual Básico dice ×1,5.
- **Los Rasgos cuentan en las cifras**: Piel Gruesa suma su Armadura, Lenta
  resta su velocidad. En el bestiario impreso, el Basilisco y el Guardián de
  Raíz muestran la línea de estadísticas sin ellos.
- **El bestiario de la Guía** (Lobo, Orco, Oso…) no sigue las fórmulas de Rol
  —la propia Guía lo llama «ajustes puntuales»—: se importa con sus números
  impresos, marcados como ajuste a mano, y sus rasgos sin Peso.
- **PV**: (base ± Rol × NA) × Tamaño, redondeado al entero más cercano; ×2 el
  jefe. Así salen las 30 criaturas del Manual.
- **Grupo de un solo personaje**: la Guía no da multiplicador; se usa ¼ y se
  recuerda el Filo del Protagonista.
- **Dificultad entre dos bandas**: «Mortal» desde su presupuesto; por debajo,
  la banda más cercana en proporción.
- **Anomalías Cósmicas**: aún no tienen ficha propia.

## Probar en local

```bash
python -m http.server 8736
```

El service worker se vuelve a registrar en cada carga. Para ver un cambio sin
pelear con la caché: da de baja el worker y borra las cachés, ejecuta
`python herramientas/verify.py` y abre `_verify.html?v=<algo único>`. Bórralo
al terminar.

- **Autodiagnóstico**: `?check=1`. Comprueba, entre otras cosas, que las 30
  criaturas del Manual salen de la fórmula y caben en su Peso. Fija antes el
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
| `css/director.css` | Las piezas nuevas (dificultad, combate, Peso…) |
| `js/reglas.js` | Base de reglas. **Generado**: `herramientas/gen_reglas.py` |
| `js/base.js` | Piezas genéricas de Companion: gestos, dados, recorte, ajustes |
| `js/app.js` | Núcleo: pantallas, roster, secciones, guardado, bestiario |
| `js/amenaza.js` | La ficha: cálculo (`calcCr`) y tarjetas |
| `js/biblioteca.js` | Biblioteca de Rasgos y Aptitudes |
| `js/mesa.js` | Mesa del Director |
| `js/asistente.js` | Asistente de ocho pasos |
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
- Selector de Axiomas del Catálogo para el Rasgo «Uso de Axiomas» (hoy se
  anotan a mano y la ficha calcula su Nivel máximo, CD y Reserva).
- Si las dos apps se publican en el mismo dominio: el service worker de
  Companion borra al activarse todas las cachés que no sean las suyas, también
  la de Director. No se pierde ningún dato, pero Director tendría que volver a
  descargarse con conexión. El arreglo va en el `sw.js` de Companion (filtrar
  por su prefijo, como hace el de Director).
