# Ruleta de premios

Ruleta de premios (spin wheel) para eventos y puntos de venta. Se muestra en una pantalla y los participantes pasan a girarla uno tras otro, sin límite de giros.

Hecha con HTML, CSS y JavaScript puro: sin frameworks, sin instalación y sin servidor.

## Características

- **8 secciones intercaladas:** 4 premios y 4 "Sigue intentando", cada una con su propia probabilidad.
- **Dos formas de girar:** con el botón **Girar** o arrastrando la rueda con el mouse o el dedo. La fuerza del deslizamiento cambia las vueltas y la velocidad.
- **Animación realista** con desaceleración suave y un puntero fijo que marca el resultado.
- **Sonidos:** un tic sincronizado con cada sección que pasa por el puntero y un sonido distinto para cada resultado. Incluye un botón para silenciar.
- **Resultado:** al ganar un premio salen confeti, sonido de victoria y un pop-up "¡Felicidades! Ganaste: …". Con "Sigue intentando" aparece un mensaje amable, sin confeti.
- **Listo para el siguiente:** el pop-up se cierra con un botón, con un clic fuera o con Esc, y la rueda queda lista para otro giro.
- **Pantalla completa** con un botón, pensada para mostrarse en un monitor o una TV.
- **Responsive:** se adapta a computadora, tablet y celular (vertical y horizontal), con soporte táctil.
- **Personalización total** desde un único objeto `CONFIG`.

## Cómo usarla

1. Descarga o clona el proyecto.
2. Abre `index.html` con doble clic en Chrome, Edge, Firefox o Safari.
3. Presiona el botón de pantalla completa (arriba a la derecha) y ¡a girar!

> Los navegadores solo permiten reproducir sonido después de que la persona interactúa con la página. El audio se activa solo con el primer clic o toque.

## Estructura

```
ruleta-premios/
├── index.html          Estructura de la página
├── css/
│   └── styles.css      Estilos (los colores vienen de CONFIG)
├── js/
│   └── script.js       Lógica; el objeto CONFIG está al inicio
└── assets/
    ├── img/            Logos (rueda, barra de navegación, favicon)
    └── sounds/         Sonidos (tic, victoria, sigue intentando)
```

## Personalización

Todo se cambia en el objeto `CONFIG`, al inicio de [`js/script.js`](js/script.js). No hace falta tocar el HTML ni el CSS.

| Qué cambiar | Dónde, dentro de `CONFIG` |
|---|---|
| Eslogan, título y textos de botones | `textoNavbar`, `tituloPagina`, `textoBotonGirar`, `etiquetas` |
| Logos | `logos` |
| Premios y probabilidades | `secciones` |
| Mensajes del pop-up | `popup` |
| Sonidos y volumen | `sonidos` y el campo `sonido` de cada sección |
| Colores | `colores` |
| Tipo de letra | `fuente` |
| Tamaño del texto y grosor del borde | `rueda` |
| Comportamiento del giro | `giro` (botón) y `arrastre` (mouse o dedo) |

### Premios y probabilidades

Cada sección se define así:

```js
{ texto: "30% de descuento", tipo: "premio", peso: 6, sonido: "assets/sounds/win.mp3" }
```

- `texto`: lo que se ve en la rueda y en el pop-up.
- `tipo`: `"premio"` (confeti y felicitación) o `"intento"` (mensaje de "Sigue intentando").
- `peso`: probabilidad relativa. Una sección con peso 20 sale el doble de veces que una con peso 10. No hace falta que los pesos sumen 100.
- `sonido`: archivo que suena al caer en esa sección (`""` para ninguno).

Las secciones se dibujan en el orden de la lista, en el sentido de las agujas del reloj y empezando arriba. Conviene intercalar premio, intento, premio, intento…

El resultado se sortea por peso antes de que la rueda empiece a girar, así que la fuerza del arrastre no cambia la probabilidad de ganar.

Pesos configurados de ejemplo (suman 100, unas 40 posibilidades de ganar de cada 100):

| Sección | Peso |
|---|---|
| 10% de descuento | 14 |
| 20% de descuento | 10 |
| 30% de descuento | 6 |
| Producto sorpresa | 10 |
| Sigue intentando (cada una de las 4) | 15 |

**Comprobar las probabilidades:** abre la consola del navegador (F12) y escribe `probarPesos(10000)`. Verás una tabla con el porcentaje real de cada sección en 10 000 sorteos simulados.

### Logos

Reemplaza los archivos de `assets/img/` o cambia las rutas en `CONFIG.logos`:

- `logo-rueda.png`: centro de la rueda. Idealmente cuadrado; las esquinas se recortan en círculo.
- `logo-nav.png`: barra de navegación. Con fondo transparente se integra mejor con el color de la barra.
- `logo-favicon.png`: icono de la pestaña del navegador.

Se aceptan `.svg`, `.png`, `.jpg` y `.webp`. Para pantallas grandes conviene usar SVG o PNG de buena resolución. Las rutas son relativas a `index.html`, por eso empiezan con `assets/`.

### Sonidos

Los archivos están en `assets/sounds/`. Si `CONFIG.sonidos.tick` está vacío o el archivo no carga, el tic se genera automáticamente con la Web Audio API.

### Colores

La paleta actual se cambia en `CONFIG.colores`:

| Elemento | Color |
|---|---|
| Fondo de la página | `#ffd0db` |
| Barra de navegación | `#b3596e` |
| Secciones de premio | `#b4344a` |
| Secciones "Sigue intentando" y botón Girar | `#8faf26` |
| Borde de la rueda | `#5F6D33` |
| Círculo central y puntero | `#FFFFFF` |

## Dependencias

La única dependencia externa es [canvas-confetti](https://github.com/catdad/canvas-confetti), que se carga desde un CDN. Sin conexión a internet, la ruleta funciona igual pero sin confeti.

## Notas de uso

- En pantalla completa, la tecla **Esc** sale de pantalla completa. Para cerrar el pop-up sin salir, usa el botón **Cerrar** o haz clic fuera de él.
- Safari en iPhone no permite la pantalla completa, así que el botón no aparece en ese navegador.
- Si el equipo tiene activada la opción de accesibilidad "reducir movimiento", el confeti no se muestra.
