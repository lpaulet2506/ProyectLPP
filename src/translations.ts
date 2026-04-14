
export type Language = 'es' | 'en' | 'de';

export const translations = {
  es: {
    nav: {
      business: 'EMPRESAS',
      individual: 'PARTICULARES',
      contactUs: 'CONTÁCTANOS',
    },
    hero: {
      available: 'Disponible para nuevos desafíos',
      business: {
        title: 'Hardware & |Software Architecture',
        subtitle: 'Soluciones integrales de implementación tecnológica para negocios. Desde el código de alto rendimiento hasta la infraestructura física optimizada.',
      },
      individual: {
        title: 'Tu informático |en Madrid',
        subtitle: 'Soporte técnico profesional en Madrid. Arreglo tu ordenador a domicilio, te enseño a usarlo y optimizo tus dispositivos en la zona de Chamberí.',
      },
      startProject: 'Iniciar Proyecto',
      exploreServices: 'Explorar Servicios',
      stats: {
        years: 'Años Exp',
        hardware: 'Equipos Config',
        apps: 'Apps Desplegadas',
      }
    },
    services: {
      title: 'Expertise Técnico',
      subtitle: 'Combinando la potencia del hardware con la inteligencia del software.',
      version: 'EXPLORE_SERVICES_V2.0',
      business: [
        {
          title: 'Desarrollo Web',
          description: 'Aplicaciones a medida, rápidas y seguras para potenciar tu presencia online.',
          detailTitle: 'Soluciones:',
          details: [
            'E-commerce y tiendas online',
            'Aplicaciones web progresivas (PWA)',
            'Optimización SEO y rendimiento',
            'Mantenimiento y escalabilidad'
          ]
        },
        {
          title: 'Automatización',
          description: 'Ahorra tiempo y errores automatizando tus tareas repetitivas con software inteligente.',
          detailTitle: 'Beneficios:',
          details: [
            'Integración de flujos de trabajo',
            'Bots de procesamiento de datos',
            'Reducción de costes operativos',
            'Reportes automáticos en tiempo real'
          ]
        },
        {
          title: 'Sistemas de Gestión',
          description: 'Control total de tu negocio con herramientas personalizadas de administración y datos.',
          detailTitle: 'Módulos:',
          details: [
            'Gestión de inventarios y stock',
            'CRM para seguimiento de clientes',
            'Dashboards de análisis de datos',
            'Seguridad y control de acceso'
          ]
        }
      ],
      individual: [
        {
          title: 'Reparación y mantenimiento',
          description: 'Diagnóstico, reparación y optimización de ordenadores portátiles y de escritorio.',
          detailTitle: 'Servicios:',
          details: [
            'Limpieza profunda del sistema',
            'Eliminación de virus y malware',
            'Mejora de rendimiento y velocidad',
            'Actualización de componentes (RAM, SSD)'
          ]
        },
        {
          title: 'Instalación de software',
          description: 'Instalamos y configuramos los programas esenciales para tu día a día.',
          detailTitle: 'Incluye:',
          details: [
            'Sistemas Operativos (Windows)',
            'Paquete Office completo',
            'Herramientas de trabajo específicas',
            'Antivirus y seguridad'
          ]
        },
        {
          title: 'Soporte técnico a domicilio',
          description: 'Solucionamos problemas con tus dispositivos directamente en tu casa o negocio.',
          detailTitle: 'Servicios:',
          details: [
            'Configuración de nuevos equipos',
            'Conexión de impresoras y periféricos',
            'Optimización de redes Wi-Fi',
            'Resolución de problemas del sistema'
          ]
        },
        {
          title: 'Webs para negocios',
          description: 'Diseñamos páginas web profesionales y sencillas para potenciar pequeños negocios.',
          detailTitle: 'Ejemplos:',
          details: [
            'Páginas para negocios locales',
            'Landing pages de presentación',
            'Webs para profesionales independientes'
          ]
        },
        {
          title: 'Clases de informática',
          description: 'Enseñamos a utilizar la tecnología de forma sencilla, ideal para público mayor.',
          detailTitle: 'Temario:',
          details: [
            'Uso básico del ordenador y archivos',
            'Gestión de correo electrónico',
            'Navegación segura por Internet',
            'Videollamadas y comunicación',
            'Atención personalizada a domicilio'
          ]
        },
        {
          title: 'Asesoramiento tecnológico',
          description: 'Te ayudamos a elegir los equipos y programas que realmente necesitas.',
          detailTitle: 'Consultoría:',
          details: [
            'Guía de compra de ordenadores',
            'Selección de software adecuado',
            'Configuración inicial y puesta a punto'
          ]
        },
        {
          title: 'Soporte informático en Chamberí',
          description: 'Asistencia técnica presencial especializada en el barrio de Chamberí y alrededores de Madrid.',
          detailTitle: 'Cobertura:',
          details: [
            'Soporte en Chamberí, Gaztambide y Arapiles',
            'Desplazamiento a domicilio y oficinas en Madrid',
            'Resolución de incidencias críticas presenciales',
            'Mantenimiento preventivo en tu zona'
          ]
        }
      ],
      learnMore: 'Saber más'
    },
    ai: {
      badge: 'AI INTEGRATION',
      title: 'Asistente de Próxima Generación',
      subtitle: 'Utiliza mi IA personalizada para obtener cotizaciones instantáneas, resolver dudas de hardware o entender cómo puedo optimizar tu infraestructura de software.',
      placeholder: '¿Cuál es el mejor setup para renderizado 4K?',
      systemNode: 'SYSTEM_NODE_0x1A4F',
      feedback: 'AI_CORE_FEEDBACK',
      suggestions: 'SUGERENCIAS:',
      suggestionItems: ['Cotizar PC Gamer', 'Arquitectura AWS', 'Soporte Hardware', 'Excel Avanzado'],
      error: 'PROTOCOL_ERROR: No se recibió respuesta del núcleo.',
      failure: 'SYSTEM_FAILURE: Fallo en la conexión con la red neuronal.',
      systemInstruction: "Eres 'Core-AI', el sistema operativo cognitivo de un experto en tecnología. Ayudas tanto a empresas (desarrollo, automatización) como a particulares (reparación, clases, soporte). Tu tono es futurista, preciso, profesional y elegante. Para particulares, usa un lenguaje sencillo y natural. Usa un formato markdown limpio para respuestas estructuradas."
    },
    contact: {
      title: '¿Listo para conectar?',
      subtitle: 'Si buscas un socio tecnológico que entienda tanto el bit como el átomo, estás en el lugar correcto. Escríbeme y hagamos que suceda.',
      form: {
        name: 'Nombre Completo',
        email: 'E-mail',
        service: 'Servicio de Interés',
        details: 'Cuéntame tu idea o problema',
        phone: 'Déjame tu número para contactarte',
        placeholderName: 'Tu nombre',
        placeholderEmail: 'tu@email.com',
        placeholderPhone: 'Tu teléfono (opcional)',
        placeholderMessage: '¿En qué puedo ayudarte?',
        submit: 'ENVIAR PETICIÓN',
        sending: 'ENCRIPTANDO Y ENVIANDO...',
        successTitle: '¡Mensaje Enviado!',
        successMessage: 'He recibido tu petición correctamente a través de Formspree. Te responderé en menos de 24 horas.',
        sendAnother: 'ENVIAR OTRO MENSAJE _',
        error: 'ERROR_NODE_FAILED: No se pudo conectar con el servidor de correo. Intenta de nuevo.',
        options: {
          software: 'Desarrollo Web / Software',
          hardware: 'Reparación / Hardware',
          automation: 'Automatización / Sistemas',
          classes: 'Clases / Soporte'
        }
      },
      info: {
        direct: 'CANAL DIRECTO',
        directValue: 'Vía Formspree a Gmail',
        availability: 'DISPONIBILIDAD',
        availabilityValue: 'Chamberí, Madrid'
      }
    },
    footer: {
      description: 'Redefiniendo el estándar tecnológico a través de la sinergia perfecta entre el hardware de vanguardia y el software inteligente.',
      nav: 'Navegación',
      home: 'Inicio',
      services: 'Servicios',
      contact: 'Contacto',
      social: 'Social',
      rights: 'ALL_RIGHTS_RESERVED'
    },
    questionnaire: {
      title: 'Información faltante',
      description: 'Para que tu portafolio sea 100% profesional y funcional, por favor facilítame los siguientes datos:',
      points: [
        "Tu nombre completo para personalizar el Hero.",
        "Tus redes sociales (LinkedIn, GitHub, etc.).",
        "Tu número de WhatsApp real para el botón flotante.",
        "Proyectos específicos que hayas realizado (nombres y descripciones).",
        "Tu stack tecnológico preferido (ej. React, Node, Python, etc.).",
        "Una breve descripción de tu trayectoria o experiencia.",
        "Si tienes algún tarifario o rango de precios para las asesorías.",
        "Imágenes de tus trabajos o una foto de perfil profesional."
      ],
      button: '¡Entendido!'
    },
    whatsapp: {
      message: 'Hola, vi tu portafolio y me gustaría más información sobre tus servicios.',
      tooltip: '¡Hablemos por WhatsApp!'
    }
  },
  en: {
    nav: {
      business: 'BUSINESS',
      individual: 'INDIVIDUALS',
      contactUs: 'CONTACT US',
    },
    hero: {
      available: 'Available for new challenges',
      business: {
        title: 'Hardware & |Software Architecture',
        subtitle: 'Comprehensive technological implementation solutions for business. From high-performance code to optimized physical infrastructure.',
      },
      individual: {
        title: 'Your tech |expert at home',
        subtitle: 'Simple solutions for your computer problems. I fix your computer, teach you how to use it, and leave everything working perfectly.',
      },
      startProject: 'Start Project',
      exploreServices: 'Explore Services',
      stats: {
        years: 'Years Exp',
        hardware: 'Hardware Config',
        apps: 'Apps Deployed',
      }
    },
    services: {
      title: 'Technical Expertise',
      subtitle: 'Combining hardware power with software intelligence.',
      version: 'EXPLORE_SERVICES_V2.0',
      business: [
        {
          title: 'Web Development',
          description: 'Custom, fast, and secure applications to boost your online presence.',
          detailTitle: 'Solutions:',
          details: [
            'E-commerce and online stores',
            'Progressive Web Apps (PWA)',
            'SEO and performance optimization',
            'Maintenance and scalability'
          ]
        },
        {
          title: 'Automation',
          description: 'Save time and errors by automating repetitive tasks with intelligent software.',
          detailTitle: 'Benefits:',
          details: [
            'Workflow integration',
            'Data processing bots',
            'Operational cost reduction',
            'Real-time automatic reports'
          ]
        },
        {
          title: 'Management Systems',
          description: 'Total control of your business with personalized administration and data tools.',
          detailTitle: 'Modules:',
          details: [
            'Inventory and stock management',
            'CRM for customer tracking',
            'Data analysis dashboards',
            'Security and access control'
          ]
        }
      ],
      individual: [
        {
          title: 'Repair & Maintenance',
          description: 'Diagnosis, repair, and optimization of laptops and desktop computers.',
          detailTitle: 'Services:',
          details: [
            'Deep system cleaning',
            'Virus and malware removal',
            'Performance and speed improvement',
            'Hardware upgrades (RAM, SSD)'
          ]
        },
        {
          title: 'Software Installation',
          description: 'We install and configure essential programs for your daily use.',
          detailTitle: 'Includes:',
          details: [
            'Operating Systems (Windows)',
            'Full Office Suite',
            'Specific work tools',
            'Antivirus and security'
          ]
        },
        {
          title: 'Home Tech Support',
          description: 'We solve problems with your devices directly at your home or business.',
          detailTitle: 'Services:',
          details: [
            'New equipment setup',
            'Printer and peripheral connection',
            'Wi-Fi network optimization',
            'System troubleshooting'
          ]
        },
        {
          title: 'Websites for Business',
          description: 'We design professional and simple websites to boost small businesses.',
          detailTitle: 'Examples:',
          details: [
            'Local business pages',
            'Presentation landing pages',
            'Websites for independent professionals'
          ]
        },
        {
          title: 'Computer Classes',
          description: 'We teach how to use technology in a simple way, ideal for seniors.',
          detailTitle: 'Syllabus:',
          details: [
            'Basic computer and file usage',
            'Email management',
            'Safe Internet browsing',
            'Video calls and communication',
            'Personalized home attention'
          ]
        },
        {
          title: 'Tech Consulting',
          description: 'We help you choose the equipment and software you really need.',
          detailTitle: 'Consulting:',
          details: [
            'Computer buying guide',
            'Selection of suitable software',
            'Initial setup and fine-tuning'
          ]
        },
        {
          title: 'IT Support in Madrid',
          description: 'Specialized on-site technical assistance in the capital.',
          detailTitle: 'Coverage:',
          details: [
            'Support in Chamberí and surroundings',
            'Home and office visits',
            'Critical incident resolution',
            'On-site preventive maintenance'
          ]
        }
      ],
      learnMore: 'Learn more'
    },
    ai: {
      badge: 'AI INTEGRATION',
      title: 'Next Generation Assistant',
      subtitle: 'Use my custom AI to get instant quotes, solve hardware doubts, or understand how I can optimize your software infrastructure.',
      placeholder: 'What is the best setup for 4K rendering?',
      systemNode: 'SYSTEM_NODE_0x1A4F',
      feedback: 'AI_CORE_FEEDBACK',
      suggestions: 'SUGGESTIONS:',
      suggestionItems: ['Quote Gaming PC', 'AWS Architecture', 'Hardware Support', 'Advanced Excel'],
      error: 'PROTOCOL_ERROR: No response received from core.',
      failure: 'SYSTEM_FAILURE: Failure in connection with the neural network.',
      systemInstruction: "You are 'Core-AI', the cognitive operating system of a technology expert. You help both businesses (development, automation) and individuals (repair, classes, support). Your tone is futuristic, precise, professional, and elegant. For individuals, use simple and natural language. Use clean markdown format for structured responses."
    },
    contact: {
      title: 'Ready to connect?',
      subtitle: 'If you are looking for a technological partner who understands both the bit and the atom, you are in the right place. Write to me and let\'s make it happen.',
      form: {
        name: 'Full Name',
        email: 'E-mail',
        service: 'Service of Interest',
        details: 'Tell me your idea or problem',
        phone: 'Leave your number to contact you',
        placeholderName: 'Your name',
        placeholderEmail: 'you@email.com',
        placeholderPhone: 'Your phone (optional)',
        placeholderMessage: 'How can I help you?',
        submit: 'SEND REQUEST',
        sending: 'ENCRYPTING AND SENDING...',
        successTitle: 'Message Sent!',
        successMessage: 'I have successfully received your request via Formspree. I will reply in less than 24 hours.',
        sendAnother: 'SEND ANOTHER MESSAGE _',
        error: 'ERROR_NODE_FAILED: Could not connect to the mail server. Try again.',
        options: {
          software: 'Web Development / Software',
          hardware: 'Repair / Hardware',
          automation: 'Automation / Systems',
          classes: 'Classes / Support'
        }
      },
      info: {
        direct: 'DIRECT CHANNEL',
        directValue: 'Via Formspree to Gmail',
        availability: 'AVAILABILITY',
        availabilityValue: 'Remote / Global'
      }
    },
    footer: {
      description: 'Redefining the technological standard through the perfect synergy between cutting-edge hardware and intelligent software.',
      nav: 'Navigation',
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      social: 'Social',
      rights: 'ALL_RIGHTS_RESERVED'
    },
    questionnaire: {
      title: 'Missing Information',
      description: 'To make your portfolio 100% professional and functional, please provide me with the following data:',
      points: [
        "Your full name to personalize the Hero.",
        "Your social networks (LinkedIn, GitHub, etc.).",
        "Your real WhatsApp number for the floating button.",
        "Specific projects you have carried out (names and descriptions).",
        "Your preferred tech stack (e.g. React, Node, Python, etc.).",
        "A brief description of your career or experience.",
        "If you have any price list or price range for consultations.",
        "Images of your work or a professional profile photo."
      ],
      button: 'Understood!'
    },
    whatsapp: {
      message: 'Hello, I saw your portfolio and would like more information about your services.',
      tooltip: 'Let\'s talk on WhatsApp!'
    }
  },
  de: {
    nav: {
      business: 'UNTERNEHMEN',
      individual: 'PRIVATPERSONEN',
      contactUs: 'KONTAKTIEREN SIE UNS',
    },
    hero: {
      available: 'Verfügbar für neue Herausforderungen',
      business: {
        title: 'Hardware- & |Software-Architektur',
        subtitle: 'Umfassende technologische Implementierungslösungen für Unternehmen. Vom Hochleistungscode bis zur optimierten physischen Infrastruktur.',
      },
      individual: {
        title: 'Ihr Tech-|Experte zu Hause',
        subtitle: 'Einfache Lösungen für Ihre Computerprobleme. Ich repariere Ihren Computer, bringe Ihnen den Umgang damit bei und sorge dafür, dass alles perfekt funktioniert.',
      },
      startProject: 'Projekt starten',
      exploreServices: 'Dienstleistungen erkunden',
      stats: {
        years: 'Jahre Exp',
        hardware: 'Hardware-Konfig',
        apps: 'Apps bereitgestellt',
      }
    },
    services: {
      title: 'Technische Expertise',
      subtitle: 'Kombination von Hardware-Leistung mit Software-Intelligenz.',
      version: 'EXPLORE_SERVICES_V2.0',
      business: [
        {
          title: 'Webentwicklung',
          description: 'Maßgeschneiderte, schnelle und sichere Anwendungen zur Steigerung Ihrer Online-Präsenz.',
          detailTitle: 'Lösungen:',
          details: [
            'E-Commerce und Online-Shops',
            'Progressive Web-Apps (PWA)',
            'SEO- und Leistungsoptimierung',
            'Wartung und Skalierbarkeit'
          ]
        },
        {
          title: 'Automatisierung',
          description: 'Sparen Sie Zeit und Fehler durch die Automatisierung wiederkehrender Aufgaben mit intelligenter Software.',
          detailTitle: 'Vorteile:',
          details: [
            'Workflow-Integration',
            'Datenverarbeitungs-Bots',
            'Reduzierung der Betriebskosten',
            'Automatische Berichte in Echtzeit'
          ]
        },
        {
          title: 'Managementsysteme',
          description: 'Vollständige Kontrolle über Ihr Unternehmen mit personalisierten Verwaltungs- und Datentools.',
          detailTitle: 'Module:',
          details: [
            'Inventar- und Lagerverwaltung',
            'CRM zur Kundenverfolgung',
            'Dashboards zur Datenanalyse',
            'Sicherheit und Zugriffskontrolle'
          ]
        }
      ],
      individual: [
        {
          title: 'Reparatur & Wartung',
          description: 'Diagnose, Reparatur und Optimierung von Laptops und Desktop-Computern.',
          detailTitle: 'Dienstleistungen:',
          details: [
            'Tiefensystemreinigung',
            'Viren- und Malware-Entfernung',
            'Leistungs- und Geschwindigkeitsverbesserung',
            'Hardware-Upgrades (RAM, SSD)'
          ]
        },
        {
          title: 'Software-Installation',
          description: 'Wir installieren und konfigurieren wichtige Programme für Ihren täglichen Gebrauch.',
          detailTitle: 'Beinhaltet:',
          details: [
            'Betriebssysteme (Windows)',
            'Vollständiges Office-Paket',
            'Spezifische Arbeitswerkzeuge',
            'Antivirenprogramm und Sicherheit'
          ]
        },
        {
          title: 'Heim-Support',
          description: 'Wir lösen Probleme mit Ihren Geräten direkt bei Ihnen zu Hause oder im Geschäft.',
          detailTitle: 'Dienstleistungen:',
          details: [
            'Einrichtung neuer Geräte',
            'Drucker- und Peripherieanschluss',
            'WLAN-Netzwerkoptimierung',
            'System-Fehlerbehebung'
          ]
        },
        {
          title: 'Websites für Unternehmen',
          description: 'Wir entwerfen professionelle und einfache Websites zur Förderung kleiner Unternehmen.',
          detailTitle: 'Beispiele:',
          details: [
            'Lokale Geschäftsseiten',
            'Präsentations-Landingpages',
            'Websites für unabhängige Fachleute'
          ]
        },
        {
          title: 'Computerkurse',
          description: 'Wir lehren den Umgang mit Technologie auf einfache Weise, ideal für Senioren.',
          detailTitle: 'Lehrplan:',
          details: [
            'Grundlegende Computer- und Dateinutzung',
            'E-Mail-Verwaltung',
            'Sicheres Surfen im Internet',
            'Videoanrufe und Kommunikation',
            'Personalisierte Betreuung zu Hause'
          ]
        },
        {
          title: 'Tech-Beratung',
          description: 'Wir helfen Ihnen bei der Auswahl der Geräte und Software, die Sie wirklich benötigen.',
          detailTitle: 'Beratung:',
          details: [
            'Computer-Kaufberatung',
            'Auswahl geeigneter Software',
            'Ersteinrichtung und Feinabstimmung'
          ]
        },
        {
          title: 'IT-Support in Madrid',
          description: 'Spezialisierte technische Unterstützung vor Ort in der Hauptstadt.',
          detailTitle: 'Abdeckung:',
          details: [
            'Unterstützung in Chamberí und Umgebung',
            'Besuche zu Hause und im Büro',
            'Lösung kritischer Vorfälle',
            'Präventive Wartung vor Ort'
          ]
        }
      ],
      learnMore: 'Mehr erfahren'
    },
    ai: {
      badge: 'KI-INTEGRATION',
      title: 'Assistent der nächsten Generation',
      subtitle: 'Nutzen Sie meine maßgeschneiderte KI, um sofortige Angebote zu erhalten, Hardware-Fragen zu klären oder zu verstehen, wie ich Ihre Software-Infrastruktur optimieren kann.',
      placeholder: 'Was ist das beste Setup für 4K-Rendering?',
      systemNode: 'SYSTEM_NODE_0x1A4F',
      feedback: 'KI_KERN_FEEDBACK',
      suggestions: 'VORSCHLÄGE:',
      suggestionItems: ['Gaming-PC Angebot', 'AWS-Architektur', 'Hardware-Support', 'Fortgeschrittenes Excel'],
      error: 'PROTOKOLL_FEHLER: Keine Antwort vom Kern erhalten.',
      failure: 'SYSTEM_AUSFALL: Fehler bei der Verbindung mit dem neuronalen Netzwerk.',
      systemInstruction: "Du bist 'Core-AI', das kognitive Betriebssystem eines Technologieexperten. Du hilfst sowohl Unternehmen (Entwicklung, Automatisierung) als auch Privatpersonen (Reparatur, Kurse, Support). Dein Ton ist futuristisch, präzise, professionell und elegant. Verwende für Privatpersonen eine einfache und natürliche Sprache. Verwende ein sauberes Markdown-Format für strukturierte Antworten."
    },
    contact: {
      title: 'Bereit für eine Verbindung?',
      subtitle: 'Wenn Sie einen Technologiepartner suchen, der sowohl das Bit als auch das Atom versteht, sind Sie hier richtig. Schreiben Sie mir und lassen Sie es uns angehen.',
      form: {
        name: 'Vollständiger Name',
        email: 'E-Mail',
        service: 'Interessierter Dienst',
        details: 'Erzählen Sie mir von Ihrer Idee oder Ihrem Problem',
        phone: 'Hinterlassen Sie Ihre Nummer',
        placeholderName: 'Ihr Name',
        placeholderEmail: 'ihre@email.com',
        placeholderPhone: 'Ihre Telefonnummer (optional)',
        placeholderMessage: 'Wie kann ich Ihnen helfen?',
        submit: 'ANFRAGE SENDEN',
        sending: 'VERSCHLÜSSELN UND SENDEN...',
        successTitle: 'Nachricht gesendet!',
        successMessage: 'Ich habe Ihre Anfrage erfolgreich über Formspree erhalten. Ich werde in weniger als 24 Stunden antworten.',
        sendAnother: 'WEITERE NACHRICHT SENDEN _',
        error: 'FEHLER_KNOTEN_FEHLGESCHLAGEN: Verbindung zum Mailserver fehlgeschlagen. Versuchen Sie es erneut.',
        options: {
          software: 'Software-Implementierung',
          hardware: 'Hardware-Konfiguration',
          automation: 'Automatisierung / Systeme',
          classes: 'Kurse / Support'
        }
      },
      info: {
        direct: 'DIREKTER KANAL',
        directValue: 'Über Formspree an Gmail',
        availability: 'VERFÜGBARKEIT',
        availabilityValue: 'Remote / Global'
      }
    },
    footer: {
      description: 'Neudefinition des technologischen Standards durch die perfekte Synergie zwischen modernster Hardware und intelligenter Software.',
      nav: 'Navigation',
      home: 'Startseite',
      services: 'Dienstleistungen',
      contact: 'Kontakt',
      social: 'Soziales',
      rights: 'ALLE_RECHTE_VORBEHALTEN'
    },
    questionnaire: {
      title: 'Fehlende Informationen',
      description: 'Um Ihr Portfolio 100% professionell und funktional zu gestalten, geben Sie mir bitte die folgenden Daten an:',
      points: [
        "Ihr vollständiger Name zur Personalisierung des Hero.",
        "Ihre sozialen Netzwerke (LinkedIn, GitHub, etc.).",
        "Ihre echte WhatsApp-Nummer für den schwebenden Button.",
        "Spezifische Projekte, die Sie durchgeführt haben (Namen und Beschreibungen).",
        "Ihr bevorzugter Tech-Stack (z.B. React, Node, Python, etc.).",
        "Eine kurze Beschreibung Ihrer Karriere oder Erfahrung.",
        "Falls Sie eine Preisliste oder einen Preisbereich für Beratungen haben.",
        "Bilder Ihrer Arbeit oder ein professionelles Profilfoto."
      ],
      button: 'Verstanden!'
    },
    whatsapp: {
      message: 'Hallo, ich habe Ihr Portfolio gesehen und möchte mehr Informationen über Ihre Dienstleistungen erhalten.',
      tooltip: 'Lass uns auf WhatsApp chatten!'
    }
  }
};
