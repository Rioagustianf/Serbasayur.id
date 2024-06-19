const API_BASE_URL = "https://serbasayur-id-back-end.up.railway.app";

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
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const userData = await response.json();
    const users = userData.data.users;

    // Pastikan bahwa users adalah array
    if (!Array.isArray(users)) {
      throw new Error("Expected an array of users");
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(users)

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
