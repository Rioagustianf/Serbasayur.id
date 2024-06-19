// ProductImage.js
const ProductImage = {
  render(props) {
    const { src, alt } = props;
    return `
    <div class="col-3">
        <div class="mt-3">
            <img src="${src}" alt="${alt}"">
        </div>
    </div>
      `;
  },
};

export default ProductImage;
