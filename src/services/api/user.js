const API_BASE_URL = "http://localhost:3000";

async function getAllUsers() {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

async function getUserById(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`);
  }
  return response.json();
}

async function addUser(user) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to add user");
  }
  return response.json();
}

async function updateUser(id, user) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
}

async function deleteUser(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return response.json();
}

async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Email or password is incorrect");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to login:", error.message);
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const response = await getAllUsers();
    const users = response.data || response; // Pastikan untuk menangani respons dengan properti 'data' atau respons langsung sebagai array
    const usersData = users.users;

    if (!Array.isArray(usersData)) {
      throw new Error("Expected an array of users");
    }

    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userId", user.id_user);
      return user;
    } else {
      alert("Invalid email or password");
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error("Failed to login:", error.message);
    throw new Error("Failed to login");
  }
}

export {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  login,
  loginUser,
};
