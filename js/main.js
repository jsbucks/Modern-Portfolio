// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Track outbound clicks in GA4 (skip inline gtag handlers).
document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) {
    return;
  }

  const href = link.getAttribute('href') || '';
  if (
    !href.startsWith('http://') &&
    !href.startsWith('https://') &&
    !href.startsWith('mailto:') &&
    !href.startsWith('tel:')
  ) {
    return;
  }

  if (typeof window.gtag === 'function') {
    const linkText = (link.textContent || '').trim();
    const eventName = link.dataset.gaEvent || 'outbound_click';
    const label = link.dataset.gaLabel;
    window.gtag('event', eventName, {
      link_url: href,
      link_text: linkText || undefined,
      link_label: label || undefined
    });
  }
});
