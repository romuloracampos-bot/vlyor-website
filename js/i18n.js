/* VLYOR Science — i18n.js v1.0
   Bilingual toggle: English / Español
   Espanhol escrito com voz editorial — não tradução automática.
   Activado via data-i18n="key" nos elementos HTML. */

'use strict';

const VLYOR_TRANSLATIONS = {

  /* ── NAV ─────────────────────────────────────────────────────────────────── */
  'nav.portfolio'   : { en: 'Portfolio',          es: 'Portafolio'          },
  'nav.philosophy'  : { en: 'Philosophy',          es: 'Filosofía'           },
  'nav.standards'   : { en: 'Standards',           es: 'Estándares'          },
  'nav.portal'      : { en: 'Technical Portal →',  es: 'Portal Técnico →'    },

  /* ── HERO ────────────────────────────────────────────────────────────────── */
  'hero.eyebrow'    : { en: 'Global Bioactives Hub — Suzhou',
                        es: 'Hub Global de Bioactivos — Suzhou'              },
  'hero.h1.line1'   : { en: 'Molecular',           es: 'Integridad'          },
  'hero.h1.em1'     : { en: 'Integrity.',           es: 'Molecular.'          },
  'hero.h1.line2'   : { en: 'Aesthetic',            es: 'Desempeño'          },
  'hero.h1.em2'     : { en: 'Performance.',         es: 'Estético.'          },
  'hero.cta.explore': { en: 'Explore Portfolio',    es: 'Ver Portafolio'      },
  'hero.cta.portal' : { en: 'Technical Portal',     es: 'Portal Técnico'      },
  'hero.tag'        : { en: 'Precision in every drop.\nAuthority in every bond.',
                        es: 'Precisión en cada gota.\nAutoridad en cada enlace.' },

  /* ── STATS ───────────────────────────────────────────────────────────────── */
  'stat.1.l'        : { en: 'Actives. 8 lines. One source.',
                        es: 'Activos. 8 líneas. Una sola fuente.'            },
  'stat.2.l'        : { en: 'Minimum purity across all portfolio',
                        es: 'Pureza mínima en todo el portafolio'            },
  'stat.3.l'        : { en: 'Multi-market regulatory coverage',
                        es: 'Cobertura regulatoria multi-mercado'            },
  'stat.4.l'        : { en: 'Industries & manufacturers supplied',
                        es: 'Industrias y fabricantes abastecidos'           },

  /* ── PORTFOLIO SECTION ───────────────────────────────────────────────────── */
  'section.portfolio.eyebrow' : { en: 'Portfolio',  es: 'Portafolio'         },
  'section.portfolio.title'   : { en: 'Eight Lines.\nOne Standard.',
                                  es: 'Ocho Líneas.\nUn Solo Estándar.'      },
  'section.portfolio.sub'     : {
    en: 'Each line is a precision instrument — engineered for a specific category of cosmetic performance, with a dedicated identity and documented to pharmaceutical standards.',
    es: 'Cada línea es un instrumento de precisión — diseñado para una categoría específica de desempeño cosmético, con identidad propia y documentado con rigor farmacéutico.'
  },

  /* ── CARDS ───────────────────────────────────────────────────────────────── */
  'card.shield.badge' : { en: 'UV Filters',            es: 'Filtros UV'              },
  'card.shield.title' : { en: 'Photostability\nArchitecture',
                          es: 'Arquitectura de\nFotoprotección'               },
  'card.shield.desc'  : {
    en: '13 high-purity organic UV filters. From broad-spectrum triazines to classic UVB absorbers — the complete photostability toolkit for every sun care formulation.',
    es: '13 filtros UV orgánicos de alta pureza. Desde triazinas de amplio espectro hasta absorbedores UVB clásicos — el conjunto completo de herramientas de fotoprotección para cada formulación solar.'
  },
  'card.shield.cta'   : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.vital.badge'  : { en: 'Vitamins & Actives',    es: 'Vitaminas y Activos'     },
  'card.vital.title'  : { en: 'Bioactive\nPrecision',  es: 'Precisión\nBioactiva'    },
  'card.vital.desc'   : {
    en: '16 vitamins, acids and bioactive actives. From PanthoActiv to BakuActiv — performance ingredients for the most demanding anti-ageing and skin-care formulations.',
    es: '16 vitaminas, ácidos y activos bioactivos. Desde PanthoActiv hasta BakuActiv — ingredientes de alto rendimiento para las formulaciones más exigentes de antiedad y cuidado de la piel.'
  },
  'card.vital.cta'    : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.pure.badge'   : { en: 'Biosurfactants',        es: 'Biosurfactantes'          },
  'card.pure.title'   : { en: 'Green\nPerformance',    es: 'Desempeño\nSostenible'   },
  'card.pure.desc'    : {
    en: '14 surfactants — from biosourced APG glucosides to polysorbates. High-performance, biodegradable cleansing chemistry for responsible formulation.',
    es: '14 surfactantes — desde glucósidos APG de origen biológico hasta polisorbatos. Química limpiadora de alto rendimiento y biodegradable para formulación responsable.'
  },
  'card.pure.cta'     : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.func.badge'   : { en: 'Functional',            es: 'Funcional'                },
  'card.func.title'   : { en: 'Formula\nIntegrity',    es: 'Integridad\nde Fórmula'  },
  'card.func.desc'    : {
    en: '10 functional ingredients — chelating agents, preservative systems, solubilisers and antiperspirant actives that ensure formula stability and efficacy.',
    es: '10 ingredientes funcionales — agentes quelantes, sistemas conservadores, solubilizantes y activos antitranspirantes que garantizan la estabilidad y eficacia de la fórmula.'
  },
  'card.func.cta'     : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.cond.badge'   : { en: 'Conditioning',          es: 'Acondicionamiento'        },
  'card.cond.title'   : { en: 'Sensory\nIntelligence', es: 'Inteligencia\nSensorial'  },
  'card.cond.desc'    : {
    en: '6 conditioning systems — cationic polymers, emulsifying conditioners, silicone blends and cationic surfactant actives for exceptional deposit and the sensory elegance that defines a premium product.',
    es: '6 sistemas de acondicionamiento — polímeros catiónicos, acondicionadores emulsionantes, mezclas de silicona y activos surfactantes catiónicos para un depósito excepcional y la elegancia sensorial que define un producto premium.'
  },
  'card.cond.cta'     : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.silk.badge'   : { en: 'Silicones',             es: 'Siliconas'                },
  'card.silk.title'   : { en: 'Sensory\nRefinement',   es: 'Refinamiento\nSensorial'  },
  'card.silk.desc'    : {
    en: '8 silicone technologies — volatile dry-touch fluids, high-shine phenyl, aqueous-compatible PEG-silicones and crosspolymer matrices. Tactile luxury in every application.',
    es: '8 tecnologías de silicona — fluidos volátiles de tacto seco, fenilo de alto brillo, PEG-siliconas compatibles con agua y matrices de crosspolímero. Lujo táctil en cada aplicación.'
  },
  'card.silk.cta'     : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.form.badge'   : { en: 'Emulsifiers & Rheology', es: 'Emulsionantes y Reología' },
  'card.form.title'   : { en: 'Structure &\nElegance',  es: 'Estructura y\nElegancia'  },
  'card.form.desc'    : {
    en: '22 families — fatty alcohol ethoxylates, sorbitan esters, carbomers, structural emulsifiers and premium emollient esters. The complete architecture of a cosmetic formula.',
    es: '22 familias — etoxilatos de alcohol graso, ésteres de sorbitán, carbómeros, emulsionantes estructurales y ésteres emolientes premium. La arquitectura completa de una fórmula cosmética.'
  },
  'card.form.cta'     : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  'card.hydra.badge'  : { en: 'Humectants',            es: 'Humectantes'              },
  'card.hydra.title'  : { en: 'Moisture\nArchitecture', es: 'Arquitectura de\nHidratación' },
  'card.hydra.desc'   : {
    en: '7 families — from classical glycols to the complete PEG spectrum and PVP film formers. The hydration foundation of every effective cosmetic formula.',
    es: '7 familias — desde glicoles clásicos hasta el espectro completo de PEG y formadores de film PVP. La base de hidratación de toda fórmula cosmética eficaz.'
  },
  'card.hydra.cta'    : { en: 'Technical Dossier →',   es: 'Dossier Técnico →'       },

  /* ── PHILOSOPHY / MANIFESTO ──────────────────────────────────────────────── */
  'mani.eyebrow'    : { en: 'Philosophy',  es: 'Filosofía' },
  'mani.big'        : {
    en: 'Every formula\nbegins with\na decision.\nOurs begins\nwith precision.',
    es: 'Toda fórmula\ncomienza con\nuna decisión.\nLa nuestra comienza\ncon precisión.'
  },
  'mani.p1'         : {
    en: 'The most consequential ingredients are those the consumer never thinks about — because the formula simply works.',
    es: 'Los ingredientes más determinantes son aquellos en los que el consumidor nunca piensa — porque la fórmula, sencillamente, funciona.'
  },
  'mani.p2'         : {
    en: 'VLYOR exists for formulators who understand this. We develop, document and deliver actives with the attention to detail that premium cosmetics demand — from the molecular structure of each UV filter to the verified purity of every vitamin active.',
    es: 'VLYOR existe para los formuladores que entienden esto. Desarrollamos, documentamos y entregamos activos con el rigor que los cosméticos de alta gama exigen — desde la estructura molecular de cada filtro UV hasta la pureza verificada de cada activo vitamínico.'
  },
  'mani.p3'         : {
    en: 'Our ingredients do not announce themselves.',
    es: 'Nuestros ingredientes no se anuncian.'
  },
  'mani.p3.strong'  : {
    en: 'They enable the work of those who do.',
    es: 'Hacen posible el trabajo de quienes sí lo hacen.'
  },
  'mani.sig.sub'    : { en: 'Global Bioactives Hub — Suzhou', es: 'Hub Global de Bioactivos — Suzhou' },

  /* ── ABOUT STRIP ─────────────────────────────────────────────────────────── */
  'about.h3'        : {
    en: 'Crafted at the\nmolecular level.\nFelt at the surface.',
    es: 'Diseñado a nivel\nmolecular.\nSentido en la superficie.'
  },
  'about.p1'        : {
    en: 'Each ingredient in the VLYOR portfolio is developed, validated and documented to the standards every serious formulator deserves — complete traceability, full technical transparency, and the assurance of working with a partner as invested in your final product as you are.',
    es: 'Cada ingrediente del portafolio VLYOR se desarrolla, valida y documenta conforme a los estándares que todo formulador serio merece — trazabilidad completa, transparencia técnica total y la certeza de trabajar con un socio tan comprometido con tu producto final como tú mismo.'
  },
  'about.p2'        : {
    en: 'From specification to shipment, every detail is accounted for.',
    es: 'Desde la especificación hasta el despacho, cada detalle está contemplado.'
  },
  'about.num.1.l'   : { en: 'Actives across 8 precision lines', es: 'Activos en 8 líneas de precisión' },
  'about.num.2.n'   : { en: '3 continents', es: '3 continentes' },
  'about.num.2.l'   : { en: 'EU · Asia · Americas',  es: 'UE · Asia · América'      },
  'about.num.3.l'   : { en: 'Technical response commitment', es: 'Tiempo de respuesta técnica' },
  'about.num.4.l'   : { en: 'Global documentation standard', es: 'Estándar de documentación global' },
  'about.cred.1'    : { en: 'Suzhou-based global sourcing hub', es: 'Hub de abastecimiento global con base en Suzhou' },
  'about.cred.2'    : { en: 'Full TDS · SDS · COA documentation on every shipment', es: 'Documentación completa TDS · SDS · COA en cada envío' },
  'about.cred.3'    : { en: 'Global air freight — Europe, Americas and Asia-Pacific in 5–14 business days', es: 'Flete aéreo global — Europa, América y Asia-Pacífico en 5 a 14 días hábiles' },
  'about.cred.4'    : { en: 'Samples available from 500 g for qualified formulators', es: 'Muestras disponibles desde 500 g para formuladores calificados' },

  /* ── SOCIAL PROOF ────────────────────────────────────────────────────────── */
  'sp.label'        : { en: 'Why formulators choose VLYOR', es: 'Por qué los formuladores eligen VLYOR' },
  'sp.headline.1'   : { en: "The ingredient doesn't fail.", es: 'El ingrediente no falla.' },
  'sp.headline.2'   : { en: 'The documentation does.',     es: 'La documentación, sí.' },
  'sp.sub'          : {
    en: 'We built VLYOR around the failures we observed everywhere else — incomplete dossiers, opaque supply chains, account managers who couldn\'t answer a technical question. Every decision in the VLYOR model is a direct response to one of those failures.',
    es: 'Construimos VLYOR a partir de los fallos que observamos en todas partes — dossiers incompletos, cadenas de suministro opacas, ejecutivos comerciales incapaces de responder una pregunta técnica. Cada decisión del modelo VLYOR es una respuesta directa a uno de esos fallos.'
  },
  'sp.card.1.title' : { en: 'Documentation that arrives\nbefore you ask for it.',
                        es: 'Documentación que llega\nantes de que la pidas.'         },
  'sp.card.1.p'     : {
    en: 'Every active ships with TDS, GHS SDS (16-section), CoA and IECIC listing. The documentation stack demanded by ANVISA-registered manufacturers and EU-export labs — complete, on every order, regardless of size.',
    es: 'Cada activo se entrega con TDS, SDS GHS (16 secciones), CoA y listado IECIC. El paquete de documentación que exigen los fabricantes registrados ante ANVISA y los laboratorios de exportación a la UE — completo, en cada pedido, sin importar el tamaño.'
  },
  'sp.card.2.title' : { en: 'Factory price.\nNo intermediary margin.',
                        es: 'Precio de fábrica.\nSin márgenes de intermediario.'      },
  'sp.card.2.p'     : {
    en: 'Direct Suzhou sourcing eliminates every distributor step between the manufacturer and your lab. Competitive CIF pricing with full origin traceability — you know exactly where the molecule comes from.',
    es: 'El abastecimiento directo desde Suzhou elimina cada eslabón distribuidor entre el fabricante y tu laboratorio. Precios CIF competitivos con trazabilidad de origen completa — sabes exactamente de dónde viene la molécula.'
  },
  'sp.card.3.title' : { en: 'A chemist answers.\nNot an account manager.',
                        es: 'Te responde un químico.\nNo un ejecutivo de ventas.'      },
  'sp.card.3.p'     : {
    en: 'Every inquiry receives a targeted TDS matched to your specific brief — not a product catalogue forwarded by someone who hasn\'t formulated anything. The support is part of the product.',
    es: 'Cada consulta recibe un TDS dirigido, ajustado a tu brief específico — no un catálogo de productos reenviado por alguien que nunca ha formulado nada. El soporte técnico es parte del producto.'
  },
  'sp.card.4.title' : { en: 'Prototype before\nyou commit to scale.',
                        es: 'Prototipa primero.\nEscala cuando funcione.'              },
  'sp.card.4.p'     : {
    en: '500 g minimum orders and 7–12 day global air freight were designed specifically for innovation teams who need to iterate fast. Validate the formula first. Scale when it works.',
    es: 'Pedidos mínimos desde 500 g y flete aéreo global de 7 a 14 días diseñados específicamente para equipos de innovación que necesitan iterar rápido. Valida la fórmula primero. Escala cuando funcione.'
  },

  /* ── STANDARDS ───────────────────────────────────────────────────────────── */
  'std.eyebrow'     : { en: 'Compliance',          es: 'Cumplimiento'                 },
  'std.title'       : { en: 'Global Standards.\nZero Compromise.',
                        es: 'Estándares Globales.\nCero Concesiones.'                 },
  'std.1.title'     : { en: 'EU-Aligned Documentation',   es: 'Documentación Alineada a la UE'  },
  'std.1.p'         : {
    en: 'All actives supplied with documentation aligned to EU 1223/2009 cosmetic regulation and GHS-compliant SDS in European format.',
    es: 'Todos los activos se suministran con documentación alineada al Reglamento Cosmético UE 1223/2009 y FDS conformes a GHS en formato europeo.'
  },
  'std.2.title'     : { en: 'China IECIC Listed',  es: 'Registro IECIC China'          },
  'std.2.p'         : {
    en: "All actives registered in China's Inventory of Existing Cosmetic Ingredients.",
    es: 'Todos los activos registrados en el Inventario de Ingredientes Cosméticos Existentes de China.'
  },
  'std.3.title'     : { en: 'GHS Compliant SDS',   es: 'FDS Conformes GHS'             },
  'std.3.p'         : {
    en: '16-section GHS Safety Data Sheets for all products in multiple languages.',
    es: 'Fichas de Datos de Seguridad GHS de 16 secciones para todos los productos, en múltiples idiomas.'
  },
  'std.4.title'     : { en: 'COSMOS / Vegan Eligible', es: 'Elegible COSMOS / Vegano'  },
  'std.4.p'         : {
    en: 'Selected surfactant and active lines meet COSMOS and Vegan certification criteria.',
    es: 'Líneas seleccionadas de surfactantes y activos cumplen los criterios de certificación COSMOS y Vegano.'
  },
  'std.5.title'     : { en: 'Digital COA Portal',  es: 'Portal Digital de COA'          },
  'std.5.p'         : {
    en: 'Every batch linked to a real-time Certificate of Analysis via QR code.',
    es: 'Cada lote vinculado a un Certificado de Análisis en tiempo real mediante código QR.'
  },
  'std.6.title'     : { en: 'Consultative Support', es: 'Soporte Consultivo'            },
  'std.6.p'         : {
    en: 'Formulation guidance, dosage optimisation and regulatory support for your market.',
    es: 'Orientación en formulación, optimización de dosificación y soporte regulatorio para tu mercado.'
  },

  /* ── PROCESS STEPS ───────────────────────────────────────────────────────── */
  'proc.1'          : { en: 'Specification',   es: 'Especificación'  },
  'proc.2'          : { en: 'Sampling',        es: 'Muestreo'        },
  'proc.3'          : { en: 'Technical Dossier', es: 'Dossier Técnico' },
  'proc.4'          : { en: 'COA Verification', es: 'Verificación COA' },
  'proc.5'          : { en: 'Partnership',     es: 'Asociación'       },

  /* ── CONTACT ─────────────────────────────────────────────────────────────── */
  'contact.eyebrow' : { en: 'Contact',        es: 'Contacto'         },
  'contact.title'   : { en: 'Start a\nTechnical\nConversation.',
                        es: 'Inicia una\nConversación\nTécnica.'      },
  'contact.sub'     : {
    en: 'Our team responds with data, not brochures. Share your formulation challenge — we will send the right dossier.',
    es: 'Nuestro equipo responde con datos, no con folletos. Comparte tu desafío de formulación — te enviaremos el dossier adecuado.'
  },
  'contact.p1.title': { en: 'Response within 24h',       es: 'Respuesta en 24 h'              },
  'contact.p1.sub'  : { en: 'Technical reply — not a sales call.', es: 'Respuesta técnica, no comercial.' },
  'contact.p2.title': { en: 'Targeted dossier included', es: 'Dossier dirigido incluido'       },
  'contact.p2.sub'  : { en: 'We match the right TDS to your brief.', es: 'Ajustamos el TDS a tu brief específico.' },
  'contact.p3.title': { en: 'Samples available',         es: 'Muestras disponibles'            },
  'contact.p3.sub'  : { en: 'For qualified formulators. MOQ from 500 g.', es: 'Para formuladores calificados. MOQ desde 500 g.' },
  'contact.p4.title': { en: 'Active across global markets', es: 'Presencia en mercados globales' },
  'contact.p4.sub'  : { en: 'Europe · Americas · Middle East · Asia-Pacific.',
                        es: 'Europa · América · Oriente Medio · Asia-Pacífico.' },
  'contact.hub'     : { en: 'Global Bioactives Hub · Suzhou, China',
                        es: 'Hub Global de Bioactivos · Suzhou, China'       },

  /* ── CONTACT FORM ────────────────────────────────────────────────────────── */
  'form.name'       : { en: 'Name',             es: 'Nombre'          },
  'form.name.ph'    : { en: 'Your name',         es: 'Tu nombre'       },
  'form.company'    : { en: 'Company',           es: 'Empresa'         },
  'form.company.ph' : { en: 'Your company',      es: 'Tu empresa'      },
  'form.email'      : { en: 'Email',             es: 'Correo electrónico' },
  'form.line'       : { en: 'Product Line of Interest', es: 'Línea de producto de interés' },
  'form.line.ph'    : { en: 'Select a line',     es: 'Selecciona una línea' },
  'form.msg'        : { en: 'Technical Context', es: 'Contexto técnico' },
  'form.msg.ph'     : { en: 'Describe your formulation challenge or request…',
                        es: 'Describe tu desafío de formulación o solicitud…'  },
  'form.submit'     : { en: 'Send Inquiry →',    es: 'Enviar Consulta →' },
  'form.note'       : { en: 'We respond within 48h with a targeted technical dossier.',
                        es: 'Respondemos en 48 h con un dossier técnico dirigido.' },

  /* ── FOOTER ──────────────────────────────────────────────────────────────── */
  'footer.tag'      : { en: 'Molecular Integrity. Aesthetic Performance.',
                        es: 'Integridad Molecular. Desempeño Estético.'      },
  'footer.col1'     : { en: 'Product Lines',  es: 'Líneas de Producto' },
  'footer.col2'     : { en: 'Resources',      es: 'Recursos'           },
  'footer.col3'     : { en: 'Contact',        es: 'Contacto'           },
  'footer.portal'   : { en: 'Technical Portal', es: 'Portal Técnico'   },
  'footer.compliance': { en: 'Compliance',    es: 'Cumplimiento'       },
  'footer.sample'   : { en: 'Request Sample', es: 'Solicitar Muestra'  },
  'footer.copy'     : { en: '© VLYOR Science. All rights reserved.',
                        es: '© VLYOR Science. Todos los derechos reservados.' },

};

/* ── Engine ──────────────────────────────────────────────────────────────────── */

const I18N = {

  current: localStorage.getItem('vlyor-lang') || 'en',

  t(key) {
    const entry = VLYOR_TRANSLATIONS[key];
    if (!entry) return '';
    return entry[this.current] || entry['en'] || '';
  },

  apply() {
    const lang = this.current;

    // All elements with data-i18n attribute (text content)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (!text) return;
      // Preserve <br/> line breaks from translation strings
      if (text.includes('\n')) {
        el.innerHTML = text.split('\n').join('<br/>');
      } else {
        el.textContent = text;
      }
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const text = this.t(key);
      if (text) el.setAttribute('placeholder', text);
    });

    // HTML lang attribute
    document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');

    // Toggle button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-active', btn.getAttribute('data-lang') === lang);
    });
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('vlyor-lang', lang);
    this.apply();
  },

  init() {
    this.apply();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.getAttribute('data-lang')));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
