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
    // Display current value of localStorage
    let tmp = localStorage.getItem('counter');
    document.querySelector('h1').innerHTML = tmp;
    // Triggle onclick event
    document.querySelector('button').onclick =  function() {
        // Activate count()
        count();
        // Update localStorage
        tmp = localStorage.getItem('counter');
        document.querySelector('h1').innerHTML = tmp;
        // update p tag
        if (tmp % 2 == 1) {      
            document.querySelector('p').innerHTML = 'This is an odd number';
        } 
        else {
            document.querySelector('p').innerHTML = 'This is an even number';
        }
    }
    
})