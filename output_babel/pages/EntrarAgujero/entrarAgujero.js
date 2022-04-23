"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entrarAgujero = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _home = require("../Home/home");

var _intercepto = require("../Intercepto/intercepto");

var _final = require("../Final/final");

var _terrorSound = _interopRequireDefault(require("../../assets/sounds/terrorSound.mp3"));

var _pasilloEstrecho = _interopRequireDefault(require("../../assets/images/pasilloEstrecho.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const entrarAgujero = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";
  window.scrollTo(0, 0);
  let navbarElement = document.createElement("header");
  navbarElement = (0, _navBar.navBar)([{
    name: "Home",
    dest: "homeTab"
  }], navbarElement);
  body.appendChild(navbarElement);
  let articleElement = document.createElement("article");
  articleElement.setAttribute("class", "container-md my-3");
  articleElement.setAttribute("id", "entrarAgujero");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Sigues el pequeño pasillo";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = _pasilloEstrecho.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgEntrarAgujero");
  let audioContainerElement = document.createElement("div");
  audioContainerElement.setAttribute("class", "text-center");
  audioContainerElement.setAttribute("id", "audioContainer");
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("controls", "");
  audioElement.setAttribute("autoplay", "");
  audioElement.setAttribute("loop", "");
  audioElement.innerHTML = "Tu navegador no soporta HTML5 audio.";
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", _terrorSound.default);
  sourceElement.setAttribute("type", "audio/mpeg");
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = "Sigues avanzando en el pasillo estrecho, encuentras un final sellado con \n  tablas. Con esfuerzo las quitas y encuentras un pasillo m\xE1s grande con una luz brillante hasta \n  el final, parece que es una salida. Escuchas atras que alguien te viene siguiendo...";
  pElement.setAttribute("id", "pEntrarAgujero");
  let h3Element = document.createElement("h3");
  h3Element.innerHTML = "Selecciona la accion que deseas hacer:";
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  let col1 = document.createElement("div");
  col1.setAttribute("class", "col");
  let buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "btn-lg btn-primary");
  buttonElement.setAttribute("id", "btn1");
  buttonElement.innerHTML = "Ir a la salida e huir corriendo.";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", _intercepto.intercepto);
  let col2 = document.createElement("div");
  col2.setAttribute("class", "col");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btn2");
  buttonElement2.innerHTML = "Regresar por donde vine y ver quien o que es";
  buttonElement2.setAttribute("type", "button");
  buttonElement2.addEventListener("click", _final.final);
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "progress");
  labelElement.innerHTML = "Game progress:";
  labelElement.setAttribute("class", "form-label");
  labelElement.setAttribute("id", "progressLabel");
  let progressElement = document.createElement("div");
  progressElement.setAttribute("class", "progress");
  progressElement.setAttribute("id", "progressBar");
  let progressBarElement = document.createElement("div");
  progressBarElement.setAttribute("class", "progress-bar");
  progressBarElement.setAttribute("role", "progressbar");
  progressBarElement.setAttribute("aria-valuenow", "50");
  progressBarElement.setAttribute("aria-valuemin", "0");
  progressBarElement.setAttribute("aria-valuemax", "100");
  progressBarElement.setAttribute("style", "width: 50%");
  progressBarElement.setAttribute("id", "progressBarValue");
  progressBarElement.innerHTML = "50%";
  articleElement.appendChild(h2Element);
  articleElement.appendChild(imgContainerElement);
  imgContainerElement.appendChild(imgElement);
  articleElement.appendChild(audioContainerElement);
  audioContainerElement.appendChild(audioElement);
  audioElement.appendChild(sourceElement);
  articleElement.appendChild(pElement);
  articleElement.appendChild(h3Element);
  articleElement.appendChild(container);
  container.appendChild(row);
  row.appendChild(col1);
  col1.appendChild(buttonElement);
  row.appendChild(col2);
  col2.appendChild(buttonElement2);
  container.appendChild(labelElement);
  container.appendChild(progressElement);
  progressElement.appendChild(progressBarElement);
  body.appendChild(articleElement);
  let footerElement = document.createElement("footer");
  footerElement = (0, _footer.footer)(footerElement);
  body.appendChild(footerElement);
  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", _home.home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", _home.home);
};

exports.entrarAgujero = entrarAgujero;