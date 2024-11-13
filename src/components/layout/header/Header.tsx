import Image from "next/image";
import scss from "./header.module.scss";
import photo from "@/assets/images/logo.png";
import basket from "@/assets/images/basket.png";
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Image src={photo} alt="photo" width={130} height={40} />
          <nav>
            <a>Courses</a>
            <a>Free Workshops</a>
            <a>Blog</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
          <Image
            className={scss.basket}
            src={basket}
            alt="photo"
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
