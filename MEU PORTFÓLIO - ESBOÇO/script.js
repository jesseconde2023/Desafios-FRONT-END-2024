function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

// Mostrar a página inicial ao carregar o site
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
