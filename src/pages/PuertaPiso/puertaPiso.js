import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import { home } from "../Home/home";
import { failed } from "../Failed/failed";
import terrorSoundAudio from "../../assets/sounds/terrorSound.mp3";
import gradasSotanoImg from "../../assets/images/gradasSotano.jpg";

export const puertaPiso = () => {
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
  articleElement.setAttribute("id", "puertaPiso");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Entraste en la puerta que estaba en el piso";
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = gradasSotanoImg;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgPuertaPiso");
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
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = `Comienzas a bajar las gradas, pero te das cuenta de que no terminas de bajar y 
  cada vez es más oscuro por lo que decides subir nuevamente, pero te das cuenta que ya no se ve fin de 
  las gradas hacia arriba, por lo que decides bajar de nuevo, pasas un buen rato bajando y no llegas al final.`
  pElement.setAttribute("id", "pPuertaPiso");
  let pElement2 = document.createElement("p");
  pElement2.setAttribute("class", "container my-2");
  pElement2.innerHTML = `Algo causa que te empieces a caer y...`
  pElement2.setAttribute("id", "pPuertaPiso2");
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
  buttonElement.addEventListener("click", failed);
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
  footerElement = footer(footerElement);
  body.appendChild(footerElement);

  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", home);
};
