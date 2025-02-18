
function cmGoHome(){
    const cmHome = document.querySelector('.cm-logo')

    cmHome.addEventListener('click', ()=>{
        window.location.href = 'index.html'
    })
}

function cmGoAmazon(){

    const cmAmazon = document.querySelector('.purchase')


        if (cmAmazon){
        cmAmazon.addEventListener('click', ()=>{
            window.open('https://www.amazon.com/Biblical-EQ-Christian-Emotional-Transformation/dp/1419649132/');
        })
        }
}


function openComment(){


    document.querySelectorAll('.tab').forEach(tab => {

    const openUp = tab.querySelector('.comment-hidden')


    tab.addEventListener('click', ()=>{

        if (openUp){

        openUp.classList.toggle('comment')

        
        }

    })
    })

    document.querySelectorAll('.tab-2').forEach(tab => {

        const openUp = tab.querySelector('.comment-hidden')
    
    
        tab.addEventListener('click', ()=>{
    
            if (openUp){
    
            openUp.classList.toggle('comment')
    
            
            }
    
        })
        })
}

function openMenu(){

    const menu = document.querySelector('.hiddenmenu')

    const menuItems = document.querySelector('.menu-items-invisible')

    const body = document.querySelector('body')




        body.addEventListener('click', (thing)=> {
            const menuItemsAnti = document.querySelector('.menu-items');

            if (menuItemsAnti && !menuItemsAnti.contains(thing.target) && !menu.contains(thing.target)) {
                menuItems.classList.toggle('menu-items-invisible')

                menuItems.classList.toggle('menu-items')
            }
        })


    menu.addEventListener('click', ()=>{

        menuItems.classList.toggle('menu-items-invisible')

        menuItems.classList.toggle('menu-items')

        console.log('You clicked the menu')

    })
}



openComment()

cmGoHome()

cmGoAmazon()

openMenu()