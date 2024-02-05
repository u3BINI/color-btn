const boxColor = document.querySelector('.background_color')
const green =document.querySelector('.green')
const black = document.querySelector('.black')
const red =document.querySelector('.red')
const white =document.querySelector('.white')
const yellow =document.querySelector('.yellow')
const blue =document.querySelector('.blue')
const gray =document.querySelector('.gray')
const purple =document.querySelector('.purple')
const reset =document.querySelector('.reset')

green.addEventListener('click',function(){
console.log('зеленый ');
boxColor.style.backgroundColor="green"
})
black.addEventListener('click',function(){
    console.log('черный  ');
    boxColor.style.backgroundColor="black"
    })
    red.addEventListener('click',function(){
        console.log('красный ');
        boxColor.style.backgroundColor="red"
        })
        white.addEventListener('click',function(){
            console.log('белый  ');
            boxColor.style.backgroundColor="white"
            })
            yellow.addEventListener('click',function(){
                console.log('желтый');
                boxColor.style.backgroundColor="yellow"
                })
                blue.addEventListener('click',function(){
                    console.log('синий ');
                    boxColor.style.backgroundColor="blue"
                    })
                    gray.addEventListener('click',function(){
                        console.log('серыйaass ');
                        boxColor.style.backgroundColor="gray"
                        })
                        purple.addEventListener('click',function(){
                            console.log('сиреневый  ');
                            boxColor.style.backgroundColor="purple"
                            })
                            reset.addEventListener('click', function(){
                                boxColor.style.backgroundColor="turquoise"
                            })
                                                            

