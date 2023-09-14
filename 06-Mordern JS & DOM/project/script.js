const countValue = document.querySelector('#counter');
// or
// getelementBYId('counter')

const increment = () => {
    // getting the value from UI
    let value = parseInt(countValue.innerHTML);
    // updating the value from UI
    value = value + 1;
    // setting the value
    countValue.innerHTML = value;
    
};

const decrement = () => {
    // getting the value from UI
    let value = parseInt(countValue.innerHTML);
    // updating the value from UI
    value = value - 1;
    // setting the value
    countValue.innerHTML = value;
     
};
