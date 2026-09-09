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
                        nombre: 'INTRODUCCION', 
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
                                id:'m6',
                                idUsuario: 'u1',
                                texto:'Elegí Discord porque ha crecido exponencialmente hasta consolidarse como un referente global en comunicación en tiempo real, acaparando una cuota significativa del mercado de mensajería con aproximadamente un 9%. Desde la perspectiva de un CTO, resulta especialmente interesante analizar su propuesta de valor, la evolución de su arquitectura bajo una demanda masiva y su modelo de negocio, todo ello en el contexto actual de su preparación para una inminente salida a bolsa.',
                                hora: '08:41 PM',
                                imagen: null
                            }

                        ] 
                    },
                    { 
                        id: 'c2', 
                        nombre: '2-ORIGEN Y EVOLUCION', 
                        descripcion: 'Fundación y evolución de la empresa.',
                        mensajes: [
                            { 
                                id: 'm3', 
                                idUsuario: 'u1', 
                                texto: 'Discord Inc. fue fundada en 2015 por Jason Citron y Stan Vishnevskiy, quienes identificaron la necesidad de una plataforma de comunicación más eficiente para gamers. Desde su lanzamiento, Discord ha evolucionado significativamente, expandiéndose más allá del ámbito de los videojuegos para convertirse en un espacio de comunicación versátil para comunidades de todo tipo, incluyendo educación, negocios y hobbies diversos.', 
                                hora: '09:00 AM', 
                                imagen: null 
                            },
                            { 
                                id: 'm4', 
                                idUsuario: 'u1', 
                                texto: 'Su principal fuente de ingresos es "Discord Nitro", un servicio de suscripción premium que ofrece ventajas cosméticas y técnicas a los usuarios.', 
                                hora: '09:02 AM', 
                                imagen: 'assets/images/grafica-ingresos.png' // <-- Reemplaza por tu imagen real
                            }
                        ] 
                    },
                    { 
                        id: 'c3', 
                        nombre: '3-conclusiones', 
                        descripcion: 'Análisis final para Dirección Empresarial.',
                        mensajes: [
                            { 
                                id: 'm5', 
                                idUsuario: 'u1', 
                                texto: 'Discord supo identificar un nicho abandonado (gamers) y creó un producto tan superior que terminó expandiéndose a comunidades educativas, empresariales y hobbies.', 
                                hora: '10:00 AM', 
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
                        avatar: 'assets/images/mi-foto.png',
                        // BIO PARA TU PERFIL
                        bio: 'Estudiante investigador de la materia Dirección Empresarial. Presentando un análisis profundo sobre la estructura de ingresos y comunidad de Discord.'
                    },
                    { 
                        id: 'u2', 
                        nombre: 'Humam Sakhnini', 
                        iniciales: 'JC', 
                        color: 'gold', 
                        estado: 'idle', 
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
                        bio: 'Docente encargada de evaluar la sustentación de este informe de análisis organizacional. Para mas informacion visite: https://www.linkedin.com/in/angediazgomez/'
                    }
                ]
            }
        ]
    };
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

        const coloresMap = { violet: '#bd8cff', gold: '#f0b232', teal: '#26c6a5', gray: '#b5bac1' };
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
