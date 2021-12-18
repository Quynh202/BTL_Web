const tabs = document.querySelectorAll('.item');

listMenu.forEach((tab) => {
    
    tab.onclick = function() {
        const tabActive  = document.querySelector('.item.active');
        tabActive.classList.remove('active');
        this.classList.add('active');
    }
    
})