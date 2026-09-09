
# Discord Directions — Prototipo Interactivo & Informe Empresarial

Un entorno web interactivo que simula la experiencia de usuario y arquitectura de interfaces de Discord, diseñado como soporte visual y funcional para la sustentación del análisis estratégico de **Discord Inc.** en la asignatura **Dirección Empresarial**.

## 📌 Demo en Vivo

El proyecto se encuentra desplegado de forma permanente a través de GitHub Pages:

🔗 **[Ver Informe Interactivo](https://www.google.com/search?q=https://arklord12.github.io/Discord_Directions/)**

## 🎯 Objetivo del Proyecto

Presentar un informe de gestión organizacional y tecnológica abandonando los formatos estáticos tradicionales (PDF o diapositivas planas), implementando en su lugar una plataforma web temática con fidelidad visual a la compañía objeto de estudio.

El contenido analítico se distribuye a través de servidores temáticos, canales de texto especializados y perfiles de usuario que representan a los actores clave del informe (expositor, directivos corporativos y evaluador docente)[cite: 3].

## 🚀 Características Principales

- **Estructura Temática por Canales:**
    
    - `#1-introduccion`: Planteamiento, justificación y contexto de la empresa[cite: 3].
        
    - `#2-origen-y-evolucion`: Fundación, pivote tecnológico hacia _Discord_ y modelo de monetización (Nitro)[cite: 3].
        
    - `#3-conclusiones`: Análisis estratégico, ventajas competitivas e infraestructura social corporativa[cite: 3].
        
- **Perfiles de Usuario Modales:** Visualización interactiva de avatares, roles corporativos y biografías con soporte de enlaces externos (LinkedIn/referencias)[cite: 3].
    
- **Renderizado de Markdown Seguro:** Soporte nativo para negritas, cursivas, listas con viñetas, saltos de línea e hipervínculos sanitizados para prevenir inyecciones de código.
    
- **Soporte Multimedia Local:** Visualización de diagramas, capturas y gráficos analíticos integrados como adjuntos en el flujo del chat[cite: 3].
    
- **Capacidades CRUD en Memoria:** Creación y edición dinámica de servidores, canales, usuarios y envío de mensajes en tiempo real durante la sesión[cite: 1, 2].
    

## 🛠️ Tecnologías Empleadas

- **HTML5:** Semántica estructural y contenedores modales.
    
- **CSS3 (Variables nativas):** Recreación de paleta oscura oficial de Discord, layout responsivo mediante Flexbox/Grid y scrollbars estilizadas.
    
- **JavaScript (Vanilla - ES6+):** Manipulación del DOM mediante métodos seguros (`createElement`, `textContent`), motor de análisis de texto basado en expresiones regulares y gestión de estado reactivo en memoria.
    
- **Lucide Icons:** Paquete de iconografía vectorial para herramientas de interacción.
    

## 📂 Organización del Repositorio

Plaintext

```
Discord_Directions/
│
├── index.html            # Estructura semántica y modales
├── style.css             # Reglas de estilo, variables y scrollbars
├── script.js             # Lógica del DOM, parseo Markdown y datos precargados
├── README.md             # Documentación del proyecto
└── assets/
    └── images/           # Recursos visuales locales (logos, avatares, diagramas)
```

## 💻 Ejecución en Entorno Local

1. Clona este repositorio:
    
    Bash
    
    ```
    git clone https://github.com/Arklord12/Discord_Directions.git
    ```
    
2. Accede al directorio:
    
    Bash
    
    ```
    cd Discord_Directions
    ```
    
3. Abre el archivo `index.html` en tu navegador preferido o utilízalo con la extensión **Live Server** en Visual Studio Code.
    

## 👤 Autor

- **Johan Felipe Prado Guerrero** — _Aspirante a CTO / Estudiante de Ingeniería de Sistemas e Informática_[cite: 3]
    
- **Asignatura:** Dirección Empresarial[cite: 3]
