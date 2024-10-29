const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => tab.addEventListener("click", (tabClicked) => {
    tabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");

    const contents = document.querySelectorAll(".content");
    contents.forEach(content => content.classList.remove("show"));

    const contentId = tab.getAttribute("content-id");
    const content = document.getElementById(contentId);

    content.classList.add("show");
})); 

const modo = document.querySelector("#modo")
const interruptor = document.querySelector("#interruptor")
const body = document.querySelector("body")

modo.addEventListener("click", () => {
    modo.classList.toggle('light')
    body.classList.toggle('light')

    if (modo.classList.contains('light')) {
        interruptor.innerHTML = `
        <i class="fa-solid fa-sun"></i>
        `
    } else {
        interruptor.innerHTML = `
        <i class="fa-solid fa-moon"></i>
        `
    }
})
