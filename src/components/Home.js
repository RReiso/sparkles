import { Link } from "react-router-dom";
import homeImages from "../products/homeImages";
import "../styles/Home.scss";

const Home = () => {
  const [img1, img2, img3, img4, img5, icon1, icon2, icon3, icon4, icon5] =
    homeImages;
  return (
    <>
      <h3>Because this Moment is Timeles ...</h3>
      <section className="home-images">
        <div>
          <img src={img2} alt="woman" />
        </div>
        <div>
          <div>
            <img src={img1} alt="woman" />
            <img src={img3} alt="woman" />
          </div>
          <div>
            <img src={img4} alt="woman" />
            <img src={img5} alt="woman" />
          </div>
        </div>
      </section>
      <section className="icons">
        <Link to="/new">
          <img src={icon3} alt="woman" />
          <p>new</p>
        </Link>
        <Link to="/luxury">
          <img src={icon1} alt="woman" />
          <p>luxury</p>
        </Link>
        <Link to="/gifts">
          <img src={icon5} alt="woman" />
          <p>gifts</p>
        </Link>
        <Link to="/sale">
          <img src={icon2} alt="woman" />
          <p>sale</p>
        </Link>
      </section>
    </>
  );
};

export default Home;
