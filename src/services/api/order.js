// src/services/api.js
const API_BASE_URL = "http://localhost:3000";

// Fungsi untuk menambahkan pesanan baru
async function addOrder(userId, tanggalOrder, status, totalHarga) {
  try {
    console.log({
      id_user: userId,
      tanggal_order: tanggalOrder,
      status: status,
      total_harga: totalHarga,
    });
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: userId,
        tanggal_order: tanggalOrder,
        status: status,
        total_harga: totalHarga,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add order");
    }

    const data = await response.json();
    return data; // Mengembalikan data order yang baru saja dibuat dari server
  } catch (error) {
    throw new Error(`Failed to add order: ${error.message}`);
  }
}

// Fungsi untuk menambahkan item pesanan baru
async function addOrderItem(idOrder, productId, quantity, hargaSatuan) {
  try {
    const response = await fetch(`${API_BASE_URL}/orderitems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_order: idOrder,
        id_produk: productId,
        kuantitas: quantity,
        harga_satuan: hargaSatuan,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to add order item: ${response.status} ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in addOrderItem:", error.message);
    throw error;
  }
}

// Fungsi untuk mengambil semua pesanan
async function getAllOrders() {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`);
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error;
  }
}

// Fungsi untuk mengambil pesanan berdasarkan ID
async function getOrderById(idOrder) {
  const response = await fetch(`${API_BASE_URL}/orders/${idOrder}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch order with id ${idOrder}`);
  }
  return response.json();
}

// Fungsi untuk mengambil semua item pesanan berdasarkan ID pesanan
async function getAllOrderItems(idOrder) {
  try {
    const response = await fetch(`${API_BASE_URL}/orderitems`);
    if (!response.ok) {
      throw new Error("Failed to fetch order items");
    }
    const data = await response.json();
    return data.data.order_items;
  } catch (error) {
    console.error("Error fetching order items:", error.message);
    throw error;
  }
}

// Fungsi untuk mengambil item pesanan berdasarkan ID pesanan dan ID item pesanan
async function getOrderItemById(idOrder, idOrderItem) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/orderitems/${idOrder}/${idOrderItem}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch order item with id ${idOrderItem} for order with id ${idOrder}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching order item: ${error.message}`);
    throw error; // Re-throw the error after logging it
  }
}

// Fungsi untuk memperbarui pesanan berdasarkan ID
async function updateOrder(idOrder, order) {
  const response = await fetch(`${API_BASE_URL}/orders/${idOrder}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error(`Failed to update order with id ${idOrder}`);
  }
  return response.json();
}

// Fungsi untuk memperbarui item pesanan berdasarkan ID pesanan dan ID item pesanan
async function updateOrderItem(idOrder, idOrderItem, orderItem) {
  const response = await fetch(
    `${API_BASE_URL}/orderitems/${idOrder}/${idOrderItem}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItem),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to update order item with id ${idOrderItem} for order with id ${idOrder}`
    );
  }
  return response.json();
}

// Fungsi untuk menghapus pesanan berdasarkan ID
async function deleteOrder(idOrder) {
  const response = await fetch(`${API_BASE_URL}/orders/${idOrder}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete order with id ${idOrder}`);
  }
  return response.json();
}

// Fungsi untuk menghapus item pesanan berdasarkan ID pesanan dan ID item pesanan
async function deleteOrderItem(idOrder, idOrderItem) {
  const response = await fetch(
    `${API_BASE_URL}/orderitems/${idOrder}/${idOrderItem}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to delete order item with id ${idOrderItem} for order with id ${idOrder}`
    );
  }
  return response.json();
}

async function getOrderItems(orderId) {
  try {
    const orderItems = await getAllOrderItems(); // Mengambil semua item pesanan
    const orderItemsData = orderItems.filter(
      (item) => item.id_order === orderId
    );
    return orderItemsData;
  } catch (error) {
    console.error("Error fetching order items:", error.message);
    throw error;
  }
}

// Ekspor fungsi-fungsi API
export {
  addOrder,
  addOrderItem,
  getAllOrders,
  getOrderById,
  getAllOrderItems,
  getOrderItemById,
  updateOrder,
  updateOrderItem,
  deleteOrder,
  deleteOrderItem,
  getOrderItems,
};
