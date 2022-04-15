export const footer = (contenedor) => {
  const hr = document.createElement('hr');
  const p = document.createElement('p');
  p.innerHTML = "© WASD GAMES - Todos los derechos reservados";
  contenedor.appendChild(hr);
  contenedor.appendChild(p);
  return contenedor;
};