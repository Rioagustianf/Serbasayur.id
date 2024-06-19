const BASE_URL = "https://serbasayur-id-back-end.up.railway.app";

// Fungsi untuk menambahkan pembayaran baru
export async function addPayment(paymentData) {
  try {
    const response = await fetch(`${BASE_URL}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) {
      throw new Error("Failed to add payment");
    }
    const data = await response.json();
    return data; // Response dari backend
  } catch (error) {
    console.error("Error adding payment:", error);
    throw error; // Dapat ditangkap di komponen yang memanggil fungsi ini
  }
}

// Fungsi untuk mengambil semua pembayaran
export async function getAllPayments() {
  try {
    const response = await fetch(`${BASE_URL}/payments`);
    if (!response.ok) {
      throw new Error("Failed to fetch payments");
    }
    const data = await response.json();
    return data.data.payments; // Sesuaikan dengan struktur response dari backend
  } catch (error) {
    console.error("Error fetching payments:", error);
    throw error; // Dapat ditangkap di komponen yang memanggil fungsi ini
  }
}

// Fungsi untuk mengambil detail pembayaran berdasarkan ID
export async function getPaymentById(idPayment) {
  try {
    const response = await fetch(`${BASE_URL}/payments/${idPayment}`);
    if (!response.ok) {
      throw new Error("Payment not found");
    }
    const data = await response.json();
    return data.data.payment; // Sesuaikan dengan struktur response dari backend
  } catch (error) {
    console.error(`Error fetching payment with ID ${idPayment}:`, error);
    throw error; // Dapat ditangkap di komponen yang memanggil fungsi ini
  }
}

// Fungsi untuk mengedit pembayaran berdasarkan ID
export async function editPaymentById(idPayment, paymentData) {
  try {
    const response = await fetch(`${BASE_URL}/payments/${idPayment}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) {
      throw new Error("Failed to edit payment");
    }
    const data = await response.json();
    return data; // Response dari backend
  } catch (error) {
    console.error(`Error editing payment with ID ${idPayment}:`, error);
    throw error; // Dapat ditangkap di komponen yang memanggil fungsi ini
  }
}

// Fungsi untuk menghapus pembayaran berdasarkan ID
export async function deletePaymentById(idPayment) {
  try {
    const response = await fetch(`${BASE_URL}/payments/${idPayment}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete payment");
    }
    const data = await response.json();
    return data; // Response dari backend
  } catch (error) {
    console.error(`Error deleting payment with ID ${idPayment}:`, error);
    throw error; // Dapat ditangkap di komponen yang memanggil fungsi ini
  }
}
