export function initDropdown() {
    const dropdownShipmentButton = document.querySelector('.dropdown-shipment');
    const dropdownPaymentButton = document.querySelector('.dropdown-payment');
    const dropdownShipmentContent = document.querySelector('.dropdown-shipment-content');
    const dropdownPaymentContent = document.querySelector('.dropdown-payment-content');
    const selectedShipment = document.getElementById('selected-shipment');
    const selectedPayment = document.getElementById('selected-payment');

    dropdownShipmentButton.addEventListener('click', () => {
        console.log('Dropdown button clicked');
        dropdownShipmentContent.classList.toggle('show');
    });

    dropdownPaymentButton.addEventListener('click', () => {
        console.log('Dropdown button clicked');
        dropdownPaymentContent.classList.toggle('show');
    });

    dropdownShipmentContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            console.log('Dropdown item clicked');
            const selectedText = event.target.textContent;
            selectedShipment.textContent = selectedText;
            dropdownShipmentContent.classList.remove('.show');
        }
    });

    dropdownPaymentContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            console.log('Dropdown item clicked');
            const selectedText = event.target.textContent;
            selectedPayment.textContent = selectedText;
            dropdownPaymentContent.classList.remove('.show');
        }
    });
}