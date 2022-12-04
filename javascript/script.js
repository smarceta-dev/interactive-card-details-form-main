
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


legalName = ""
cc = ""
m = ""
y = ""
cvc = ""

// Event listeners for Legal Name
fullName.addEventListener('keypress', (event) => {
    legalName += event.key;
    cardFrontName.innerHTML = legalName;
})

fullName.addEventListener('keydown', (event) => {

    if(event.key === "Backspace" || event.key === "Delete"){

            legalName = legalName.slice(0, -1);
            cardFrontName.innerHTML = legalName;
    }
})


// Event listener for cc number
cardNumb.addEventListener('keypress', (event) => {

    if(cc.length < 19 ){
    cc += event.key;
    cardFrontNumber.innerHTML = cc;
    }
})

cardNumb.addEventListener('keydown', (event) => {

    if(event.key === "Backspace" || event.key === "Delete"){

            cc = cc.slice(0, -1);
            cardFrontNumber.innerHTML = cc;
    }
})



// Event listener for month 
expMonth.addEventListener('keypress', (event) => {

    if(m.length < 2 ){
        m += event.key; 
        cardFrontMonth.innerHTML = m ;
    }
})

expMonth.addEventListener('keydown', (event) => {

    if(event.key === "Backspace" || event.key === "Delete"){

            m = m.slice(0, -1);
            cardFrontMonth.innerHTML = m;
    }
})


// Event listener for year 
expYear.addEventListener('keypress', (event) => {

    if(y.length < 2 ){
        y += event.key; 
        cardFrontYear.innerHTML = y ;
    }
})

expYear.addEventListener('keydown', (event) => {

    if(event.key === "Backspace" || event.key === "Delete"){

            y = y.slice(0, -1);
            cardFrontYear.innerHTML = y;
    }
})

// Event listener for cvc 
cardCvc.addEventListener('keypress', (event) => {

    if(cvc.length < 3 ){
        cvc += event.key; 
        cardBackCvc.innerHTML = cvc ;
    }
})

cardCvc.addEventListener('keydown', (event) => {

    if(event.key === "Backspace" || event.key === "Delete"){

        cvc = cvc.slice(0, -1);
            cardBackCvc.innerHTML = cvc;
    }
})