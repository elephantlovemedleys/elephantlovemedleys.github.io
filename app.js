const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".faq");

    for (let i = 0; i < product.length; i++) {
        const matches = product[i].querySelectorAll('.faq-title, .faq-subtitle-row, .faq-text');
        let textvalue = "";
        matches.forEach(el => textvalue += el.textContent + " ");

        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}
