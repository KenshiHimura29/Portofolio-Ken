document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#111827";
        } else {
            header.style.background = "transparent";
        }
    });

    const skills = document.querySelectorAll(".skills-list li");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = "scale(1)";
            skill.style.opacity = "1";
        }, index * 200);
    });
});
