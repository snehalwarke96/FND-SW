document.querySelector('.Cup').addEventListener('click',() => {
    // document.querySelector('.detNone').classList.toggle('colgDetails');
    document.querySelector('.colgDetails').classList.toggle('detNone');
    // document.querySelector('.Cdown').classList.toggle('Cup');
    document.querySelector('.Cup').classList.toggle('Cdown');
    
});

document.querySelector('.Ddown').addEventListener('click',() => {
  

    document.querySelector('.diplomaDetails').classList.toggle('detNone');
    document.querySelector('.Dup').classList.toggle('Ddown');
});

document.querySelector('.Sdown').addEventListener('click',() => {
    document.querySelector('.schoolDetails').classList.toggle('detNone');
    document.querySelector('.Sup').classList.toggle('Sdown');
    console.log('snail');
});


let ham= document.querySelector('.ham');
let cross= document.querySelector('.cross');
let wrapDiv= document.querySelector('.wrapDiv');
let NavDiv= document.querySelector('.NavDiv');

if (ham != 'none') {
    cross.style.display='none';  
    wrapDiv.style.display='none';  
}
if (NavDiv != 'none') {
    // cross.style.display='none';  
    wrapDiv.style.display='none';  
}
// else{
//     cross.style.display='block';  
//     wrapDiv.style.display='block';  
// }

ham.addEventListener('click', (e => {
    console.log('snehal')
    ham.style.display='none';  
    cross.style.display='block';  
        wrapDiv.style.display='block';  
}))

cross.addEventListener('click', (e => {
    console.log('snehal')
    ham.style.display='block';  
    cross.style.display='none';  
        wrapDiv.style.display='none';  
}))

wrapDiv.addEventListener('click', (e => {
    ham.style.display='block';  
    cross.style.display='none';  
        wrapDiv.style.display='none';  
}))




