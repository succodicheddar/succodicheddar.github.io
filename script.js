function coccolami() {
  // Mostra testo e seconda immagine
  document.getElementById("magiaText").style.display = "block";
  document.getElementById("secondaFotoContainer").style.display = "block";
  function coccolami() {
  // Mostra testo e seconda immagine
  document.getElementById("magiaText").style.display = "block";
  document.getElementById("secondaFotoContainer").style.display = "block";

  // Cuori sul primo gatto
  lanciaCuori("cuoriContainer");

  // Cuori anche sul secondo
  lanciaCuori("cuoriSeconda");
}

function lanciaCuori(containerId) {
  const container = document.getElementById(containerId);
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  for (let i = 0; i < 15; i++) {
    const cuore = document.createElement("div");
    cuore.className = "cuore";
    cuore.innerHTML = "❤";
    cuore.style.left = Math.random() * width + "px";
    cuore.style.top = Math.random() * height + "px";
    container.appendChild(cuore);

    setTimeout(() => cuore.remove(), 2000);
  }
}
function scintille() {
  const container = document.querySelector(".gatto-container");
  const sparkle = document.createElement("div");
  sparkle.className = "scintilla";
  sparkle.style.left = Math.random() * 300 + "px";
  sparkle.style.top = Math.random() * 300 + "px";
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}
setInterval(scintille, 1000);

  const gatto = document.getElementById("gatto");
gatto.classList.add("jump");
setTimeout(() => gatto.classList.remove("jump"), 400);
  // Cuori
  const container = document.getElementById("cuoriContainer");
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  for (let i = 0; i < 15; i++) {
    const cuore = document.createElement("div");
    cuore.className = "cuore";
    cuore.innerHTML = "❤";
    cuore.style.left = Math.random() * width + "px";
    cuore.style.top = Math.random() * height + "px";
    container.appendChild(cuore);
function coccolami() {
  document.getElementById("magiaText").style.display = "block";
  document.getElementById("secondaFotoContainer").style.display = "block";

  lanciaCuori("cuoriContainer");   // Primo gatto
  lanciaCuori("cuoriSeconda");     // Seconda immagine
}

function lanciaCuori(containerId) {
  const container = document.getElementById(containerId);
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  for (let i = 0; i < 15; i++) {
    const cuore = document.createElement("div");
    cuore.className = "cuore";
    cuore.innerHTML = "❤";
    cuore.style.left = Math.random() * width + "px";
    cuore.style.top = Math.random() * height + "px";
    container.appendChild(cuore);

    setTimeout(() => cuore.remove(), 2000);
  }
}
    setTimeout(() => {
      cuore.remove();
    }, 2000);
  }
}
