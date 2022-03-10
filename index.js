const options = {
    // section qui contient l'élément
    root: document.querySelector('#scrollArea'),
    // hitbox de detection de l'élément
    rootMargin: '0px',
    // visibilité de l'élément
    threshold: 1
};

const observer = new IntersectionObserver((entries, observer) => {
    console.log(observer)
    // document.querySelector(".submarine").classList.replace("submarine", "fixed-submarine");
}, options);

observer.observe(document.querySelector('.submarine'))