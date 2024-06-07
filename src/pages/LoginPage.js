import Login from "../components/Login";

const LoginPage = {
  async render() {
    const login = await Login.render();

    return `
      ${login}
    `;
  },
};

export default LoginPage;
