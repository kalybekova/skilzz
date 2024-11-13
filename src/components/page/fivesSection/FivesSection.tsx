import Image from "next/image";
import scss from "./fivesSection.module.scss";
import stars from "@/assets/images/stars.png";
import dots from "@/assets/images/dots.png";
import { dot } from "node:test/reporters";
const FivesSection = () => {
  return (
    <div className={scss.FivesSection}>
      <div className="container">
        <div className={scss.content}>
          <Image src={stars} alt="stars" />
          <p>
            “Kate’s courses are a game changer. She’s thorough, organized, and
            explains things in a no-nonsense way that makes it easy for
            anyone—beginners to experts—to learn something from her courses and
            take their game to the next level.”
          </p>
          <h6>James Brown, Influencer</h6>
          <Image src={dots} alt="dots" />

        </div>
      </div>
    </div>
  );
};

export default FivesSection;
