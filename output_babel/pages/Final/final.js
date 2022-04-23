"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.final = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _home = require("../Home/home");

var _amigo = _interopRequireDefault(require("../../assets/images/amigo.jpg"));

var _win = _interopRequireDefault(require("../../assets/images/win.jpg"));

var _twd = _interopRequireDefault(require("../../assets/sounds/twd.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const final = () => {
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
  articleElement.setAttribute("id", "final");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Encuentras a un sujeto con una apariencia un poco descuidada";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = _amigo.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgFinal");
  let audioContainerElement = document.createElement("div");
  audioContainerElement.setAttribute("class", "text-center");
  audioContainerElement.setAttribute("id", "audioContainer");
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("controls", "");
  audioElement.setAttribute("autoplay", "");
  audioElement.setAttribute("loop", "");
  audioElement.innerHTML = "Tu navegador no soporta HTML5 audio.";
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", _twd.default);
  sourceElement.setAttribute("type", "audio/mpeg");
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = "Te encuentras a un sujeto y te dice: \"Hola que tal soy Daryl!\". Es ah\xED donde te \n  das cuenta de que es tu viejo amigo y te tranquilizas un poco. Luego el te dice: \"No te preocupes, \n  yo conozco muy bien este lugar, se como sacarte de manera segura.\"";
  pElement.setAttribute("id", "pFinal");
  let imgContainerElement2 = document.createElement("div");
  imgContainerElement2.setAttribute("class", "text-center");
  let imgElement2 = document.createElement("img");
  imgElement2.src = _win.default;
  imgElement2.setAttribute("alt", "Trulli");
  imgElement2.setAttribute("class", "img-fluid");
  imgElement2.setAttribute("id", "imgWin");
  let pElement2 = document.createElement("p");
  pElement2.setAttribute("class", "container my-2");
  pElement2.innerHTML = "";
  pElement2.setAttribute("id", "pWin");
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
  buttonElement.innerHTML = "Regresar a la página principal";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", _home.home);
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
  progressBarElement.setAttribute("aria-valuenow", "100");
  progressBarElement.setAttribute("aria-valuemin", "0");
  progressBarElement.setAttribute("aria-valuemax", "100");
  progressBarElement.setAttribute("style", "width: 100%");
  progressBarElement.setAttribute("id", "progressBarValue");
  progressBarElement.innerHTML = "100%";
  articleElement.appendChild(h2Element);
  articleElement.appendChild(imgContainerElement);
  imgContainerElement.appendChild(imgElement);
  articleElement.appendChild(audioContainerElement);
  audioContainerElement.appendChild(audioElement);
  audioElement.appendChild(sourceElement);
  articleElement.appendChild(pElement);
  articleElement.appendChild(imgContainerElement2);
  imgContainerElement2.appendChild(imgElement2);
  articleElement.appendChild(pElement2);
  articleElement.appendChild(h3Element);
  articleElement.appendChild(container);
  container.appendChild(row);
  row.appendChild(col1);
  col1.appendChild(buttonElement);
  articleElement.appendChild(labelElement);
  articleElement.appendChild(progressElement);
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

exports.final = final;