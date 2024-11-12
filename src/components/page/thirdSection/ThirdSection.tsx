import Image from "next/image";
import scss from "./thirdSection.module.scss";
import photo from "@/assets/images/contactOmage.png";
const ThirdSection = () => {
  return (
    <section className={scss.ThirdSection}>
      <div className="container">
        <div className={scss.content}>
          <Image width={700} height={600} src={photo} alt="photo" />
          <div className={scss.block}>
            <h3>Get personalized learning recommendations</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urnaLorem ipsum dolor sit amet.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
