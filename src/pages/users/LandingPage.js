import Navbar from "../../components/users/Navbar";
import VegetableCard from "../../components/users/VegetableCard";
import FruitsCard from "../../components/users/FruitsCard";
import OtherCards from "../../components/users/OtherCards";
import Category from "../../components/users/Category";
import Footer from "../../components/users/Footer";

const LandingPage = {
  async render() {
    const navbar = await Navbar.render();
    const vegeCard = await VegetableCard.render();
    const fruitsCard = await FruitsCard.render();
    const categoris = await Category.render();
    const otherCards = await OtherCards.render();
    const footer = await Footer.render();

    return `
      ${navbar}
      <div class="container hero mt-3">
        <div class="row">
            <a href="/about"><img src="/public/images/hero.png" alt="Hero Image" class="img-fluid" /></a>
        </div>
      </div>
      ${vegeCard}
      ${fruitsCard}
      ${otherCards}
      ${categoris}
      ${footer}
    `;
  },

  async afterRender() {
    await Navbar.afterRender();
    VegetableCard.afterRender();
  },
};

export default LandingPage;
