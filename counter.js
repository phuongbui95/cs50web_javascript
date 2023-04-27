// let counter = 0;   
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);

    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`);
    // }
    // return counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    let count_value = document.querySelector('h1').innerHTML;
    alert(count_value*2)
    
    // setInterval(count, 1000);
    if (count_value % 2 == 1) {
        document.querySelector('p').innerHTML = 'This is an odd number';
    } 
    else {
        document.querySelector('p').innerHTML = 'This is an even number';
    }
});