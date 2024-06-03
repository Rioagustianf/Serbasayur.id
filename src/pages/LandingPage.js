import Navbar from "../components/Navbar";
import { VegetableCard } from "../components/VegetableCard";
import { FruitsCard } from "../components/FruitsCard";

const LandingPage = {
  async render() {
    const navbar = await Navbar.render();
    const vegeCard = await VegetableCard.render();
    const fruitsCard = await FruitsCard.render();

    return `
      ${navbar}
      <div class="container hero mt-3">
        <div class="row">
            <img src="../../public/images/hero.png" alt="Hero Image" class="img-fluid" />
        </div>
      </div>
      ${vegeCard}
      ${fruitsCard}
    `;
  },
};

export default LandingPage;
