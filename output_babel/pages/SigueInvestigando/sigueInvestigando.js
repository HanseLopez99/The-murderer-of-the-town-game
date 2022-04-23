"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigueInvestigando = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _home = require("../Home/home");

var _failed = require("../Failed/failed");

var _terrorSound = _interopRequireDefault(require("../../assets/sounds/terrorSound.mp3"));

var _primerNivel = _interopRequireDefault(require("../../assets/images/primerNivel.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sigueInvestigando = () => {
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
  articleElement.setAttribute("id", "sigueInvestigando");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Bajas de nuevo al primer nivel";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = _primerNivel.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgSigueInvestigando");
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
  pElement.innerHTML = "Bajas de nuevo al primer nivel, tratando de pensar una y otra vez lo que acabas \n  de leer en esa carta, luego escuchas algunos ruidos por lo que te pones nervioso, luego te das cuenta \n  que de que se empiezan a acercar unas sombras en forma de personas con ojos brillantes y te encierran \n  en un circulo. Luego...";
  pElement.setAttribute("id", "pSigueInvestigando");
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
  buttonElement.innerHTML = "Continuar";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", _failed.failed);
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
  progressBarElement.setAttribute("aria-valuenow", "75");
  progressBarElement.setAttribute("aria-valuemin", "0");
  progressBarElement.setAttribute("aria-valuemax", "100");
  progressBarElement.setAttribute("style", "width: 75%");
  progressBarElement.setAttribute("id", "progressBarValue");
  progressBarElement.innerHTML = "75%";
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

exports.sigueInvestigando = sigueInvestigando;