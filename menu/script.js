document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('open-submenu');
    const submenu = document.getElementById('submenu-actualites');
    const submenuLinks = submenu.querySelectorAll('a');

    function openSubMenu() {
        submenu.classList.remove('hidden');
        submenu.classList.add('visible');
        button.setAttribute('aria-expanded', 'true');
    }

    function closeSubMenu() {
        submenu.classList.remove('visible');
        submenu.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
    }

    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeSubMenu();
        } else {
            openSubMenu();
        }
    });

    submenu.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeSubMenu();
            button.focus();
        }
    });

    submenuLinks[submenuLinks.length - 1].addEventListener('blur', (event) => {
        const relatedTarget = event.relatedTarget;
        if (!submenu.contains(relatedTarget)) {
            closeSubMenu();
        }
    });
});