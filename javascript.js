
function cmGoHome(){
    const cmHome = document.querySelector('.cm-logo')

    cmHome.addEventListener('click', ()=>{
        window.location.href = 'index.html'
    })
}

function cmGoAmazon(){

    const cmAmazon = document.querySelector('.purchase')

        cmAmazon.addEventListener('click', ()=>{
            window.open('https://www.amazon.com/Biblical-EQ-Christian-Emotional-Transformation/dp/1419649132/');
            console.log('Im clicked.' )
        })
    
}


function openComment(){


    document.querySelectorAll('.tab').forEach(tab => {

    const openUp = tab.querySelector('.comment-hidden')

    tab.addEventListener('click', ()=>{

        if (openUp){

        openUp.classList.toggle('comment')

        console.log('You clicked')
        }

    })
    })
}



openComment()

cmGoHome()

cmGoAmazon()