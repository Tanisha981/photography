let button = document.getElementById('btn');
let sideBar = document.querySelector('.sidebar');
button.addEventListener('click',function(){
    if(sideBar.classList.contains('open')){
        sideBar.classList.remove('open');
        button.classList.remove('open');
    }
    else{
        sideBar.classList.add('open');
        button.classList.add('open');
    }
});