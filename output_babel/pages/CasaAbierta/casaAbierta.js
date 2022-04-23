"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.casaAbierta = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _home = require("../Home/home");

var _entrarAgujero = require("../EntrarAgujero/entrarAgujero");

var _final = require("../Final/final");

var _sotano = _interopRequireDefault(require("../../assets/images/sotano.jpg"));

var _terrorSound = _interopRequireDefault(require("../../assets/sounds/terrorSound.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const casaAbierta = () => {
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
  articleElement.setAttribute("id", "casaAbierta");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Entras a la casa que tenía la puerta abierta";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = _sotano.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgCasaAbierta");
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
  let textContainerElement = document.createElement("div");
  let pElement1 = document.createElement("p");
  pElement1.setAttribute("class", "container my-2");
  pElement1.innerHTML = "Acabas de ingresar a la casa de un extra\xF1o y por alguna razon te sientes mareado. Ohh no, \n  te has desmayado!!";
  pElement1.setAttribute("id", "pCasaAbierta1");
  let pElement2 = document.createElement("p");
  pElement2.setAttribute("class", "container my-2");
  pElement2.innerHTML = "Has despertado nuevamente en un lugar que no reconoces, es como un sotano que parece \n  prision. Observas tu y notas que han pasado 4 horas desde que llegaste al horrible pueblo, ya es de noche y \n  se escuchan pasos a traves de las paredes y el techo. Puedes ver unas escaleras que van hacia arriba pero \n  intentas subir y esta cerrado por afuera. Esperas durante horas hasta que se hace de d\xEDa. Al mover unas cajas \n  puedes ver un agujero sellado con tablas de madera. Con esfuerzo logras quitar las tablas y ves que te llevan \n  hacia un pasillo estrecho pero escuchas que alguien esta abriendo el candado.";
  pElement2.setAttribute("id", "pCasaAbierta2");
  let pElement3 = document.createElement("p");
  pElement3.setAttribute("class", "container my-2");
  pElement3.innerHTML = "\xA1\xA1No te queda mucho tiempo, DECIDE!!";
  pElement3.setAttribute("id", "pCasaAbierta3");
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
  buttonElement.innerHTML = "Entrar en el agujero que estaba sellado con tablas.";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", _entrarAgujero.entrarAgujero);
  let col2 = document.createElement("div");
  col2.setAttribute("class", "col");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btn2");
  buttonElement2.innerHTML = "Esperar con los ojos cerrados a que suceda lo peor";
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
  progressBarElement.setAttribute("aria-valuenow", "25");
  progressBarElement.setAttribute("aria-valuemin", "0");
  progressBarElement.setAttribute("aria-valuemax", "100");
  progressBarElement.setAttribute("style", "width: 25%");
  progressBarElement.setAttribute("id", "progressBarValue");
  progressBarElement.innerHTML = "25%";
  articleElement.appendChild(h2Element);
  articleElement.appendChild(imgContainerElement);
  imgContainerElement.appendChild(imgElement);
  articleElement.appendChild(audioContainerElement);
  audioContainerElement.appendChild(audioElement);
  audioElement.appendChild(sourceElement);
  articleElement.appendChild(textContainerElement);
  textContainerElement.appendChild(pElement1);
  textContainerElement.appendChild(pElement2);
  textContainerElement.appendChild(pElement3);
  articleElement.appendChild(h3Element);
  articleElement.appendChild(container);
  container.appendChild(row);
  row.appendChild(col1);
  col1.appendChild(buttonElement);
  row.appendChild(col2);
  col2.appendChild(buttonElement2);
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

exports.casaAbierta = casaAbierta;