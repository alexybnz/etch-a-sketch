const container = document.querySelector('.container');
const size = document.querySelector('.size');
const rainbow = document.querySelector('.rainbow');


function createGrid(num){
    if (!(1 <= num && num <= 100)){
        alert('Wrong size!!!');
        return;
    }
    container.replaceChildren();
    for( i=1 ; i <= num*num ; i++){
        let block = document.createElement('div');
        let block_container = document.createElement('div');
        block_container.classList.add('block_container');
        block.classList.add('block');
        block.opacity = 0.5;
        block_container.style['flexBasis'] = `${100/num}%`
        block.style['flex'] = `1`
        block.addEventListener('mouseover',function(event) {
        
            if (rainbow.checked){
                event.target.style['background-color'] = `rgb(${Math.floor(Math.random() * 255)},
                                                            ${Math.floor(Math.random() * 255)},
                                                            ${Math.floor(Math.random() * 255)})`;
            }else{
                event.target.style['background-color'] = 'black';
                event.target.opacity = event.target.opacity + 0.1;   
                event.target.style['opacity'] = `${event.target.opacity}`
            }
             
        })
        container.appendChild(block_container);
        block_container.appendChild(block);
    }
}

size.addEventListener('click',()=> {
    let num = prompt('choose a number between 1 and 100');
    createGrid(num);
})

createGrid(16);