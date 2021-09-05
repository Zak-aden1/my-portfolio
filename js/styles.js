const tab = document.querySelectorAll('.tab')

tab.forEach((button) => {
    
    button.addEventListener('click', (event) => {
        
        // document.querySelector('.tab.active')?.classList.remove('active');

        // button.classList.add('active')
        // console.log(event.currentTarget); // show what element was clicked in the console
    // console.log(event.currentTarget.dataset); // get .dataset Object key from HTML element

    // document.querySelector('.tab.active')?.classList.remove('active'); // optional chaining

        button.classList.contains('active') ? button.classList.remove('active'): button.classList.add('active')

        // event.currentTarget.classList.add('active')

        document.querySelector('.project_one.show').classList.remove('show');
    

        // button.classList.contains('active')? button.classList.remove('active'): button.classList.add('active')
        console.log(button);
    } )
})