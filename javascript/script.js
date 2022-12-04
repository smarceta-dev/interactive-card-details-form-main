
// Credit Card text
cardFrontName = document.getElementById('full_name');
cardFrontNumber = document.getElementById('cc_number')
cardFrontMonth = document.getElementById('card_front_month');
cardFrontYear = document.getElementById('card_front_year');
cardBackCvc = document.getElementById('card-back-cvc');

// Form inputs
fullName = document.getElementById('cardholder_name');
cardNumb = document.getElementById('card_number');
expMonth = document.getElementById('month');
expYear = document.getElementById('year');
cardCvc = document.getElementById('cvc');


// Event listeners for input
fullName.addEventListener('keydown ', (event) => {
    cardFrontName.innerHTML += event.key;
    console.log(event);
})

cardNumb.addEventListener('keydown ', (event) => {
    cardFrontNumber.innerHTML += event.key;
})

expMonth.addEventListener('keydown ', (event) => {
    cardFrontMonth.innerHTML += event.key;

    
})

expYear.addEventListener('keydown ', (event) => {
    cardFrontYear.innerHTML += event.key;
})

cardCvc.addEventListener('keydown ', (event) => {
    cardBackCvc.innerHTML += event.key;
})
