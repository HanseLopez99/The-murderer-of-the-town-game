"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.llegada = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _home = require("../Home/home");

var _casaAmigo = require("../CasaAmigo/casaAmigo");

var _casaAbierta = require("../CasaAbierta/casaAbierta");

var _pueblo = _interopRequireDefault(require("../../assets/images/pueblo.png"));

var _terrorSound = _interopRequireDefault(require("../../assets/sounds/terrorSound.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const llegada = () => {
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
  articleElement.setAttribute("id", "llegada");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Tu llegada al misterioso pueblo";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = _pueblo.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgLlegada");
  let audioContainerElement = document.createElement("div");
  audioContainerElement.setAttribute("class", "text-center");
  audioContainerElement.setAttribute("id", "audioContainer");
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("controls", "");
  audioElement.setAttribute("autoplay", "");
  audioElement.setAttribute("loop", "");
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", _terrorSound.default);
  sourceElement.setAttribute("type", "audio/mpeg");
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = "Acabas de llegar usando un autobus a un publo llamado \"Silent Town\" la idea \n  era de visitar a un viejo amigo de la infancia que no hab\xEDas visto durante mucho tiempo, pero hace \n  un tiempo hab\xEDan intercamibado un par de cartas y te invit\xF3 al pueblo donde su abuela le hered\xF3 una \n  casa. Al llegar puedes notar que la apariencia del pueblo esta muy descuidada y casi no se ve gente \n  en las calles. El \xFAltimo mensaje con tu amigo fue que su casa era la \xFAltima antes de llegar a un \n  barranco. A la izquierda puedes ver una casa con una puerta abierta.";
  pElement.setAttribute("id", "pLlegada");
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
  buttonElement.innerHTML = "Ir directo a la casa de mi amigo.";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", _casaAmigo.casaAmigo);
  let col2 = document.createElement("div");
  col2.setAttribute("class", "col");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btn2");
  buttonElement2.innerHTML = "Entrar en la casa que tiene la puerta abierta.";
  buttonElement2.setAttribute("type", "button");
  buttonElement2.addEventListener("click", _casaAbierta.casaAbierta);
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
  progressBarElement.setAttribute("aria-valuenow", "0");
  progressBarElement.setAttribute("aria-valuemin", "0");
  progressBarElement.setAttribute("aria-valuemax", "100");
  progressBarElement.setAttribute("style", "width: 0%");
  progressBarElement.setAttribute("id", "progressBarValue");
  progressBarElement.innerHTML = "0%";
  articleElement.appendChild(h2Element);
  imgContainerElement.appendChild(imgElement);
  articleElement.appendChild(imgContainerElement);
  audioElement.appendChild(sourceElement);
  audioContainerElement.appendChild(audioElement);
  articleElement.appendChild(audioContainerElement);
  articleElement.appendChild(pElement);
  articleElement.appendChild(h3Element);
  col1.appendChild(buttonElement);
  col2.appendChild(buttonElement2);
  row.appendChild(col1);
  row.appendChild(col2);
  container.appendChild(row);
  articleElement.appendChild(container);
  articleElement.appendChild(labelElement);
  progressElement.appendChild(progressBarElement);
  articleElement.appendChild(progressElement);
  body.appendChild(articleElement);
  let footerElement = document.createElement("footer");
  footerElement = (0, _footer.footer)(footerElement);
  body.appendChild(footerElement);
  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", _home.home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", _home.home);
};

exports.llegada = llegada;