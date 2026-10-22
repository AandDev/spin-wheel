/* =========================================================
   CONFIG — TODA la personalización de la ruleta está aquí.
   Cambia textos, colores, logos, sonidos y probabilidades
   sin tocar el resto del código.

   Dónde cambiar cada cosa:
     · Textos de la barra y botones ... tituloPagina, textoNavbar, textoBotonGirar, etiquetas
     · Logos .......................... logos
     · Premios y probabilidades ....... secciones (texto, tipo, peso, sonido)
     · Mensajes del pop-up ............ popup
     · Sonidos y volumen .............. sonidos (y "sonido" de cada sección)
     · Colores ........................ colores
     · Tipo de letra .................. fuente
     · Aspecto de la rueda ............ rueda
     · Comportamiento del giro ........ giro (botón) y arrastre (mouse/dedo)
   ========================================================= */
const CONFIG = {
  // ----- Textos generales -----
  tituloPagina: "Ruleta de premios",
  textoNavbar: "¡Gira y gana!", // eslogan junto al logo ("" para ocultarlo)
  textoBotonGirar: "Girar",
  // Textos de ayuda de los botones de la barra (se ven al pasar el mouse)
  etiquetas: {
    silenciar: "Silenciar sonido",
    activarSonido: "Activar sonido",
    pantallaCompleta: "Pantalla completa",
    salirPantallaCompleta: "Salir de pantalla completa",
  },

  // ----- Logos -----
  // Todas las rutas de CONFIG (logos y sonidos) son relativas a index.html,
  // no a esta carpeta js/: por eso empiezan con "assets/".
  logos: {
    navbar: "assets/img/logo-nav.png",
    rueda: "assets/img/logo-rueda.png",
    favicon: "assets/img/logo-favicon.png",
  },

  // ----- Secciones de la rueda -----
  // Se dibujan en este orden, en el sentido de las agujas del reloj,
  // empezando por la parte superior.
  //   texto:  lo que se ve en la rueda y en el pop-up
  //   tipo:   "premio" o "intento" (define color, confeti y mensaje)
  //   peso:   probabilidad relativa (no hace falta que sumen 100)
  //   sonido: archivo que suena al caer en esta sección ("" = sin sonido)
  secciones: [
    {
      texto: "10% de descuento",
      tipo: "premio",
      peso: 14,
      sonido: "assets/sounds/win-3.mp3",
    },
    {
      texto: "Sigue intentando",
      tipo: "intento",
      peso: 15,
      sonido: "assets/sounds/lose.mp3",
    },
    {
      texto: "20% de descuento",
      tipo: "premio",
      peso: 10,
      sonido: "assets/sounds/win-2.mp3",
    },
    {
      texto: "Sigue intentando",
      tipo: "intento",
      peso: 15,
      sonido: "assets/sounds/lose.mp3",
    },
    {
      texto: "30% de descuento",
      tipo: "premio",
      peso: 6,
      sonido: "assets/sounds/win.mp3",
    },
    {
      texto: "Sigue intentando",
      tipo: "intento",
      peso: 15,
      sonido: "assets/sounds/lose.mp3",
    },
    {
      texto: "Producto sorpresa",
      tipo: "premio",
      peso: 10,
      sonido: "assets/sounds/win-3.mp3",
    },
    {
      texto: "Sigue intentando",
      tipo: "intento",
      peso: 15,
      sonido: "assets/sounds/lose.mp3",
    },
  ],

  // ----- Pop-up de resultado -----
  popup: {
    tituloPremio: "¡Felicidades!",
    textoPremio: "Ganaste:", // se muestra seguido del premio
    tituloIntento: "¡Sigue intentando!",
    textoIntento:
      "Esta vez no hubo suerte, pero la próxima puede ser la tuya. ¡Gracias por participar!",
    textoBotonCerrar: "Cerrar",
    iconoPremio: "🎉", // emoji sobre el título ("" para ninguno)
    iconoIntento: "🍀",
    retraso: 400, // ms entre que la rueda se detiene y aparece el pop-up
  },

  // ----- Sonidos -----
  sonidos: {
    activadoAlInicio: true,
    tick: "assets/sounds/tick.mp3", // "" = tic generado con Web Audio API
    volumen: 0.8, // 0 a 1
  },

  // ----- Colores -----
  colores: {
    fondoPagina: "#ffd4de",
    navbar: "#d17086",
    textoNavbar: "#FFFFFF",
    seccionPremio: "#ca4a66", // las 4 secciones de premio
    seccionIntento: "#8faf26", // las 4 secciones de "Sigue intentando"
    textoSecciones: "#FFFFFF",
    separadores: "rgba(255, 255, 255, 0.35)", // líneas entre secciones
    bordeRueda: "#636e3b",
    puntosBorde: "rgba(255, 255, 255, 0.9)", // puntos decorativos sobre el borde
    circuloCentral: "#FFFFFF",
    puntero: "#FFFFFF",
    boton: "#abce39",
    textoBoton: "#0A1528",
    popupFondo: "#FFFFFF",
    popupTexto: "#0A1528",
    popupAcento: "#F16529",
    confeti: ["#F16529", "#1F7FB8", "#0ACF41", "#FFFFFF"], // colores del confeti
  },

  // ----- Fuente -----
  fuente: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif',

  // ----- Proporciones de la rueda (relativas al radio) -----
  rueda: {
    grosorBorde: 0.07, // grosor del borde exterior
    tamanoTexto: 0.075, // tamaño de letra de las secciones
  },

  // ----- Giro con el botón -----
  giro: {
    vueltasMin: 5, // vueltas completas mínimas antes de detenerse
    vueltasMax: 7, // vueltas completas máximas
    duracion: 5500, // duración del giro en milisegundos
  },

  // ----- Giro arrastrando (mouse o dedo) -----
  // La fuerza del deslizamiento decide cuántas vueltas da y con qué velocidad arranca.
  arrastre: {
    velocidadMinima: 250, // °/s: un deslizamiento más lento no cuenta como giro
    velocidadMaxima: 2500, // °/s: a partir de aquí se considera fuerza máxima
    vueltasMin: 3, // vueltas con el deslizamiento más suave
    vueltasMax: 10, // vueltas con el deslizamiento más fuerte
    duracionMin: 3500, // límites de duración del giro en milisegundos
    duracionMax: 8000,
  },
};

/* =========================================================
   A partir de aquí no hace falta tocar nada para personalizar.
   ========================================================= */

// ----- Referencias al DOM -----
const canvas = document.getElementById("canvas-rueda");
const ctx = canvas.getContext("2d");
const btnGirar = document.getElementById("btn-girar");

/* ---------- Aplicar CONFIG a la página ---------- */
function aplicarConfig() {
  const c = CONFIG.colores;
  const raiz = document.documentElement.style;

  // Variables CSS de colores generales
  raiz.setProperty("--color-fondo", c.fondoPagina);
  raiz.setProperty("--color-navbar", c.navbar);
  raiz.setProperty("--color-texto-navbar", c.textoNavbar);
  raiz.setProperty("--color-puntero", c.puntero);
  raiz.setProperty("--color-boton", c.boton);
  raiz.setProperty("--color-texto-boton", c.textoBoton);
  raiz.setProperty("--color-centro", c.circuloCentral);
  raiz.setProperty("--color-popup-fondo", c.popupFondo);
  raiz.setProperty("--color-popup-texto", c.popupTexto);
  raiz.setProperty("--color-popup-acento", c.popupAcento);
  raiz.setProperty("--fuente", CONFIG.fuente);

  // Textos
  document.title = CONFIG.tituloPagina;
  const textoNav = document.getElementById("texto-nav");
  textoNav.textContent = CONFIG.textoNavbar;
  textoNav.hidden = !CONFIG.textoNavbar;
  btnGirar.textContent = CONFIG.textoBotonGirar;

  // Logos
  document.getElementById("logo-nav").src = CONFIG.logos.navbar;
  document.getElementById("logo-rueda").src = CONFIG.logos.rueda;
  document.getElementById("favicon").href = CONFIG.logos.favicon;
}

/* ---------- Dibujo de la rueda ---------- */
// Se dibuja una sola vez (y al cambiar el tamaño de pantalla).
// Para girarla se rota el canvas completo con CSS.
function dibujarRueda() {
  const secciones = CONFIG.secciones;
  const c = CONFIG.colores;

  // Ajustar resolución a la pantalla (nitidez en pantallas retina)
  const tamanoCss = canvas.clientWidth;
  if (!tamanoCss) return; // aún no visible
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(tamanoCss * dpr);
  canvas.height = Math.round(tamanoCss * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const centro = tamanoCss / 2;
  const radio = tamanoCss / 2;
  const grosorBorde = radio * CONFIG.rueda.grosorBorde;
  const radioSecciones = radio - grosorBorde;
  const angulo = (Math.PI * 2) / secciones.length;
  const inicio = -Math.PI / 2; // la sección 0 empieza arriba

  ctx.clearRect(0, 0, tamanoCss, tamanoCss);

  // Borde exterior
  ctx.beginPath();
  ctx.arc(centro, centro, radio, 0, Math.PI * 2);
  ctx.fillStyle = c.bordeRueda;
  ctx.fill();

  // Secciones
  secciones.forEach((seccion, i) => {
    const a0 = inicio + i * angulo;
    ctx.beginPath();
    ctx.moveTo(centro, centro);
    ctx.arc(centro, centro, radioSecciones, a0, a0 + angulo);
    ctx.closePath();
    ctx.fillStyle =
      seccion.tipo === "premio" ? c.seccionPremio : c.seccionIntento;
    ctx.fill();
  });

  // Líneas separadoras entre secciones
  ctx.strokeStyle = c.separadores;
  ctx.lineWidth = Math.max(1, radio * 0.008);
  secciones.forEach((_, i) => {
    const a = inicio + i * angulo;
    ctx.beginPath();
    ctx.moveTo(centro, centro);
    ctx.lineTo(
      centro + Math.cos(a) * radioSecciones,
      centro + Math.sin(a) * radioSecciones,
    );
    ctx.stroke();
  });

  // Puntos decorativos sobre el borde, alineados con los separadores
  ctx.fillStyle = c.puntosBorde;
  secciones.forEach((_, i) => {
    const a = inicio + i * angulo;
    const r = radio - grosorBorde / 2;
    ctx.beginPath();
    ctx.arc(
      centro + Math.cos(a) * r,
      centro + Math.sin(a) * r,
      grosorBorde * 0.2,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  });

  // Textos de las secciones (radiales, desde el borde hacia el centro)
  const tamanoLetra = radio * CONFIG.rueda.tamanoTexto;
  const radioCentro = radio * 0.26; // radio del círculo central (en CSS mide 26% del diámetro)
  const anchoMax = radioSecciones - radioCentro - tamanoLetra; // espacio disponible
  ctx.fillStyle = c.textoSecciones;
  ctx.font = `800 ${tamanoLetra}px ${CONFIG.fuente}`;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = tamanoLetra * 0.15;

  secciones.forEach((seccion, i) => {
    const aMedio = inicio + (i + 0.5) * angulo;
    const lineas = partirTexto(seccion.texto, anchoMax);
    const altoLinea = tamanoLetra * 1.1;
    ctx.save();
    ctx.translate(centro, centro);
    ctx.rotate(aMedio);
    lineas.forEach((linea, n) => {
      const y = (n - (lineas.length - 1) / 2) * altoLinea;
      ctx.fillText(linea, radioSecciones - tamanoLetra * 0.6, y, anchoMax);
    });
    ctx.restore();
  });
  ctx.shadowColor = "transparent";
}

// Parte un texto en varias líneas si no cabe en el ancho dado
function partirTexto(texto, anchoMax) {
  const palabras = texto.split(" ");
  const lineas = [];
  let actual = "";
  palabras.forEach((palabra) => {
    const prueba = actual ? `${actual} ${palabra}` : palabra;
    if (ctx.measureText(prueba).width > anchoMax && actual) {
      lineas.push(actual);
      actual = palabra;
    } else {
      actual = prueba;
    }
  });
  if (actual) lineas.push(actual);
  return lineas;
}

/* ---------- Estado de la rueda ---------- */
const estado = {
  rotacion: 0, // rotación actual de la rueda en grados (sentido horario)
  girando: false, // true mientras la rueda está en movimiento (bloquea nuevos giros)
  arrastrando: false, // true mientras se arrastra la rueda con el mouse o el dedo
};

// Bloquea o libera la rueda (botón Girar y arrastre).
// Se bloquea al empezar un giro y se libera al cerrar el pop-up.
function bloquear(activo) {
  estado.girando = activo;
  btnGirar.disabled = activo;
}

// Índice de la sección que está bajo el puntero con la rotación actual
function seccionBajoPuntero() {
  const angulo = 360 / CONFIG.secciones.length;
  return Math.floor(mod(-estado.rotacion, 360) / angulo);
}

let seccionAnterior = 0; // para detectar cuándo cruza un separador
let rotacionAnterior = 0; // para saber hacia dónde gira

function aplicarRotacion() {
  canvas.style.transform = `rotate(${estado.rotacion}deg)`;

  // Tic: cada vez que un separador pasa por el puntero (al girar o al arrastrar).
  // Como la rueda frena, los tics van naturalmente de rápidos a lentos.
  const actual = seccionBajoPuntero();
  if (actual !== seccionAnterior) {
    reproducirTic();
    golpearPuntero(
      estado.rotacion >= rotacionAnterior ? "horario" : "antihorario",
    );
    seccionAnterior = actual;
  }
  rotacionAnterior = estado.rotacion;
}

// Animación del puntero al pasar cada sección
const puntero = document.getElementById("puntero");
function golpearPuntero(direccion) {
  puntero.classList.remove("golpe-horario", "golpe-antihorario");
  void puntero.offsetWidth; // reinicia la animación aunque se repita seguida
  puntero.classList.add(`golpe-${direccion}`);
}

/* ---------- Sonidos ---------- */
const btnSonido = document.getElementById("btn-sonido");
let sonidoActivo = CONFIG.sonidos.activadoAlInicio;
let contextoAudio = null; // Web Audio API (se crea con el primer toque/clic)
let ticConArchivo = !!CONFIG.sonidos.tick;
const poolTic = []; // varias copias del tic para que puedan solaparse
let indicePoolTic = 0;
const sonidosResultado = {}; // archivo → elemento <audio> precargado
let sonidoSonando = null;

function prepararSonidos() {
  // Tic desde archivo (si falla al cargar, se usa el tic generado)
  if (ticConArchivo) {
    for (let i = 0; i < 6; i++) {
      const audio = new Audio(CONFIG.sonidos.tick);
      audio.preload = "auto";
      audio.addEventListener("error", () => {
        ticConArchivo = false;
      });
      poolTic.push(audio);
    }
  }
  // Sonidos de resultado: uno por archivo distinto
  CONFIG.secciones.forEach((s) => {
    if (s.sonido && !sonidosResultado[s.sonido]) {
      const audio = new Audio(s.sonido);
      audio.preload = "auto";
      sonidosResultado[s.sonido] = audio;
    }
  });
  actualizarBotonSonido();
}

// Los navegadores solo permiten audio tras una interacción del usuario
function activarAudio() {
  if (!contextoAudio) {
    const Contexto = window.AudioContext || window.webkitAudioContext;
    if (Contexto) contextoAudio = new Contexto();
  }
  if (contextoAudio && contextoAudio.state === "suspended")
    contextoAudio.resume();
}

function reproducirTic() {
  if (!sonidoActivo) return;
  if (ticConArchivo) {
    const audio = poolTic[indicePoolTic];
    indicePoolTic = (indicePoolTic + 1) % poolTic.length;
    audio.volume = CONFIG.sonidos.volumen;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else {
    ticGenerado();
  }
}

// Tic sintético: un "clic" muy corto con un oscilador
function ticGenerado() {
  if (!contextoAudio) return;
  const t = contextoAudio.currentTime;
  const osc = contextoAudio.createOscillator();
  const ganancia = contextoAudio.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(1800, t);
  osc.frequency.exponentialRampToValueAtTime(600, t + 0.03);
  ganancia.gain.setValueAtTime(0.35 * CONFIG.sonidos.volumen, t);
  ganancia.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
  osc.connect(ganancia).connect(contextoAudio.destination);
  osc.start(t);
  osc.stop(t + 0.06);
}

function reproducirSonidoResultado(archivo) {
  if (!sonidoActivo || !archivo) return;
  const audio = sonidosResultado[archivo];
  if (!audio) return;
  audio.volume = CONFIG.sonidos.volumen;
  audio.currentTime = 0;
  audio.play().catch(() => {});
  sonidoSonando = audio;
}

function detenerSonidoResultado() {
  if (sonidoSonando) {
    sonidoSonando.pause();
    sonidoSonando = null;
  }
}

function alternarSonido() {
  sonidoActivo = !sonidoActivo;
  if (!sonidoActivo) detenerSonidoResultado();
  actualizarBotonSonido();
}

function actualizarBotonSonido() {
  btnSonido.textContent = sonidoActivo ? "🔊" : "🔇";
  const etiqueta = sonidoActivo
    ? CONFIG.etiquetas.silenciar
    : CONFIG.etiquetas.activarSonido;
  btnSonido.setAttribute("aria-label", etiqueta);
  btnSonido.title = etiqueta;
}

/* ---------- Pantalla completa (Fullscreen API) ---------- */
const btnFullscreen = document.getElementById("btn-fullscreen");

// Iconos: flechas hacia afuera (entrar) y hacia adentro (salir)
const ICONO_ENTRAR =
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
const ICONO_SALIR =
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';

function elementoFullscreen() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function alternarFullscreen() {
  if (elementoFullscreen()) {
    (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  } else {
    const raiz = document.documentElement;
    const pedir = raiz.requestFullscreen || raiz.webkitRequestFullscreen;
    const resultado = pedir.call(raiz);
    if (resultado && resultado.catch) resultado.catch(() => {});
  }
}

function actualizarBotonFullscreen() {
  const activo = !!elementoFullscreen();
  btnFullscreen.innerHTML = activo ? ICONO_SALIR : ICONO_ENTRAR;
  const etiqueta = activo
    ? CONFIG.etiquetas.salirPantallaCompleta
    : CONFIG.etiquetas.pantallaCompleta;
  btnFullscreen.setAttribute("aria-label", etiqueta);
  btnFullscreen.title = etiqueta;
}

function prepararFullscreen() {
  const raiz = document.documentElement;
  // Algunos navegadores (p. ej. Safari en iPhone) no lo permiten: se oculta el botón
  if (!raiz.requestFullscreen && !raiz.webkitRequestFullscreen) {
    btnFullscreen.hidden = true;
    return;
  }
  btnFullscreen.addEventListener("click", alternarFullscreen);
  // También se actualiza si se sale con Esc o F11
  document.addEventListener("fullscreenchange", actualizarBotonFullscreen);
  document.addEventListener(
    "webkitfullscreenchange",
    actualizarBotonFullscreen,
  );
  actualizarBotonFullscreen();
}

/* ---------- Selección ponderada ---------- */
// Elige el índice de una sección según su peso:
// una sección con peso 14 sale el doble que una con peso 7.
function elegirSeccion() {
  const secciones = CONFIG.secciones;
  const total = secciones.reduce((suma, s) => suma + Math.max(0, s.peso), 0);
  let azar = Math.random() * total;
  for (let i = 0; i < secciones.length; i++) {
    azar -= Math.max(0, secciones[i].peso);
    if (azar < 0) return i;
  }
  return secciones.length - 1;
}

// Prueba de pesos desde la consola del navegador: probarPesos(10000)
function probarPesos(veces = 10000) {
  const conteo = CONFIG.secciones.map(() => 0);
  for (let i = 0; i < veces; i++) conteo[elegirSeccion()]++;
  console.table(
    CONFIG.secciones.map((s, i) => ({
      seccion: s.texto,
      peso: s.peso,
      porcentaje: ((conteo[i] / veces) * 100).toFixed(1) + "%",
    })),
  );
}

/* ---------- Cálculo del ángulo final ---------- */
// Con rotación 0, la sección i ocupa de i·ángulo a (i+1)·ángulo grados,
// medidos en sentido horario desde arriba (donde está el puntero).
// Devuelve cuántos grados hay que girar para que el puntero caiga dentro
// de la sección elegida, sumando las vueltas completas indicadas.
//   direccion: 1 = horario, -1 = antihorario
function calcularGiro(indice, vueltas, direccion = 1) {
  const angulo = 360 / CONFIG.secciones.length;
  // Punto al azar dentro de la sección, evitando los bordes (15%–85%)
  const dentro = (indice + 0.15 + Math.random() * 0.7) * angulo;
  // Rotación final deseada (módulo 360) para que ese punto quede bajo el puntero
  const objetivo = mod(-dentro, 360);
  const actual = mod(estado.rotacion, 360);

  const resto =
    direccion === 1 ? mod(objetivo - actual, 360) : mod(actual - objetivo, 360);
  return direccion * (resto + vueltas * 360);
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

/* ---------- Animación del giro ---------- */
// Curva de desaceleración: arranca rápido y frena suavemente
function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function animarGiro(grados, duracion, alTerminar) {
  const inicio = estado.rotacion;
  const t0 = performance.now();

  function cuadro(ahora) {
    const t = Math.min((ahora - t0) / duracion, 1);
    estado.rotacion = inicio + grados * easeOutQuart(t);
    aplicarRotacion();
    if (t < 1) {
      requestAnimationFrame(cuadro);
    } else {
      alTerminar();
    }
  }
  requestAnimationFrame(cuadro);
}

/* ---------- Girar con el botón ---------- */
function girar() {
  if (estado.girando || estado.arrastrando) return; // no se puede girar mientras está en movimiento
  bloquear(true);

  const indice = elegirSeccion(); // el resultado se decide antes de girar
  const { vueltasMin, vueltasMax, duracion } = CONFIG.giro;
  const vueltas =
    vueltasMin + Math.floor(Math.random() * (vueltasMax - vueltasMin + 1));
  const grados = calcularGiro(indice, vueltas);

  animarGiro(grados, duracion, () => terminarGiro(indice));
}

/* ---------- Girar arrastrando (mouse y dedo) ---------- */
// Mientras se arrastra, la rueda sigue al puntero. Al soltar se mide la
// velocidad de los últimos 100 ms: si es suficiente, la rueda gira en esa
// dirección con más o menos vueltas según la fuerza del deslizamiento.
const zonaRueda = document.getElementById("rueda");
let ultimoAnguloPuntero = 0;
let muestras = []; // { t, rotacion } recientes para calcular la velocidad

// Ángulo (en grados) del puntero respecto al centro de la rueda
function anguloPuntero(evento) {
  const caja = zonaRueda.getBoundingClientRect();
  const x = evento.clientX - (caja.left + caja.width / 2);
  const y = evento.clientY - (caja.top + caja.height / 2);
  return {
    angulo: (Math.atan2(y, x) * 180) / Math.PI,
    distancia: Math.hypot(x, y),
    radio: caja.width / 2,
  };
}

function guardarMuestra() {
  const ahora = performance.now();
  muestras.push({ t: ahora, rotacion: estado.rotacion });
  muestras = muestras.filter((m) => ahora - m.t <= 100);
}

zonaRueda.addEventListener("pointerdown", (e) => {
  if (estado.girando || e.button !== 0) return; // solo clic principal o dedo
  estado.arrastrando = true;
  zonaRueda.setPointerCapture(e.pointerId);
  zonaRueda.classList.add("arrastrando");
  ultimoAnguloPuntero = anguloPuntero(e).angulo;
  muestras = [];
  guardarMuestra();
});

zonaRueda.addEventListener("pointermove", (e) => {
  if (!estado.arrastrando) return;
  const { angulo, distancia, radio } = anguloPuntero(e);
  // Muy cerca del centro el ángulo es inestable: se ignora
  if (distancia < radio * 0.1) return;
  // Diferencia con el ángulo anterior, normalizada a -180..180
  const delta = mod(angulo - ultimoAnguloPuntero + 180, 360) - 180;
  ultimoAnguloPuntero = angulo;
  estado.rotacion += delta;
  aplicarRotacion();
  guardarMuestra();
});

function soltarArrastre() {
  if (!estado.arrastrando) return;
  estado.arrastrando = false;
  zonaRueda.classList.remove("arrastrando");
  guardarMuestra(); // si el puntero se quedó quieto, la velocidad sale baja

  // Velocidad angular al soltar, en grados por segundo
  const primera = muestras[0];
  const ultima = muestras[muestras.length - 1];
  const dt = ultima.t - primera.t;
  const velocidad =
    dt > 0 ? ((ultima.rotacion - primera.rotacion) / dt) * 1000 : 0;

  const a = CONFIG.arrastre;
  if (Math.abs(velocidad) < a.velocidadMinima) return; // movimiento suave: no gira

  bloquear(true);
  const direccion = Math.sign(velocidad);
  const rapidez = Math.min(Math.abs(velocidad), a.velocidadMaxima);
  // Fuerza de 0 (deslizamiento mínimo) a 1 (máximo)
  const fuerza =
    (rapidez - a.velocidadMinima) / (a.velocidadMaxima - a.velocidadMinima);
  const vueltas = Math.round(
    a.vueltasMin + fuerza * (a.vueltasMax - a.vueltasMin),
  );

  const indice = elegirSeccion(); // el resultado sigue respetando los pesos
  const grados = calcularGiro(indice, vueltas, direccion);
  // Duración elegida para que la rueda arranque a la misma velocidad con la
  // que se soltó (la curva easeOutQuart empieza a 4 × grados / duración)
  const duracion = Math.min(
    a.duracionMax,
    Math.max(a.duracionMin, ((4 * Math.abs(grados)) / rapidez) * 1000),
  );

  animarGiro(grados, duracion, () => terminarGiro(indice));
}

zonaRueda.addEventListener("pointerup", soltarArrastre);
zonaRueda.addEventListener("pointercancel", soltarArrastre);

/* ---------- Fin del giro: sonido, confeti y pop-up ---------- */
function terminarGiro(indice) {
  estado.rotacion = mod(estado.rotacion, 360); // mantener el número pequeño
  aplicarRotacion();
  const seccion = CONFIG.secciones[indice];
  reproducirSonidoResultado(seccion.sonido);
  if (seccion.tipo === "premio") lanzarConfeti();
  // La rueda sigue bloqueada hasta que se cierre el pop-up
  setTimeout(() => mostrarPopup(seccion), CONFIG.popup.retraso);
}

/* ---------- Pop-up de resultado ---------- */
const popup = document.getElementById("popup");
const btnCerrar = document.getElementById("btn-cerrar");

function mostrarPopup(seccion) {
  const p = CONFIG.popup;
  const esPremio = seccion.tipo === "premio";
  document.getElementById("popup-icono").textContent = esPremio
    ? p.iconoPremio
    : p.iconoIntento;
  document.getElementById("popup-titulo").textContent = esPremio
    ? p.tituloPremio
    : p.tituloIntento;
  document.getElementById("popup-texto").textContent = esPremio
    ? p.textoPremio
    : p.textoIntento;
  document.getElementById("popup-premio").textContent = esPremio
    ? seccion.texto
    : "";
  popup.hidden = false;
  // preventScroll: en celulares, enfocar un botón puede desplazar la página
  btnCerrar.focus({ preventScroll: true });
}

function cerrarPopup() {
  if (popup.hidden) return;
  popup.hidden = true;
  detenerSonidoResultado();
  bloquear(false); // lista para el siguiente participante
  btnGirar.focus({ preventScroll: true });
}

/* ---------- Confeti (librería canvas-confetti) ---------- */
function lanzarConfeti() {
  if (typeof confetti !== "function") return; // sin internet: se omite
  const base = {
    colors: CONFIG.colores.confeti,
    zIndex: 1000,
    disableForReducedMotion: true,
  };

  // Explosión central y dos ráfagas laterales durante ~1.5 s
  confetti({
    ...base,
    particleCount: 150,
    spread: 100,
    startVelocity: 45,
    origin: { y: 0.6 },
  });
  const fin = performance.now() + 1500;
  (function rafagas() {
    confetti({
      ...base,
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
    });
    confetti({
      ...base,
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
    });
    if (performance.now() < fin) requestAnimationFrame(rafagas);
  })();
}

/* ---------- Inicio ---------- */
aplicarConfig();
dibujarRueda();
prepararSonidos();
btnGirar.addEventListener("click", girar);
btnSonido.addEventListener("click", alternarSonido);
prepararFullscreen();
btnCerrar.textContent = CONFIG.popup.textoBotonCerrar;
btnCerrar.addEventListener("click", cerrarPopup);
// Cerrar con clic fuera de la caja o con la tecla Esc
popup.addEventListener("click", (e) => {
  if (e.target === popup) cerrarPopup();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarPopup();
});
// El audio se habilita con la primera interacción (requisito de los navegadores)
document.addEventListener("pointerdown", activarAudio);
document.addEventListener("keydown", activarAudio);

// Redibujar cuando cambia el tamaño de la rueda: ventana, giro del celular,
// pantalla completa o la barra de direcciones del móvil al aparecer/ocultarse
let temporizadorResize;
function programarRedibujo() {
  clearTimeout(temporizadorResize);
  temporizadorResize = setTimeout(dibujarRueda, 100);
}
if ("ResizeObserver" in window) {
  new ResizeObserver(programarRedibujo).observe(canvas);
}
// También con "resize": cubre cambios de zoom o de monitor (nitidez)
window.addEventListener("resize", programarRedibujo);
