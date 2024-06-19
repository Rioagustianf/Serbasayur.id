const API_BASE_URL = "https://serbasayur-id-back-end.up.railway.app";

async function getAllCartItems(idCart) {
  try {
    const response = await fetch(`${API_BASE_URL}/cart_items/${idCart}`);
    if (!response.ok) {
      throw new Error("Failed to fetch cart items");
    }
    const data = await response.json();
    return data.data.cart_items;
  } catch (error) {
    console.error("Error fetching cart items:", error.message);
    throw error;
  }
}

async function getCartItemById(idCart, idCartItem) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/cart_items/${idCart}/${idCartItem}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch cart item with id ${idCartItem}`);
    }
    const data = await response.json();
    return data.data.cart_item;
  } catch (error) {
    console.error(
      `Error fetching cart item with id ${idCartItem}:`,
      error.message
    );
    throw error;
  }
}

async function addCartItem(idCart, idProduk, quantity) {
  try {
    const response = await fetch(`${API_BASE_URL}/cart_items/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_cart: idCart, id_produk: idProduk, quantity }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add cart item");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to add cart item:", error.message);
    throw error;
  }
}

async function editCartItemById(idCart, idCartItem, idProduk, quantity) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/cart_items/${idCart}/${idCartItem}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_produk: idProduk, quantity }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Failed to edit cart item with id ${idCartItem}`
      );
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(
      `Failed to edit cart item with id ${idCartItem}:`,
      error.message
    );
    throw error;
  }
}

async function deleteCartItemById(idCart, idCartItem) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/cart_items/${idCart}/${idCartItem}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Failed to delete cart item with id ${idCartItem}`
      );
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(
      `Failed to delete cart item with id ${idCartItem}:`,
      error.message
    );
    throw error;
  }
}

export {
  getAllCartItems,
  getCartItemById,
  addCartItem,
  editCartItemById,
  deleteCartItemById,
};
