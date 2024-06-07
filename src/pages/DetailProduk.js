import productHandler from "../utils/productHandler";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProdukImage";
import ProdukInfo from "../components/ProdukInfo";
import QuantityButtons from "../components/QtyButton";
import VegetableCard from "../components/VegetableCard";
import Footer from "../components/Footer";

const DetailProduk = {
  async render() {
    return `
      ${await Navbar.render()}
      <div class="container my-3">
        <div class="d-flex justify-content-around">
          <div class="">
            ${await ProductImage.render({ src: "../../public/images/image 1.png", alt: "Paket Sayur Asem" })}
          </div>
          <div class="col-lg-7 col-md-6 mt-2">
            ${await ProdukInfo.render({ name: "Sayur Lodeh", price: "25.000", description: "lorem ipsum" })}
            <div class="d-flex">
              ${await QuantityButtons.render()}
              <button class="btn btn-success mx-3">+ Keranjang</button>
            </div>
              <div class="mt-2 d-flex">
                <i class="fa-regular fa-heart fs-3 whist"></i>
                <p class="mx-3 whist-text">add to wishlist</p>
              </div>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <ul class="nav nav-underline mt-4" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active text-success" id="detail-tab" data-bs-toggle="tab" data-bs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="true">Detail</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link text-success" id="specs-tab" data-bs-toggle="tab" data-bs-target="#specs" type="button" role="tab" aria-controls="specs" aria-selected="false">Spesifikasi</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link text-success" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Review</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="detail-tab">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic non consequatur corporis dolorem numquam voluptatibus unde libero similique iure optio sapiente, expedita, soluta nobis. Voluptas possimus suscipit enim rem numquam?
            Incidunt, reiciendis, cupiditate saepe itaque perspiciatis amet odit est, quae pariatur ipsa facere laborum sapiente aliquid adipisci temporibus! Voluptatem itaque quod nihil iste eaque cumque blanditiis repudiandae rem cupiditate praesentium.
            Quis asperiores dignissimos, nostrum laborum corporis repudiandae minus excepturi. Hic, esse saepe, maiores repudiandae debitis placeat blanditiis ratione sint officia quis et, ullam iure labore voluptatem corporis illo reiciendis recusandae?
            Quis, dolore ut animi consequatur commodi iste quo expedita sint facere dolorem voluptates repudiandae dolorum sapiente maxime placeat explicabo! Sit eveniet voluptatem repudiandae dignissimos error eaque exercitationem sunt, aliquid repellat!
            Iusto aspernatur sequi pariatur voluptatem voluptas, rem suscipit cupiditate sit eum amet laboriosam labore provident optio minima quaerat, quidem cumque veritatis illum debitis facere expedita? Iste nesciunt quasi rerum nemo.</p>
          </div>
          <div class="tab-pane fade" id="specs" role="tabpanel" aria-labelledby="specs-tab">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore saepe ex doloremque facere exercitationem deserunt tempore tempora, obcaecati repellendus quae? Error similique velit, provident delectus totam pariatur sint vitae aliquid?
            Voluptates, quasi similique repellat aperiam omnis alias voluptatem voluptas provident tempore? Commodi est, temporibus atque necessitatibus quae officia, asperiores repellendus quos nihil saepe, dolor aliquid eaque. Dolores cupiditate dolorum porro?
            Eos architecto sed, suscipit dolorum sapiente possimus, illo doloribus, aspernatur ad amet tempore itaque odio officia quibusdam cupiditate eum ullam temporibus adipisci dolore molestias fugit vel delectus accusamus. Unde, necessitatibus?
            Deleniti porro, dolorem numquam in veritatis molestias! Aspernatur officiis, hic eveniet delectus ex reprehenderit esse obcaecati laudantium ipsum maiores. Laborum, blanditiis. Perspiciatis odio vitae ab tempora. Unde doloribus assumenda id!
            Molestias sit reiciendis quidem eos aut labore delectus ut tenetur expedita iste ad possimus at est magnam perferendis velit vitae temporibus voluptates quod, veritatis, voluptatum deleniti quia aliquam. Provident, ea.</p>
          </div>
          <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam itaque enim accusamus voluptatibus quis sint quidem quos a beatae amet quae vel aspernatur quibusdam, cumque mollitia dolorum porro nisi nobis?
            Sequi facilis ratione nobis pariatur saepe vitae, dicta rerum odit deleniti nisi accusamus aspernatur reprehenderit accusantium eum expedita dignissimos illum quos error sint. Fugit consequuntur reiciendis illo, architecto nemo nesciunt!
            Voluptates at tempore perspiciatis omnis illo corrupti. Impedit deserunt vero quis magni consequuntur ducimus unde placeat! Enim maxime recusandae minus culpa, nemo, repellat laudantium consequatur similique alias laborum expedita dolorum?
            Amet perspiciatis est, unde cumque nam fugiat reprehenderit soluta, sed repellat blanditiis vitae distinctio, ullam veniam vel praesentium ducimus quae voluptate nesciunt nostrum earum dolorem? Autem molestiae illo vitae fugit.
            Rerum suscipit impedit alias commodi quod. Beatae, reprehenderit ullam ex sit, expedita aliquam nisi cum inventore itaque culpa praesentium quidem possimus delectus reiciendis voluptas doloribus id repudiandae perferendis totam sering.</p>
          </div>
        </div>
      </div>
      ${await VegetableCard.render()}
      ${await Footer.render()}
    `;
  },
  afterRender() {
    productHandler();
  },
};

export default DetailProduk;
