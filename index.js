
let arr = ['images/pd1.jpg', 'images/pd2.jpg', 'images/pd3.jpg', 'images/pd4.jpeg', 'images/pd5.jpg'];

const image = document.querySelector('.image img');
const cardcontainer = document.querySelector('.cardcontainer');
const viewbtn = document.querySelector('.viewbtn');
const colorbox = document.querySelectorAll('.color-box p');
const colortext = document.querySelector('.color-text');

const statusBar = document.getElementById('statusBar');
const progress = document.querySelector('.progress');

let timeoutIds = [];

function updateProgressBar(progress) {
    console.log(progress)
    const progressbar = document.getElementById(progress);
    console.log(progressbar)
    progressbar.style.backgroundColor = `white`;
}

cardcontainer.addEventListener('mouseenter', ()=>{
    viewbtn.style.opacity = "1";
    colortext.style.display = 'none';
    colorbox.forEach(e => {
        e.style.width = '20px';
        e.style.height = '20px';
    })
    arr.forEach((e, index) => {
        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.id = `progress_${index}`;
        progress.style.width = `${(1 / arr.length) * 100}%`;
        progress.style.height = `3px`;
        progress.style.backgroundColor = `gray`;
        progress.style.margin = `0 0.5px`;

        statusBar.appendChild(progress);
    });
    arr.forEach((e, index) => {
        const timeoutId = setTimeout(function(){
            image.src = e;
            // for (let i = 0; i < array.length; i++) {
            //     const element = array[i];
                
            // }
            updateProgressBar(`progress_${index}`);
        }, index * 1000);
        timeoutIds.push(timeoutId);
    });
})


cardcontainer.addEventListener('mouseleave', () => {
    viewbtn.style.opacity = "0";
    colortext.style.display = 'block';
    colorbox.forEach(e => {
        e.style.width = '0px';
        e.style.height = '0px';
    })
    // updateProgressBar(0);

    statusBar.innerHTML = '';
    
    timeoutIds.forEach((timeoutId) => {
        clearTimeout(timeoutId);
    });
    
    image.src = 'images/pd5.jpg';
});