import { addUser } from '../services/api';
import { nanoid } from 'nanoid';

const Register = {
  async render() {
    return `
      <div id="register-page">
        <div class="register-container text-center">
          <div class="register-card">
            <img src="../../public/images/logo1.png" alt="Logo" class="logo">
            <form id="register-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="email"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  <span id="email-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="phone"></label>
                  <div class=""><i class="fas fa-phone"></i></div>
                  <input type="tel" id="phone" name="phone" placeholder="PHONE" required>
                  <span id="phone-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="address"></label>
                  <div class=""><i class="fas fa-home"></i></div>
                  <input type="text" id="address" name="address" placeholder="ADDRESS" required>
                </div>
              </div>
              <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">Have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const form = document.getElementById('register-form');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');

    let emailTimeout;
    emailInput.addEventListener('input', function () {
      clearTimeout(emailTimeout);
      emailError.textContent = 'Checking';
      emailTimeout = setTimeout(() => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          emailError.textContent = 'Invalid';
        } else {
          emailError.textContent = '';
        }
      }, 500);
    });

    let phoneTimeout;
    phoneInput.addEventListener('input', function () {
      clearTimeout(phoneTimeout);
      phoneError.textContent = 'Checking';
      phoneTimeout = setTimeout(() => {
        const phone = phoneInput.value.trim();
        const phoneRegex = /^\d{10,12}$/;

        if (!phoneRegex.test(phone)) {
          phoneError.textContent = 'Invalid';
        } else {
          phoneError.textContent = '';
        }
      }, 500);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = document.getElementById('password').value;
      const phone = phoneInput.value.trim();
      const address = document.getElementById('address').value;

      const phoneRegex = /^\d{10,12}$/;
      if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Invalid';
        alert('Please enter a valid phone number.');
        return; 
      }

      const id_user = `user--${nanoid(16)}`;
      const username = nanoid(10);

      const user = {
        id_user,
        username,
        email,
        password,
        nomor_telepon: phone,
        alamat: address,
      };

      try {
        const response = await addUser(user);
        alert('User registered successfully!');
        window.location.href = '/login';
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Failed to register user. Please try again.');
      }
    });
  },
};

export default Register;
