const tab = document.querySelectorAll('.tab')

tab.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        button.classList.add('active')
        console.log(button);
    } )
})