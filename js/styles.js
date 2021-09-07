const tab = document.querySelectorAll('.tab')
const project = document.querySelectorAll('.project_one')

// selecting projects
tab.forEach((button) => {
    
    button.addEventListener('click', (event) => {

    // remove previous active class
        const prevActive = document.querySelector('.active')
        prevActive.classList.remove('active')

        // add active class to selected button
        button.classList.contains('active') ? button.classList.remove('active'): button.classList.add('active')


        // remove previous shown projects
        const prevShow = document.querySelectorAll('.show')
        prevShow.forEach((pro) => {
            pro.classList.remove('show')
        })

        // adding class to show selected project
        const selectedContent = event.currentTarget.dataset.content;
        const currentProjects = document.querySelectorAll(selectedContent);

        currentProjects.forEach((pro) => {
            pro.classList.add('show')
        })
    } )
})

// header fixed after scrolling 
// DYNAMICALLY ADDING FIXED NAVBAR //
const navbar = document.querySelector('header');
const navItems = document.querySelectorAll('li');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav'); 
    }
});