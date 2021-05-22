const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link')
const buttons = document.querySelectorAll('button.faq-toggle')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    })
})

window.addEventListener("scroll", () => {
    mainFunc();
})

const mainFunc = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change')
            })
            navbarLinks[i].classList.add('change');
        }

    })

}

mainFunc();
