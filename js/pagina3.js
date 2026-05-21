const contenedor = document.createElement("div");

contenedor.className = "contenedor";

contenedor.innerHTML = `


<nav class="menu">

    <a href="#">Opción 1</a>
    <a href="#">Opción 2</a>
    <a href="#">Opción 3</a>
    <a href="#">Opción 4</a>
    <a href="#">Opción 5</a>
    <a href="#">Opción 6</a>

</nav>

<main class="contenido">

    <section class="izquierda">

        <h3>Group Name</h3>

        <img src="img/imagen4.jpg" class="imagen-grande">

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, quia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, ipsam.
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

    </section>

    <section class="centro">

        <div class="cuadros-superiores">

            <div class="cuadro"></div>
            <div class="cuadro"></div>

        </div>

        <img src="img/imagen5.jpg" class="imagen-central">

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, molestiae.
        </p>

        <div class="cuadros-inferiores">

            <div class="cuadro"></div>
            <div class="cuadro"></div>

        </div>

    </section>

    <aside class="derecha">

        <img src="img/imagen6.jpg" class="imagen-lateral">

        <img src="img/imagen7.jpg" class="imagen-lateral">

        <img src="img/imagen8.jpg" class="imagen-lateral">

        <img src="img/imagen1.jpg" class="imagen-lateral">

        <img src="img/imagen2.jpg" class="imagen-lateral">

    </aside>

</main>

<footer>

    <a href="index.html">Volver al menú</a>

</footer>

`;

document.body.appendChild(contenedor);