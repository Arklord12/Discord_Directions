   /* 
       =========================================================================
       === COPIAR EN SCRIPT.JS ===
       Aquí está la base de datos simulada y toda la lógica interactiva.
       =========================================================================
    */

    const miUsuarioId = 'u1'; // ID inmutable protegido

    /* 
       =========================================================================
             AQUÍ COMIENZA TU INFORME. EDITA LOS TEXTOS ENTRE COMILLAS 
       =========================================================================
    */
    let datosSimulados = {
        servidores: [
            {
                id: 's1', 
                
                // 1. DATOS DEL SERVIDOR (TU PROYECTO)
                nombre: 'Análisis: Discord Inc.', // Título que sale arriba a la izquierda
                iniciales: 'DI', 
                // IMAGEN DEL SERVIDOR: Pon tu logo aquí. Si no tienes, déjalo en null.
                icono: 'assets/images/logo-discord.png', 

                // 2. TUS CANALES (SECCIONES DEL INFORME)
                canales: [
                    { 
                        id: 'c1', 
                        nombre: '1-INTRODUCCION', 
                        descripcion: 'Introducción al análisis de la empresa.',
                        tituloBienvenida: 'INTRODUCCION',
                        subtituloBienvenida: 'Esta web es interactiva y permite al usuario navegar por ella, desplazarse entre los diferentes grupos y servidores, interactuar con los usuarios y ver su información ademas de participar en los distintos chats, enviar mensajes y crear nuevos grupos, chats y usuarios. La interfaz de esta aplicación web está inspirada en la de Discord, lo que proporciona una experiencia de usuario inmersiva y familiar.',
                        mensajes: [
                            { 
                                id: 'm1', 
                                idUsuario: 'u1', //Este usuario es el que presenta el informe (tú) 
                                texto: 'Esta aplicación web tiene como propósito analizar a **Discord Inc.**, una de las plataformas de comunicación en tiempo real más complejas y de mayor crecimiento a nivel mundial. Destacada por su **sofisticada arquitectura de sistemas distribuidos**, la compañía ha evolucionado exitosamente de ser una herramienta de nicho "gamer" a una **infraestructura social y corporativa global**.\n\nA lo largo del trabajo se examinará de manera exhaustiva su **identidad estratégica (misión, visión y valores)**, profundizando en su **propuesta de valor diferenciadora** frente a gigantes corporativos. Igualmente, se evaluará su **ambiente interno, cadena de valor, estructura organizacional y nivel de competitividad** utilizando herramientas como el **radar de innovación**, lo cual permitirá evidenciar los **retos regulatorios y financieros** que enfrenta en la actualidad.\n\nFinalmente, se incluye una **reflexión personal sobre la propuesta de valor** que aportaría en el cargo de **Chief Technology Officer (CTO)**.', 
                                hora: '08:39 PM', 
                                // IMAGEN DEL MENSAJE: Si quieres que este párrafo tenga una imagen debajo, pon la ruta aquí. Si no, pon null.
                                imagen: null
                            },
                            {
                                id: 'm2',
                                idUsuario: 'u3',
                                texto:'¿Por qué elegiste esta empresa?',
                                hora: '08:40 PM',
                                imagen: null

                            },
                            {
                                id:'m3',
                                idUsuario: 'u1',
                                texto:'Elegí **Discord Inc** porque ha crecido exponencialmente hasta consolidarse como un referente global en comunicación en tiempo real, acaparando una cuota significativa del mercado de mensajería con aproximadamente un 9%. Desde la perspectiva de un CTO, resulta especialmente interesante analizar su propuesta de valor, la evolución de su arquitectura bajo una demanda masiva y su modelo de negocio, todo ello en el contexto actual de su preparación para una inminente salida a bolsa.',
                                hora: '08:41 PM',
                                imagen: null
                            }

                        ] 
                    },
//-------------------------------------------------------------------------------------------------------------
//----------------------------------ORIGEN Y EVOLUCION DE LA EMPRESA-------------------------------------------
//-------------------------------------------------------------------------------------------------------------
                    { 
                        id: 'c2', 
                        nombre: '2-ORIGEN Y EVOLUCION', 
                        descripcion: 'Fundación y evolución de la empresa.',
                        mensajes: [
                            { 
                                id: 'm4', 
                                idUsuario: 'u4', 
                                texto: 'Jason Citron crea un nuevo estudio, el **Phoenix Guild**, para reunir a la gente a través de los videojuegos. Pronto, Jason empezará a trabajar en el primer proyecto del estudio, Fates Forever, un MOBA diseñado específicamente para móviles.', 
                                hora: 'ABRIL 2012', 
                                imagen: null 
                            },
                            {
                             id: 'm8',
                             tipo: 'sistema', // <--- NUEVA PROPIEDAD CLAVE
                             texto: 'Stanislav Vishnevskiy se ha unido al chat',
                                // No necesitas idUsuario, hora ni imagen para este tipo de mensaje                                

                            },
                            {
                             id: 'm9',
                             tipo: 'sistema', // <--- NUEVA PROPIEDAD CLAVE
                             texto: '',
                                // No necesitas idUsuario, hora ni imagen para este tipo de mensaje                                

                            },                            
                            { 
                                id: 'm5', 
                                idUsuario: 'u5', 
                                texto: 'Stanislav Vishnevskiy se une a Jason. Juntos empiezan a trabajar en su próximo juego para móviles.', 
                                hora: 'ABRIL 2013', 
                                imagen: null 
                            },
                            { 
                                id: 'm6', 
                                idUsuario: 'u4', 
                                texto: '**Phoenix Guild**, bajo el nuevo nombre Hammer & Chisel, saca Fates Forever y es muy bien recibido por la crítica. Algunas de las funciones del juego, como el **chat de voz integrado, el chat de texto y los foros**, sirven de base para lo que se viene después...', 
                                hora: 'VERANO 2014', 
                                imagen: null 
                            },                                                        
                            { 
                                id: 'm7', 
                                idUsuario: 'u4', 
                                texto: 'A Jason y Stan les encantaba jugar, pero no encontraban una forma fiable de hablar mientras jugaban en línea. Aprovechando lo que aprendieron desarrollando **Fates Forever**, publican la primera versión de un nuevo proyecto: **una aplicación de chat centrada en videojuegos para ordenador y móviles llamada «Discord»**.', 
                                hora: 'MAYO 2015', 
                                imagen: 'assets/images/Discord(1).png' // <-- Reemplaza por tu imagen real
                            },
                            { 
                                id: 'm10', 
                                idUsuario: 'u4', 
                                texto: 'Discord lanza el overlay en juegos para PC, lo que permite a los jugadores interactuar con sus amigos sin salir del juego, y añade una lista de amigos para que la gente pueda hablar fuera de los servidores. La API oficial de Discord se lanza por primera vez y, con el tiempo, dará soporte a cientos de miles de aplicaciones.', 
                                hora: 'PRIMAVERA 2016', 
                                imagen: 'assets/images/Discord_Overlay.png' // <-- Reemplaza por tu imagen real
                            },                            
                            { 
                                id: 'm11', 
                                idUsuario: 'u4', 
                                texto: 'Discord ofrece la posibilidad de hacer llamadas de voz con amigos directamente por MD y grupos de MD y lanza al mundo una de sus funciones más populares: la posibilidad de subir y usar emojis personalizados en servidores.', 
                                hora: 'VERANO 2016', 
                                imagen: 'assets/images/Discord_Llamadas.png' // <-- Reemplaza por tu imagen real
                            },       
                            { 
                                id: 'm12', 
                                idUsuario: 'u4', 
                                texto: 'Discord introduce **Discord Nitro**, que permite a la gente apoyar a Discord a cambio de ventajas increíbles, como la posibilidad de utilizar emojis personalizados de un servidor en cualquier parte y tener un avatar animado.', 
                                hora: 'PRICIPIOS 2017', 
                                imagen: 'assets/images/Discord_Nitro.png' // <-- Reemplaza por tu imagen real
                            },
                            { 
                                id: 'm13', 
                                idUsuario: 'u4', 
                                texto: 'Tras una larga espera y muchas expectativas, Discord lanza por fin las funciones de chat de vídeo y compartir pantalla por MD y grupos de MD. Se publica también la API Rich Presence de Discord, que permite a los jugadores mostrar qué hacen en el juego directamente en Discord.', 
                                hora: 'OTOÑO 2017', 
                                imagen: null // <-- Reemplaza por tu imagen real
                            },
                            { 
                                id: 'm14', 
                                idUsuario: 'u4', 
                                texto: 'Discord publica **Go Live**, que permite a los jugadores transmitir sus juegos favoritos a sus amigos en un servidor con un par de clics. Además, las mejoras del servidor permiten que los miembros colaboren para desbloquear ventajas adicionales para su comunidad.', 
                                hora: 'VERANO 2019', 
                                imagen: 'assets/images/Discord_Go_Live.png' // <-- Reemplaza por tu imagen real
                            },
                            { 
                                id: 'm15', 
                                idUsuario: 'u4', 
                                texto: 'Discord une fuerzas con PlayStation para hacer posible la vinculación de cuentas, que permitirá que la gente de Discord enseñe a qué está jugando en su PlayStation 5.', 
                                hora: 'PRIMAVERA 2021', 
                                imagen: 'assets/images/Discord_Play.png' // <-- Reemplaza por tu imagen real
                            },
                            { 
                                id: 'm16', 
                                idUsuario: 'u4', 
                                texto: 'Se lanzan dos funciones de audio: los mensajes de voz desde dispositivos móviles y el panel de sonidos, con el que los usuarios podrán reproducir clips de sonido durante las llamadas de voz.', 
                                hora: 'PRIMAVERA 2023', 
                                imagen: 'assets/images/Discord_Barra_Sonidos.png' // <-- Reemplaza por tu imagen real
                            },
                            { 
                                id: 'm17', 
                                idUsuario: 'u4', 
                                texto: 'Discord lanza el SDK social para los desarrolladores de videojuegos. Los jugadores ahora pueden vincular sus cuentas de Discord con sus cuentas de juegos, así como desbloquear directamente las funciones sociales de Discord en algunos de sus juegos favoritos.', 
                                hora: 'Primavera 2025', 
                                imagen: 'assets/images/Discord_Games.png' // <-- Reemplaza por tu imagen real
                            },
                            {
                             id: 'm21',
                             tipo: 'sistema', // <--- NUEVA PROPIEDAD CLAVE
                             texto: 'Humam Sakhnini se ha unido al chat',
                                // No necesitas idUsuario, hora ni imagen para este tipo de mensaje                                

                            },
                            {
                             id: 'm20',
                             tipo: 'sistema', // <--- NUEVA PROPIEDAD CLAVE
                             texto: '',
                                // No necesitas idUsuario, hora ni imagen para este tipo de mensaje                                

                            },                              
                            { 
                                id: 'm18', 
                                idUsuario: 'u2', 
                                texto: 'Jason anuncia su transición de director ejecutivo a miembro del consejo y asesor, y Humam Sakhnini se convierte en el nuevo director ejecutivo de Discord. Sakhnini cuenta con una amplia experiencia en la industria de los videojuegos gracias a sus puestos de liderazgo en Activision Blizzard y King.', 
                                hora: 'ABRIL 2025', 
                                imagen: null // <-- Reemplaza por tu imagen real
                            }, 
                            {
                                id: 'm19',
                                idUsuario: 'u2',
                                texto:'Discord introduce **Orbs**, una recompensa virtual que los jugadores pueden obtener al completar misiones. Los usuarios recogen Orbs y los cambian por elementos para personalizar su perfil o incluso los canjean por Nitro sin necesidad de gastar dinero real.',
                                hora: 'ABRIL 2025',
                                imagen: null
                            }                                                                                                                                                                                     
                        ] 
                    },
                    { 
                        id: 'c3', 
                        nombre: '3-MODELO DE NEGOCIO Y MONETIZACIÓN', 
                        descripcion: 'Análisis del modelo de negocio y estrategias de monetización.',
                        mensajes: [
                            { 
                                id: 'm22', 
                                idUsuario: 'u1', 
                                texto: 'A diferencia de redes sociales como Meta o TikTok, **Discord no vende los datos de sus usuarios para publicidad segmentada**. Su modelo es __Freemium__, lo que significa que el uso de la plataforma y la creación de servidores son 100% gratuitos. Ganan dinero a través de:', 
                                hora: '10:00 AM', 
                                imagen: null 
                            },
                            {
                                id: 'm23',
                                idUsuario: 'u1',
                                texto: '- **Discord Nitro**: Una suscripción premium que va desde 2,99 USD hasta 9,99 USD al mes y que ofrece beneficios "cosméticos" y técnicos (emojis animados, avatares personalizados, transmisión de video en 4K y subida de archivos más grandes).',
                                hora: '10:05 AM',
                                imagen: 'assets/images/Discord_Nitro_Opciones.png'
                            },
                            {
                                id: 'm24',
                                idUsuario: 'u1',
                                texto: '- **Nitro Server Boosts**: Los usuarios pueden pagar para mejorar un servidor, lo que desbloquea funciones adicionales para todos los miembros del servidor.',
                                hora: '10:10 AM',
                                imagen: 'assets/images/Discord_Nitro_Boost.png'
                            },
                            {
                                id: 'm25',
                                idUsuario: 'u1',
                                texto: '- **Merchandising y licencias**: Discord también genera ingresos a través de la venta de productos de marca y licencias para empresas que desean integrar Discord en sus servicios.',
                                hora: '10:15 AM',
                                imagen: null
                            },
                            {
                                id: 'm27',
                                idUsuario: 'u1',
                                texto:'- Recientemente, Discord ha estado experimentando con una función que permitiría a los administradores del servidor vender entradas para eventos alojados en el servidor, abriendo así una nueva fuente de ingresos ya que cobran una comisión sobre estos.',
                                hora: '10:20 AM',
                                imagen: null
                            },
                            {
                                id: 'm26',
                                idUsuario: 'u1',
                                texto:'- **Quests / Orbs (Publicidad Recompensada):** Introducido masivamente entre 2024 y 2025, es un sistema donde los usuarios juegan videojuegos patrocinados o transmiten partidas a sus amigos a cambio de bienes virtuales o meses de Nitro gratis. Es un formato publicitario no intrusivo (con un 96% de tasa de finalización) que ha sido clave para que Discord alcance un flujo de caja operativo positivo  previo a su IPO (Oferta Publica Inicial) que es el proceso mediante el cual una empresa sale a bolsa.',
                                hora: '10:20 AM',
                                imagen: null
                            }

                        ] 
                    },
                    { 
                        id: 'c4', 
                        nombre: '4-MISION VISION Y VALORES', 
                        descripcion: 'Análisis de la misión, visión y valores de la empresa.',
                        mensajes: [
                            { 
                                id: 'm27', 
                                idUsuario: 'u2', 
                                texto: 'La identidad de Discord ha mutado radicalmente en una década. En sus orígenes (2015) el eslogan era “Chat for Gamers”: una herramienta de voz de baja latencia para jugadores de videojuegos multijugador, nacida de un estudio de videojuegos (Hammer & Chisel) que no logró tracción con su MOBA Fates Forever y pivotó hacia la infraestructura de comunicación que había construido para su propio equipo. En marzo de 2020, en el arranque de la pandemia, la compañía cambió su narrativa a “Your Place to Talk” / “Chat for Communities and Friends”, reconociendo que la mayoría de su crecimiento ya no provenía exclusivamente de jugadores sino de comunidades de estudio, aficiones, trabajo remoto y amistad.',    
                                hora: '12:00 PM', 
                                imagen: null 
                            },
                            {
                                id: 'm28',
                                idUsuario: 'u2',
                                texto:'**MISIÓN:**\n*dar a cualquier persona el poder de encontrar y crear un sentido de pertenencia* es la que hoy articula tanto el producto (servidores, canales, eventos programados, Stage Channels) como la narrativa corporativa frente a inversionistas en el proceso de IPO. Es significativo que Discord destine cerca del 15 % de su plantilla a funciones de seguridad y confianza (Safety & Policy, Ingeniería, Datos y Producto), lo cual muestra que la “pertenencia” se sostiene, en la práctica, sobre una inversión estructural en moderación, no solo en un eslogan de marca.',
                                hora: '12:02 PM',
                                imagen: null
                            },
                            {
                                id: 'm29',
                                idUsuario: 'u2',
                                texto:'**VISION:** "Un mundo inclusivo donde nadie se sienta como un extraño" (An inclusive world where no one feels like an outsider) ',
                                hora: '12:05 PM',
                                imagen: null
                            },
                            {
                                id: 'm30',
                                idUsuario: 'u2',
                                texto:'**Los Valores Operativos en la Práctica**\nDiscord no se rige por adjetivos genéricos de marketing. Operan internamente bajo siete principios operativos rigurosos:\n- **Cultivar la pertenencia:** Construir confianza mutua y asumir siempre buenas intenciones en el equipo.\n-  **Cumplir con los clientes:** Enfocarse obsesivamente en lo que necesitan los usuarios reales desde los principios básicos, ignorando el ruido de la competencia.\n-  **Sorprender y deleitar:** Cuidar los detalles minuciosos de la experiencia del usuario para generar un impacto emocional inesperado.\n-  **Debatir, decidir, comprometerse:** Fomentar el debate duro basado en datos. Una vez que se toma una decisión, el equipo debe comprometerse a ejecutarla con excelencia, independientemente de si hubo consenso previo. (Buscan transparencia, no que todos estén de acuerdo).\n- **Progreso sobre perfección:** Avanzar rápido mediante enfoques iterativos (ley de Pareto 80/20), priorizando entregar valor de forma inmediata y componer sobre ello. \n-  **Aceptar los hechos brutales:** Medir rigurosamente la realidad. Si algo no funciona, se debe tener la frialdad para cortar las pérdidas y cambiar de dirección sin miedo a equivocarse.\n-  **Luchar por la excelencia:** Exigir un nivel de trabajo sobresaliente a diario e impulsar a quienes te rodean a alcanzar su máximo potencial.',
                                hora: '12:05 PM',
                                imagen: null
                            }
                            
                        ] 
                    } ,
                    {
                        id: 'c5', 
                        nombre: '5-Propuesta de valor y diferenciación', 
                        descripcion: 'Análisis de la propuesta de valor y diferenciación de la empresa.',
                        mensajes: [
                            {
                                id: 'm31',
                                idUsuario: 'u1',
                                texto:'Discord resuelve el problema de la comunicación en tiempo real para grupos grandes, evitando el spam de las redes sociales tradicionales. A diferencia de competidores como Slack o Teams (orientados a empresas y productividad), Discord ofrece voz y video de alta calidad integrados y es gratuito para uso básico. Frente a Telegram o WhatsApp, provee servidores y canales persistentes con administración avanzada (roles, permisos, moderación). Respecto a redes sociales estilo Reddit, se diferencia en que no hay algoritmo de feed: la comunidad auto-organiza la conversación sin un muro de noticias. En síntesis, los usuarios eligen Discord porque prioriza la experiencia de conversación (baja latencia en voz, libertad de crear “servidores” temáticos) con un modelo de negocios enfocado en suscriptores (Nitro, Boosts) en lugar de publicidad intrusiva. Como señala un usuario de Discord, la plataforma es casi “un Reddit en tiempo real”, siendo valorada por su fiabilidad en chat de voz y su interfaz adaptada a comunidades grandes.',
                                hora: '01:00 PM',
                                imagen: null
                            }


                        ]

                    },  
                    {   id: 'c6',
                        nombre: '6-Análisis interno, cadena de valor y cultura organizacionall',
                        descripcion: 'Análisis del ambiente interno, cadena de valor y cultura organizacional de la empresa.',
                        mensajes: [
                            {
                                id: 'm32',
                                idUsuario: 'u1',
                                texto:'**Cadena de valor de Porter aplicada a software en tiempo real**\n **Actividades primarias:**\n- **Logística de entrada y operaciones:** mensajes, señales de voz/video y presencia viajan por un gateway WebSocket construido en Elixir (Erlang/OTP) desde 2015, elegido por su modelo de concurrencia masiva y tolerancia a fallos; hoy agrupa cerca de veinte servicios distintos.\n- **Persistencia de datos:** Discord migró su almacenamiento de mensajes de MongoDB (2015) a Apache Cassandra y, en 2022–2023, a ScyllaDB —una base de datos NoSQL escrita en C++ sin recolector de basura— para eliminar las latencias en cascada (“hot partitions”) que sufría Cassandra a escala de billones de mensajes. El cambio redujo la latencia de lectura p99 de un rango de 40–125 ms a cerca de 15 ms, y la de escritura de 5–70 ms a cerca de 5 ms, según relató el ingeniero Bo Ingram en ScyllaDB Summit 2023.\n- **Salida de servicios multimedia:** la capa de voz/video usa WebRTC sobre infraestructura propia de enrutamiento de baja latencia, alojada en Google Cloud Platform (GCP), con un diseño de almacenamiento híbrido (“Superdisk”, discos persistentes + NVMe) optimizado para picos de tráfico masivo (grandes lanzamientos de videojuegos, eventos en vivo).\n- **Mercadeo, comunidad y soporte:** el crecimiento ha sido mayoritariamente orgánico y guiado por creadores/administradores de servidores; el soporte al cliente se apoya en proveedores externos, una decisión que —como se ve en la sección 3— se convirtió en un punto de fallo de seguridad en 2025.\n\n',
                                hora: '02:00 PM',
                                imagen: null
                            },
                            {   id: 'm33',
                                idUsuario: 'u1',
                                texto:'**Actividades de apoyo:**\n- **Infraestructura tecnológica:** arquitectura híbrida Elixir + Python + Rust. Elixir sostiene la capa de tiempo real; Python opera como monolito para la API pública; Rust se usa mediante Native Implemented Functions (NIFs, vía la librería Rustler) para acelerar estructuras de datos críticas —por ejemplo, la lista de miembros de un servidor—, permitiendo escalar a más de 11 millones de conexiones concurrentes sin reescribir el núcleo del sistema en un lenguaje de bajo nivel.\n- **I+D y desarrollo tecnológico continuo:** iniciativas internas como “Project MaxJourney” (optimización de latencia bajo picos de concurrencia) y la migración progresiva de bases de datos ilustran una cultura de reingeniería constante más que de estabilidad estática.\n- **Compras y acuerdos cloud:** dependencia estratégica de Google Cloud Platform como proveedor principal de cómputo y almacenamiento, y de proveedores externos de soporte al cliente (uno de ellos, comprometido en la brecha de 2025).\n- **Gestión del talento técnico:** contratación internacional remota-primero (remote-first), con oficinas físicas opcionales en San Francisco; la organización combina squads de producto multidisciplinarios con equipos de infraestructura pequeños y de alto apalancamiento (en 2019, solo cuatro ingenieros de infraestructura sostenían un sistema usado por millones de usuarios concurrentes).',
                                hora: '02:30 PM',
                                imagen: null

                            },
                            {
                                id: 'm34',
                                idUsuario: 'u1',
                                texto:'**Estructura organizacional**\n- La organización responde a un modelo relativamente plano para su escala de usuarios, coherente con una cultura de alta autonomía técnica:\n\nCEO — Humam Sakhnini (desde abr. 2025)\n├── CTO y Cofundador — Stanislav Vishnevskiy\n│ └── Ingeniería, Producto, Diseño y Datos (infraestructura, seguridad, plataforma de desarrolladores)\n├── CFO — Tomasz Marcinkowski (ex Head of Finance, Pinterest; contratado de cara al IPO)\n├── Chief Legal Officer — Clint Smith\n├── Chief Marketing Officer — Tesa Aragones\n├── Chief People Officer — RR. HH. y cultura organizacional\n└── Jason Citron — Cofundador, Consejo Directivo y asesor del CEO\n\n**Análisis de liderazgo y niveles operativos**\n- **Alcance del CTO:** el cargo de CTO en Discord no se limita a la infraestructura técnica. Vishnevskiy encabeza simultáneamente Ingeniería, Producto, Diseño y Datos, un alcance más propio de un Chief Product & Technology Officer que de un CTO tradicional. Esa amplitud de mando es relevante para cualquier ingeniero que aspire al cargo: exige tanto profundidad técnica en sistemas distribuidos como visión de producto y experiencia de usuario.\n- **Nivel gerencial:** operan directores de ingeniería e infraestructura (por ejemplo, el área de “Backend Infrastructure” que lideró las migraciones de base de datos) y gerentes de producto por dominio (seguridad, plataforma de desarrolladores, monetización).\n- **Nivel operativo:** squads multifuncionales y horizontales —a menudo de tamaño reducido y alta autonomía— ejecutan proyectos concretos, como lo describe una oferta de empleo reciente de Discord para un equipo de seguridad “pequeño, altamente autónomo y horizontalmente integrado”.',
                                hora: '03:00 PM',
                                imagen: null
                            },
                            {
                                id: 'm35',
                                idUsuario: 'u1',
                                texto:'- **Cultura organizacional:** Discord enfatiza la **autonomía y la agilidad** técnica. En sus “principios Wumpus” internos promueven el _debate abierto_ y la toma de decisiones basada en datos, seguido de compromiso total con la decisión (“Transparency is our goal, not consensus”). Se alienta la creatividad (“Progress Over Perfection: haz prototipos rápidos y mejora iterativamente”) y la orientación al usuario (“Deliver for Customers”). La responsabilidad social y la inclusividad aparecen en el principio de “Cultivar Pertenencia”, lo que sugiere un ambiente de trabajo inclusivo donde se parte del supuesto de buena intención. En la práctica, los equipos de ingeniería tienen mucha libertad técnica para innovar (p.ej. elegir entre Rust, Elixir o Go) siempre que se justifique con métricas de calidad. En contraste con modelos muy centralizados, Discord fomenta que los squad decidan sobre prioridades locales, moderadas por objetivos globales.',
                                hora: '03:12 PM',
                                imagen: null
                            },
                            {
                                id: 'm36',
                                idUsuario: 'u1',
                                texto:'- **Sostenibilidad y responsabilidad corporativa (People, Planet, Profit):** Discord publica informes de seguridad y ha dedicado >15% de su plantilla a confiar_Safety_, lo que refleja un foco en el pilar social (People). No divulga oficialmente consumo energético, pero al operar con GCP puede aprovechar iniciativas de Google para energía renovable (desde 2017 GCP es carbono-neutral). En gobernanza ética, destaca el enfoque de “Seguridad” pública: por ejemplo, en Q4-2023 se eliminaron proactivamente el 94% de servidores problemáticos antes de reportes. Laboralmente, después de la pandemia realizaron ajustes de plantilla (despidos 2023) pero mantuvieron beneficios; la organización es conocida por una filosofía de trabajo flexible y programas internos de bienestar. En resumen, Discord busca equilibrar People (usuarios seguros, talento motivado) con Profit (captación de ingresos por Nitro) y plantea iniciativas verdes según estándares del proveedor cloud, aunque los retos de costos energéticos y de moderación masiva persisten.',
                                hora: '03:19 PM',
                                imagen: null

                            },

                        ]
                        


                    }, 
                    {
                        id: 'c7',
                        nombre: '7-Radar de innovación y competitividad',
                        descripcion: 'Análisis del radar de innovación y competitividad de la empresa.',

                        mensajes: [
                            {
                                id: 'm37',
                                idUsuario: 'u1',
                                texto:'**Innovación en la oferta de producto:**\n- **Convergencia sincrónica y asíncrona:** fusión de la persistencia asíncrona del chat tipo IRC con la inmediatez sincrónica de las llamadas de voz y video de ultrabaja latencia, eliminando la fricción de una llamada formal entrante o saliente.\n\n**Innovación en la plataforma (PaaS):**\n- **Ecosistema de ejecución embebido:** evolución de cliente de mensajería a plataforma mediante la **Discord Bot API** y el **Embedded App SDK**. Permite a desarrolladores ejecutar aplicaciones complejas (como juegos en **Unity** o herramientas colaborativas) compiladas a **WebAssembly (Wasm)** dentro de un *sandbox* seguro con **Políticas de Seguridad de Contenido (CSP)** estrictas sobre *iframes*, centralizando la actividad sin salir de la aplicación.\n\n**Innovación en procesos internos e infraestructura:**\n- **Ingeniería de datos de alta concurrencia:** diseño del orquestador propietario **Scylla Control Plane** y topologías de almacenamiento híbrido (**Superdisk** en GCP). Ejecutaron una migración en caliente de billones de mensajes desde Cassandra hacia **ScyllaDB** sin tiempo de inactividad, valiéndose de un patrón de **doble escritura** y **reconciliación retrospectiva** para garantizar consistencia eventual e inmediata.\n\n**Innovación en la obtención de valor (modelo de negocio):**\n- **Monetización sin venta de privacidad:** ruptura frente al modelo extractivo de datos publicitarios tradicional (como Meta), consolidando un esquema **Freemium** basado en microtransacciones cosméticas, límites técnicos ampliados y recompensas comunitarias (**Discord Nitro**, **Server Boosts**).\n El lanzamiento global de Orbs en julio de 2025 es la pieza más reveladora del radar de innovación reciente: en vez de insertar publicidad intrusiva, Discord diseñó un mecanismo de “publicidad recompensada” opcional (Quests patrocinadas, de video y de arena) con una tasa de finalización reportada del 96 %. Es una innovación de captura de valor cuidadosamente calibrada para no romper la promesa histórica de plataforma libre de anuncios agresivos, justo cuando la compañía necesita demostrar a los futuros inversionistas públicos una segunda palanca de ingresos más allá de las suscripciones Nitro. ',
                                hora: '04:00 PM',
                                imagen: null
                            },
                            {
                                id: 'm38',
                                idUsuario: 'u1',
                                texto:'**Aspectos positivos**\n- **Liderazgo técnico en voz/video de ultrabaja latencia:** arquitectura propia sobre **WebRTC**, reforzada con **Rust** para las rutas críticas de rendimiento, que sostiene comunicación en tiempo real para decenas de millones de usuarios concurrentes con una fiabilidad tomada como referencia en conferencias especializadas (**ScyllaDB Summit**, comunidad **Elixir**).\n- **Resistencia al modelo de feed algorítmico:** a diferencia de Instagram, TikTok o X, organiza la información en servidores y canales elegidos activamente por el usuario y no mediante algoritmos de recomendación que maximizan el tiempo en pantalla; esto constituye una decisión de producto y una ventaja de marca frente al escrutinio regulatorio de las redes sociales convencionales.\n- **Efecto de red y lealtad orgánica:** el crecimiento descansa en comunidades autogestionadas —desde servidores de videojuegos hasta herramientas de IA como **Midjourney** y entornos educativos— sin gasto significativo en adquisición pagada (**CAC**), lo que explica la mejora sostenida de márgenes y la consecución de un **EBITDA ajustado positivo** previo al proceso de IPO.\n- **Ecosistema de desarrolladores abierto y gratuito:** millones de bots activos y cientos de miles de desarrolladores mensuales operan sobre una API sin cobro por llamada, superando ampliamente la accesibilidad y amplitud de competidores empresariales como **Slack**, que imponen mayores cobros y restricciones en su marketplace.',
                                hora: '04:17 PM',
                                imagen: null
                            },
{
                            id: 'm39',
                            idUsuario: 'u1',
                            texto: '**Aspectos negativos y vulnerabilidades**\\n- **El dilema de la \\"enshittification\\":** el propio CTO **Stanislav Vishnevskiy** ha reconocido públicamente (en entrevistas con **Engadget** y **Ars Technica** en junio de 2025) que este es un tema que plantea de forma recurrente en reuniones internas, ante el temor de que la presión por monetizar (**publicidad**, **IPO**) degrade la experiencia que impulsó a la plataforma. Es una tensión estructural acentuada por la llegada de un CEO con trayectoria en monetización agresiva de modelos *free-to-play* (**Activision Blizzard**, **King**) y la salida a bolsa en curso.\\n- **Litigios y regulación por seguridad de menores:** desde abril de 2025, fiscales generales de Nueva Jersey, Nevada, Indiana, Arkansas y Texas demandaron a la compañía alegando fallas en la verificación de edad y mitigación de riesgos de depredadores. En mayo de 2026 un tribunal de Texas ordenó medidas cautelares de verificación etaria, y en agosto de 2026 Brasil sumó una demanda federal por cerca de US$97 millones bajo su legislación de protección digital infantil. Múltiples casos individuales se consolidaron en un litigio multidistrito (**MDL**) desde diciembre de 2025; asimismo, el despliegue de verificación global de edad se retrasó hacia la segunda mitad de 2026 por el rechazo de los usuarios a suministrar documentos de identidad, reflejando la fricción directa entre privacidad, experiencia de usuario y cumplimiento normativo.\\n- **Brecha de seguridad de terceros (octubre de 2025):** un proveedor externo de atención al cliente fue comprometido durante casi 58 horas, exponiendo nombres, correos, direcciones IP, metadatos de facturación e imágenes de documentos de identidad de cerca de 70.000 usuarios sometidos a verificación de edad. Aunque la infraestructura central no fue vulnerada, el incidente evidenció el riesgo operativo y reputacional de tercerizar la custodia de datos de identidad en pleno escrutinio regulatorio.\\n- **Costos marginales de infraestructura en tiempo real:** cada minuto de voz y video de ultrabaja latencia consume cómputo, ancho de banda y almacenamiento de escala proporcional a los usuarios simultáneos. La dependencia de un único proveedor en la nube (**GCP**) y de arquitecturas especializadas (**Superdisk**) representa un riesgo de concentración de infraestructura y un costo variable rígido frente a la optimización de márgenes.\\n- **Cicatrices de reestructuración operativa:** el despido del 17 % de la plantilla en enero de 2024 (170 empleados), tras quintuplicar su tamaño desde 2020, constató problemas de sobredimensionamiento y pérdida de eficiencia operativa. El reto técnico y directivo radica en sostener la cadencia de entrega sin recaer en ciclos de sobrecontratación frente a las exigencias de rentabilidad trimestral del mercado público.',
                            hora: '04:30 PM',
                            imagen: null
                        }


                        ]

                    }                
                ],
                

                // 3. USUARIOS (LOS PARTICIPANTES DE TU INFORME)
                // IMPORTANTE: Ahora incluimos la propiedad 'bio' para las tarjetas de perfil.
                usuarios: [
                    { 
                        id: 'u1', // ERES TÚ (El que presenta)
                        nombre: 'Johan Felipe Prado Guerrero ', 
                        iniciales: 'YO', 
                        color: 'violet', 
                        estado: 'online', 
                        rol: 'Aspirante a CTO', 
                        // TU FOTO DE PERFIL: Pon aquí la ruta de tu foto
                        avatar: null,
                        // BIO PARA TU PERFIL
                        bio: 'Estudiante de Ingenieria en Sistemas en la UIS, codigo:2242004 y estudiante de la materia Dirección Empresarial H2.'
                    },
                    { 
                        id: 'u2', 
                        nombre: 'Humam Sakhnini', 
                        iniciales: 'JC', 
                        color: 'gold', 
                        estado: 'online', 
                        rol: 'CEO', 
                        avatar: null, // Si le pones null, se mostrarán las iniciales JC
                        bio: 'consultor, emprendedor y ejecutivo de tecnología y videojuegos que actualmente se desempeña como el director ejecutivo (CEO) de Discord.'
                 },
                    { 
                        id: 'u3', 
                        nombre: 'Angelica diaz', 
                        iniciales: 'AD', 
                        color: 'teal', 
                        estado: 'online', 
                        rol: 'Docente Evaluador', 
                        avatar: null,
                        bio: 'Docente encargada de evaluar la sustentación de este informe de análisis organizacional. Para mas informacion sobre su trayectoria, visite: https://www.linkedin.com/in/angediazgomez/'
                    },
                    {
                        id: 'u4',
                        nombre: 'Jason Citron',
                        iniciales: 'JC',
                        color: 'blue',
                        estado: 'idle',
                        rol: 'Fundador de Discord',
                        avatar: null,
                        bio: 'Fundador y ex-director ejecutivo de Discord. Para más información sobre su trayectoria, visite: https://www.linkedin.com/in/jasoncitron/'

                    },
                    {
                        id: 'u5',
                        nombre: 'Stan Vishnevskiy',
                        iniciales: 'SV',
                        color: 'pink',
                        estado: 'online',
                        rol: 'Co-Fundador de Discord y CTO',
                        avatar: null,
                        bio: 'Co-fundador y ex-director de ingeniería de Discord, actualmente se encuentra desempeñando el rol de CTO. Para más información sobre su trayectoria, visite: https://www.linkedin.com/in/svishnevskiy/'
                    },

                ]
                
            },
    //--------------------------------
    {
            id: 's2', 
            nombre: 'Proyección Profesional: Rol de CTO', 
            iniciales: 'PP', 
            icono: null, 
            canales: [
                { 
                    id: 'c_t1', 
                    nombre: 'Perfil del cargo:', 
                    descripcion: 'Análisis del perfil del cargo de CTO y sus responsabilidades.',
                   // tituloBienvenida: 'Zona de Pruebas',
                    //subtituloBienvenida: 'Este es un servidor secundario pre-cargado.',
                    mensajes: [
                        { 
                            id: 'm_test1', 
                            idUsuario: 'u5', 
                            texto: '**referencia Stanislav Vishnevskiy**\n Cofundador y CTO de Discord (desde 2015).** Previo a Discord fundó **Guildwork** y desarrolló infraestructura en **GREE** y **Kabam** con base técnica en **Python, Erlang y MongoDB** (antecedente directo del backend en Erlang/Elixir de la plataforma).\\n\\nBajo un mandato inusualmente amplio, lidera **Ingeniería, Producto, Diseño y Datos**. Su misión gerencial consiste en sostener la infraestructura de tiempo real a escala masiva mientras navega la transición a empresa pública (**IPO**), nuevos esquemas de monetización (**Orbs**, publicidad) y el cumplimiento regulatorio en verificación y seguridad infantil.', 
                            hora: '11:00 AM', 
                            imagen: 'assets/images/Stanislav_Vishnevskiy.png',
                            tipo: 'normal'
                        },
                        {
                            id: 'm_test2',
                            idUsuario: 'u5',
                            texto: '**Funciones directivas clave**\\n- **Roadmap tecnológico:** decidir qué apostar (verificación de edad global, **Social SDK** para videojuegos externos, expansión de **Activities**) frente a qué desechar, con el precedente de que Discord ha cancelado iniciativas completas (tienda de juegos en 2019, *wallet* cripto en 2021) cuando la señal de mercado fue negativa.\\n- **Resiliencia y escalabilidad de infraestructura:** sostener decisiones como la migración de **Cassandra** a **ScyllaDB** o la extensión de **Elixir** con **Rust**, que exigen justificar inversión técnica de largo plazo ante un C-Suite enfocado en el trimestre previo al **IPO**.\\n- **Ciberseguridad y riesgo de proveedores:** tras la brecha de terceros de 2025, la gestión de riesgo de proveedores externos (*vendor risk management*) pasa a ser una función central del CTO, no un tema exclusivamente legal.\\n- **Balance entre deuda técnica e innovación comercial:** decidir cuánta capacidad de ingeniería se destina a robustecer los sistemas núcleo (mensajería, moderación, identidad) frente a construir nuevas fuentes de ingreso (**Orbs**, publicidad) que el CEO y el CFO necesitan mostrar a los futuros inversionistas públicos.\\n- **Liderazgo de equipos de ingeniería remotos:** sostener una cultura de autonomía y equipos pequeños de alto apalancamiento (*remote-first*) a medida que la organización crece y se somete a la disciplina de reporte propia de una empresa cotizada.',
                            hora: '11:05 AM',
                            imagen: null
                        },
                        {
                            id: 'm_test3',
                            idUsuario: 'u5',
                            texto: '**Competencias requeridas**\\n- **Conceptuales y de diseño de sistemas complejos:** comprensión profunda de sistemas distribuidos, bases de datos **NoSQL** a escala de billones de registros, protocolos de tiempo real (**WebRTC**) y arquitecturas híbridas multi-lenguaje (**Elixir**, **Rust**, **Python**, **Go**).\\n- **Toma de decisiones bajo incertidumbre:** elegir, con datos incompletos, entre migrar o no una base de datos crítica, lanzar o retrasar una función de monetización, o priorizar cumplimiento regulatorio sobre velocidad de producto.\\n- **Destrezas interpersonales y de negociación con el C-Suite:** un CTO que además lidera Producto y Diseño necesita traducir restricciones técnicas en lenguaje de negocio para un CEO orientado a resultados de mercado y un CFO enfocado en la narrativa financiera del **IPO**.\\n- **Dominio del inglés técnico y de negocios:** indispensable dado que la ingeniería, el liderazgo ejecutivo y la comunidad de desarrolladores de Discord operan casi en su totalidad en inglés.',
                            hora: '11:10 AM',
                            imagen: null
                        }                       

                    ] 
                },
                {
                    id: 'c_t2',
                    nombre: 'Plan de desarrollo profesional: CTO', 
                    descripcion: 'Propuesta de plan de desarrollo profesional para aspirar al cargo de CTO.',
                    mensajes: [
                        {
                            id: 'm_test4',
                            idUsuario: 'u1',
                            texto: '**Plan de carrera profesional**\\n\\n**Corto plazo (1–3 años)**\\n- Terminar el pregrado en **Ingeniería de Sistemas en la UIS** con énfasis en bases de datos, redes y sistemas distribuidos.\\n- Alcanzar fluidez alta en **inglés técnico**.\\n- Construir un portafolio público (**bots de Discord**, contribuciones *open-source* en **Elixir/Rust/Go**).\\n- Realizar una práctica o pasantía en un equipo de **backend/infraestructura**.\\n\\n**Mediano plazo (4–8 años)**\\n- Trabajar como ingeniero backend o de infraestructura en una empresa de software a escala (*startup* en crecimiento o *Big Tech*).\\n- Especializarse en **sistemas en tiempo real**, **bases de datos distribuidas** y **arquitectura cloud** (GCP/AWS).\\n- Asumir un primer rol de liderazgo técnico (*tech lead*) coordinando un equipo pequeño y de alto impacto.\\n\\n**Largo plazo (> 8 años)**\\n- Escalar hacia **Engineering Manager** y luego **Director de Infraestructura** o **VP de Ingeniería** en una plataforma de comunicación o comunidad a gran escala.\\n- Desarrollar visión de producto y negociación ejecutiva.\\n- Aspirar a un rol de **CTO** —en Discord o en una plataforma comparable— con mandato sobre ingeniería, producto y datos, siguiendo el patrón de trayectoria de **Vishnevskiy**: líder técnico temprano que crece junto con la escala de la organización.',
                            hora: '11:15 AM',
                            imagen: null
                        }


                    ]
                },
                {
                    id: 'c_t3',
                    nombre: 'Conclusiones', 
                    descripcion: 'Las conclusiones del análisis.',
                    mensajes: [
                        {
                        id: 'm_test5',
                            idUsuario: 'u1',
                            texto: '**Argumento de cierre: ¿por qué Discord y no una Big Tech tradicional?**\\n\\nGoogle, Meta o Microsoft ofrecen escala, recursos y estabilidad, pero un ingeniero que aspire a moldear la arquitectura completa de un producto —no solo un componente dentro de una organización de decenas de miles de personas— encuentra en Discord algo distinto: una compañía todavía lo bastante pequeña (menos de 1.000 empleados) para que las decisiones de infraestructura de un puñado de ingenieros determinen la experiencia de cientos de millones de usuarios, y lo bastante grande para exigir el rigor técnico de sistemas a escala de billones de mensajes. Es, en el lenguaje de la cadena de valor, una organización donde la línea entre “actividad primaria” y “decisión estratégica” es mucho más corta que en una Big Tech madura.\\n\\nA esto se suma un momento histórico específico: Discord atraviesa, en 2026, la tensión más aguda de su existencia —monetización, IPO y crisis regulatoria de seguridad infantil ocurriendo al mismo tiempo— lo cual convierte al cargo de CTO en un puesto de decisiones de alto riesgo y alta visibilidad, no de mantenimiento de un sistema ya maduro. Para un profesional que busca liderar tecnológicamente una organización de esta escala, esa tensión es precisamente la oportunidad: pocas plataformas ofrecen, en una sola etapa de carrera, el reto simultáneo de escalar infraestructura, defender la integridad de un producto frente a la presión de monetizar, y reconstruir la confianza de una comunidad global bajo escrutinio regulatorio.',
                            hora: '11:20 AM',
                            imagen: null
                        },
{
    id: 'm_test6',
    idUsuario: 'u1',
    texto: '**Conclusiones finales**\\n\\n**Discord** es un caso atípico de escalamiento: una empresa de menos de mil empleados que sostiene la comunicación en tiempo real de más de 200 millones de personas al mes, apoyada en decisiones de arquitectura poco convencionales —**Elixir** para concurrencia, **Rust** para rendimiento crítico, **ScyllaDB** para persistencia masiva— y en una cultura de autonomía técnica que le permitió moverse más rápido que competidores mucho mejor capitalizados.\\n\\nEse mismo modelo enfrenta hoy su prueba más exigente. La transición hacia empresa pública (**IPO**) obliga a diversificar ingresos sin sacrificar la confianza de la comunidad (el riesgo de *\\"enshittification\\"* que el propio **CTO** reconoce abiertamente), mientras una ola de litigios y regulación por seguridad infantil —agravada por una brecha de datos de terceros en 2025— exige transformar procesos de identidad y moderación bajo presión pública y judicial. La forma en que el área técnica, liderada por el **CTO**, resuelva simultáneamente estos tres frentes —monetización responsable, resiliencia de infraestructura y cumplimiento regulatorio— determinará el éxito de la salida a bolsa sin desvirtuar el producto original.\\n\\nPara un estudiante de **Ingeniería de Sistemas**, Discord ofrece un caso de estudio integral de dirección empresarial aplicada a la tecnología: evidencia cómo una migración de base de datos, una política de verificación de edad o un esquema de monetización trascienden el código para convertirse en decisiones estratégicas con impacto regulatorio, financiero y reputacional. Esa visión sistémica define la diferencia entre un ejecutor técnico y un verdadero **CTO**.',
    hora: '11:25 AM',
    imagen: null
}
                    ]
                },
                {
                    id: 'c_t4',
                    nombre: 'Referencias y fuentes', 
                    descripcion: 'Listado de referencias y fuentes utilizadas para el análisis.',
                    mensajes: [{
                        id: 'm_test7',
                        idUsuario: 'u1',
                        texto:'**Obras citadas**\\n- **Discord IPO: Status, Timeline & Valuation 2026:** https://www.techstackipo.com/ipo/discord\\n- **$20B Discord — How It Makes Money (2026) - Value Add VC:** https://valueaddvc.com/blog/how-does-discord-make-money-nitro-subscriptions-server-boosts-and-the-20b-valuation-breakdown\\n- **15 Venture-Backed Consumer Tech Companies Defining 2026:** https://www.peony.ink/blog/venture-backed-consumer-tech-companies\\n- **Discord revenue, valuation & funding | Sacra:** https://sacra.com/c/discord/\\n- **Discord IPO Filing Shows Path to $725M Revenue Growth:** https://www.accio-ai.com/blog/discord-ipo-filing-shows-path-to-725m-revenue-growth\\n- **Discord Statistics 2026: Users, Revenue & Server Data:** https://www.shanethegamer.com/research/discord-statistics/\\n- **Discord Revenue Statistics 2026: Growth, ARPU, And Funding:** https://resourcera.com/data/social/discord-revenue/\\n- **Discord Statistics 2026: Users, Revenue & Growth Data - AffMaven:** https://affmaven.com/discord-statistics/\\n- **Discord 2026: 656M Users, 259M MAU, $725M ARR, and Why:** https://www.programming-helper.com/tech/discord-2026-656-million-users-725-million-arr-community-python\\n- **Discord Statistics 2026: Active Users, Nitro, Bots & Security:** https://sqmagazine.co.uk/discord-statistics/\\n- **Discord Statistics 2026: Users, Revenue, and Engagement Data:** https://www.kristian-larsen.com/info/discord-statistics/\\n- **Senator Dick Durbin (QFR Citron):** https://www.judiciary.senate.gov/download/2024-01-31-qfr-responses-citron\\n- **How does discord make money in 2026? Full breakdown:** https://techpoint.africa/guide/how-does-discord-make-money/\\n- **Architecture | ElixIRCd:** https://www.elixircd.org/core-concepts/architecture/\\n- **Tracing Discord\'s Elixir Systems (Without Melting Everything):** https://discord.com/blog/tracing-discords-elixir-systems-without-melting-everything\\n- **Real time communication at scale with Elixir at Discord:** https://elixir-lang.org/blog/2020/10/08/real-time-communication-at-scale-with-elixir-at-discord/\\n- **Opus Codec Explained: How It Works, Bitrate, Quality & Use Cases:** https://cloudinary.com/guides/video-formats/opus-codec\\n- **WebRTC LLM Streaming: Real-Time Voice Agent Infrastructure:** https://www.spheron.network/blog/webrtc-llm-streaming-voice-agent-gpu-cloud/\\n- **Discord Voice Chat - Learning Module | OneNoughtOne:** https://www.onenoughtone.com/learning-path/system-design-hld/learning/discord-voice-chat/4\\n- **Voice AI T1: The Landscape, Frameworks, and Metrics for... - Medium:** https://medium.com/@mjgmario/voice-ai-t1-the-landscape-frameworks-and-metrics-for-voice-ai-07b693f36d97\\n- **Building Real-Time P2P Communication: A Deep Dive into WebRTC:** https://akashsahani2001.medium.com/building-real-time-p2p-communication-a-deep-dive-into-webrtc-ice-stun-and-turn-e645492230c5\\n- **How Discord Moved Trillions of Messages to ScyllaDB:** https://www.hellointerview.com/learn/system-design/in-the-wild/discord-messages-scylladb\\n- **Discord\'s Journey from Cassandra to ScyllaDB with Rust-Powered:** https://seifrajhi.github.io/blog/discord-cassandra-to-scylladb/\\n- **How Discord Stores TRILLIONS of Messages - Medium:** https://mohammedvaghjipurwala.medium.com/how-discord-stores-trillions-of-messages-27906ef2a6ff\\n- **NVMe Storage for Database Optimization - simplyblock:** https://simplyblock.io/blog/nvme-database-optimization/\\n- **Discord\'s Real-Time Database Analysis | PDF - Scribd:** https://www.scribd.com/document/933946252/Case-Study-DBMS\\n- **How Discord Stores Trillions of Messages:** https://discord.com/blog/how-discord-stores-trillions-of-messages\\n- **Why Discord Moved From Cassandra to ScyllaDB to Store Trillions:** https://medium.com/@amit.agarwal0422/how-discord-stores-trillions-of-messages-524865d20ffc\\n- **Discord Quests — Ad Format, Completion Rates & Pricing - MythOS:** https://mythos.one/me/brianswichkow/5291b2\\n- **Discord Quests FAQ:** https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ\\n- **Digital Services Act for Online Communities - Aiba.ai:** https://aiba.ai/digital-services-act-for-online-communities/\\n- **Discord Stats 2026: Users, Revenue & Demographics - CommentGrid:** https://commentgrid.com/blog/discord-statistics\\n- **The DSA is Live! So… How are Companies Adapting?:** https://www.integrityinstitute.org/blog/the-dsa-is-live-so-how-are-companies-adapting\\n- **How Discord Migrated Trillions of Messages to ScyllaDB:** https://thenewstack.io/how-discord-migrated-trillions-of-messages-to-scylladb/\\n- **How Discord Automates ScyllaDB Clusters at Scale:** https://discord.com/blog/how-discord-automates-scylladb-clusters-at-scale\\n- **How Discord Automates Database Operations at Scale:** https://www.slideshare.net/slideshow/how-discord-automates-database-operations-at-scale-by-ethan-donowitz-peter-french/286349510\\n- **How Discord Scaled Elixir to 5,000,000 Concurrent Users:** https://discord.com/blog/how-discord-scaled-elixir-to-5-000-000-concurrent-users\\n- **Sql Vs Nosql: How Slack And Discord Store Trillions Of Messages:** https://garychang.org/2023/10/19/SQL-vs-NoSQL-How-Slack-and-Discord-store-trillions-of-messages.html\\n- **What Are the Best Tools for Building a Discord-Like App?:** https://getstream.io/blog/tools-discord-app/\\n- **Using Rust to Scale Elixir for 11 Million Concurrent Users - Discord:** https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users\\n- **Interfacing Elixir with Rust to Improve Performance: Discord\'s Story:** https://www.infoq.com/news/2019/07/rust-elixir-performance-at-scale/\\n- **Build a WebRTC Mobile App 2026: iOS, Android, Flutter SDKs:** https://antmedia.io/how-to-build-a-webrtc-mobile-app/\\n- **Senate Judiciary Hearing about Online Safety - CWLA:** https://www.cwla.org/senate-judiciary-hearing-about-online-safety/\\n- **Zuckerberg tells parents of social media victims at Senate hearing:** https://www.theguardian.com/us-news/2024/jan/31/tiktok-meta-x-congress-hearing-child-sexual-exploitation\\n- **BIG TECH AND THE ONLINE CHILD SEXUAL EXPLOITATION:** https://www.govinfo.gov/content/pkg/CHRG-118shrg57444/html/CHRG-118shrg57444.htm\\n- **IT lexicon · 5700+ terms explained in plain English | Thern AI Solutions:** https://wiki.thern.io/en/\\n- **Digital Services Act - Information on Average Monthly Active (EU):** https://support.discord.com/hc/en-us/articles/12477677109143-Digital-Services-Act-Information-on-Average-Monthly-Active-Recipients-in-the-European-Union\\n- **Embedded App SDK Reference - Documentation - Discord:** https://docs.discord.com/developers/developer-tools/embedded-app-sdk\\n- **Creating a Unity Discord Activity - Supertorio Games:** https://www.supertorio.dev/creating-a-unity-discord-activity/\\n- **We got a Flutter Web game working in Discord (Reddit):** https://www.reddit.com/r/GameDevelopment/comments/1qkyrhu/we_got_a_flutter_web_game_working_in_discord/\\n- **How Uno works on WebAssembly Native:** https://platform.uno/docs/articles/uno-development/uno-internals-wasm.html\\n- **Bringing DAVE to All Discord Platforms:** https://discord.com/blog/bringing-dave-to-all-discord-platforms\\n- **Meet DAVE: Discord\'s New End-to-End Encryption for Audio & Video:** https://discord.com/blog/meet-dave-e2ee-for-audio-video\\n- **Discord Introduces DAVE Protocol for End-to-End Encrypted Audio:** https://www.redsecuretech.co.uk/blog/post/discord-introduces-dave-protocol-for-end-to-end-encrypted-audio-and-video-calls/174\\n- **Strong End-to-End Encryption Comes to Discord Calls - EFF:** https://www.eff.org/deeplinks/2024/09/discords-end-end-encryption-voice-and-video-step-forward-privacy-all\\n- **Every Voice and Video Call on Discord Is Now End-to-End Encrypted:** https://discord.com/blog/every-voice-and-video-call-on-discord-is-now-end-to-end-encrypted',
                        hora: '11:30 AM',
                        imagen: null
                        
                    }]
                }
            ],
            usuarios: [
                { 
                    id: 'u1', // Mantienes tu usuario principal aquí para poder interactuar
                    nombre: 'Johan Felipe Prado Guerrero', 
                    iniciales: 'YO', 
                    color: 'violet', 
                    estado: 'online', 
                    rol: 'Administrador', 
                    avatar: null,
                    bio: 'Estudiante y creador del entorno.'
                },
             {
                        id: 'u5',
                        nombre: 'Stan Vishnevskiy',
                        iniciales: 'SV',
                        color: 'pink',
                        estado: 'online',
                        rol: 'Co-Fundador de Discord y CTO',
                        avatar: null,
                        bio: 'Co-fundador y ex-director de ingeniería de Discord, actualmente se encuentra desempeñando el rol de CTO. Para más información sobre su trayectoria, visite: https://www.linkedin.com/in/svishnevskiy/'
                    },
            ]
        }
    ] // Fin del arreglo de servidores
}; // Fin de datosSimulados
    
    //-------------------------------

    /* 
       =========================================================================
                           FIN DE LOS DATOS DE TU INFORME 
       =========================================================================
    */
   // Procesa sintaxis básica de Markdown estilo Discord de forma segura
// Procesa Markdown: listas (- ), negrita (**), subrayado (__), cursiva (*) y saltos (\n)
function formatearTextoDiscord(texto) {
    if (!texto) return '';

    // 1. Reemplazar viñetas antes de escapar
    let procesado = texto.replace(/(?:^|\n)-\s+(.+)/g, '\n<li class="chat-list-item">$1</li>');

    // 2. Sanitizar caracteres especiales
    let limpio = escaparHTML(procesado)
        .replace(/&lt;li class="chat-list-item"&gt;(.*?)&lt;\/li&gt;/g, '<li class="chat-list-item">$1</li>');

    // 3. Hipervínculos seguros
    // Formato Markdown: [Texto visible](https://enlace.com)
    limpio = limpio.replace(/\[(.*?)\]\((https?:\/\/[^\s\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>');

    // Enlaces directos en texto: https://enlace.com (sin tocar los ya envueltos en <a>)
    limpio = limpio.replace(/(^|[^">])(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$2</a>');

    // 4. Formatos Markdown restantes
    limpio = limpio
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.*?)__/g, '<u>$1</u>')
        .replace(/~~(.*?)~~/g, '<del>$1</del>')
        .replace(/`([^`]+)`/g, '<code class="chat-code">$1</code>')
        .replace(/(^|[^\*])\*([^\*]+)\*([^\*]|$)/g, '$1<em>$2</em>$3')
        .replace(/\\n/g, '<br>')
        .replace(/\n/g, '<br>');

    return limpio;
}
    let servidorActualId = 's1';
    let canalActualId = 'c1';

    function generarId(prefijo) {
        return prefijo + '_' + Date.now() + Math.floor(Math.random() * 1000);
    }

    function escaparHTML(texto) {
        if (!texto) return '';
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }

    function actualizarTodaLaUI() {
        renderizarServidores();
        actualizarCabeceraServidor();
        renderizarCanales();
        renderizarUsuarios();
        renderizarMensajes();
    }

    function renderizarServidores() {
        const contenedor = document.getElementById('server-stack');
        contenedor.innerHTML = ''; 

        const sep1 = document.createElement('div');
        sep1.className = 'server-divider';
        contenedor.appendChild(sep1);

        datosSimulados.servidores.forEach(srv => {
            const btn = document.createElement('button');
            btn.className = `server-dot ${srv.id === servidorActualId ? 'is-active' : ''}`;
            btn.title = srv.nombre;

            if (srv.icono) {
                btn.innerHTML = `<img src="${escaparHTML(srv.icono)}" alt="${escaparHTML(srv.nombre)}" class="server-img" onerror="this.outerHTML='${escaparHTML(srv.iniciales)}'">`;
            } else {
                btn.textContent = srv.iniciales;
            }

            btn.addEventListener('click', () => cambiarServidor(srv.id));
            contenedor.appendChild(btn);
        });

        const sep2 = document.createElement('div');
        sep2.className = 'server-divider';
        contenedor.appendChild(sep2);

        const addBtn = document.createElement('button');
        addBtn.className = 'server-dot';
        addBtn.style.color = '#23a55a';
        addBtn.title = 'Añadir Servidor';
        addBtn.innerHTML = '<i data-lucide="plus" width="24"></i>';
        addBtn.addEventListener('click', abrirModalCrearServidor);
        contenedor.appendChild(addBtn);

        lucide.createIcons();
    }

    function actualizarCabeceraServidor() {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        if(!servidor) return;
        
        document.getElementById('ui-server-name').textContent = servidor.nombre;
        
        const actionsDiv = document.getElementById('server-actions');
        actionsDiv.innerHTML = ''; 
        
        const btnEdit = document.createElement('button');
        btnEdit.className = 'action-btn';
        btnEdit.title = 'Editar Servidor';
        btnEdit.onclick = abrirModalEditarServidor;
        btnEdit.innerHTML = '<i data-lucide="pencil" width="16"></i>';

        const btnDel = document.createElement('button');
        btnDel.className = 'action-btn danger';
        btnDel.title = 'Eliminar Servidor';
        btnDel.onclick = () => eliminarServidor(servidor.id);
        btnDel.innerHTML = '<i data-lucide="trash-2" width="16"></i>';

        actionsDiv.appendChild(btnEdit);
        actionsDiv.appendChild(btnDel);
    }

    function renderizarCanales() {
        const contenedor = document.getElementById('channel-list');
        contenedor.innerHTML = ''; 

        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        
        if (!servidor || servidor.canales.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.style.padding = '10px';
            emptyState.style.color = '#949ba4';
            emptyState.style.fontSize = '13px';
            emptyState.textContent = 'No hay canales. Crea uno.';
            contenedor.appendChild(emptyState);
            return;
        }

        servidor.canales.forEach(canal => {
            const btn = document.createElement('button');
            btn.className = `channel-button ${canal.id === canalActualId ? 'is-active' : ''}`;
            
            btn.innerHTML = `
                <i data-lucide="hash" width="20"></i>
                <span style="flex:1;">${escaparHTML(canal.nombre)}</span>
            `;

            const actions = document.createElement('div');
            actions.className = 'crud-actions';
            actions.onclick = (e) => e.stopPropagation(); 

            const btnEdit = document.createElement('button');
            btnEdit.className = 'action-btn';
            btnEdit.title = 'Editar';
            btnEdit.onclick = () => abrirModalEditarCanal(canal.id);
            btnEdit.innerHTML = '<i data-lucide="pencil" width="14"></i>';

            const btnDel = document.createElement('button');
            btnDel.className = 'action-btn danger';
            btnDel.title = 'Eliminar';
            btnDel.onclick = () => eliminarCanal(canal.id);
            btnDel.innerHTML = '<i data-lucide="trash-2" width="14"></i>';

            actions.appendChild(btnEdit);
            actions.appendChild(btnDel);
            btn.appendChild(actions);

            btn.addEventListener('click', () => cambiarCanal(canal.id));
            contenedor.appendChild(btn);
        });

        lucide.createIcons();
    }

    function renderizarUsuarios() {
        const contenedor = document.getElementById('dynamic-users-container');
        contenedor.innerHTML = ''; 

        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        if (!servidor) return;

        const online = servidor.usuarios.filter(u => u.estado !== 'offline');
        const offline = servidor.usuarios.filter(u => u.estado === 'offline');

        if (online.length > 0) {
            const labelOnline = document.createElement('div');
            labelOnline.className = 'role-label';
            labelOnline.textContent = `Conectados — ${online.length}`;
            contenedor.appendChild(labelOnline);
            online.forEach(u => contenedor.appendChild(crearNodoUsuario(u)));
        }

        if (offline.length > 0) {
            const labelOffline = document.createElement('div');
            labelOffline.className = 'role-label';
            labelOffline.textContent = `Desconectados — ${offline.length}`;
            contenedor.appendChild(labelOffline);
            offline.forEach(u => contenedor.appendChild(crearNodoUsuario(u)));
        }
        
        lucide.createIcons();
    }

    function crearNodoUsuario(usuario) {
        const div = document.createElement('div');
        div.className = 'member';
        
        const esMiUsuario = (usuario.id === miUsuarioId);
        
        const avatarHTML = usuario.avatar 
            ? `<img src="${escaparHTML(usuario.avatar)}" alt="Avatar" class="avatar-img" onerror="this.outerHTML='${escaparHTML(usuario.iniciales)}'">`
            : usuario.iniciales;

        div.innerHTML = `
            <div class="member-left">
                <div class="member-avatar avatar-${usuario.color} status-${usuario.estado}">
                    ${avatarHTML}
                </div>
                <div style="min-width:0;">
                    <div class="member-name">${escaparHTML(usuario.nombre)}</div>
                    <div class="member-sub">${escaparHTML(usuario.rol)}</div>
                </div>
            </div>
        `;

        // CLIC PARA ABRIR PERFIL
        div.addEventListener('click', () => abrirPerfil(usuario.id));

        if (!esMiUsuario) {
            const acciones = document.createElement('div');
            acciones.className = 'crud-actions';

            const btnEdit = document.createElement('button');
            btnEdit.className = 'action-btn';
            btnEdit.title = 'Editar Usuario';
            btnEdit.onclick = (e) => { e.stopPropagation(); abrirModalEditarUsuario(usuario.id); };
            btnEdit.innerHTML = '<i data-lucide="pencil" width="14"></i>';

            const btnDel = document.createElement('button');
            btnDel.className = 'action-btn danger';
            btnDel.title = 'Eliminar Usuario';
            btnDel.onclick = (e) => { e.stopPropagation(); eliminarUsuario(usuario.id); };
            btnDel.innerHTML = '<i data-lucide="trash-2" width="14"></i>';

            acciones.appendChild(btnEdit);
            acciones.appendChild(btnDel);
            div.appendChild(acciones);
        }

        return div;
    }

    function renderizarMensajes() {
        const contenedor = document.getElementById('messages-container');
        const input = document.getElementById('message-input');
        const btnEnviar = document.getElementById('btn-enviar');
        const btnAdjuntar = document.getElementById('btn-adjuntar'); 
        
        contenedor.innerHTML = '';

        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        if (!servidor || !canalActualId) {
            document.getElementById('ui-channel-name').textContent = 'Sin Selección';
            document.getElementById('ui-channel-desc').textContent = '';
            input.disabled = true;
            btnEnviar.disabled = true;
            btnAdjuntar.disabled = true;
            input.placeholder = "No hay canal seleccionado";
            return;
        }

        const canal = servidor.canales.find(c => c.id === canalActualId);
        if (!canal) return;

        document.getElementById('ui-channel-name').textContent = canal.nombre;
        document.getElementById('ui-channel-desc').textContent = canal.descripcion;
        
        input.disabled = false;
        btnEnviar.disabled = false;
        btnAdjuntar.disabled = false;
        input.placeholder = `Enviar mensaje a #${canal.nombre}`;

        // Pantalla de Bienvenida al canal
        // Pantalla de Bienvenida al canal
        // Pantalla de Bienvenida al canal
        const tituloBig = canal.tituloBienvenida ? canal.tituloBienvenida : `¡Te damos la bienvenida a #${canal.nombre}!`;
        const subBig = canal.subtituloBienvenida ? canal.subtituloBienvenida : 'Este es el inicio de la conversación.';

        contenedor.innerHTML = `
            <div style="padding: 0 20px 20px; border-bottom: 1px solid var(--line); margin-bottom: 10px;">
                <h1 style="font-size: 32px; color: white; margin: 0 0 8px;">${escaparHTML(tituloBig)}</h1>
                <div class="welcome-subtitle" style="color: #b5bac1; margin:0; line-height: 1.5;">${formatearTextoDiscord(subBig)}</div>
            </div>
        `;

canal.mensajes.forEach(msg => {
    // Verificar si es un mensaje del sistema
    if (msg.tipo === 'sistema') {
        const sysDiv = document.createElement('div');
        sysDiv.style.padding = '2px 16px';
        sysDiv.style.marginTop = '17px';
        sysDiv.style.display = 'flex';
        sysDiv.style.alignItems = 'center';
        sysDiv.innerHTML = `
            <i data-lucide="arrow-right-to-line" width="18" style="color: #23a55a; margin-right: 10px;"></i>
            <span style="color: #80848e; font-size: 14px; font-weight: 500;">${escaparHTML(msg.texto)}</span>
        `;
        contenedor.appendChild(sysDiv);
        return; // Salir de esta iteración para no ejecutar el código de abajo
    }

    // SI NO ES DEL SISTEMA, EJECUTA TU CÓDIGO NORMAL:
    const usuarioObj = servidor.usuarios.find(u => u.id === msg.idUsuario) 
                       || { id: 'unknown', nombre: 'Usuario Borrado', color: 'gray', iniciales: '??', avatar: null };

    const avatarHTML = usuarioObj.avatar 
        ? `<img src="${escaparHTML(usuarioObj.avatar)}" alt="Avatar" class="avatar-img" onerror="this.outerHTML='${escaparHTML(usuarioObj.iniciales)}'">`
        : usuarioObj.iniciales;
    
    const imagenAdujntaHTML = msg.imagen 
        ? `<img src="${escaparHTML(msg.imagen)}" class="message-attachment" alt="Imagen Adjunta" onerror="this.src='https://placehold.co/400x300/1b1d21/b5bac1?text=Imagen+No+Encontrada'">` 
        : '';

    const msgDiv = document.createElement('article');
    msgDiv.className = 'chat-message';
    msgDiv.innerHTML = `
        <div class="avatar avatar-${usuarioObj.color}" onclick="abrirPerfil('${usuarioObj.id}')" title="Ver perfil">
            ${avatarHTML}
        </div>
        <div class="message-copy">
            <div class="message-meta">
                <span class="message-name" style="color: var(--color-${usuarioObj.color});" onclick="abrirPerfil('${usuarioObj.id}')" title="Ver perfil">${escaparHTML(usuarioObj.nombre)}</span>
                <span class="message-time">${escaparHTML(msg.hora)}</span>
            </div>
            ${msg.texto ? `<p class="message-body">${formatearTextoDiscord(msg.texto)}</p>` : ''}
            ${imagenAdujntaHTML}
        </div>
    `;
    contenedor.appendChild(msgDiv);
});

        contenedor.scrollTop = contenedor.scrollHeight;
    }

    function cambiarServidor(nuevoId) {
        servidorActualId = nuevoId;
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        if (!servidor) return;

        if (servidor.canales.length > 0) {
            canalActualId = servidor.canales[0].id;
        } else {
            canalActualId = null;
        }
        actualizarTodaLaUI();
    }

    function cambiarCanal(nuevoId) {
        canalActualId = nuevoId;
        renderizarCanales();
        renderizarMensajes();
    }

    document.getElementById('message-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('message-input');
        const texto = input.value.trim();
        
        if (!texto || !canalActualId) return;

        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        const canal = servidor.canales.find(c => c.id === canalActualId);
        const horaFormateada = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        canal.mensajes.push({
            id: generarId('m'),
            idUsuario: miUsuarioId,
            texto: texto,
            hora: `Hoy a las ${horaFormateada}`,
            imagen: null
        });

        input.value = '';
        renderizarMensajes();
    });

    /* =========================================================================
       NUEVO: FUNCIONES DEL PERFIL DE USUARIO
       ========================================================================= */
    function abrirPerfil(idUsuario) {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        const usuario = servidor.usuarios.find(u => u.id === idUsuario);
        if (!usuario) return; // Si es un "Usuario Borrado" no abrimos nada

     const coloresMap = { 
     violet: '#bd8cff', gold: '#f0b232', teal: '#26c6a5', gray: '#b5bac1',
     blue: '#5865F2', red: '#da373c', green: '#23a55a', orange: '#e67e22', pink: '#eb459e' 
        };
        const estadosMap = { online: '#23a55a', idle: '#f0b232', dnd: '#f23f42', offline: '#80848e' };
        
        const colorFondo = coloresMap[usuario.color] || '#5865f2';
        document.getElementById('profile-banner').style.backgroundColor = colorFondo;
        document.getElementById('profile-status').style.backgroundColor = estadosMap[usuario.estado] || '#80848e';
        
        const avatarContainer = document.getElementById('profile-avatar-container');
        if (usuario.avatar) {
            // Si tiene avatar real, inyectamos la imagen y manejamos el error (fallback)
            avatarContainer.innerHTML = `<img src="${escaparHTML(usuario.avatar)}" alt="Avatar" onerror="this.outerHTML='${escaparHTML(usuario.iniciales)}'; this.parentElement.style.backgroundColor='${colorFondo}'; this.parentElement.style.color='#111214';">`;
            avatarContainer.style.backgroundColor = 'transparent';
        } else {
            // Si no tiene avatar, inyectamos las iniciales y usamos el color
            avatarContainer.innerHTML = escaparHTML(usuario.iniciales);
            avatarContainer.style.backgroundColor = colorFondo;
            avatarContainer.style.color = '#111214';
        }

        document.getElementById('profile-name').textContent = usuario.nombre;
        document.getElementById('profile-role').textContent = usuario.rol || 'Miembro';
        document.getElementById('profile-bio').innerHTML = formatearTextoDiscord(usuario.bio || 'Esta persona aún no ha escrito una descripción sobre sí misma.');

        document.getElementById('profile-modal').classList.add('is-active');
        lucide.createIcons(); // Refrescar el botón de la X
    }

    function cerrarPerfil() {
        document.getElementById('profile-modal').classList.remove('is-active');
    }

    /* =========================================================================
       SISTEMA DE MODALES (CRUD)
       ========================================================================= */
    const modal = document.getElementById('generic-modal');
    
    function prepararModal(titulo, descripcion, htmlContenido, funcionSubmit) {
        document.getElementById('modal-title').textContent = titulo;
        document.getElementById('modal-desc').textContent = descripcion;
        document.getElementById('modal-body').innerHTML = htmlContenido;
        
        const submitBtn = document.getElementById('modal-submit-btn');
        const nuevoBtn = submitBtn.cloneNode(true);
        submitBtn.parentNode.replaceChild(nuevoBtn, submitBtn);
        
        nuevoBtn.addEventListener('click', funcionSubmit);
        modal.classList.add('is-active');
        
        const primerInput = document.querySelector('#modal-body input');
        if (primerInput) primerInput.focus();
    }

    function cerrarModal() {
        modal.classList.remove('is-active');
    }

    function abrirModalCrearServidor() {
        const html = `
            <div class="modal-field"><label>Nombre del Servidor</label><input type="text" id="input-nombre-servidor" placeholder="Ej: Amigos Gaming" autocomplete="off"></div>
            <div class="modal-field"><label>URL de Imagen (Opcional)</label><input type="text" id="input-icono-servidor" placeholder="Ej: assets/images/logo.png" autocomplete="off"></div>
        `;
        prepararModal('Crear servidor', 'Tu servidor es donde te reúnes con otros.', html, () => {
            const nombre = document.getElementById('input-nombre-servidor').value.trim();
            const icono = document.getElementById('input-icono-servidor').value.trim();
            if(!nombre) return;
            
            const nuevoId = generarId('s');
            datosSimulados.servidores.push({
                id: nuevoId, nombre: nombre, iniciales: nombre.substring(0, 2).toUpperCase(), icono: icono || null,
                canales: [{ id: generarId('c'), nombre: 'general', descripcion: 'Canal principal', mensajes: [] }],
                usuarios: [{ id: miUsuarioId, nombre: 'Tú', iniciales: 'TU', color: 'violet', estado: 'online', rol: 'Propietario', avatar: null, bio: 'Propietario de este servidor.' }]
            });
            cerrarModal();
            cambiarServidor(nuevoId);
        });
    }

    function abrirModalEditarServidor() {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        if(!servidor) return;
        const html = `
            <div class="modal-field"><label>Nuevo Nombre</label><input type="text" id="edit-nombre-serv" value="${escaparHTML(servidor.nombre)}"></div>
            <div class="modal-field"><label>URL de Imagen (Opcional)</label><input type="text" id="edit-icono-serv" value="${servidor.icono ? escaparHTML(servidor.icono) : ''}"></div>
        `;
        prepararModal('Editar Servidor', 'Modifica la información básica.', html, () => {
            const nombre = document.getElementById('edit-nombre-serv').value.trim();
            const icono = document.getElementById('edit-icono-serv').value.trim();
            if(!nombre) return;
            servidor.nombre = nombre;
            servidor.iniciales = nombre.substring(0, 2).toUpperCase();
            servidor.icono = icono || null;
            cerrarModal();
            actualizarTodaLaUI();
        });
    }

    function eliminarServidor(idServidor) {
        if(datosSimulados.servidores.length <= 1) return;
        datosSimulados.servidores = datosSimulados.servidores.filter(s => s.id !== idServidor);
        cambiarServidor(datosSimulados.servidores[0].id);
    }

    function abrirModalCrearCanal() {
        const html = `
            <div class="modal-field"><label>Nombre del Canal</label><input type="text" id="input-nombre-canal" placeholder="Ej: videojuegos" autocomplete="off"></div>
            <div class="modal-field"><label>Descripción</label><input type="text" id="input-desc-canal" placeholder="Tema del canal" autocomplete="off"></div>
        `;
        prepararModal('Crear canal', 'Un nuevo espacio para hablar.', html, () => {
            const nombre = document.getElementById('input-nombre-canal').value.trim().toLowerCase().replace(/\s+/g, '-');
            const desc = document.getElementById('input-desc-canal').value.trim();
            if(!nombre) return;
            const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
            const nuevoId = generarId('c');
            servidor.canales.push({ id: nuevoId, nombre: nombre, descripcion: desc, mensajes: [] });
            cerrarModal();
            cambiarCanal(nuevoId);
        });
    }

    function abrirModalEditarCanal(idCanal) {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        const canal = servidor.canales.find(c => c.id === idCanal);
        if(!canal) return;
        const html = `
            <div class="modal-field"><label>Nombre del Canal</label><input type="text" id="edit-nombre-canal" value="${escaparHTML(canal.nombre)}"></div>
            <div class="modal-field"><label>Descripción</label><input type="text" id="edit-desc-canal" value="${escaparHTML(canal.descripcion)}"></div>
        `;
        prepararModal('Editar canal', 'Ajusta los detalles del canal.', html, () => {
            const nombre = document.getElementById('edit-nombre-canal').value.trim().toLowerCase().replace(/\s+/g, '-');
            const desc = document.getElementById('edit-desc-canal').value.trim();
            if(!nombre) return;
            canal.nombre = nombre;
            canal.descripcion = desc;
            cerrarModal();
            actualizarTodaLaUI();
        });
    }

    function eliminarCanal(idCanal) {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        servidor.canales = servidor.canales.filter(c => c.id !== idCanal);
        if (canalActualId === idCanal) {
            cambiarCanal(servidor.canales.length > 0 ? servidor.canales[0].id : null);
        } else {
            renderizarCanales();
        }
    }

    function abrirModalCrearUsuario() {
        const html = `
            <div class="modal-field"><label>Nombre</label><input type="text" id="input-nombre-usr" placeholder="Ej: Carlos" autocomplete="off"></div>
            <div class="modal-field"><label>URL Avatar (Opcional)</label><input type="text" id="input-avatar-usr" placeholder="Ej: assets/images/avatar.png"></div>
            <div class="modal-field"><label>Sobre mí (Biografía)</label><input type="text" id="input-bio-usr" placeholder="Breve descripción..." autocomplete="off"></div>
            <div style="display:flex; gap:10px;">
                <div class="modal-field" style="flex:1;"><label>Estado</label>
                    <select id="input-estado-usr">
                        <option value="online">Online 🟢</option>
                        <option value="idle">Ausente 🌙</option>
                        <option value="dnd">No molestar 🔴</option>
                        <option value="offline">Desconectado ⚫</option>
                    </select>
                </div>
                <div class="modal-field" style="flex:1;"><label>Color</label>
                    <select id="input-color-usr">
                        <option value="violet">Violeta</option>
                        <option value="gold">Dorado</option>
                        <option value="teal">Verde Agua</option>
                        <option value="gray">Gris</option>
                    </select>
                </div>
            </div>
        `;
        prepararModal('Añadir Usuario', 'Crea una persona ficticia.', html, () => {
            const nombre = document.getElementById('input-nombre-usr').value.trim();
            const avatar = document.getElementById('input-avatar-usr').value.trim();
            const bio = document.getElementById('input-bio-usr').value.trim();
            if(!nombre) return;
            const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
            servidor.usuarios.push({
                id: generarId('u'), nombre: nombre, iniciales: nombre.substring(0, 2).toUpperCase(),
                color: document.getElementById('input-color-usr').value,
                estado: document.getElementById('input-estado-usr').value,
                rol: 'Miembro', avatar: avatar || null, bio: bio || 'Sin descripción.'
            });
            cerrarModal();
            renderizarUsuarios();
        });
    }

    function abrirModalEditarUsuario(idUsuario) {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        const usuario = servidor.usuarios.find(u => u.id === idUsuario);
        if(!usuario) return;
        const html = `
            <div class="modal-field"><label>Nombre</label><input type="text" id="edit-nombre-usr" value="${escaparHTML(usuario.nombre)}"></div>
            <div class="modal-field"><label>URL Avatar (Opcional)</label><input type="text" id="edit-avatar-usr" value="${usuario.avatar ? escaparHTML(usuario.avatar) : ''}"></div>
            <div class="modal-field"><label>Sobre mí (Biografía)</label><input type="text" id="edit-bio-usr" value="${escaparHTML(usuario.bio || '')}"></div>
            <div class="modal-field"><label>Estado</label>
                <select id="edit-estado-usr">
                    <option value="online" ${usuario.estado === 'online'?'selected':''}>Online 🟢</option>
                    <option value="idle" ${usuario.estado === 'idle'?'selected':''}>Ausente 🌙</option>
                    <option value="dnd" ${usuario.estado === 'dnd'?'selected':''}>No molestar 🔴</option>
                    <option value="offline" ${usuario.estado === 'offline'?'selected':''}>Desconectado ⚫</option>
                </select>
            </div>
        `;
        prepararModal('Editar Usuario', 'Ajusta sus detalles o estado.', html, () => {
            const nombre = document.getElementById('edit-nombre-usr').value.trim();
            const avatar = document.getElementById('edit-avatar-usr').value.trim();
            const bio = document.getElementById('edit-bio-usr').value.trim();
            if(!nombre) return;
            
            usuario.nombre = nombre;
            usuario.iniciales = nombre.substring(0, 2).toUpperCase();
            usuario.estado = document.getElementById('edit-estado-usr').value;
            usuario.avatar = avatar || null;
            usuario.bio = bio;
            
            cerrarModal();
            renderizarUsuarios();
            renderizarMensajes(); 
        });
    }

    function eliminarUsuario(idUsuario) {
        const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
        servidor.usuarios = servidor.usuarios.filter(u => u.id !== idUsuario);
        renderizarUsuarios();
        renderizarMensajes();
    }

    function abrirModalEnviarImagen() {
        if (!canalActualId) return;
        const html = `
            <div class="modal-field"><label>Ruta o URL de la Imagen</label><input type="text" id="input-msg-imagen" placeholder="Ej: assets/images/captura.png" autocomplete="off" autofocus></div>
            <div class="modal-field"><label>Comentario (Opcional)</label><input type="text" id="input-msg-texto" placeholder="Mensaje..." autocomplete="off"></div>
        `;
        prepararModal('Adjuntar Imagen', 'Sube un recurso visual al chat.', html, () => {
            const ruta = document.getElementById('input-msg-imagen').value.trim();
            const texto = document.getElementById('input-msg-texto').value.trim();
            if(!ruta) return;

            const servidor = datosSimulados.servidores.find(s => s.id === servidorActualId);
            const canal = servidor.canales.find(c => c.id === canalActualId);
            const horaFormateada = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            canal.mensajes.push({
                id: generarId('m'),
                idUsuario: miUsuarioId,
                texto: texto, 
                hora: `Hoy a las ${horaFormateada}`,
                imagen: ruta
            });
            cerrarModal();
            renderizarMensajes();
        });
    }

    window.onload = () => {
        actualizarTodaLaUI();
    };
