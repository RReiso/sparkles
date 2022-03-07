import { Link } from "react-router-dom";
import homeImages from "../products/homeImages";
import "../styles/pages/Home.scss";

const Home = () => {
  const [img1, img2, img3, img4, img5, icon1, icon2, icon3, icon4, icon5] =
    homeImages;
  return (
    <main>
      <div className="intro">
        <h2 className="intro-line">Because this Moment is Timeless...</h2>
        <Link className="btn-secondary" to="/all">
          Shop now
        </Link>
      </div>
      <section className="home-images">
        <div>
          <img src={img2} alt="woman" />
        </div>
        <div>
          <div className="home-images-small">
            <img src={img1} alt="pearl necklase" />
            <img src={img3} alt="rings with blue stones" />
          </div>
          <div className="home-images-small">
            <img src={img4} alt="ring with a yellow stone" />
            <img src={img5} alt="diamonds" />
          </div>
        </div>
      </section>
      <section>
        <p className="explore">Explore our collection:</p>
        <div className="icons">
          <div className="icon">
            <img src={icon4} alt="diamond" />
            <Link to="/all" className="btn-secondary">
              All
            </Link>
          </div>
          <div className="icon">
            <img src={icon3} alt="diamond" />
            <Link to="/new" className="btn-secondary">
              New
            </Link>
          </div>
          <div className="icon">
            <img src={icon1} alt="necklase" />
            <Link to="/luxury" className="btn-secondary">
              Luxury
            </Link>
          </div>
          <div className="icon">
            <img src={icon5} alt="ring" />
            <Link to="/gifts" className="btn-secondary">
              Gifts
            </Link>
          </div>
          <div className="icon">
            <img src={icon2} alt="pearl necklase" />
            <Link to="/sale" className="btn-primary">
              Sale
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
