// QuantityButtons.js
const QuantityButtons = {
  render() {
    return `
    <div class="d-flex align-items-center">
        <button id="decreaseQty" class="btn btn-outline-success">-</button>
        <input type="number" id="quantity" value="1" class="form-control text-center mx-2" style="width: 60px;">
        <button id="increaseQty" class="btn btn-outline-success">+</button>
    </div>
      `;
  },
};

export default QuantityButtons;
