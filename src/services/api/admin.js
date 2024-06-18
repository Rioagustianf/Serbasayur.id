const API_BASE_URL = "http://localhost:3000";

// Fungsi untuk mengambil semua admin
async function getAllAdmins() {
  try {
    const response = await fetch(`${API_BASE_URL}/admins`);
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
    const response = await fetch(`${API_BASE_URL}/admins/${idAdmin}`);
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
async function loginAdmin(username, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/admins`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const adminData = await response.json();
    const admins = adminData.data.admins;
    console.log(admins);

    // Pastikan bahwa users adalah array
    if (!Array.isArray(admins)) {
      throw new Error("Expected an array of users");
    }

    const admin = admins.find(
      (admin) => admin.username === username && admin.password === password
    );
    console.log(admins);

    if (admin) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("adminId", admin.id_admin);
      return admin;
    } else {
      alert("Invalid username or password");
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    console.error("Failed to login:", error.message);
    throw new Error("Failed to login");
  }
}

// Fungsi untuk menambahkan admin baru
async function addAdmin(adminData) {
  try {
    const response = await fetch(`${API_BASE_URL}/admins`, {
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
    throw error;
  }
}

// Fungsi untuk mengedit admin berdasarkan ID
async function editAdminById(idAdmin, adminData) {
  try {
    const response = await fetch(`${API_BASE_URL}/admins/${idAdmin}`, {
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
    const response = await fetch(`${API_BASE_URL}/admins/${idAdmin}`, {
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
  loginAdmin,
  addAdmin,
  editAdminById,
  deleteAdminById,
};
