const options = {
    // section qui contient l'élément
    root: document.querySelector('#scrollArea'),
    // hitbox de detection de l'élément
    rootMargin: '0px',
    // visibilité de l'élément
    threshold: 1.0
};

const observer = new IntersectionObserver(() => {

}, options);