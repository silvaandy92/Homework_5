function findPrime ()   {
    
    var i, j, c, start, end;

    start = parseInt(document.getElementById('number1').value);
    end = parseInt(document.getElementById('number2').value);

    document.getElementById('result').innerHTML = '';

    for (i = start; i <= end; i++) {
        c = 0;
        for (j = 1; j <= i; j++) {

            if (i % j === 0) {

                c++;
            }
        }

        if (c === 2) {
            document.getElementById('statement').innerHTML = `There are ${c} prime numbers.`;
            document.getElementById('result').insertAdjacentHTML('beforeend', i + ',')
        }
    }
}

document.getElementById('number1').addEventListener('blur', e => {
    const num1 = e.target.value;
    let num1output = '';
    let messageColor='red';
    if (num1 > 100) {
        num1output = 'Invalid input, please try again.'
        messageColor = 'red';
    } else if ( num1 < 2) {
        num1output = 'Invalid input, please try again.';
        messageColor = 'red';
    }
    const number1HelpElement = document.getElementById('number1Help');
    number1HelpElement.textContent = `${num1output}`;
    number1HelpElement.style.color = messageColor;
})

document.getElementById('number2').addEventListener('blur', e => {
    const num2 = e.target.value;
    let num2output = '';
    let messageColor='red';
    if (num2 > 100) {
        num2output = 'Invalid input, please try again.'
        messageColor = 'red';
    } else if ( num2 < 2) {
        num2put = 'Invalid input, please try again.';
        messageColor = 'red';
    }
    const number1HelpElement = document.getElementById('number1Help');
    number1HelpElement.textContent = `${num2output}`;
    number1HelpElement.style.color = messageColor;
})