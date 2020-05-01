function findPrime ()   {
    "use strict";
    
    var i, j, c, start, end;
    // get the first and the second value from the form

    start = parseInt(document.getElementById('start').value);
    end = parseInt(document.getElementById('end').value);

    //clear the result div
    document.getElementById('result').innerHTML = '';

    //loop til i equals to end
    for (i = start; i <= end; i++) {
        c = 0;
        for (j = 1; j <= i; j++) {
            // % modules will give the reminder value, so if the reminder is 0 then it is divisible
            if (i % j === 0) {
                //increment the value of c
                c++;
            }
        }

        //if the value of count is 2 then is is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
        if (c === 2) {
            document.getElementById('statement').innerHTML = `There are ${c} prime numbers.`;
            document.getElementById('result').insertAdjacentHTML('beforeend', i + ',')
        }
    }
}