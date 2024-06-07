import Register from "../components/Register";

const RegisterPage = {
  async render() {
    const register = await Register.render();

    return `
      ${register}
    `;
  },
};

export default RegisterPage;
