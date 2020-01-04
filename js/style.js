document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('#navigation');
    if(!nav) {
        console.error('Navigation missing');
    }
    const trigger = nav.querySelector('#navi-toggle');
    const links = Array.from(nav.querySelectorAll('.navigation__link'));
    links.forEach(link => {
        link.addEventListener('click', () => {
            trigger.checked = !trigger.checked;
        });
    });
});

//close popup