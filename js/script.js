const overlay = document.getElementById('overlay');
const btnIngresar = document.getElementById('btnIngresar');
const musicaFondo = document.getElementById('musicaFondo');
const btnMusica = document.getElementById('btnMusica');
const iconoMusica = document.getElementById('iconoMusica');


btnIngresar.addEventListener('click', () => {
  // Ocultar la pantalla de bienvenida
  if (overlay) {
    overlay.style.display = 'none';
  }
  
  // Intentar reproducir audio
  if (musicaFondo) {
    musicaFondo.play().catch(error => {
      console.log("Error al reproducir audio:", error);
    });
  }
});

if (btnMusica) {
  btnMusica.addEventListener('click', () => {
    if (musicaFondo.paused) {
      musicaFondo.play();
      // Icono cuando está sonando
      iconoMusica.className = 'bi bi-music-note-beamed';
    } else {
      musicaFondo.pause();
      // Icono cuando está pausado (ej. altavoz silenciado)
      iconoMusica.className = 'bi bi-volume-mute-fill';
    }
  });
}

// Script principal
console.log('✅ script.js cargado');

// Smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const audio = document.getElementById('musicaFondo');
//const btnMusica = document.getElementById('btnMusica');
//let sonando = false;

//btnMusica.addEventListener('click', () => {
//  if (sonando) {
//    audio.pause();
//    btnMusica.textContent = '🔇';
//    btnMusica.classList.add('pausado');
//  } else {
//    audio.play();
//    btnMusica.textContent = '🎵';
//    btnMusica.classList.remove('pausado');
//  }
  //sonando = !sonando;
//});
