// ================================
// SMOOTH SCROLL NAVBAR
// ================================

document.querySelectorAll('nav a, .btn').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


// ================================
// NAVBAR AKTIF SAAT SCROLL
// ================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


// ================================
// ANIMASI SECTION SAAT MUNCUL
// ================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(
    '.about-card, .data-item, .skill, .contact-box'
).forEach(element => {
    observer.observe(element);
});


// ================================
// ANIMASI SKILL BAR
// ================================

const skillSection = document.querySelector('.skills');

const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const htmlSkill =
                    document.querySelector('.skill-progress.html');

                const cssSkill =
                    document.querySelector('.skill-progress.css');

                const codingSkill =
                    document.querySelector('.skill-progress.coding');

                if (htmlSkill) {
                    htmlSkill.style.width = '80%';
                }

                if (cssSkill) {
                    cssSkill.style.width = '70%';
                }

                if (codingSkill) {
                    codingSkill.style.width = '60%';
                }

                skillObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3
    }
);

if (skillSection) {
    skillObserver.observe(skillSection);
}


// ================================
// EFEK TOMBOL "KENALI SAYA"
// ================================

const button = document.querySelector('.btn');

if (button) {
    button.addEventListener('click', () => {
        button.classList.add('clicked');

        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
}


// ================================
// PESAN SAAT WEBSITE SELESAI DIMUAT
// ================================

window.addEventListener('load', () => {
    console.log('Website Aulia Putri Arfiyanti berhasil dimuat!');
});