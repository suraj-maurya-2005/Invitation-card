const openBtn = document.getElementById('btn');
const contentBox = document.querySelector('.content-box');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
let open = true;


openBtn.addEventListener('click', () => {

    if(open) {
        contentBox.style.top = '7rem';
        contentBox.style.transition = '2s ease-in-out';
        open = false;
        close = true;
        setTimeout(() => {
            contentBox.classList.add('animate');
        }, 2100);
        openBtn.innerText = "CLOSE";
    }

    else if(close) {
        contentBox.classList.remove('animate');
       
        setTimeout(() => {
            contentBox.style.top = '51rem';
            contentBox.style.transition = '2s ease-in-out';
        }, 100);

        open = true;
        close = false;
        openBtn.innerText = "OPEN";
    }

    
});

