document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]")
  const currentHost = location.hostname;

  links.forEach(function(link) {
    const linkHost = new URL(link.href).hostname
    if (linkHost && linkHost !== currentHost) {
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener noreferrer")
    }
  })
})
