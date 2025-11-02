document.addEventListener("DOMContentLoaded", function () {
    // Modern scroll animations and navigation
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navList = document.getElementById('nav-list');
    
    // Mobile menu toggle
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = !mobileMenuToggle.classList.contains('active');
            mobileMenuToggle.classList.toggle('active');
            navList.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (isActive) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking on a nav item
        document.querySelectorAll('nav ul li').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && navList.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    // Sticky navigation with scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    document.querySelectorAll('nav ul li').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.classList.contains('btn-homepage') ? '.homepage' :
                    link.classList.contains('btn-about') ? '.about-us' :
                       link.classList.contains('btn-project') ? '.projects' :
                       link.classList.contains('btn-contact') ? '.contact-us' : null;
        
        if (targetId) {
            if (targetId === '.homepage') {
                // Homepage yerine projects gösterilsin
                const projectSection = document.querySelector('.projects');
                if (projectSection) {
                    // Burada scroll yerine görünürlüğü değiştirebilirsin
                    projectSection.classList.add('active'); 
                    // Eğer diğer section'lar kapanacaksa:
                    document.querySelectorAll('section').forEach(sec => {
                        if (sec !== projectSection) sec.classList.remove('active');
                    });
                }
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }
    });
});


   // Bölümler
const aboutSection = document.querySelector(".about-us");
const projectSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact-us");

// Navbar butonları
const navButtons = {
    homePage: document.querySelector(".btn-homepage"),
    about: document.querySelector(".btn-about"),
    project: document.querySelector(".btn-project"),
    contact: document.querySelector(".btn-contact")
};

// Dropdown butonları
const dropButtons = {
    homePage: document.querySelector(".DropBtn-homePage"),
    about: document.querySelector(".DropBtn-about"),
    project: document.querySelector(".DropBtn-project"),
    contact: document.querySelector(".DropBtn-contact")
};


// Proje kutuları
const projects = [
    { el: document.getElementById("project_1"), url: "./dropdown_Page/project_1.html" },
    { el: document.getElementById("project_2"), url: "./dropdown_Page/project_2.html" },
    { el: document.getElementById("project_3"), url: "./dropdown_Page/project_3.html" },
    { el: document.getElementById("project_4"), url: "./dropdown_Page/project_4.html" },
    { el: document.getElementById("project_5"), url: "./dropdown_Page/project_5.html" },
    { el: document.getElementById("project_6"), url: "./dropdown_Page/project_6.html" }
];

// Bölüm geçişini yöneten fonksiyon
function showSection(section) {
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    contactSection.style.display = "none";

    if (section === "homePage") {
        projectSection.style.display = "block"; // homepage → projects
    } else if (section === "about") {
        aboutSection.style.display = "block";
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === "project") {
        projectSection.style.display = "block";
        projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === "contact") {
        contactSection.style.display = "block";
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// LocalStorage yönlendirme kontrolü
const redirectAction = localStorage.getItem("redirect");
if (redirectAction) {
    showSection(redirectAction);
    localStorage.removeItem("redirect");
}

// Navbar butonlarına event
Object.keys(navButtons).forEach(key => {
    if (navButtons[key]) {
        navButtons[key].addEventListener("click", () => {
            showSection(key);
        });
    }
});

// Dropdown butonlarına event
Object.keys(dropButtons).forEach(key => {
    if (dropButtons[key]) {
        dropButtons[key].addEventListener("click", () => {
            localStorage.setItem("redirect", key);
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 300);
        });
    }
});

// Proje kutuları için yönlendirme
projects.forEach(proj => {
    if (proj.el) {
        proj.el.addEventListener("click", () => {
            window.location.href = proj.url;
        });
    }
});




    const myCvButton = document.querySelector(".MyCv");
    if (myCvButton) {
        myCvButton.addEventListener("click", function(){
            window.open("pdf/CV.pdf", "_blank");
        });
    }

    // Changing title animation with typewriter effect
    const titles = [
        "Web Developer",
        "Full-Stack Developer",
        "Freelancer",
        "UI/UX Designer",
        "Frontend Developer"
    ];
    
    const changingTitle = document.getElementById("changing-title");
    if (changingTitle) {
        let currentIndex = 0;
        let isTyping = false;
        let isDeleting = false;
        let currentText = "";
        let charIndex = 0;
        
        function typeWriter() {
            const fullText = titles[currentIndex];
            
            if (isDeleting) {
                // Silme işlemi
                currentText = fullText.substring(0, charIndex - 1);
                charIndex--;
                changingTitle.textContent = currentText;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % titles.length;
                    setTimeout(typeWriter, 500); // Metinler arası bekleme
                    return;
                }
            } else {
                // Yazma işlemi
                currentText = fullText.substring(0, charIndex + 1);
                charIndex++;
                changingTitle.textContent = currentText;
                
                if (charIndex === fullText.length) {
                    // Metin tamamlandı, 2 saniye bekle, sonra sil
                    isDeleting = true;
                    setTimeout(typeWriter, 2000);
                    return;
                }
            }
            
            // Yazma hızı (silme daha hızlı)
            const typeSpeed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Başlat
        typeWriter();
    }

    document.getElementById("project_7").addEventListener("click", function(){
        window.open("http://zgrelektrik.com.tr/", "_blank");
    });
});



