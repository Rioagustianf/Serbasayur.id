const API_BASE_URL = "http://localhost:3000";

// Fungsi untuk mengambil semua admin
async function getAllAdmins() {
  try {
    const response = await fetch(`${API_URL}/admins`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.admins;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Fungsi untuk mengambil admin berdasarkan ID
async function getAdminById(idAdmin) {
  try {
    const response = await fetch(`${API_URL}/admins/${idAdmin}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.admin;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Fungsi untuk mengambil admin berdasarkan username dan password
async function getAdminByUsernamePassword(username, password) {
  try {
    const response = await fetch(`${API_URL}/admins/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Fungsi untuk menambahkan admin baru
async function addAdmin(adminData) {
  try {
    const response = await fetch(`${API_URL}/admins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Fungsi untuk mengedit admin berdasarkan ID
async function editAdminById(idAdmin, adminData) {
  try {
    const response = await fetch(`${API_URL}/admins/${idAdmin}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Fungsi untuk menghapus admin berdasarkan ID
async function deleteAdminById(idAdmin) {
  try {
    const response = await fetch(`${API_URL}/admins/${idAdmin}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Export semua fungsi
export {
  getAllAdmins,
  getAdminById,
  getAdminByUsernamePassword,
  addAdmin,
  editAdminById,
  deleteAdminById,
};
