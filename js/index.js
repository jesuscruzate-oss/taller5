const titulo = document.createElement("h1");
titulo.textContent = "MENÚ PRINCIPAL";

document.body.appendChild(titulo);

const contenedor = document.createElement("div");
contenedor.className = "menu-principal";

contenedor.innerHTML = `
    <a href="ejercicio1.html">Ir a Página 1</a>
    <a href="pagina2.html">Ir a Página 2</a>
    <a href="pagina3.html">Ir a Página 3</a>
`;

document.body.appendChild(contenedor);