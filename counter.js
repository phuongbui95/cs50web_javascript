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
    // tmp = localStorage.getItem('counter');
    // document.querySelector('h1').innerHTML = tmp;
    // alert(tmp*2)
    // setInterval(count, 1000);
    document.querySelector('button').onclick =  function() {
        // activate count()
        count();
        // update p tag
        tmp = localStorage.getItem('counter');
        document.querySelector('h1').innerHTML = tmp;
        if (tmp % 2 == 1) {
            document.querySelector('p').innerHTML = 'This is an odd number';
        } 
        else {
            document.querySelector('p').innerHTML = 'This is an even number';
        }
        // document.querySelector('p').innerHTML = tmp*2;
        // alert(tmp*2)
    }
    
})