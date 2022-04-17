import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import { home } from "../Home/home";
import gradasImg from "../../assets/images/gradas.jpg";

export const instructions = () => {
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
  articleElement.setAttribute("id", "instructions");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Instrucciones y Controles";
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = `El objetivo es que vayas avanzando por los distintos escenarios hasta lograr 
  encontrar a tu amigo de la infancia. Para moverte por el juego debes presionar los opciones que se te 
  presentarán en la parte inferior, normalmente esas acciones indican alguna accion que puede realizar tu 
  personaje en el juego y estas pueden cambiar según el lugar en el que te encuentres.`;
  pElement.setAttribute("id", "pInstructions");
  let detailsElement = document.createElement("details");
  let summaryElement = document.createElement("summary");
  let iElement = document.createElement("i");
  iElement.setAttribute("class", "fas fa-angle-down");
  iElement.innerHTML = "Ejemplo";
  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "text-center");
  imgContainer.setAttribute("id", "imgContainer");
  let imgElement = document.createElement("img");
  imgElement.src = gradasImg;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgInstructions");
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
  buttonElement.innerHTML = "Sube las gradas";
  buttonElement.setAttribute("type", "button");
  let col2 = document.createElement("div");
  col2.setAttribute("class", "col");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btn2");
  buttonElement2.innerHTML = "Ve hacia el pasillo de la izquierda";
  buttonElement2.setAttribute("type", "button");
  let col3 = document.createElement("div");
  col3.setAttribute("class", "col");
  let buttonElement3 = document.createElement("button");
  buttonElement3.setAttribute("class", "btn-lg btn-primary");
  buttonElement3.setAttribute("id", "btn3");
  buttonElement3.innerHTML = "Regresa por donde vienes";
  buttonElement3.setAttribute("type", "button");

  col1.appendChild(buttonElement);
  col2.appendChild(buttonElement2);
  col3.appendChild(buttonElement3);
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  container.appendChild(row);
  articleElement.appendChild(h2Element);
  articleElement.appendChild(pElement);
  summaryElement.appendChild(iElement);
  detailsElement.appendChild(summaryElement);
  imgContainer.appendChild(imgElement);
  detailsElement.appendChild(imgContainer);
  detailsElement.appendChild(h3Element);
  detailsElement.appendChild(container);
  articleElement.appendChild(detailsElement);
  body.appendChild(articleElement);

  let footerElement = document.createElement("footer");
  footerElement = footer(footerElement);
  body.appendChild(footerElement);

  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", home);
};