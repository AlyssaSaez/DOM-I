const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Turn Nav Green

let navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navItems[i].style.color = 'green';
}

//Insert two elements into the nav bar

const nav = document.getElementsByTagName('nav')[0];

const navI = document.createElement('a');
navI.textContent = 'Home';
navI.style.color = 'green';

const navI2 = document.createElement('a');
navI2.textContent = 'News';
navI2.style.color = 'green';

nav.prepend(navI);
nav.append(navI2);

//Update CTA

const ctaH1 = (document.querySelector('.cta .cta-text h1').textContent = siteContent.cta['h1']);
const ctaImg = (document.querySelector('#cta-img').src = siteContent.cta['img-src']);
const ctaButton = (document.querySelector('.cta .cta-text button').textContent = siteContent.cta['button']);

//Updated Top Content

const topContent = document.querySelectorAll('.top-content .text-content');

topContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];

topContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

//Nav animation

TweenMax.from('nav a', 2, { x: -600, y: -50, scale: 0, rotation: 180, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('nav a', { x: 0, y: 0 });