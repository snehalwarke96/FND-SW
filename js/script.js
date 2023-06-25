document.querySelector('.Cup').addEventListener('click',() => {
 
    document.querySelector('.schoolDetails').classList.add('detNone');
    document.querySelector('.diplomaDetails').classList.add('detNone');
    document.querySelector('.colgDetails').classList.toggle('detNone');
    document.querySelector('.Cup').classList.toggle('Cdown');
    document.querySelector('.Dup').classList.add('Ddown');
    document.querySelector('.Sup').classList.add('Sdown');
    
});

document.querySelector('.Ddown').addEventListener('click',() => {
    document.querySelector('.schoolDetails').classList.add('detNone');

    document.querySelector('.colgDetails').classList.add('detNone');

    document.querySelector('.diplomaDetails').classList.toggle('detNone');
    document.querySelector('.Dup').classList.toggle('Ddown');
    document.querySelector('.Cup').classList.add('Cdown');

    document.querySelector('.Sup').classList.add('Sdown');
});

document.querySelector('.Sdown').addEventListener('click',() => {

    document.querySelector('.diplomaDetails').classList.add('detNone');
    document.querySelector('.colgDetails').classList.add('detNone');
    document.querySelector('.schoolDetails').classList.toggle('detNone');
    document.querySelector('.Sup').classList.toggle('Sdown');
    document.querySelector('.Cup').classList.add('Cdown');
    document.querySelector('.Dup').classList.add('Ddown');

    console.log('snail');
});


let ham= document.querySelector('.ham');
let cross= document.querySelector('.cross');
let wrapDiv= document.querySelector('.wrapDiv');
let NavDiv= document.querySelector('.NavDiv');

if (ham != 'none') {
    cross.style.display='none';  
    wrapDiv.style.display='0px';  
}
if (NavDiv != 'none') {
    wrapDiv.style.height='0px';  
}


ham.addEventListener('click', (e => {
    console.log('snehal')
    ham.style.display='none';  
    cross.style.display='block';  
        wrapDiv.style.height='100vh';  
}))

cross.addEventListener('click', (e => {
    console.log('snehal')
    ham.style.display='block';  
    cross.style.display='none';  
        wrapDiv.style.height='0px';  
}))

wrapDiv.addEventListener('click', (e => {
    ham.style.display='block';  
    cross.style.display='none';  
        wrapDiv.style.height='0px';  
}))



