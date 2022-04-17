import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import { aboutUs } from "../AboutUs/aboutUs";
import { contactUs } from "../ContactUs/contactUs";
import { instructions } from "../Instructions/instructions";
import { llegada } from "../Llegada/llegada";
import townImg from "../../assets/images/Town.jpg";
import terrorSoundAudio from "../../assets/sounds/terrorSound.mp3";

export const home = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";
  window.scrollTo(0, 0);

  let navbarElement = document.createElement("header");
  navbarElement = navBar(
    [
      { name: "Quienes somos", dest: "aboutUsTab" },
      { name: "Contactanos", dest: "contactUsTab" }
    ],
    navbarElement
  );
  body.appendChild(navbarElement);

  let articleElement = document.createElement("article");
  articleElement.setAttribute("class", "container-md my-3");
  articleElement.setAttribute("id", "home");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Bienvenido a: The murderer of the town!";
  let postMetaElement = document.createElement("div");
  let spanElement = document.createElement("span");
  spanElement.innerHTML = "Publicado por: Hansel López | ";
  let timeElement = document.createElement("time");
  timeElement.setAttribute("datetime", "2021-03-05 14:00");
  timeElement.innerHTML = "febrero 1, 2022 a las 2:00 p.m.";
  let emElement = document.createElement("em");
  emElement.innerHTML = " | Tags: terror, suspenso";
  let h3Element = document.createElement("h3");
  h3Element.innerHTML = "¿Lograrás sobrevivir?";
  h3Element.setAttribute("id", "h3Home");
  let figureElement = document.createElement("figure");
  figureElement.setAttribute("class", "figure");
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", townImg);
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgHome");
  let figcaptionElement = document.createElement("figcaption");
  figcaptionElement.innerHTML = "Fig.1 - Silent Town, Russia, 1698";
  let audioContainerElement = document.createElement("div");
  audioContainerElement.setAttribute("class", "text-center");
  audioContainerElement.setAttribute("id", "audioContainer");
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("controls", "");
  audioElement.innerHTML = `Tu navegador no soporta HTML5 audio.`;
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", terrorSoundAudio);
  sourceElement.setAttribute("type", "audio/mpeg");
  let h2Element2 = document.createElement("h2");
  h2Element2.innerHTML = "Que disfrutes el juego...";
  h2Element2.setAttribute("id", "h2Home");
  let pElement = document.createElement("p");
  pElement.innerHTML = `El juego consiste en tomar las decisiones correctas dentro de un 
  misterioso pueblo, llamado Silent Town mientras estas en la busqueda de tu viejo amigo 
  de la infancia, pero algo muy extraño te acecha "el asesino del pueblo" por lo cual debes 
  evitar a toda costa los peligros y evitar ser asesinado de la peor manera posible...`;
  let h3Element2 = document.createElement("h3");
  h3Element2.innerHTML = "Reglas";
  h3Element2.setAttribute("id", "h3Home");
  let detailsElement = document.createElement("details");
  let summaryElement = document.createElement("summary");
  let iElement = document.createElement("i");
  iElement.setAttribute("class", "fas fa-angle-down");
  iElement.innerHTML = "Para conocer las reglas (Click here!)";
  let olElement = document.createElement("ol");
  let liElement = document.createElement("li");
  liElement.innerHTML = "No hagas trampa";
  let liElement2 = document.createElement("li");
  liElement2.innerHTML = "Puedes finalizar de jugar cuando quieras";
  let liElement3 = document.createElement("li");
  liElement3.innerHTML = "Disfruta el juego";
  let h3Element3 = document.createElement("h3");
  let container1 = document.createElement("div");
  container1.setAttribute("class", "d-grid gap-2 col-6 mx-auto");
  h3Element3.innerHTML = "¿Cómo se juega?";
  h3Element3.setAttribute("id", "h3Home2");
  let buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "btn-lg btn-primary");
  buttonElement.setAttribute("id", "btnHome");
  buttonElement.innerHTML = "Instrucciones y controles";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", instructions);
  let detailsElement2 = document.createElement("details");
  let summaryElement2 = document.createElement("summary");
  let iElement2 = document.createElement("i");
  iElement2.setAttribute("class", "fas fa-angle-down");
  iElement2.innerHTML = "Consejo para sobrevivir en el juego (Click here!)";
  let pElement2 = document.createElement("p");
  pElement2.innerHTML = `!!Trata de imaginar que en verdad estas en el juego!! Haz lo que harías tu normalmente.\n
  No dejes que el miedo te afecte...`
  let container2 = document.createElement("div");
  container2.setAttribute("class", "d-grid gap-2 col-6 mx-auto");
  let h3Element4 = document.createElement("h3");
  h3Element4.innerHTML = "¿Quieres empezar el juego?";
  h3Element4.setAttribute("id", "h3Home2");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btnHome");
  buttonElement2.innerHTML = "START GAME";
  buttonElement2.setAttribute("type", "button");
  buttonElement2.addEventListener("click", llegada);

  articleElement.appendChild(h2Element);
  postMetaElement.appendChild(spanElement);
  postMetaElement.appendChild(timeElement);
  postMetaElement.appendChild(emElement);
  articleElement.appendChild(postMetaElement);
  articleElement.appendChild(h3Element);
  figureElement.appendChild(imgElement);
  figureElement.appendChild(figcaptionElement);
  articleElement.appendChild(figureElement);
  audioElement.appendChild(sourceElement);
  audioContainerElement.appendChild(audioElement);
  articleElement.appendChild(audioContainerElement);
  articleElement.appendChild(h2Element2);
  articleElement.appendChild(pElement);
  articleElement.appendChild(h3Element2);
  summaryElement.appendChild(iElement);
  detailsElement.appendChild(summaryElement);
  articleElement.appendChild(detailsElement);
  olElement.appendChild(liElement);
  olElement.appendChild(liElement2);
  olElement.appendChild(liElement3);
  articleElement.appendChild(h3Element3);
  container1.appendChild(buttonElement);
  detailsElement.appendChild(olElement);
  articleElement.appendChild(container1);
  summaryElement2.appendChild(iElement2);
  detailsElement2.appendChild(summaryElement2);
  articleElement.appendChild(detailsElement2);
  detailsElement2.appendChild(pElement2);
  articleElement.appendChild(h3Element4);
  container2.appendChild(buttonElement2);
  articleElement.appendChild(container2);
  body.appendChild(articleElement);

  let footerElement = document.createElement("footer");
  footerElement = footer(footerElement);
  body.appendChild(footerElement);

  let aboutUsTabElement = document.getElementById("aboutUsTab");
  aboutUsTabElement.addEventListener("click", aboutUs);
  let contactUsTabElement = document.getElementById("contactUsTab");
  contactUsTabElement.addEventListener("click", contactUs);
}