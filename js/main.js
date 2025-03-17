document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const container = document.querySelector('.container');
  const modal = document.getElementById('description-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDescription = document.getElementById('modal-description');
  const modalBody = document.getElementById('modal-body');
  const modalImage = document.getElementById('modal-image');
  const modalListon = document.getElementById('modal-liston');
  const modalContent = document.querySelector('.modal-content');
  const modalInfocontent = document.getElementById('modal-infocontent');;
  const closeBtn = document.querySelector('.close-btn');
  const submenuBtns = document.querySelectorAll('.submenu-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const secondModal = document.getElementById('second-modal');
  const secondCloseBtn = document.querySelector('.second-close-btn');

  // Description data for each button
  const descriptions = [
    {
      title: "LÍNEA VETERINARIA",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/veterinaria.png",
      liston: "imgs/lineas/veterinaria_liston.png",
    },
    {
      title: "LÍNEA ACUÍCOLA",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/acuicola.png",
      liston: "imgs/lineas/acuicola_liston.png",
    },
    {
      title: "LÍNEA MASCOTA",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/mascota.png",
      liston: "imgs/lineas/mascota_liston.png",
    },
    {
      title: "LÍNEA AGRÍCOLA",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/agricola.png",
      liston: "imgs/lineas/agricola_liston.png",
    },
    {
      title: "LÍNEA ORNAMENTAL",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/ornamental.png",
      liston: "imgs/lineas/ornamental_liston.png",
    },
    {
      title: "LÍNEA SALUD PÚBLICA",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/salud.png",
      liston: "imgs/lineas/salud_liston.png",
    },
    {
      title: "LÍNEA MAQUINARIA",
      subtitle: "PRODUCTOS DESTACADOS",
      description: "Farmagro ofrece productos de primera clase para el cuidado y bienestar animal, respaldados por marcas internacionales de prestigio. Contamos con una amplia gama de soluciones en salud y nutrición animal, incluyendo antiparasitarios, antibióticos, suplementos vitamínicos y vacunas, formuladas con la más alta calidad y tecnología.",
      image: "imgs/lineas/maquinaria.png",
      liston: "imgs/lineas/maquinaria_liston.png",
    },
  ];

  // Image buttons data
  const imageButtonsData = {
    "LÍNEA VETERINARIA": [
        { 
          title: "DRAXXIN", 
          image: "imgs/lineas/productos/draxxin.png",
          headerImage: "imgs/lineas/veterinaria_liston.png",
          contentImage: "imgs/lineas/productos/draxxin_producto.png",
          subtitle: "Discover our best features",
          body: "Antibiótico inyectable indicado para el tratamiento y prevención de enfermedades respiratorias.",
          bodyImage: "imgs/lineas/productos/draxxin_producto_info.png",
        },
        { 
          title: "DECTOMAX", 
          image: "imgs/lineas/productos/dectimax.png",
          headerImage: "imgs/lineas/veterinaria_liston.png",
          contentImage: "imgs/lineas/productos/dectimax_producto.png",
          subtitle: "What everyone loves",
          body: "Parasiticida de amplio espectro y larga persistencia que actúa sobre los parásitos internos y externos. ",
          bodyImage: "imgs/lineas/productos/dectimax_producto_info.png",
        },
        { 
          title: "VANODINE", 
          image: "imgs/lineas/productos/vanidine.png",
          headerImage: "imgs/lineas/veterinaria_liston.png",
          contentImage: "imgs/lineas/productos/vanidine_producto.png",
          subtitle: "Fresh off the press",
          body: "Bactericida, viricida y fungicida utilizado para desinfectar instalaciones ganaderas, clínicas veterinarias y otras áreas de contacto con animales.",
          bodyImage: "imgs/lineas/productos/vanidine_producto_info.png",
        },
        { 
          title: "PECUFARM", 
          image: "imgs/lineas/productos/pecufarm.png",
          headerImage: "imgs/lineas/veterinaria_liston.png",
          contentImage: "imgs/lineas/productos/pecufarm_producto.png",
          subtitle: "Selected just for you",
          body: "Suplemento mineral y vitamínico completo diseñado para animales de granja. Está enriquecido con enzimas y probióticos, lo que mejora la biodisponibilidad de los nutrientes.",
          bodyImage: "imgs/lineas/productos/pecufarm_producto_info.png",
        },
        { 
          title: "FOSTERA GOLD", 
          image: "imgs/lineas/productos/fostera_gold.png",
          headerImage: "imgs/lineas/veterinaria_liston.png",
          contentImage: "imgs/lineas/productos/fostera_gold_producto.png",
          subtitle: "Limited time offerings",
          body: "Efectivo para la vacunación de cerdos sanos de 3 días de edad o mayores contra el circovirus porcino (PCV2) y la enfermedad respiratoria ocasionada por M. hyopneumoniae.",
          bodyImage: "imgs/lineas/productos/fostera_gold_producto_info.png",
        }
      ],
      "LÍNEA ACUÍCOLA": [
        { 
          title: "ENVIRON - AC", 
          image: "imgs/lineas/productos/environ.png",
          headerImage: "imgs/lineas/acuicola_liston.png",
          contentImage: "imgs/lineas/productos/environ_producto.png",
          subtitle: "Discover our best features",
          body: "Environ-AC es un probiótico para agua y suelo desarrollado biotecnológicamente y ecológico, especialmente para la gestión de lodos y el control de patógenos.",
          bodyImage: "imgs/lineas/productos/environ_producto_info.png",
        },
        { 
          title: "CITOFARM", 
          image: "imgs/lineas/productos/citofarm.png",
          headerImage: "imgs/lineas/acuicola_liston.png",
          contentImage: "imgs/lineas/productos/citofarm_producto.png",
          subtitle: "Discover our best features",
          body: "Mezcla de ácidos carboxílicos, con aceites esenciales y extractos de hierbas para prevención y control de enfermedades.",
          bodyImage: "imgs/lineas/productos/citofarm_producto_info.png",
        },
        { 
          title: "BLUE FERT", 
          image: "imgs/lineas/productos/bluefert.png",
          headerImage: "imgs/lineas/acuicola_liston.png",
          contentImage: "imgs/lineas/productos/bluefert_producto.png",
          subtitle: "Discover our best features",
          body: "Fertilizante acuícola formulado especialmente para su uso en estanques criaderos de peces y camarón.",
          bodyImage: "imgs/lineas/productos/bluefert_producto_info.png",
        },
        { 
          title: "NUTRILAKE", 
          image: "imgs/lineas/productos/nutrilake.png",
          headerImage: "imgs/lineas/acuicola_liston.png",
          contentImage: "imgs/lineas/productos/nutrilake_producto.png",
          subtitle: "Discover our best features",
          body: "NutriLake® STD se aplican al suelo húmedo después de la cosecha y antes de la siembra para reducir el nivel de materia orgánica. El oxígeno de ambos productos es usado por las bacterias para mineralizar la materia orgánica, transformándola en dióxido de carbono y agua.",
          bodyImage: "imgs/lineas/productos/nutrilake_producto_info.png",
        },
        { 
          title: "ECO-PRO", 
          image: "imgs/lineas/productos/ecopro.png",
          headerImage: "imgs/lineas/acuicola_liston.png",
          contentImage: "imgs/lineas/productos/ecopro_producto.png",
          subtitle: "Discover our best features",
          body: "ECO-PRO es una combinación sinérgica de un nuevo consorcio de bacterias para el suelo que actúan en condiciones aeróbicas y anaeróbicas; que estimula la descomposición de materias orgánicas, controla el suelo negro y elimina los gases nocivos en el estanque de amarones/peces",
          bodyImage: "imgs/lineas/productos/ecopro_producto_info.png",
        }
      ],
      "LÍNEA MASCOTA": [
        { 
          title: "SIMPARICA TRIO", 
          image: "imgs/lineas/productos/simparica.png",
          headerImage: "imgs/lineas/mascota_liston.png",
          contentImage: "imgs/lineas/productos/simparica_producto.png",
          subtitle: "Discover our best features",
          body: "Medicamento antiparasitario para la protección y cuidado para perros.",
          bodyImage: "imgs/lineas/productos/simparica_producto_info.png",
        },
        { 
          title: "POEMA", 
          image: "imgs/lineas/productos/poema.png",
          headerImage: "imgs/lineas/mascota_liston.png",
          contentImage: "imgs/lineas/productos/poema_producto.png",
          subtitle: "Discover our best features",
          body: "Fórmula desarrollada con hidrolizado de pollo o salmón para perros de 1 a 7 años de razas pequeñas y medianas.",
          bodyImage: "imgs/lineas/productos/poema_producto_info.png",
        },
        { 
          title: "VI-SORBITS", 
          image: "imgs/lineas/productos/visorbits.png",
          headerImage: "imgs/lineas/mascota_liston.png",
          contentImage: "imgs/lineas/productos/visorbits_producto.png",
          subtitle: "Discover our best features",
          body: "Tratamiento para la dieta de los animales que requieren un refuerzo de nutrición.",
          bodyImage: "imgs/lineas/productos/visorbits_producto_info.png",
        },
        { 
          title: "SYNULOX", 
          image: "imgs/lineas/productos/synulox.png",
          headerImage: "imgs/lineas/mascota_liston.png",
          contentImage: "imgs/lineas/productos/synulox_producto.png",
          subtitle: "Discover our best features",
          body: "Tratamiento de infecciones causadas por bacterias sensibles a la amoxicilina en perros y gatos.",
          bodyImage: "imgs/lineas/productos/synulox_producto_info.png",
        },
        { 
          title: "BRONCHICINE CAE", 
          image: "imgs/lineas/productos/bronchicine.png",
          headerImage: "imgs/lineas/mascota_liston.png",
          contentImage: "imgs/lineas/productos/bronchicine_producto.png",
          subtitle: "Discover our best features",
          body: "Bronchicine® CAe es un extracto antigénico sin adyuvante obtenido a partir de células de Bordetella bronchiseptica, que se recomienda para la prevención y control de la Traqueobronquitis Infecciosa Canina (tos de las perreras) causada por el microorganismo mencionado.",
          bodyImage: "imgs/lineas/productos/bronchicine_producto_info.png",
        }
      ],
      "LÍNEA AGRÍCOLA": [
        { 
          title: "MITERRA", 
          image: "imgs/lineas/productos/miterra.png",
          headerImage: "imgs/lineas/agricola_liston.png",
          contentImage: "imgs/lineas/productos/miterra_producto.png",
          subtitle: "Discover our best features",
          body: "Insecticida sistémico de amplio espectro con acción por ingestión y efecto repelente. Su combinación de ingredientes activos permite un control eficaz de insectos masticadores, chupadores y raspadores, manteniendo la selectividad en los cultivos.",
          bodyImage: "imgs/lineas/productos/miterra_producto_info.png",
        },
        { 
          title: "PREMIO", 
          image: "imgs/lineas/productos/premio.png",
          headerImage: "imgs/lineas/agricola_liston.png",
          contentImage: "imgs/lineas/productos/premio_producto.png",
          subtitle: "Discover our best features",
          body: "Insecticida altamente éficaz contra larvas comedoras de hojas y barrenadoras en arroz y maíz. Actúa de forma rápida, deteniendo las larvas al instante y brindando protección prolongada al cultivo.",
          bodyImage: "imgs/lineas/productos/premio_producto_info.png",
        },
        { 
          title: "TUMBLER", 
          image: "imgs/lineas/productos/tumbler.png",
          headerImage: "imgs/lineas/agricola_liston.png",
          contentImage: "imgs/lineas/productos/tumbler_producto.png",
          subtitle: "Discover our best features",
          body: "Herbicida sistémico tipo hormonal, efectivo para el control de malezas de hoja ancha en cultivos de gramíneas. Actúa rápidamente para eliminar las malezas sin afectar los cultivos principales.",
          bodyImage: "imgs/lineas/productos/tumbler_producto_info.png",
        },
        { 
          title: "GLORY", 
          image: "imgs/lineas/productos/glory.png",
          headerImage: "imgs/lineas/agricola_liston.png",
          contentImage: "imgs/lineas/productos/glory_producto.png",
          subtitle: "Discover our best features",
          body: "fungicida de acción por contacto, sistémica y preventiva, formulado con Azoxystrobin y Mancozeb. Su combinación reduce el riesgo de resistencia y proporciona una protección eficaz contra hongos.",
          bodyImage: "imgs/lineas/productos/glory_producto_info.png",
        },
        { 
          title: "ADV 9139", 
          image: "imgs/lineas/productos/adv9139.png",
          headerImage: "imgs/lineas/agricola_liston.png",
          contentImage: "imgs/lineas/productos/adv9139_producto.png",
          subtitle: "Discover our best features",
          body: "La semilla de maíz ADV9139 destaca por su alto potencial de rendimiento, grano cristalino con gran estabilidad y excelente sanidad. Se adapta a altitudes de 0 a 800 msnm y tiene un ciclo de vida de 125 días.",
          bodyImage: "imgs/lineas/productos/adv9139_producto_info.png",
        }
      ],
      "LÍNEA ORNAMENTAL": [
        { 
          title: "COSMO-R", 
          image: "imgs/lineas/productos/cosmor.png",
          headerImage: "imgs/lineas/ornamental_liston.png",
          contentImage: "imgs/lineas/productos/cosmor_producto.png",
          subtitle: "Discover our best features",
          body: "Se utiliza como fungicida y bactericida, diseñado para proteger las plantas de hongos y bacterias que afectan su desarrollo.",
          bodyImage: "imgs/lineas/productos/cosmor_producto_info.png",
        },
        { 
          title: "COSMO OIL", 
          image: "imgs/lineas/productos/cosmooil.png",
          headerImage: "imgs/lineas/ornamental_liston.png",
          contentImage: "imgs/lineas/productos/cosmooil_producto.png",
          subtitle: "Discover our best features",
          body: "Aceite Mineral Parafínico. Portador de agroquímicos emulsionados.",
          bodyImage: "imgs/lineas/productos/cosmooil_producto_info.png",
        },
        { 
          title: "FOSFACEL - 800", 
          image: "imgs/lineas/productos/fosfacel.png",
          headerImage: "imgs/lineas/ornamental_liston.png",
          contentImage: "imgs/lineas/productos/fosfacel_producto.png",
          subtitle: "Discover our best features",
          body: "Fertilizante foliar que contiene nutrientes esenciales para las plantas, como fósforo y potasio.",
          bodyImage: "imgs/lineas/productos/fosfacel_producto_info.png",
        },
        { 
          title: "NEW MECTIN", 
          image: "imgs/lineas/productos/mectin.png",
          headerImage: "imgs/lineas/ornamental_liston.png",
          contentImage: "imgs/lineas/productos/mectin_producto.png",
          subtitle: "Discover our best features",
          body: "Insecticida-acaricida translaminar a base de Abamectina al 1,8%. Actúa por contacto e ingestión.",
          bodyImage: "imgs/lineas/productos/mectin_producto_info.png",
        },
        { 
          title: "AGRO - K", 
          image: "imgs/lineas/productos/agrok.png",
          headerImage: "imgs/lineas/ornamental_liston.png",
          contentImage: "imgs/lineas/productos/agrok_producto.png",
          subtitle: "Discover our best features",
          body: "Producto formulado con una mezcla de nutrientes esenciales (potasio, fósforo, nitrógeno, etc.) para optimizar el crecimiento y la salud de las plantas.",
          bodyImage: "imgs/lineas/productos/agrok_producto_info.png",
        }
      ],
      "LÍNEA SALUD PÚBLICA": [
        { 
          title: "QUICKPHOS", 
          image: "imgs/lineas/productos/quickphos.png",
          headerImage: "imgs/lineas/salud_liston.png",
          contentImage: "imgs/lineas/productos/quickphos_producto.png",
          subtitle: "Discover our best features",
          body: "Es un fumigante a base de gas fosfina, altamente eficaz contra todo tipo de plagas sin alterar las características de los productos tratados. Es utilizado en granos de consumo humano y animal, así como en subproductos como cereales, oleaginosas, frutos secos, semillas y tabaco.",
          bodyImage: "imgs/lineas/productos/quickphos_producto_info.png",
        },
        { 
          title: "AQUATRIN", 
          image: "imgs/lineas/productos/aquatrin.png",
          headerImage: "imgs/lineas/salud_liston.png",
          contentImage: "imgs/lineas/productos/aquatrin_producto.png",
          subtitle: "Discover our best features",
          body: "Es un insecticida piretroide formulado para el control eficaz de insectos voladores y rastreros. No contiene solventes orgánicos, tiene bajo olor y es poco irritante, lo que lo hace ideal para espacios sensibles a olores fuertes.",
          bodyImage: "imgs/lineas/productos/aquatrin_producto_info.png",
        },  
        { 
          title: "RASTOP", 
          image: "imgs/lineas/productos/rastop.png",
          headerImage: "imgs/lineas/salud_liston.png",
          contentImage: "imgs/lineas/productos/rastop_producto.png",
          subtitle: "Discover our best features",
          body: "Raticida anticoagulante de segunda generación a base de Bromadiolona, altamente efectivo en una sola ingesta contra ratas y ratones, incluyendo especies resistentes a otros anticoagulantes.",
          bodyImage: "imgs/lineas/productos/rastop_producto_info.png",
        },
        { 
          title: "PORTASTAR S", 
          image: "imgs/lineas/productos/portastar.png",
          headerImage: "imgs/lineas/salud_liston.png",
          contentImage: "imgs/lineas/productos/portastar_producto.png",
          subtitle: "Discover our best features",
          body: "Potente nebulizadora de aerosol en frío ULV de mochila. La entrega del líquido de pulverización se logra a través de una presión negativa en el tanque de pulverización. El caudal (litros por hora) se determina mediante boquillas de dosificación fácilmente intercambiables.",
          bodyImage: "imgs/lineas/productos/portastar_producto_info.png",
        },  
        { 
          title: "SWINGFOG SN 50", 
          image: "imgs/lineas/productos/swingfog.png",
          headerImage: "imgs/lineas/salud_liston.png",
          contentImage: "imgs/lineas/productos/swingfog_producto.png",
          subtitle: "Discover our best features",
          body: "Equipos portátiles, disponibles con 4 tipos de depósito de preparación química, en acero inoxidable o en polietileno. Depósito de combustible en acero inoxidable. Todas las piezas de metal que entran en contacto con la preparación química, están fabricadas en acero inoxidable.",
          bodyImage: "imgs/lineas/productos/swingfog_producto_info.png",
        }
      ],
      "LÍNEA MAQUINARIA": [
        { 
          title: "DJB-20 A BATERIA", 
          image: "imgs/lineas/productos/djb20.png",
          headerImage: "imgs/lineas/maquinaria_liston.png",
          contentImage: "imgs/lineas/productos/djb20_producto.png",
          subtitle: "Discover our best features",
          body: "Pulverizador y dosificador agrícola de mochila, ideal para uso profesional. Cuenta con un tanque de polietileno de 20 litros, agitador hidráulico y batería con autonomía de 8 horas por carga. Dispone de cinco niveles de presión y permite marcar paso de 1 a 4 km/h.",
          bodyImage: "imgs/lineas/productos/djb20_producto_info.png",
        },
        { 
          title: "PJM20", 
          image: "imgs/lineas/productos/pjm20.png",
          headerImage: "imgs/lineas/maquinaria_liston.png",
          contentImage: "imgs/lineas/productos/pjm20_producto.png",
          subtitle: "Discover our best features",
          body: "Pulverizador motorizado de alta potencia y eficiencia, diseñado para satisfacer las exigencias de los productores. Cuenta con un depósito de 25 litros, motor de 4 tiempos (35 cc) y una presión de trabajo de hasta 360 psi, ofreciendo un caudal de hasta 10 L/min y dos boquillas técnicas (ATR 2.0) para una amplia cobertura.",
          bodyImage: "imgs/lineas/productos/pjm20_producto_info.png",
        },
        { 
          title: "JATAO 600", 
          image: "imgs/lineas/productos/jatao600.png",
          headerImage: "imgs/lineas/maquinaria_liston.png",
          contentImage: "imgs/lineas/productos/jatao600_producto.png",
          subtitle: "Discover our best features",
          body: "Muy versátil, se puede usar en diversos cultivos y aplicaciones no agrícolas, como: horticultura, floricultura, cereales, ganaderia, fruticultura, desinfección sanitaria de galpones. Son equipos de bajo mantenimiento, livianos y robustos. Y con el ajuste hidráulico del ducto, facilita la operación y agiliza las maniobras.",
          bodyImage: "imgs/lineas/productos/jatao600_producto_info.png",
        },
        { 
          title: "EXCELLENCE - 4 LÍNEAS", 
          image: "imgs/lineas/productos/excellence.png",
          headerImage: "imgs/lineas/maquinaria_liston.png",
          contentImage: "imgs/lineas/productos/excellence_producto.png",
          subtitle: "Discover our best features",
          body: "La sembradora Excellence fue especialmente diseñada y desarrollada para brindar el mejor rendimiento en la siembra de granos grandes en siembra convencional y semidirecta. Con un diseño moderno, satisface perfectamente las necesidades de los pequeños y medianos productores.",
          bodyImage: "imgs/lineas/productos/excellence_producto_info.png",
        },
        { 
          title: "DJI AGRA T50", 
          image: "imgs/lineas/productos/t50.png",
          headerImage: "imgs/lineas/maquinaria_liston.png",
          contentImage: "imgs/lineas/productos/t50_producto.png",
          subtitle: "Discover our best features",
          body: "El dron agrícola es un equipo para pulverización agrícola, distribución de sólidos y que también se puede utilizar como herramienta de mapeo y captura de imágenes.",
          bodyImage: "imgs/lineas/productos/t50_producto_info.png",
        }
      ]
    };
  // Create image buttons dynamically
  function createImageButtons(line) {
    const imageButtonsContainer = document.querySelector('.image-buttons');
    imageButtonsContainer.innerHTML = '';
    
    const imageButtons = imageButtonsData[line] || [];
    imageButtons.forEach((btn, index) => {
      const buttonEl = document.createElement('div');
      buttonEl.className = 'image-button';
      buttonEl.innerHTML = `
        <img src="${btn.image}" alt="${btn.title}">
        <h5>${btn.title}</h5>
      `;
      buttonEl.addEventListener('click', () => {
        // Shrink the first modal
        modalContent.classList.add('shrink');
        modalInfocontent.src = btn.bodyImage;
        
        // Hide image buttons
        imageButtonsContainer.style.display = 'none';
        
        // Populate and show second modal
        document.getElementById('second-header-image').src = btn.headerImage;
        document.getElementById('second-content-image').src = btn.contentImage;
        document.getElementById('second-modal-title').textContent = btn.title;
        document.getElementById('second-modal-subtitle').textContent = btn.subtitle;
        document.getElementById('second-modal-body').textContent = btn.body;
        document.getElementById('modal-infocontent').src = btn.bodyImage;
        
        // Show second modal
        secondModal.classList.add('active');
      });
      imageButtonsContainer.appendChild(buttonEl);
    });
  }

 // Submenu functionality
  submenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      submenuBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Hide all tab contents
      tabContents.forEach(tab => {
        tab.style.display = 'none';
      });
      
      // Show selected tab content
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).style.display = 'flex';
    });
  });

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Highlight clicked button
      button.classList.add('active');

      // Change background effect based on button clicked
      container.className = 'container';
      container.classList.add(`effect-${index + 1}`);

      // Show modal with description
      modalTitle.textContent = descriptions[index].title;
      modalSubtitle.textContent = descriptions[index].subtitle;
      modalDescription.textContent = descriptions[index].description;
      modalBody.textContent = '';
      modalImage.src = descriptions[index].image;
      modalListon.src = descriptions[index].liston;
      modal.classList.add('active');
      
      // Create image buttons when modal opens
      createImageButtons(descriptions[index].title);

      console.log(`Button ${index + 1} clicked!`);

      // Reset to details tab
      submenuBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === 'details') {
          btn.classList.add('active');
        }
      });
      
      tabContents.forEach(tab => {
        tab.style.display = 'none';
      });
      document.getElementById('details-tab').style.display = 'flex';
    });
  });

  // Close second modal
  secondCloseBtn.addEventListener('click', () => {
    secondModal.classList.remove('active');
    modalContent.classList.remove('shrink');
    document.querySelector('.image-buttons').style.display = 'flex';
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modalContent.classList.remove('shrink');
    secondModal.classList.remove('active');
  });

  // Also close modal when clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalContent.classList.remove('shrink');
      secondModal.classList.remove('active');
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (secondModal.classList.contains('active')) {
        secondModal.classList.remove('active');
        modalContent.classList.remove('shrink');
        document.querySelector('.image-buttons').style.display = 'flex';
      } else if (modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    }
  });
});