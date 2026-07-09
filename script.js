// ================= SKILL BAR ANIMATION =================


function animateProgressBar(entry) {

    const progressBar = entry.target;

    const progressValue =
        progressBar.getAttribute("data-progress");

    progressBar.style.width =
        `${progressValue}%`;

}



const progressObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                animateProgressBar(entry);

            }

            else {

                entry.target.style.width = "0";

            }

        });

    });



document
    .querySelectorAll(".progress-bar")
    .forEach((progressBar) => {

        progressObserver.observe(progressBar);

    });



// ================= ACTIVE NAVBAR =================


const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".nav-link");



function updateActiveNav() {


    let currentSection = "home";


    sections.forEach((section) => {


        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });



    navLinks.forEach((link) => {


        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}



window.addEventListener(
    "scroll",
    updateActiveNav
);



updateActiveNav();