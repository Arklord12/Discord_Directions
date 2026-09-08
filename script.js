const STORAGE_KEY = "syscord-data-v1";

const STATUS_OPTIONS = [
  { value: "online", label: "🟢 Conectado" },
  { value: "away", label: "🌙 Ausente" },
  { value: "busy", label: "🔴 No disponible" }
];

const defaultData = {
  activeServerId: "server-1",
  activeChannelId: "channel-1",
  currentUserId: "user-1",
  servers: [
    {
      id: "server-1",
      name: "Ingeniería",
      image: "assets/images/server-ingenieria.svg",
      channels: [
        {
          id: "channel-1",
          name: "general",
          messages: [
            {
              id: "message-1",
              userId: "user-1",
              text: "Bienvenido a SysCord. Este chat es una simulación educativa.",
              image: "assets/images/bienvenida.svg",
              createdAt: new Date().toISOString()
            }
          ]
        },
        { id: "channel-2", name: "programacion", messages: [] },
        { id: "channel-3", name: "bases-de-datos", messages: [] }
      ]
    },
    {
      id: "server-2",
      name: "Comunidad",
      image: "assets/images/server-comunidad.svg",
      channels: [
        { id: "channel-4", name: "videojuegos", messages: [] }
      ]
    }
  ],
  users: [
    { id: "user-1", name: "Ana", avatar: "assets/images/avatar-ana.svg", status: "online" },
    { id: "user-2", name: "Luis", avatar: "assets/images/avatar-luis.svg", status: "away" },
    { id: "user-3", name: "Marta", avatar: "assets/images/avatar-marta.svg", status: "busy" }
  ]
};

const refs = {
  serverList: document.getElementById("serverList"),
  currentServerName: document.getElementById("currentServerName"),
  channelList: document.getElementById("channelList"),
  currentChannelName: document.getElementById("currentChannelName"),
  messageList: document.getElementById("messageList"),
  userList: document.getElementById("userList"),
  messageForm: document.getElementById("messageForm"),
  messageInput: document.getElementById("messageInput"),
  messageImageInput: document.getElementById("messageImageInput"),
  addServerBtn: document.getElementById("addServerBtn"),
  renameServerBtn: document.getElementById("renameServerBtn"),
  deleteServerBtn: document.getElementById("deleteServerBtn"),
  addChannelBtn: document.getElementById("addChannelBtn"),
  addUserBtn: document.getElementById("addUserBtn"),
  toast: document.getElementById("toast"),
  modalOverlay: document.getElementById("modalOverlay"),
  modalTitle: document.getElementById("modalTitle"),
  modalText: document.getElementById("modalText"),
  modalForm: document.getElementById("modalForm"),
  modalInput: document.getElementById("modalInput"),
  modalCancelBtn: document.getElementById("modalCancelBtn")
};

let state = loadData();
let modalResolver = null;

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultData);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.servers) || !Array.isArray(parsed.users)) {
      return structuredClone(defaultData);
    }
    return parsed;
  } catch {
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveServer() {
  return state.servers.find((server) => server.id === state.activeServerId) || state.servers[0];
}

function getActiveChannel() {
  const server = getActiveServer();
  if (!server) return null;
  return server.channels.find((channel) => channel.id === state.activeChannelId) || server.channels[0] || null;
}

function getUserById(userId) {
  return state.users.find((user) => user.id === userId) || state.users[0] || null;
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short"
  });
}

function statusClass(status) {
  if (status === "online") return "status-online";
  if (status === "away") return "status-away";
  return "status-busy";
}

function notify(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add("show");
  setTimeout(() => refs.toast.classList.remove("show"), 1800);
}

function openTextModal({ title, text, defaultValue = "" }) {
  refs.modalTitle.textContent = title;
  refs.modalText.textContent = text;
  refs.modalInput.value = defaultValue;
  refs.modalOverlay.classList.remove("hidden");
  refs.modalInput.focus();

  return new Promise((resolve) => {
    modalResolver = resolve;
  });
}

function closeModal(value) {
  refs.modalOverlay.classList.add("hidden");
  if (modalResolver) modalResolver(value);
  modalResolver = null;
}

function ensureSelections() {
  const activeServer = getActiveServer();
  if (!activeServer) {
    state.activeServerId = null;
    state.activeChannelId = null;
    return;
  }

  state.activeServerId = activeServer.id;

  const activeChannel = activeServer.channels.find((channel) => channel.id === state.activeChannelId);
  state.activeChannelId = activeChannel ? activeChannel.id : (activeServer.channels[0]?.id || null);
}

function renderServers() {
  refs.serverList.innerHTML = "";
  state.servers.forEach((server) => {
    const button = document.createElement("button");
    button.className = `server-item${server.id === state.activeServerId ? " active" : ""}`;
    button.innerHTML = `
      <div class="server-row">
        <img class="server-thumb" src="${server.image}" alt="Imagen de ${server.name}" onerror="this.src='assets/images/server-default.svg'" />
        <div>
          <strong>${server.name}</strong>
          <span>${server.channels.length} canales</span>
        </div>
      </div>
    `;
    button.addEventListener("click", () => {
      state.activeServerId = server.id;
      state.activeChannelId = server.channels[0]?.id || null;
      saveData();
      render();
    });
    refs.serverList.appendChild(button);
  });
}

function renderChannels() {
  const server = getActiveServer();
  refs.channelList.innerHTML = "";

  if (!server) {
    refs.currentServerName.textContent = "Sin servidores";
    refs.currentChannelName.textContent = "# sin-canal";
    return;
  }

  refs.currentServerName.textContent = server.name;

  server.channels.forEach((channel) => {
    const row = document.createElement("div");
    row.className = "panel-title-row";

    const button = document.createElement("button");
    button.className = `channel-item${channel.id === state.activeChannelId ? " active" : ""}`;
    button.textContent = `# ${channel.name}`;
    button.addEventListener("click", () => {
      state.activeChannelId = channel.id;
      saveData();
      render();
    });

    const actions = document.createElement("div");
    actions.className = "inline-actions";

    const renameButton = document.createElement("button");
    renameButton.textContent = "✏️";
    renameButton.title = "Renombrar canal";
    renameButton.addEventListener("click", async () => {
      const value = (await openTextModal({
        title: "Renombrar canal",
        text: "Escribe el nuevo nombre del canal",
        defaultValue: channel.name
      })).trim();
      if (!value) return;
      channel.name = value;
      saveData();
      render();
      notify("Canal renombrado");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.title = "Eliminar canal";
    deleteButton.addEventListener("click", () => {
      if (server.channels.length <= 1) {
        notify("Debe quedar al menos un canal en el servidor");
        return;
      }
      server.channels = server.channels.filter((item) => item.id !== channel.id);
      ensureSelections();
      saveData();
      render();
      notify("Canal eliminado");
    });

    actions.append(renameButton, deleteButton);
    row.append(button, actions);
    refs.channelList.appendChild(row);
  });

  const activeChannel = getActiveChannel();
  refs.currentChannelName.textContent = activeChannel ? `# ${activeChannel.name}` : "# sin-canal";
}

function renderMessages() {
  refs.messageList.innerHTML = "";
  const channel = getActiveChannel();

  if (!channel) {
    refs.messageList.innerHTML = '<p class="muted">No hay canal activo.</p>';
    return;
  }

  if (!channel.messages.length) {
    refs.messageList.innerHTML = '<p class="muted">Sin mensajes. Sé el primero en escribir.</p>';
    return;
  }

  channel.messages.forEach((message) => {
    const user = getUserById(message.userId);
    const article = document.createElement("article");
    article.className = "message";

    const avatarSrc = user?.avatar || "assets/images/avatar-default.svg";

    article.innerHTML = `
      <div class="message-top">
        <img class="avatar" src="${avatarSrc}" alt="Avatar de ${user?.name || "usuario"}" onerror="this.src='assets/images/avatar-default.svg'" />
        <strong>${user?.name || "Usuario"}</strong>
        <small>${formatDate(message.createdAt)}</small>
      </div>
      <p>${message.text}</p>
    `;

    if (message.image) {
      const image = document.createElement("img");
      image.className = "message-image";
      image.src = message.image;
      image.alt = "Imagen adjunta";
      image.loading = "lazy";
      article.appendChild(image);
    }

    refs.messageList.appendChild(article);
  });
}

function renderUsers() {
  refs.userList.innerHTML = "";
  state.users.forEach((user) => {
    const card = document.createElement("article");
    card.className = "user-item";
    card.innerHTML = `
      <img class="avatar" src="${user.avatar}" alt="Avatar de ${user.name}" onerror="this.src='assets/images/avatar-default.svg'" />
      <div class="user-meta">
        <strong>${user.name}</strong>
        <span class="status-badge"><span class="status-dot ${statusClass(user.status)}"></span>${STATUS_OPTIONS.find((s) => s.value === user.status)?.label || "Estado"}</span>
      </div>
    `;

    const controls = document.createElement("div");
    controls.className = "inline-actions";

    const statusSelect = document.createElement("select");
    STATUS_OPTIONS.forEach((option) => {
      const item = document.createElement("option");
      item.value = option.value;
      item.textContent = option.label;
      if (option.value === user.status) item.selected = true;
      statusSelect.appendChild(item);
    });
    statusSelect.addEventListener("change", (event) => {
      user.status = event.target.value;
      saveData();
      renderUsers();
      notify("Estado actualizado");
    });

    const renameButton = document.createElement("button");
    renameButton.textContent = "✏️";
    renameButton.title = "Renombrar usuario";
    renameButton.addEventListener("click", async () => {
      const value = (await openTextModal({
        title: "Renombrar usuario",
        text: "Escribe el nuevo nombre del usuario",
        defaultValue: user.name
      })).trim();
      if (!value) return;
      user.name = value;
      saveData();
      renderUsers();
      notify("Usuario renombrado");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.title = "Eliminar usuario";
    deleteButton.addEventListener("click", () => {
      if (state.users.length <= 1) {
        notify("Debe quedar al menos un usuario");
        return;
      }
      state.users = state.users.filter((item) => item.id !== user.id);
      if (state.currentUserId === user.id) {
        state.currentUserId = state.users[0].id;
      }
      saveData();
      renderUsers();
      notify("Usuario eliminado");
    });

    controls.append(statusSelect, renameButton, deleteButton);
    card.querySelector(".user-meta").appendChild(controls);
    refs.userList.appendChild(card);
  });
}

function render() {
  ensureSelections();
  renderServers();
  renderChannels();
  renderMessages();
  renderUsers();
}

refs.modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeModal(refs.modalInput.value.trim());
});

refs.modalCancelBtn.addEventListener("click", () => closeModal(""));

refs.messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = refs.messageInput.value.trim();
  const image = refs.messageImageInput.value.trim();
  const channel = getActiveChannel();

  if (!text || !channel) return;

  channel.messages.push({
    id: makeId("message"),
    userId: state.currentUserId,
    text,
    image,
    createdAt: new Date().toISOString()
  });

  refs.messageInput.value = "";
  refs.messageImageInput.value = "";
  saveData();
  renderMessages();
  notify("Mensaje enviado");
});

refs.addServerBtn.addEventListener("click", async () => {
  const name = (await openTextModal({
    title: "Nuevo servidor",
    text: "Escribe el nombre del nuevo servidor",
    defaultValue: "Nuevo servidor"
  })).trim();
  if (!name) return;

  const serverId = makeId("server");
  const channelId = makeId("channel");
  state.servers.push({
    id: serverId,
    name,
    image: "assets/images/server-default.svg",
    channels: [{ id: channelId, name: "general", messages: [] }]
  });
  state.activeServerId = serverId;
  state.activeChannelId = channelId;
  saveData();
  render();
  notify("Servidor creado");
});

refs.renameServerBtn.addEventListener("click", async () => {
  const server = getActiveServer();
  if (!server) return;

  const name = (await openTextModal({
    title: "Renombrar servidor",
    text: "Escribe el nuevo nombre del servidor",
    defaultValue: server.name
  })).trim();

  if (!name) return;
  server.name = name;
  saveData();
  render();
  notify("Servidor renombrado");
});

refs.deleteServerBtn.addEventListener("click", () => {
  if (state.servers.length <= 1) {
    notify("Debe quedar al menos un servidor");
    return;
  }
  state.servers = state.servers.filter((server) => server.id !== state.activeServerId);
  state.activeServerId = state.servers[0]?.id || null;
  state.activeChannelId = state.servers[0]?.channels[0]?.id || null;
  saveData();
  render();
  notify("Servidor eliminado");
});

refs.addChannelBtn.addEventListener("click", async () => {
  const server = getActiveServer();
  if (!server) return;

  const name = (await openTextModal({
    title: "Nuevo canal",
    text: "Escribe el nombre del canal",
    defaultValue: "nuevo-canal"
  })).trim();

  if (!name) return;
  const channel = { id: makeId("channel"), name, messages: [] };
  server.channels.push(channel);
  state.activeChannelId = channel.id;
  saveData();
  render();
  notify("Canal creado");
});

refs.addUserBtn.addEventListener("click", async () => {
  const name = (await openTextModal({
    title: "Nuevo usuario",
    text: "Escribe el nombre del usuario",
    defaultValue: "Nuevo usuario"
  })).trim();

  if (!name) return;
  state.users.push({
    id: makeId("user"),
    name,
    avatar: "assets/images/avatar-default.svg",
    status: "online"
  });
  saveData();
  renderUsers();
  notify("Usuario agregado");
});

render();
