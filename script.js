// Alternar menú para móviles
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Mostrar secciones al hacer clic
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.info-section');
  secciones.forEach(seccion => {
    if (seccion.id === id) {
      seccion.classList.add('active');
    } else {
      seccion.classList.remove('active');
    }
  });
  // Si la sección es 'inicio', hacer scroll hacia el hero
  if (id === 'inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}

// Formulario (prevent default de prueba, eliminar si usas Formspree)
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensaje enviado (función simulada)');
  this.reset();
});

