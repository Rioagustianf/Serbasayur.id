// QuantityButtons.js
const QuantityButtons = {
  render(props) {
    return `
    <div class="d-flex align-items-center">
        <button id="decreaseQty" class="btn btn-outline-success">-</button>
        <input type="number" id="quantity" value="${props}" class="form-control text-center mx-2" style="width: 60px;">
        <button id="increaseQty" class="btn btn-outline-success">+</button>
    </div>
      `;
  },
};

export default QuantityButtons;
