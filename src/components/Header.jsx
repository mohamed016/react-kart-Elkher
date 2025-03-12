
import logoHeader from "../assets/img/logo.png";
import Nav from "./Nav";
import "animate.css";

const Header = () => {
  
  return (
    <header>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-12">
            <div className="header-content">
              <h1  data-aos="fade-left">
                "كل خطوة خير، وكل دعم له أثر. انضم معنا في كارت الخير وكن جزءاً
                من التغيير."
              </h1>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div data-aos="zoom-in-up" className="image">
              <img src={logoHeader} alt="header-image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
