export const navBar = (title, subtitle, tabs, contenedor) => {
  const titleElment = document.createElement("h1");
  titleElment.innerHTML = title;
  const subtitleElement = document.createElement("em");
  subtitleElement.innerHTML = subtitle;
  titleElment.appendChild(subtitleElement);
  const navbar = document.createElement('nav');
  const ul = document.createElement('ul');
  navbar.appendChild(ul);
  tabs.forEach(tab => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = tab;
    a.href = tab;
    li.appendChild(a);
    ul.appendChild(li);
  });
  const hr = document.createElement('hr');
  contenedor.appendChild(titleElment);
  contenedor.appendChild(navbar);
  contenedor.appendChild(hr);
  return contenedor;
};