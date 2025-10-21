//este script controla toda la interactividad de la pagina reto 1

const secciones = new Map([
  ["inicio", `
    <h2>Bienvenido a Empanadas Kiko</h2>
    <p>Disfruta nuestras empanadas artesanales, preparadas con ingredientes frescos y mucho amor.</p>
    <img src="assets/5014993188963859553.jpg" alt="Empanada dorada y crujiente">
  `],
  ["productos", `
    <h2>Nuestros Productos</h2>
    <div id="productos-container"></div>
  `],
  ["contacto", `
    <h2>Contáctanos</h2>
    <form id="formulario">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required>
      
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" required>
      
      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" rows="4" required></textarea>
      
      <input type="submit" value="Enviar">
    </form>
  `],
  ["ubicacion", `
    <h2>Nuestra ubicación</h2>
   <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121104.91043601648!2d-70.0560314358523!3d18.459707303210266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8ea561e66285a241%3A0xf6333a450fbf9bb3!2sGuarocuya%2012005%2C%2011005!3m2!1d18.4597251!2d-69.9736297!5e0!3m2!1ses-419!2sdo!4v1761008567763!5m2!1ses-419!2sdo"
    width="100%" height="300" style="border:0;" 
      allowfullscreen="" loading="lazy">
    </iframe>
  `]
]);

// Productos en un Array de objetos
const productos = [
  { nombre: "Empanada de Carne", desc: "Receta tradicional con carne jugosa", img: "assets/63484t1.jpeg" },
  { nombre: "Empanada de Pollo y Queso", desc: "Suave pollo con queso fundido", img: "assets/RECETA-DE-EMPANADAS-DE-POLLO-AGOSTO-scaled.jpg" },
  { nombre: "Empanada de Vegetales", desc: "Ideal para quienes buscan algo ligero", img: "assets/c779e24352d98427d3fb4610167745e0.jpg" }
];

// Referencia al contenedor principal
const contenido = document.getElementById("contenido");

// Función para cambiar sección
function mostrarSeccion(seccion) {
  // Validar con if
  if (!secciones.has(seccion)) {
    contenido.innerHTML = "<h2>Sección no encontrada</h2>";
    return;
  }

  // Mostrar contenido base
  contenido.innerHTML = secciones.get(seccion);

  // Usar switch para manejar secciones especiales
  switch (seccion) {
    case "productos":
      generarProductos();
      break;
    case "contacto":
      manejarFormulario();
      break;
  }
}

// Generar productos dinámicamente usando bucle for
function generarProductos() {
  const contenedor = document.getElementById("productos-container");

  for (let i = 0; i < productos.length; i++) {
    const p = productos[i];
    contenedor.innerHTML += `
      <div class="servicio">
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
      </div>
    `;
  }
}

// Manejo de formulario usando while y eventos
function manejarFormulario() {
  const form = document.getElementById("formulario");
  form.addEventListener("submit", e => {
    e.preventDefault();

    const datos = new Set([
      form.nombre.value,
      form.email.value,
      form.mensaje.value
    ]);

    // Validación simple usando while
    const arr = Array.from(datos);
    let i = 0;
    while (i < arr.length) {
      if (arr[i].trim() === "") {
        alert("Por favor completa todos los campos.");
        return;
      }
      i++;
    }

    alert("¡Mensaje enviado con éxito!");
    form.reset();
  });
}

// Añadir interactividad a la barra de navegación
document.getElementById("nav").addEventListener("click", e => {
  if (e.target.tagName === "A") {
    const seccion = e.target.dataset.section;
    mostrarSeccion(seccion);
  }
});

// Mostrar la sección inicial
mostrarSeccion("inicio");