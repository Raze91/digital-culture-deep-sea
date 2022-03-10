const options = {
    // section qui contient l'élément
    root: document.querySelector('#scrollArea'),
    // hitbox de detection de l'élément
    rootMargin: '0px',
    // visibilité de l'élément
    threshold: 1.0
};

const endOptions = {
    // section qui contient l'élément
    root: document.querySelector('#scrollArea'),
    // hitbox de detection de l'élément
    rootMargin: '0px',
    // visibilité de l'élément
    threshold: 0
}

const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    if (entries[0].isIntersecting) {
        document.querySelector(".submarine").classList.replace("submarine", "fixed-submarine");
    }
}, options);

const endObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        console.log("end");
        document.querySelector(".fixed-submarine").classList.replace("fixed-submarine", "bottom-submarine");
    }
}, endOptions)

observer.observe(document.querySelector('.submarine'))
endObserver.observe(document.querySelector(".conclusion"))