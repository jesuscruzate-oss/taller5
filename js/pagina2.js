const titulo = document.createElement("h1");

titulo.textContent = "Productos y Especificaciones";
titulo.style.textAlign = "center";

document.body.appendChild(titulo);

const tabla = document.createElement("table");

tabla.border = "1";
tabla.cellPadding = "10";
tabla.cellSpacing = "0";
tabla.width = "90%";
tabla.style.margin = "auto";
tabla.style.borderCollapse = "collapse";

tabla.innerHTML = `
<tr>
    <th>Producto</th>
    <th>Imagen</th>
    <th>Descripción</th>
    <th>Características</th>
    <th>Especificaciones</th>
</tr>

<tr>
    <td><b>Smartphone X</b></td>

    <td>
       <img src="../img/imagen1.jpg" width="100" height="100">
    </td>

    <td>
        El Smartphone X es un dispositivo de alta gama que ofrece lo último en tecnología móvil.
        <ul>
            <li>Procesador de última generación</li>
            <li>Pantalla OLED de 6.5 pulgadas</li>
            <li>Batería de larga duración</li>
        </ul>
    </td>

    <td>
        <ol>
            <li>Cámara de 108 MP</li>
            <li>Reconocimiento facial</li>
            <li>Resistencia al agua y al polvo</li>
        </ol>
    </td>

    <td>
        RAM: 8 GB <br><br>
        Almacenamiento: 256 GB <br><br>
        SO: Android 11
    </td>
</tr>

<tr>
    <td><b>Laptop Pro</b></td>

    <td>
       <img src="../img/imagen2.jpg" width="100" height="100">
    </td>

    <td>
        La Laptop Pro es perfecta para profesionales que necesitan un equipo potente y portátil.
        <ul>
            <li>Procesador Intel Core i7</li>
            <li>16 GB de RAM</li>
            <li>SSD de 512 GB</li>
        </ul>
    </td>

    <td>
        <ol>
            <li>Pantalla 4K UHD</li>
            <li>Teclado retroiluminado</li>
            <li>Batería de 10 horas</li>
        </ol>
    </td>

    <td>
        SSD: 512 GB <br><br>
        Peso: 1.5 kg <br><br>
        Duración de batería: 10 horas
    </td>
</tr>

<tr>
    <td><b>Tablet Z</b></td>

    <td>
        <img src="../img/imagen3.jpg" width="100" height="100">
    </td>

    <td>
        La Tablet Z es ideal para entretenimiento y productividad en movimiento.
        <ul>
            <li>Pantalla de 10 pulgadas</li>
            <li>4 GB de RAM</li>
            <li>Almacenamiento de 64 GB</li>
        </ul>
    </td>

    <td>
        <ol>
            <li>Compatible con stylus</li>
            <li>Batería de 12 horas</li>
            <li>Conectividad LTE</li>
        </ol>
    </td>

    <td>
        RAM: 4 GB <br><br>
        Peso: 500 g <br><br>
        Conectividad: LTE, Wi-Fi
    </td>
</tr>
`;

document.body.appendChild(tabla);

const salto = document.createElement("br");
document.body.appendChild(salto);

const enlace = document.createElement("a");

enlace.href = "index.html";
enlace.textContent = "Volver al menú";

document.body.appendChild(enlace);