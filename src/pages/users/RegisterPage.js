import Register from "../../components/users/Register";
import { addUser, getAllUsers } from "../../services/api/user";
import page from "page";

const RegisterPage = {
  async render() {
    return Register.render();
  },
  async afterRender() {
    const registerForm = document.querySelector("#register-page form");

    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Mencegah pengiriman form secara default

      // Ambil nilai dari input form
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;

      // Buat objek user dari nilai input
      const user = {
        username,
        email,
        password,
        nomor_telepon: phone,
        alamat: address,
      };

      try {
        // Ambil semua pengguna dari database
        const userResponse = await getAllUsers();
        const users = userResponse.data.users;
        
        // Pastikan bahwa users adalah array
        if (!Array.isArray(users)) {
          throw new Error("Failed to fetch users");
        }
        // Periksa apakah email atau nomor telepon sudah digunakan
        const emailExists = users.some((user) => user.email === email);
        const phoneExists = users.some((user) => user.nomor_telepon === phone);

        if (emailExists) {
          alert("Email sudah digunakan, silakan gunakan email lain.");
          return;
        }

        if (phoneExists) {
          alert("Nomor telepon sudah digunakan, silakan gunakan nomor telepon lain.");
          return;
        }

        // Gunakan service API untuk menambahkan pengguna ke database
        const response = await addUser(user);

        // Setelah submit berhasil, kosongkan nilai input
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";

        // Redirect ke halaman login
        page.redirect("/login");
      } catch (error) {
        console.error("Failed to register:", error);
      }
    });
  },
};

export default RegisterPage;
