document.addEventListener("DOMContentLoaded", function () {
    // Butonları ve bölümleri seç
    const aboutBtn = document.querySelector(".btn-about");
    const projectBtn = document.querySelector(".btn-project");
    const contactBtn = document.querySelector(".btn-contact");

    const dropHomePageBtn=document.querySelector(".DropBtn-homePage");
    const dropaboutBtn=document.querySelector(".DropBtn-about");
    const dropprojectBtn=document.querySelector(".DropBtn-project");
    const dropcontactBtn=document.querySelector(".DropBtn-contact");




    const aboutSection = document.querySelector(".about-us");
    const projectSection = document.querySelector(".projects");
    const contactSection = document.querySelector(".contact-us");



    // Tıklama olayları
    aboutBtn.addEventListener("click", function () {
       aboutSection.style.display="block";
       projectSection.style.display="none";
       contactSection.style.display="none";
        
    });

    projectBtn.addEventListener("click", function () {
        aboutSection.style.display="none";
        projectSection.style.display="block";
        contactSection.style.display="none";
    });

    contactBtn.addEventListener("click", function () {
        aboutSection.style.display="none";
        projectSection.style.display="none";
        contactSection.style.display="block";
    });


    dropHomePageBtn.addEventListener("click", function () {
        window.location.href = "index.html";
        projectBtn.click();
    });
});
