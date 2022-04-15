import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import 'bootstrap';

export const aboutUs = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";

  let navbarElement = document.createElement("header");
  navbarElement = navBar("WASD GAMES - ", "Game Development", ["Menu Principal"], navbarElement);
  body.appendChild(navbarElement);

  const btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Agregar";
  body.appendChild(btn);


  let footerElement = document.createElement("footer");
  footerElement = footer(footerElement);
  body.appendChild(footerElement);
};