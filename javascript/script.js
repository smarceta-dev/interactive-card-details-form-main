
// Credit Card text elements
cardFrontName = document.getElementById('full_name');
cardFrontNumber = document.getElementById('cc_number')
cardFrontMonth = document.getElementById('card_front_month');
cardFrontYear = document.getElementById('card_front_year');
cardBackCvc = document.getElementById('card-back-cvc');

// Form input elements
fullName = document.getElementById('cardholder_name');
cardNumb = document.getElementById('card_number');
expMonth = document.getElementById('month');
expYear = document.getElementById('year');
cardCvc = document.getElementById('cvc');

// Grabbing form element
form = document.getElementById('cc_form');

// Grabbing error input divs 
ccError = document.getElementById('cc-input-error');

// Event listener for full name input
fullName.addEventListener('input', (event) => {

    let legalName = fullName.value;
    cardFrontName.innerHTML = legalName.toUpperCase();
    
})

// Event listener for card number input
cardNumb.addEventListener('input', (event) => {
    let ccNumb = cardNumb.value;
    if (ccNumb.length === 0 && ccNumb.length < 20) {
        cardFrontNumber.innerHTML = "1234 5678 9123 0000"
    }else {
        cardFrontNumber.innerHTML = ccNumb;
    } 
})

// Event listener for credit card number format
cardNumb.addEventListener('keyup', (event) => {
    let ccNumb = cardNumb.value;

    let indx = ccNumb.lastIndexOf(' ');
    let test = ccNumb.substr(indx + 1);

    if(test.length === 4 && ccNumb.length < 16 ){
        ccNumb += " ";
        cardNumb.value = ccNumb;
    }
})

// Event listener for month input
expMonth.addEventListener('input', (event) => {
    let ccMonth = expMonth.value;
    cardFrontMonth.innerHTML = ccMonth;
})

// Event listener for year input
expYear.addEventListener('input', (event) => {
    let ccYear = expYear.value;
    cardFrontYear.innerHTML = ccYear;
})

// Event listener for cvc input 
cardCvc.addEventListener('input', (event) => {
    let cvc = cardCvc.value;
    cardBackCvc.innerHTML = cvc;
    
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateFormInputs();

    console.log("form submit");
})

const validateFormInputs = () => {
    console.log("valid");
    form.innerHTML = '<thank-you-display></thank-you-display>'
}


