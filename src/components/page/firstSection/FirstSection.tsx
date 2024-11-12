import Image from "next/image";
import scss from "./firstSection.module.scss";
import photo from "@/assets/images/phoneImg.png";
const FirstSection = () => {
  return (
    <section className={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.firstBlock}>
            <span>Featured Course</span>
            <h1>Run your own online learning platform</h1>
            <p>
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <h6>Kathryn Murphy</h6>
            <button>Learn More</button>
          </div>
          <div className={scss.secondBlock}>
            <Image src={photo} alt="photo" width={614} height={620} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
