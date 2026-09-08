# SysCord

Prototipo educativo de una plataforma de comunicación inspirado en interfaces modernas tipo Discord, construido con **HTML5 + CSS3 + JavaScript vanilla**.

## Estructura del proyecto

```text
discord-simulator/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

> Las imágenes se referencian con rutas relativas (ejemplo: `assets/images/avatar-default.svg`) para que puedas reemplazarlas fácilmente.

## Funcionalidades del prototipo

- Interfaz con:
  - barra de servidores
  - lista de canales
  - área de conversación
  - panel de usuarios
  - barra de envío de mensajes
- Servidores ficticios:
  - seleccionar
  - crear
  - renombrar
  - eliminar
- Canales por servidor:
  - seleccionar
  - crear
  - renombrar
  - eliminar
  - mensajes distintos por canal
- Usuarios ficticios:
  - agregar
  - renombrar
  - cambiar estado (`🟢 Conectado`, `🌙 Ausente`, `🔴 No disponible`)
- Mensajes:
  - envío inmediato en pantalla
  - almacenamiento en estructuras JavaScript
  - soporte de imagen en mensajes (ruta relativa)
- Persistencia local con `localStorage` para servidores, canales, usuarios y mensajes.
- Diseño oscuro y responsive para computador y celular.

## Cómo ejecutar localmente

1. Clona o descarga el repositorio.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` en el navegador (doble clic o Live Server).
4. Interactúa con el prototipo: crea servidores/canales/usuarios y envía mensajes.

## Relación académica (Ingeniería de Sistemas)

Este prototipo permite explicar:

- Desarrollo web del lado del cliente.
- Diseño de interfaces de usuario.
- Manipulación del DOM con JavaScript.
- Estructuras de datos (`servidores -> canales -> mensajes -> usuarios`).
- Persistencia local y transición conceptual hacia bases de datos reales.
- Introducción a arquitectura cliente-servidor.

## Metodología por fases aplicada

1. Estructura HTML y diseño CSS.
2. Servidores y canales simulados.
3. Usuarios y estados.
4. Sistema de mensajes.
5. CRUD básico de servidores/canales.
6. Soporte para imágenes y avatares.
7. Persistencia con localStorage.
8. Ajustes responsive.
9. Preparación para GitHub Pages.

## Publicar en GitHub Pages

1. Sube los cambios a la rama principal del repositorio.
2. En GitHub, entra a **Settings > Pages**.
3. En **Build and deployment**, selecciona:
   - **Source**: `Deploy from a branch`
   - **Branch**: rama principal (por ejemplo `main`) y carpeta `/root`
4. Guarda la configuración.
5. Espera el despliegue y abre la URL pública generada por GitHub Pages.

## Nota

Este proyecto es un **simulador estático e interactivo** para exposición académica. No implementa chat en tiempo real, backend, autenticación real ni conexión a servidores externos.
