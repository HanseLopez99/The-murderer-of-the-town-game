import { navBar } from "../../tools/navBar";
import { footer } from "../../tools/footer";
import { home } from "../Home/home";

export const contactUs = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";

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
  articleElement.setAttribute("id", "contactUs");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Contactanos";
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = `Para ser contactado por un asesor por favor compartenos los siguientes datos:`
  pElement.setAttribute("id", "pContactUs");
  let inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "mb-3");
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "name");
  labelElement.innerHTML = "Nombre:";
  labelElement.setAttribute("class", "form-label");
  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("id", "nameInput");
  inputElement.setAttribute("class", "form-control");
  inputElement.setAttribute("placeholder", "Escriba su nombre");
  let inputContainer2 = document.createElement("div");
  inputContainer2.setAttribute("class", "mb-3");
  let labelElement2 = document.createElement("label");
  labelElement2.setAttribute("for", "apellido");
  labelElement2.innerHTML = "Apellido:";
  labelElement2.setAttribute("class", "form-label");
  let inputElement2 = document.createElement("input");
  inputElement2.setAttribute("type", "text");
  inputElement2.setAttribute("id", "apellidoInput");
  inputElement2.setAttribute("class", "form-control");
  inputElement2.setAttribute("placeholder", "Escriba su apellido");
  let inputContainer3 = document.createElement("div");
  inputContainer3.setAttribute("class", "input-group mb-3");
  let labelElement3 = document.createElement("label");
  labelElement3.setAttribute("for", "telefono");
  labelElement3.innerHTML = "Teléfono: ";
  labelElement3.setAttribute("class", "form-label");
  let spanElement = document.createElement("span");
  spanElement.setAttribute("class", "input-group-text");
  spanElement.innerHTML = "+502";
  let inputElement3 = document.createElement("input");
  inputElement3.setAttribute("type", "text");
  inputElement3.setAttribute("id", "phoneInput");
  inputElement3.setAttribute("class", "form-control");
  inputElement3.setAttribute("placeholder", "Escriba su número de teléfono");
  let inputContainer4 = document.createElement("div");
  inputContainer4.setAttribute("class", "mb-3");
  let labelElement4 = document.createElement("label");
  labelElement4.setAttribute("for", "email");
  labelElement4.innerHTML = "Email:";
  labelElement4.setAttribute("class", "form-label");
  let inputElement4 = document.createElement("input");
  inputElement4.setAttribute("type", "text");
  inputElement4.setAttribute("id", "emailInput");
  inputElement4.setAttribute("class", "form-control");
  inputElement4.setAttribute("placeholder", "Escriba su correo electrónico name@example.com");
  let buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "btn-lg btn-primary");
  buttonElement.setAttribute("id", "btnContactUs");
  buttonElement.innerHTML = "Enviar";
  buttonElement.setAttribute("type", "button");
  buttonElement.setAttribute("onclick", "alert('Enviado!')");
  let pElement2 = document.createElement("p");
  pElement2.setAttribute("class", "container my-2");
  pElement2.innerHTML = `Te invitamos a que nos sigas en nuestras redes sociales, puedes ingresar haciendo click en los siguientes iconos:`;
  pElement2.setAttribute("id", "pContactUs2");
  let containerElement = document.createElement("div");
  containerElement.setAttribute("class", "container");
  let rowElement = document.createElement("div");
  rowElement.setAttribute("class", "row");
  let colElement1 = document.createElement("div");
  colElement1.setAttribute("class", "col");
  let aElement1 = document.createElement("a");
  aElement1.setAttribute("href", "https://www.facebook.com/hanselopez99/");
  let imgElement1 = document.createElement("img");
  imgElement1.setAttribute("src", "https://s3.amazonaws.com/casebots2/bots/6d6e4fdb-e9a8-4d3a-aa1a-a85754d2490a.png");
  imgElement1.setAttribute("alt", "img-fluid");
  let colElement2 = document.createElement("div");
  colElement2.setAttribute("class", "col");
  let aElement2 = document.createElement("a");
  aElement2.setAttribute("href", "https://www.instagram.com/hanselopez99/?hl=es-la");
  let imgElement2 = document.createElement("img");
  imgElement2.setAttribute("src", "https://s3.amazonaws.com/casebots2/bots/334452a5-c92f-474e-b5e9-ae123df2949c.png");
  imgElement2.setAttribute("alt", "img-fluid");
  let colElement3 = document.createElement("div");
  colElement3.setAttribute("class", "col");
  let aElement3 = document.createElement("a");
  aElement3.setAttribute("href", "https://www.linkedin.com/in/hanselopez99/");
  let imgElement3 = document.createElement("img");
  imgElement3.setAttribute("src", "https://s3.amazonaws.com/casebots2/bots/1acfcd27-1f8c-46c2-a2ff-aae0357bc451.png");
  imgElement3.setAttribute("alt", "img-fluid");
  let colElement4 = document.createElement("div");
  colElement4.setAttribute("class", "col");
  let aElement4 = document.createElement("a");
  aElement4.setAttribute("href", "https://wa.me/50248252369?text=Hola");
  let imgElement4 = document.createElement("img");
  imgElement4.setAttribute("src", "https://s3.amazonaws.com/casebots2/bots/f825c8c1-e8d3-4f99-b2dd-8d0014051e08.png");
  imgElement4.setAttribute("alt", "img-fluid");


  articleElement.appendChild(h2Element);
  articleElement.appendChild(pElement);

  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputElement);
  articleElement.appendChild(inputContainer);

  inputContainer2.appendChild(labelElement2);
  inputContainer2.appendChild(inputElement2);
  articleElement.appendChild(inputContainer2);

  articleElement.appendChild(labelElement3);
  inputContainer3.appendChild(spanElement);
  inputContainer3.appendChild(inputElement3);
  articleElement.appendChild(inputContainer3);

  inputContainer4.appendChild(labelElement4);
  inputContainer4.appendChild(inputElement4);
  articleElement.appendChild(inputContainer4);

  articleElement.appendChild(buttonElement);
  articleElement.appendChild(pElement2);

  aElement1.appendChild(imgElement1);
  colElement1.appendChild(aElement1);
  aElement2.appendChild(imgElement2);
  colElement2.appendChild(aElement2);
  aElement3.appendChild(imgElement3);
  colElement3.appendChild(aElement3);
  aElement4.appendChild(imgElement4);
  colElement4.appendChild(aElement4);
  rowElement.appendChild(colElement1);
  rowElement.appendChild(colElement2);
  rowElement.appendChild(colElement3);
  rowElement.appendChild(colElement4);
  containerElement.appendChild(rowElement);
  articleElement.appendChild(containerElement);

  body.appendChild(articleElement);

  let footerElement = document.createElement("footer");
  footerElement = footer(footerElement);
  body.appendChild(footerElement);

  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", home);
}
