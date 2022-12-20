class ThankYouDisplay extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="thank-you-display-container">
            <img src="./images/icon-complete.svg" alt="check mark">
            <h2>THANK YOU! </h2>
            <h3> We've added your card details </h3>
            <button id="submit">Continue</button>
        </div>
        `
    }
}

window.customElements.define('thank-you-display', ThankYouDisplay);