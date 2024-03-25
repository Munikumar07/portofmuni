let menu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = function() {
    menu.classList.toggle('menu-btn');
    navbar.classList.toggle('open')
};



const sr = ScrollReveal ({
    distance: '20px',
    duration: 2500,
    resize: true
});

sr.reveal('.logo',{delay: 200, origin: 'left'});
sr.reveal('.navbar',{delay: 400, origin: 'top'});
sr.reveal('.menu-btn',{delay: 200, origin: 'right'});
sr.reveal('.home-text span',{delay: 600, origin: 'top'});
sr.reveal('.home-text h1',{delay: 680, origin: 'left'});
sr.reveal('.home-text p',{delay: 750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});

sr.reveal('.share', {delay:1000, origin: 'bottom'});
sr.reveal('.home-img', {delay:1000, origin: 'right'});
sr.reveal('.sub-title', {delay:750, origin: 'left'});
sr.reveal('video', {delay:800, origin: 'bottom'});
sr.reveal('.portfolio', {delay:800, origin: 'bottom'});
sr.reveal('.contact-left', {delay:750, origin: 'bottom'});
sr.reveal('.contact-right', {delay:750, origin: 'right'});
sr.reveal('#work', {delay: 750, origin: 'top'});




let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove "active-link" from all tab links
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove "active-tab" from all tab contents
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Find the tab link and content with the given tabname
    var selectedTabLink = document.querySelector(`.tab-links[data-tab="${tabname}"]`);
    var selectedTabContent = document.querySelector(`.tab-contents[data-tab="${tabname}"]`);

    // Add "active-link" to the selected tab link
    if (selectedTabLink) {
        selectedTabLink.classList.add("active-link");
    }

    // Add "active-tab" to the selected tab content
    if (selectedTabContent) {
        selectedTabContent.classList.add("active-tab");
    }

    event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");

}


sr.reveal('.about-col-1',{delay:400, origin: 'left'});
sr.reveal('.about-col-2',{delay:600, origin: 'top'});
sr.reveal('.row', {delay:200, origin: 'bottom'});

