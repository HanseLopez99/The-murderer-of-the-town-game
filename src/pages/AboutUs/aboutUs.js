import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import ProgrammersWebDevelopersImg from "../../assets/images/ProgrammersWebDevelopers.jpg";
import { home } from "../Home/home";
import { contactUs } from "../ContactUs/contactUs";

export const aboutUs = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";
  window.scrollTo(0, 0);

  let navbarElement = document.createElement("header");
  navbarElement = navBar(
    [
      { name: "Home", dest: "homeTab" },
      { name: "Contactanos", dest: "contactUsTab" }
    ],
    navbarElement
  );
  body.appendChild(navbarElement);

  let articleElement = document.createElement("article");
  articleElement.setAttribute("class", "container-md my-3");
  articleElement.setAttribute("id", "aboutUs");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Acerca de Nosotros";
  let imgElement = document.createElement("img");
  imgElement.src = ProgrammersWebDevelopersImg;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgAboutUs");
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = `Somos una empresa que se dedica al desarrollo de videojuegos y 
  aplicaciones web utilizando lasúltimas tecnologías disponibles, por lo cual siempre nos 
  comprometemos a promover la buena éticaen el desarrollo de nuestros productos, así como a 
  la seguridad de nuestros usuarios.`;
  pElement.setAttribute("id", "pAboutUs");

  articleElement.appendChild(h2Element);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(pElement);
  body.appendChild(articleElement);

  let footerElement = document.createElement("footer");
  footerElement = footer(footerElement);
  body.appendChild(footerElement);

  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", home);
  let contactUsTabElement = document.getElementById("contactUsTab");
  contactUsTabElement.addEventListener("click", contactUs);
};