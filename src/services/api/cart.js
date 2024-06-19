const API_BASE_URL = "http://localhost:3000";

// Carts API
async function getAllCarts(idUser) {
  try {
    const response = await fetch(`${API_BASE_URL}/carts/${idUser}`);
    if (!response.ok) {
      throw new Error("Failed to fetch carts");
    }
    const data = await response.json();
    return data.data.carts;
  } catch (error) {
    console.error("Error fetching carts:", error.message);
    throw error;
  }
}

async function getCartById(idUser, idCart) {
  try {
    const response = await fetch(`${API_BASE_URL}/carts/${idUser}/${idCart}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch cart with id ${idCart}`);
    }
    const data = await response.json();
    return data.data.cart;
  } catch (error) {
    console.error(`Error fetching cart with id ${idCart}:`, error.message);
    throw error;
  }
}

function getCurrentTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

async function addCart(cartData) {
  try {
    const response = await fetch(`${API_BASE_URL}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: cartData.id_user,
        create_at: getCurrentTimestamp(), // Using getCurrentTimestamp function
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add cart");
    }

    const data = await response.json();
    return data.data; // Response contains the newly added cart data
  } catch (error) {
    console.error("Failed to add cart:", error.message);
    throw error;
  }
}

async function deleteCart(idUser, idCart) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/carts/delete/${idUser}/${idCart}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Failed to delete cart with id ${idCart}`
      );
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Failed to delete cart with id ${idCart}:`, error.message);
    throw error;
  }
}

// Cart Items API
async function getAllCartItems(idCart) {
  try {
    const response = await fetch(`${API_BASE_URL}/cartitems/${idCart}`);
    if (!response.ok) {
      throw new Error("Failed to fetch cart items");
    }
    const cartItems = await response.json();
    return cartItems.data.cart_items;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
}
async function getCartItemById(idCart, idCartItem) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/cartitems/{idCart}/{idCartItem}`
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
    const response = await fetch(`${API_BASE_URL}/cartitems`, {
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
    return data.data; // Response berisi data cart item yang baru saja ditambahkan
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
  getAllCarts,
  getCartById,
  addCart,
  deleteCart,
  getAllCartItems,
  getCartItemById,
  addCartItem,
  editCartItemById,
  deleteCartItemById,
};
