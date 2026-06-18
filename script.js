// =====================================
// SMOOTH SCROLL MENU
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =====================================
// HEADER SHADOW SAAT SCROLL
// =====================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";
        header.style.background = "#ffffff";

    }else{

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
        header.style.background = "#ffffff";

    }

});


// =====================================
// ANIMASI MUNCUL SAAT SCROLL
// =====================================

const items = document.querySelectorAll(

".service-card, .gallery-item, .news-card, .testimonial-card, .contact-item"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

items.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="all .7s ease";

    observer.observe(item);

});


// =====================================
// TOMBOL BACK TO TOP
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0d6efd";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// =====================================
// COPYRIGHT TAHUN OTOMATIS (OPSIONAL)
// =====================================

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom p");

if(footerText){

    footerText.innerHTML = `© ${year} Nama Website. All Rights Reserved.`;

}
