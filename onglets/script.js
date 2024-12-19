document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabbutton');
    const panels = document.querySelectorAll('.tabpanel');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => activateTab(index));
        tab.addEventListener('keydown', (event) => handleKeydown(event, index));
    });

    function activateTab(index) {
        tabs.forEach((tab, i) => {
            const selected = i === index;
            tab.setAttribute('aria-selected', selected);
            tab.setAttribute('tabindex', selected ? '0' : '-1');
            panels[i].hidden = !selected;
        });
        tabs[index].focus();
    }

    function handleKeydown(event, index) {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            moveFocus((index + 1) % tabs.length);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            moveFocus((index - 1 + tabs.length) % tabs.length);
        } else if (event.key === 'Home') {
            event.preventDefault();
            moveFocus(0);
        } else if (event.key === 'End') {
            event.preventDefault();
            moveFocus(tabs.length - 1);
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            activateTab(index);
        }
    }

    function moveFocus(index) {
        tabs.forEach((tab, i) => {
            tab.setAttribute('tabindex', i === index ? '0' : '-1');
        });
        tabs[index].focus();
    }
});