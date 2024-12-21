document.addEventListener("DOMContentLoaded", function () {
    const lang = new URLSearchParams(window.location.search).get("lang") || "en";
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.title = data.title;
            document.querySelector(".navbar-brand").textContent = data.navbar.brand;
            document.querySelector('a[href="#about"]').textContent = data.navbar.about;
            document.querySelector('a[href="#services"]').textContent = data.navbar.services;
            document.querySelector('a[href="#portfolio"]').textContent = data.navbar.portfolio;
            document.querySelector('a[href="#contact"]').textContent = data.navbar.contact;
            document.querySelector('#languageDropdown').textContent = data.navbar.language;
            document.querySelector('a[href="?lang=en"]').textContent = data.navbar.english;
            document.querySelector('a[href="?lang=ru"]').textContent = data.navbar.russian;

            document.querySelector(".masthead h1").textContent = data.masthead.heading;
            document.querySelector(".masthead p").textContent = data.masthead.subheading;
            document.querySelector(".masthead a").textContent = data.masthead.button;

            document.querySelector("#about h2").textContent = data.about.heading;
            document.querySelector("#about p").textContent = data.about.subheading;
            document.querySelector("#about a").textContent = data.about.button;

            document.querySelector("#services h2").textContent = data.services.heading;
            const serviceItems = document.querySelectorAll("#services .col-lg-3");
            data.services.items.forEach((item, index) => {
                serviceItems[index].querySelector("i").className = `bi ${item.icon} fs-1 text-primary`;
                serviceItems[index].querySelector("h3").textContent = item.title;
                serviceItems[index].querySelector("p").textContent = item.description;
            });

            const portfolioItems = document.querySelectorAll("#portfolio .portfolio-box-caption");
            portfolioItems.forEach(item => {
                item.querySelector(".project-category").textContent = data.portfolio.category;
                item.querySelector(".project-name").textContent = data.portfolio.projectName;
            });

            document.querySelector(".page-section.bg-dark h2").textContent = data.cta.heading;
            document.querySelector(".page-section.bg-dark a").textContent = data.cta.button;

            document.querySelector("#contact h2").textContent = data.contact.heading;
            document.querySelector("#contact p").textContent = data.contact.subheading;
            document.querySelector("#contact .bi-phone + div").textContent = data.contact.phone;

            document.querySelector(".footer .small").innerHTML = data.footer.text;
        });
});
