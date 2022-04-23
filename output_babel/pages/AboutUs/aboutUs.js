"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutUs = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _ProgrammersWebDevelopers = _interopRequireDefault(require("../../assets/images/ProgrammersWebDevelopers.jpg"));

var _home = require("../Home/home");

var _contactUs = require("../ContactUs/contactUs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const aboutUs = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";
  window.scrollTo(0, 0);
  let navbarElement = document.createElement("header");
  navbarElement = (0, _navBar.navBar)([{
    name: "Home",
    dest: "homeTab"
  }, {
    name: "Contactanos",
    dest: "contactUsTab"
  }], navbarElement);
  body.appendChild(navbarElement);
  let articleElement = document.createElement("article");
  articleElement.setAttribute("class", "container-md my-3");
  articleElement.setAttribute("id", "aboutUs");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Acerca de Nosotros";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgElement = document.createElement("img");
  imgElement.src = _ProgrammersWebDevelopers.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgAboutUs");
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = "Somos una empresa que se dedica al desarrollo de videojuegos y \n  aplicaciones web utilizando las\xFAltimas tecnolog\xEDas disponibles, por lo cual siempre nos \n  comprometemos a promover la buena \xE9ticaen el desarrollo de nuestros productos, as\xED como a \n  la seguridad de nuestros usuarios.";
  pElement.setAttribute("id", "pAboutUs");
  articleElement.appendChild(h2Element);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(pElement);
  body.appendChild(articleElement);
  let footerElement = document.createElement("footer");
  footerElement = (0, _footer.footer)(footerElement);
  body.appendChild(footerElement);
  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", _home.home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", _home.home);
  let contactUsTabElement = document.getElementById("contactUsTab");
  contactUsTabElement.addEventListener("click", _contactUs.contactUs);
};

exports.aboutUs = aboutUs;