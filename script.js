function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Daniel West usando uma blusa social branca                                                    uma gravata azul e um colete preto sentado e sorrindo!"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Daniel West com um meio                                                             sorriso, usando um terno de casamento preto"
    )
  }
}
