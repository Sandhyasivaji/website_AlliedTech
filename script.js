// ===== SERVICE DATA =====
const SERVICES = [
  {
    num: '01',
    title: 'Press Tools',
    desc: 'We provide high-precision press tools for various industrial applications, ensuring consistent quality and performance. Our tools are engineered for repeatability and minimal material wastage in high-throughput production environments.',
    img: 'press tools/press-0.png',
    feats: [
      { t: 'High Repeatability', d: 'Engineered for consistent output across long production runs with tight tolerances.' },
      { t: 'Custom Configurations', d: 'Designed for progressive, compound, and combination dies to your exact spec.' },
      { t: 'Material Efficiency', d: 'Optimised strip layouts to minimise raw material wastage and reduce cost per part.' }
    ],
    gallery: [
      'press tools/press-1.png',
      'press tools/press-2.png',
      'press tools/press-3.png',
      'press tools/press 4.png ',
    ]
  },
  {
    num: '02',
    title: 'Moulds',
    desc: 'Specialised in the manufacturing of complex moulds using advanced CNC milling techniques for high-volume production. We deliver moulds with precision cavity dimensions, superior surface finish, and long service life.',
    img: 'Moulds/mould-0.png',
    feats: [
      { t: 'Complex Geometries', d: 'CNC-machined cavities with micron-level accuracy for intricate mould profiles.' },
      { t: 'High-Volume Ready', d: 'Built to withstand demanding production cycles without dimensional drift.' },
      { t: 'Superior Surface Finish', d: 'Polished cavity surfaces for clean part release and premium aesthetics.' }
    ],
    gallery: [
      'Moulds/mould-1.png',
      'Moulds/mould-2.png',
      'Moulds/mould-3.png',
    ]
  },
  {
    num: '03',
    title: 'Jigs and Fixtures',
    desc: 'Engineering precision jigs and fixtures to ensure accurate positioning and repeatability in your manufacturing processes. Our solutions reduce setup time and eliminate operator error for consistent, quality output.',
    img: 'Jigs&Fixture/JF-0.png',
    feats: [
      { t: 'Accurate Positioning', d: 'Precision locating features ensure part placement within ±0.01 mm.' },
      { t: 'Reduced Setup Time', d: 'Quick-change designs that cut changeover time and boost throughput.' },
      { t: 'Durable Construction', d: 'Made from hardened tool steel for extended service life in production.' }
    ],
    gallery: [
      'Jigs&Fixture/JF-1.png',
      'Jigs&Fixture/JF-2.png',
      'Jigs&Fixture/JF-3.png',
      'Jigs&Fixture/JF-4.png'
    ]
  },
  {
    num: '04',
    title: 'Tool & Dies',
    desc: 'Comprehensive tool and die solutions tailored to your specific technical requirements and production volume. From single-cavity blanking dies to multi-station progressive tooling, we cover the full spectrum.',
    img: 'ToolsandDies/TD-0.png',
    feats: [
      { t: 'Progressive Dies', d: 'Multi-stage progressive tooling for complex part geometries in a single pass.' },
      { t: 'Blanking & Forming', d: 'Precision blanking, bending, and deep-drawing dies for sheet metal components.' },
      { t: 'Rapid Turnaround', d: 'Fast prototyping and tooling trials before full production commitment.' }
    ],
    gallery: [
      'ToolsandDies/TD-1.png',
      'ToolsandDies/TD-2.png'
    ]
  },
  {
    num: '05',
    title: 'Production',
    desc: 'Full-scale manufacturing and job work services utilising our state-of-the-art Batliboi Chetak 100MC and 80MC CNC machining centres. We handle batch and high-volume production with consistent quality control throughout.',
    img: 'Production/P-0.png',
    feats: [
      { t: 'Batliboi Chetak 100MC', d: 'Large-format CNC vertical machining centre for heavy-duty components.' },
      { t: 'Batliboi Chetak 80MC', d: 'Mid-size CNC machining centre for medium precision work.' },
      { t: 'Job Work Services', d: 'Contract manufacturing for third-party designs with full confidentiality.' }
    ],
    gallery: [
      'Production/P-1.jpeg',
      'Production/P-2.jpeg',
      'Production/P-3.jpeg',
      'Production/P-4.jpeg'
    ]
  },
  {
    num: '06',
    title: 'Die Spares',
    desc: 'Specialised spare parts and components for existing dies, ensuring minimal downtime and continuous production. We manufacture replacement punches, dies, pilots, and guide elements to OEM specifications.',
    img: 'Diespares/D-0.png',
    feats: [
      { t: 'OEM Replacement Parts', d: 'Exact replacements for worn or damaged die components to OEM tolerances.' },
      { t: 'Fast Delivery', d: 'Priority manufacturing for critical spares to minimise production downtime.' },
      { t: 'Reverse Engineering', d: 'Can reproduce legacy die components from samples or worn-out originals.' }
    ],
    gallery: [
      'Diespares/D-1.png',
      'Diespares/D-2.png',
      'Diespares/D-3.png',
      'Diespares/D-4.png'
    ]
  },
  {
    num: '07',
    title: 'Injection Moulding',
    desc: 'We deliver high-precision plastic components through advanced injection moulding, ensuring consistent quality across high volumes. Our capabilities cover engineering plastics for automotive, industrial, and medical-grade applications.',
    img: 'Injection Moulding/IM-0.png',
    feats: [
      { t: 'Engineering Plastics', d: 'PA, POM, ABS, PC and glass-filled grades for demanding applications.' },
      { t: 'High-Volume Output', d: 'Automated production lines maintaining ±0.05 mm dimensional consistency.' },
      { t: 'Insert Moulding', d: 'Metal inserts encapsulated in plastic for hybrid structural components.' }
    ],
    gallery: [
      'Injection Moulding/IM-1.png',
      'Injection Moulding/IM-2.png',
      'Injection Moulding/IM-3.png',
      'Injection Moulding/IM-4.png'
    ]
  },
  {
    num: '08',
    title: 'Die Casting',
    desc: 'Expert manufacturing of complex metal parts using high-performance die casting for reliable functionality and durability. We specialise in aluminium and zinc alloy die casting for automotive and industrial components.',
    img: 'DieCasting/DC-0.png',
    feats: [
      { t: 'Aluminium Die Casting', d: 'Lightweight, high-strength aluminium alloy castings for structural applications.' },
      { t: 'Zinc Alloy Parts', d: 'Fine-detail zinc die casting for small, intricate functional components.' },
      { t: 'Post-Processing', d: 'In-house trimming, shot blasting, and CNC finishing of cast components.' }
    ],
    gallery: [
      'DieCasting/DC-1.png',
      'DieCasting/DC-2.png',
      'DieCasting/DC-3.png',
      'DieCasting/DC-4.png' 
    ]
  },
  {
    num: '09',
    title: '4th Axis',
    desc: 'Advanced 4th-axis CNC machining enables multi-sided machining in a single setup, improving precision, reducing cycle time, and producing complex components with exceptional accuracy. Ideal for automotive, aerospace, tooling, and custom-engineered parts.',
    img: '4th Axis/A-0.png',
    feats: [
      { t: 'Multi-Side Machining', d: 'Machine multiple faces of a component in one setup, reducing repositioning errors and improving accuracy.' },
      { t: 'Complex Geometry Production', d: 'Manufacture intricate profiles, slots, contours, and indexed features that are difficult with conventional 3-axis machining.' },
      { t: 'Higher Productivity', d: 'Reduced setup time, improved repeatability, and faster production cycles for high-quality precision components.' }
    ],
    gallery: [
      '4th Axis/A-2.jpeg',
      '4th Axis/A-3.jpeg',
      '4th Axis/A-4.jpeg',
      '4th Axis/A-5.jpeg',
      '4th Axis/A-6.jpeg',
      '4th Axis/A-7.jpeg',
    ]
  }
];

// ===== HOVER IMAGE SETUP =====
const hoverImg = document.getElementById('hoverImg');
const hoverImgEl = document.getElementById('hoverImgEl');
const hoverImgLabel = document.getElementById('hoverImgLabel');

document.addEventListener('mousemove', e => {
  let l = e.clientX + 28;
  let t = e.clientY - 130;
  
  if (l + 320 > window.innerWidth) l = e.clientX - 330;
  if (t < 10) t = e.clientY + 24;
  
  hoverImg.style.left = l + 'px';
  hoverImg.style.top = t + 'px';
});

// ===== OVERLAY FUNCTIONS =====
const overlay = document.getElementById('serviceOverlay');

function openService(id) {
  const s = SERVICES[id];
  document.getElementById('overlayTopSvc').textContent = s.title;
  document.getElementById('overlayNumBg').textContent = s.num;
  document.getElementById('overlayTitle').textContent = s.title;
  document.getElementById('overlayDesc').textContent = s.desc;
  
  const pi = document.getElementById('overlayPhotoImg');
  pi.src = s.img;
  pi.alt = s.title;
  
  document.getElementById('overlayFeats').innerHTML = s.feats
    .map(f => `<div class="overlay-feat"><div class="overlay-feat-dot">◆</div><div class="overlay-feat-body"><strong>${f.t}</strong>${f.d}</div></div>`)
    .join('');
    
  document.getElementById('overlayGallery').innerHTML = s.gallery
    .map((g, i) => `<div class="gallery-cell"><img src="${g}" alt="${s.title} ${i + 1}" loading="lazy"/></div>`)
    .join('');
    
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
}

function closeOverlay() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('overlayCloseBtn').addEventListener('click', closeOverlay);
document.getElementById('overlayBackBtn').addEventListener('click', closeOverlay);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});

// ===== RENDER SERVICE ITEMS =====
function renderServices() {
  const servicesList = document.getElementById('servicesList');
  servicesList.innerHTML = SERVICES
    .map((s, id) => `
      <div class="service-item" data-id="${id}" data-img="${s.img}" data-label="${s.title}">
        <div class="service-num">${s.num}</div>
        <div>
          <div class="service-name">${s.title}</div>
          <div class="service-desc">${s.desc}</div>
        </div>
        <div class="service-arrow">↗</div>
      </div>
    `)
    .join('');
    
  // Attach event listeners after rendering
  attachServiceListeners();
}

// ===== SERVICE ITEM EVENTS =====
function attachServiceListeners() {
  document.querySelectorAll('.service-item').forEach(item => {
    const id = parseInt(item.dataset.id);
    
    item.addEventListener('mouseenter', () => {
      hoverImgEl.src = item.dataset.img;
      hoverImgLabel.textContent = item.dataset.label;
      hoverImg.classList.add('visible');
    });
    
    item.addEventListener('mouseleave', () => {
      hoverImg.classList.remove('visible');
    });
    
    item.addEventListener('click', () => {
      hoverImg.classList.remove('visible');
      openService(id);
    });
  });
}

// ===== WORKSHOP FLOOR CAROUSEL =====
const WORKSHOP_IMAGES = ['WF-1.jpeg', 'WF-2.jpeg', 'WF-3.jpeg'];
let currentSlide = 0;

function slideWorkshop(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = WORKSHOP_IMAGES.length - 1;
  if (currentSlide >= WORKSHOP_IMAGES.length) currentSlide = 0;
  
  document.querySelector('.workshop-slider-img').src = WORKSHOP_IMAGES[currentSlide];
  document.getElementById('current-slide').textContent = currentSlide + 1;
}

// Auto-slide every 3 seconds
setInterval(() => {
  slideWorkshop(1);
}, 3000);

// ===== TOOL & DIE WORKS CAROUSEL =====
const TD_IMAGES = ['TD1.png', 'TD2.png', 'TD3.png', 'TD4.png', 'TD5.png', 'TD6.png'];
let tdCurrentSlide = 0;

function slideTD(direction) {
  tdCurrentSlide += direction;
  if (tdCurrentSlide < 0) tdCurrentSlide = TD_IMAGES.length - 1;
  if (tdCurrentSlide >= TD_IMAGES.length) tdCurrentSlide = 0;
  
  document.querySelector('.td-slider-img').src = TD_IMAGES[tdCurrentSlide];
  document.getElementById('td-current-slide').textContent = tdCurrentSlide + 1;
}

// Auto-slide every 1 second
setInterval(() => {
  slideTD(1);
}, 1000);

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
});
