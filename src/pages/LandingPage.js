import Navbar from "../components/Navbar";
import VegetableCard from "../components/VegetableCard";
import FruitsCard from "../components/FruitsCard";
import OtherCards from "../components/OtherCards";
import Category from "../components/Category";

const LandingPage = {
  async render() {
    const navbar = await Navbar.render();
    const vegeCard = await VegetableCard.render();
    const fruitsCard = await FruitsCard.render();
    const categoris = await Category.render();
    const otherCards = await OtherCards.render();

    return `
      ${navbar}
      <div class="container hero mt-3">
        <div class="row">
            <img src="../../public/images/hero.png" alt="Hero Image" class="img-fluid" />
        </div>
      </div>
      ${vegeCard}
      ${fruitsCard}
      ${otherCards}
      ${categoris}
    `;
  },
};

export default LandingPage;
