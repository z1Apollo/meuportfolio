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