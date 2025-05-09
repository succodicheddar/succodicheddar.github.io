function coccolami() {
  // Mostra testo
  document.getElementById("sukkettoText").style.display = "block";

  // Cuori
  for (let i = 0; i < 10; i++) {
    const cuore = document.createElement("div");
    cuore.className = "cuore";
    cuore.innerHTML = "❤";
    cuore.style.left = Math.random() * 200 - 100 + "px";
    cuore.style.top = "0";
    document.getElementById("cuoriContainer").appendChild(cuore);

    // Rimuovi dopo l'animazione
    setTimeout(() => {
      cuore.remove();
    }, 2000);
  }
}
