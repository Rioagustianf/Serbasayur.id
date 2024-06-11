import Register from "../components/Register";

const RegisterPage = {
  async render() {
    const register = await Register.render();

    return `
      ${register}
    `;
  },

  async afterRender() {
    await Register.afterRender();
  },
};

export default RegisterPage;
