const titulo = document.createElement("h1");
titulo.textContent = "Horario del Evento (3 Días)";
titulo.style.textAlign = "center";

document.body.appendChild(titulo);

const tabla = document.createElement("table");

tabla.border = "1";
tabla.cellPadding = "10";
tabla.cellSpacing = "0";
tabla.width = "100%";
tabla.style.borderCollapse = "collapse";

tabla.innerHTML = `
<tr>
    <th>Día</th>
    <th>8:00 - 9:00</th>
    <th>9:00 - 10:00</th>
    <th>10:00 - 11:00</th>
    <th>11:00 - 12:00</th>
    <th>12:00 - 13:00</th>
    <th>13:00 - 14:00</th>
    <th>14:00 - 15:00</th>
</tr>

<!-- LUNES -->
<tr>
    <th rowspan="3">Lunes</th>
    <td colspan="2">Sesión de Apertura</td>
    <td>Descanso</td>
    <td>Charla Técnica A</td>
    <td rowspan="2">Almuerzo</td>
    <td colspan="2">Taller Práctico</td>
</tr>

<tr>
    <td colspan="2">Panel de Discusión</td>
    <td>Networking</td>
    <td>Charla Técnica B</td>
    <td colspan="2"></td>
</tr>

<tr>
    <td>Registro</td>
    <td>Keynote</td>
    <td colspan="2">Descanso</td>
    <td>Charla Técnica C</td>
    <td colspan="2">Mesa Redonda</td>
</tr>

<!-- MARTES -->
<tr>
    <th rowspan="3">Martes</th>
    <td colspan="2">Taller Avanzado</td>
    <td rowspan="2">Networking</td>
    <td colspan="2">Charla Técnica D</td>
    <td rowspan="3">Exhibición</td>
    <td rowspan="3"></td>
</tr>

<tr>
    <td colspan="2">Charla Técnica E</td>
    <td colspan="2"></td>
</tr>

<tr>
    <td colspan="3">Descanso</td>
    <td colspan="2">Charla Técnica F</td>
</tr>

<!-- MIÉRCOLES -->
<tr>
    <th rowspan="3">Miércoles</th>
    <td colspan="2" rowspan="3">Desayuno de Negocios</td>
    <td>Descanso</td>
    <td colspan="2">Charla Técnica F</td>
    <td rowspan="3">Almuerzo</td>
    <td>Conferencia de Cierre</td>
</tr>

<tr>
    <td>Panel de Discusión</td>
    <td colspan="2">Taller Final</td>
    <td>Networking</td>
</tr>

<tr>
    <td>Entrega de Premios</td>
    <td colspan="3"></td>
</tr>
`;

document.body.appendChild(tabla);

const salto = document.createElement("br");
document.body.appendChild(salto);

const enlace = document.createElement("a");
enlace.href = "index.html";
enlace.textContent = "Volver al menú";

document.body.appendChild(enlace);