const handleProdukQty = () => {
  const increaseQty = document.getElementById("increaseQty");
  const decreaseQty = document.getElementById("decreaseQty");
  const quantityInput = document.getElementById("quantity");

  if (increaseQty && decreaseQty && quantityInput) {
    increaseQty.addEventListener("click", () => {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseQty.addEventListener("click", () => {
      if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    });
  } else {
    console.error("One or more elements not found.");
  }
};

const generateStarRating = (rating) => {
  const fullStars =
    '<span class="rating" style="color: #4dc38c; font-size: 2rem">★</span>'.repeat(
      Math.floor(rating)
    );
  const halfStar =
    rating % 1 !== 0
      ? '<span style="color: #4dc38c; font-size: 2rem">★</span>'
      : "";
  const emptyStars =
    '<span style="color: #4dc38c; font-size: 2rem">☆</span>'.repeat(
      Math.floor(5 - rating)
    );
  return `${fullStars}${halfStar}${emptyStars}`;
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export { handleProdukQty, generateStarRating, formatCurrency };
