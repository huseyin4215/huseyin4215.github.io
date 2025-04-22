document.addEventListener("DOMContentLoaded", function () {
    // Butonları ve bölümleri seç
    const aboutBtn = document.querySelector(".btn-about");
    const projectBtn = document.querySelector(".btn-project");
    const contactBtn = document.querySelector(".btn-contact");

    const dropHomePageBtn = document.querySelector(".DropBtn-homePage");
    const dropaboutBtn = document.querySelector(".DropBtn-about");
    const dropprojectBtn = document.querySelector(".DropBtn-project");
    const dropcontactBtn = document.querySelector(".DropBtn-contact");

    const aboutSection = document.querySelector(".about-us");
    const projectSection = document.querySelector(".projects");
    const contactSection = document.querySelector(".contact-us");



    const project_1=document.getElementById("project_1");
    const project_2=document.getElementById("project_2");
    const project_3=document.getElementById("project_3");
    const project_4=document.getElementById("project_4");



    const myCvButton=document.querySelector(".MyCv");


    // Sayfa yüklendikten sonra yapılacak işlemler
    const redirectAction = localStorage.getItem("redirect"); // Yönlendirme bilgisi alındı

    if (redirectAction) {
        if (redirectAction === "homePage" && projectBtn) {
            aboutSection.style.display = "none";
            projectSection.style.display = "block";
            contactSection.style.display = "none";
        }
        if (redirectAction === "about" && aboutBtn) {
            aboutSection.style.display = "block";
            projectSection.style.display = "none";
            contactSection.style.display = "none";
        }
        if (redirectAction === "contact" && contactBtn) {
            aboutSection.style.display = "none";
            projectSection.style.display = "none";
            contactSection.style.display = "block";
        }

        // Yönlendirme işlemi tamamlandıktan sonra localStorage'ı temizle
        localStorage.removeItem("redirect");
    }

    // Sayfada butonlar varsa, işlem yap
    if (aboutBtn && projectBtn && contactBtn) {
        // Tıklama olayları
        aboutBtn.addEventListener("click", function () {
            aboutSection.style.display = "block";
            projectSection.style.display = "none";
            contactSection.style.display = "none";
        });

        projectBtn.addEventListener("click", function () {
            aboutSection.style.display = "none";
            projectSection.style.display = "block";
            contactSection.style.display = "none";
        });

        contactBtn.addEventListener("click", function () {
            aboutSection.style.display = "none";
            projectSection.style.display = "none";
            contactSection.style.display = "block";
        });


        project_1.addEventListener("click", function () {
            window.location.href = "./dropdown_Page/project_1.html"; // Ana sayfaya yönlendir
        });
        project_2.addEventListener("click", function () {
            window.location.href = "./dropdown_Page/project_2.html"; // Ana sayfaya yönlendir
        });
        project_3.addEventListener("click", function () {
            window.location.href = "./dropdown_Page/project_3.html"; // Ana sayfaya yönlendir
        });
        project_4.addEventListener("click", function () {
            window.location.href = "./dropdown_Page/project_4.html"; // Ana sayfaya yönlendir
        });

    }

    // Sayfa butonları varsa, işlem yap
    if (dropHomePageBtn) {
        dropHomePageBtn.addEventListener("click", function () {
            localStorage.setItem("redirect", "homePage"); // Yönlendirme işlemi kaydedildi
            setTimeout(function () {
                window.location.href = "../index.html"; // Ana sayfaya yönlendir
            }, 500); // 0.5 saniye bekle
        });
    }

    if (dropprojectBtn) {
        dropprojectBtn.addEventListener("click", function () {
            localStorage.setItem("redirect", "homepage"); // Hakkında buton tıklama kaydedildi
            setTimeout(function () {
                window.location.href = "../index.html"; // Ana sayfaya yönlendir
            }, 500); // 0.5 saniye bekle
        });
    }
    
    if (dropaboutBtn) {
        dropaboutBtn.addEventListener("click", function () {
            localStorage.setItem("redirect", "about"); // Hakkında buton tıklama kaydedildi
            setTimeout(function () {
                window.location.href = "../index.html"; // Ana sayfaya yönlendir
            }, 500); // 0.5 saniye bekle
        });
    }

    if (dropcontactBtn) {
        dropcontactBtn.addEventListener("click", function () {
            localStorage.setItem("redirect", "contact"); // İletişim buton tıklama kaydedildi
            setTimeout(function () {
                window.location.href = "../index.html"; // Ana sayfaya yönlendir
            }, 500); // 0.5 saniye bekle
        });
    }



    myCvButton.addEventListener("click",function(){
    window.open("pdf/CV.pdf", "_blank");

    });


});



