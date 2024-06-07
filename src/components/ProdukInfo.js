// ProductInfo.js
const ProductInfo = {
  render(props) {
    const { name, price, description } = props;
    return `
    <h1>${name}</h1>
    <p class=" fs-2 text-muted">${price}</p>
    <p>${description}</p>
      `;
  },
};

export default ProductInfo;
