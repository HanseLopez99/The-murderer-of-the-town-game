import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import { home } from "../Home/home";
import { entrarAgujero } from "../EntrarAgujero/entrarAgujero";
import { final } from "../Final/final";
import sotanoImg from "../../assets/images/sotano.jpg";
import terrorSoundAudio from "../../assets/sounds/terrorSound.mp3";

export const casaAbierta = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";
  window.scrollTo(0, 0);

  let navbarElement = document.createElement("header");
  navbarElement = navBar(
    [
      { name: "Home", dest: "homeTab" }
    ],
    navbarElement
  );
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
  imgElement.src = sotanoImg;
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
  audioElement.innerHTML = `Tu navegador no soporta HTML5 audio.`;
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", terrorSoundAudio);
  sourceElement.setAttribute("type", "audio/mpeg");
  let textContainerElement = document.createElement("div");
  let pElement1 = document.createElement("p");
  pElement1.setAttribute("class", "container my-2");
  pElement1.innerHTML = `Acabas de ingresar a la casa de un extraño y por alguna razon te sientes mareado. Ohh no, 
  te has desmayado!!`;
  pElement1.setAttribute("id", "pCasaAbierta1");
  let pElement2 = document.createElement("p");
  pElement2.setAttribute("class", "container my-2");
  pElement2.innerHTML = `Has despertado nuevamente en un lugar que no reconoces, es como un sotano que parece 
  prision. Observas tu y notas que han pasado 4 horas desde que llegaste al horrible pueblo, ya es de noche y 
  se escuchan pasos a traves de las paredes y el techo. Puedes ver unas escaleras que van hacia arriba pero 
  intentas subir y esta cerrado por afuera. Esperas durante horas hasta que se hace de día. Al mover unas cajas 
  puedes ver un agujero sellado con tablas de madera. Con esfuerzo logras quitar las tablas y ves que te llevan 
  hacia un pasillo estrecho pero escuchas que alguien esta abriendo el candado.`;
  pElement2.setAttribute("id", "pCasaAbierta2");
  let pElement3 = document.createElement("p");
  pElement3.setAttribute("class", "container my-2");
  pElement3.innerHTML = `¡¡No te queda mucho tiempo, DECIDE!!`;
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
  buttonElement.addEventListener("click", entrarAgujero);
  let col2 = document.createElement("div");
  col2.setAttribute("class", "col");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btn2");
  buttonElement2.innerHTML = "Esperar con los ojos cerrados a que suceda lo peor";
  buttonElement2.setAttribute("type", "button");
  buttonElement2.addEventListener("click", final);
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
  footerElement = footer(footerElement);
  body.appendChild(footerElement);

  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", home);
};