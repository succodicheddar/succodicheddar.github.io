function coccolami() {
  // Mostra testo e seconda immagine
  document.getElementById("magiaText").style.display = "block";
  document.getElementById("secondaFotoContainer").style.display = "block";

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

    setTimeout(() => {
      cuore.remove();
    }, 2000);
  }
}
