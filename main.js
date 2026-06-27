// Studio Web Kilat - main.js v1.0
// Dibuat oleh: Trimo Wawan

document.addEventListener('DOMContentLoaded', () => {

  // 1. EFEK NAVBAR TRANSPARAN -> SOLID SAAT SCROLL
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(26, 26, 26, 0.95)';
      navbar.style.boxShadow = '0 2px 20px rgba(247, 37, 133, 0.2)';
    } else {
      navbar.style.background = 'rgba(26, 26, 26, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });

  // 2. SMOOTH SCROLL UNTUK SEMUA LINK # 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. ANIMASI MUNCUL SAAT SCROLL - FADE IN
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Pasang observer ke semua elemen penting
  document.querySelectorAll('.hero h1, .hero h2, .hero p, .btn').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });

  // 4. EFEK PARALLAX RINGAN UNTUK SHAPES
  window.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.circle, .hex, .triangle');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    shapes.forEach((shape, index) => {
      shape.style.transform = `translateX(${x * (index + 1)}px) translateY(${y * (index + 1)}px)`;
    });
  });

  console.log('Studio Web Kilat by Trimo Wawan | Ready ⚡');
});
