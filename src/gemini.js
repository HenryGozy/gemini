// Function to toggle the display of submenus
function toggleSubMenu(menuItem) {
    const subMenu = menuItem.querySelector('.sub-head2');
    if (subMenu.style.display === 'none' || subMenu.style.display === '') {
        subMenu.style.display = 'flex';
    } else {
        subMenu.style.display = 'none';
    }
}

// Add click event listeners to main menu items with class 'menu-item'
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        toggleSubMenu(item);
    });
});

// Event listeners for the sidebar toggle
const sidebar = document.querySelector('#SideBar');
document.querySelector('#ham-cont').addEventListener('click', () => {
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'flex' : 'none';
});
document.querySelector('.cancel').addEventListener('click', () => {
    sidebar.style.display = 'none';
});

// Card flip functionality
document.querySelectorAll('.the-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('the-cad');
    });
});
document.querySelectorAll('.btn-contb').forEach(bcard => {
    bcard.addEventListener('click', event => {
        event.stopPropagation();
        bcard.closest('.the-card').classList.remove('the-cad');
    });
});
