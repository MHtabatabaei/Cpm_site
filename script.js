const slidesContainer = document.getElementById('slidesContainer');
const slides = slidesContainer.querySelectorAll('.slide');
const scrollIndicator = document.getElementById('scrollIndicator');

// Generate dots with labels
slides.forEach((slide, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  // Sample text for now
  const label = document.createElement('span');
  label.textContent = `Slide ${i+1} - Sample text`; // Replace with your actual text
  dot.appendChild(label);

  // Scroll to slide on click
  dot.addEventListener('click', () => {
    slidesContainer.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' });
  });

  scrollIndicator.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Update active dot on scroll
function updateActiveDot() {
  const index = Math.round(slidesContainer.scrollTop / window.innerHeight);
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

slidesContainer.addEventListener('scroll', updateActiveDot);
updateActiveDot(); // initialize

// Zoom functionality
slides.forEach(slide => {
  const img = slide.querySelector('img');
  const zoomIn = slide.querySelector('.zoom-in');
  const zoomOut = slide.querySelector('.zoom-out');
  let scale = 1;

  zoomIn.addEventListener('click', () => {
    scale += 0.1;
    img.style.transform = `scale(${scale})`;
  });
  zoomOut.addEventListener('click', () => {
    scale = Math.max(1, scale - 0.1);
    img.style.transform = `scale(${scale})`;
  });
});
