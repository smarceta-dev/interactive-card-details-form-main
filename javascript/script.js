
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

// Event listener for full name input
fullName.addEventListener('input', (event) => {

    let legalName = fullName.value;
    cardFrontName.innerHTML = legalName;
    
})

// Event listener for card number input
cardNumb.addEventListener('input', (event) => {
    let ccNumb = cardNumb.value;
    if (ccNumb.length === 0) {
        cardFrontNumber.innerHTML = "1234 5678 9123 0000"
    }else {
        cardFrontNumber.innerHTML = ccNumb;
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

cardCvc.addEventListener('input', (event) => {
    let cvc = cardCvc.value;
    cardBackCvc.innerHTML = cvc;
})
