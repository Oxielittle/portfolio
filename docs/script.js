document.addEventListener("DOMContentLoaded", function () {
    const dividers = document.querySelectorAll(".divider");

    document.addEventListener("mousemove", function (event) {
        const cursorX = (event.clientX / window.innerWidth) * 100;

        dividers.forEach(divider => {
            divider.innerHTML = `<div class="gradient"
                style="width: 100%;
                background: linear-gradient(to right, #003366 ${cursorX}%, #66ccff);"></div>`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.querySelector(".profileContainer img");

    profilePic.addEventListener("mouseenter", function () {
        profilePic.style.border = "4px solid #227ef7";
        profilePic.className = "bounce";
    });

    profilePic.addEventListener("mouseleave", function () {
        profilePic.style.border = "3px solid #ffffff";
        profilePic.className = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".expertiseBox1");

    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "transform 0.3s ease-in-out";
        box.className = "tada";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        box.className = "expertiseBox1"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".expertiseBox2");

    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)"; 
        box.style.transition = "transform 0.3s ease-in-out"; 
        box.className = "tada";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        box.className = "expertiseBox2"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".expertiseBox3");

    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)"; 
        box.style.transition = "transform 0.3s ease-in-out"; 
        box.className = "tada";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        box.className = "expertiseBox3"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector("a[href='#about']"); 
    const paragraph = document.querySelector(".aboutP"); 

    if (link && paragraph) {
        link.addEventListener("click", () => {
            window.location.hash = "target-section"; 

            const text = paragraph.textContent;
            paragraph.innerHTML = [...text].map(char => `<span>${char}</span>`).join("");

            const spans = paragraph.querySelectorAll("span");

            spans.forEach((span, index) => {
                setTimeout(() => { span.style.color = "#227ef7"; }, index * 30); 
                setTimeout(() => { span.style.color = ""; }, (spans.length * 30) + (index * 30));
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector("a[href='#expertise']"); 
    const paragraph = document.querySelector(".expertiseP"); 

    if (link && paragraph) {
        link.addEventListener("click", () => {
            window.location.hash = "target-section"; 

            const text = paragraph.textContent;
            paragraph.innerHTML = [...text].map(char => `<span>${char}</span>`).join("");

            const spans = paragraph.querySelectorAll("span");

            spans.forEach((span, index) => {
                setTimeout(() => { span.style.color = "#227ef7"; }, index * 30); 
                setTimeout(() => { span.style.color = ""; }, (spans.length * 30) + (index * 30));
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector("a[href='#projects']"); 
    const paragraph = document.querySelector(".projectsP"); 

    if (link && paragraph) {
        link.addEventListener("click", () => {
            window.location.hash = "target-section"; 

            const text = paragraph.textContent;
            paragraph.innerHTML = [...text].map(char => `<span>${char}</span>`).join("");

            const spans = paragraph.querySelectorAll("span");

            spans.forEach((span, index) => {
                setTimeout(() => { span.style.color = "#227ef7"; }, index * 50); 
                setTimeout(() => { span.style.color = ""; }, (spans.length * 50) + (index * 50));
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector("a[href='#contact']"); 
    const paragraph = document.querySelector(".contactP"); 

    if (link && paragraph) {
        link.addEventListener("click", () => {
            window.location.hash = "target-section"; 

            const text = paragraph.textContent;
            paragraph.innerHTML = [...text].map(char => `<span>${char}</span>`).join("");

            const spans = paragraph.querySelectorAll("span");

            spans.forEach((span, index) => {
                setTimeout(() => { span.style.color = "#227ef7"; }, index * 50); 
                setTimeout(() => { span.style.color = ""; }, (spans.length * 50) + (index * 50));
            });
        });
    }
});
