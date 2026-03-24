// Load navbar and footer components into the page
async function loadTemplates() {
    try {
        // Load navbar
        const navResponse = await fetch('components/navbar.html');
        const navHTML = await navResponse.text();
        const navContainer = document.querySelector('body');
        const navPlaceholder = document.getElementById('navbar-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = navHTML;
        }

        // Load footer
        const footerResponse = await fetch('components/footer.html');
        const footerHTML = await footerResponse.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        }
    } catch (error) {
        console.error('Error loading templates:', error);
    }
}

// Load templates when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTemplates);
} else {
    loadTemplates();
}
