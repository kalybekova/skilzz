import Image from "next/image";
import scss from "./sixsSection.module.scss";
import photo from "@/assets/images/teaching.png";

const SixsSection = () => {
  return (
    <section className={scss.ThirdSection}>
      <div className="container">
        <div className={scss.content}>
          <Image width={700} height={600} src={photo} alt="photo" />
          <div className={scss.block}>
            <h3>A Passion for Teaching</h3>
            <hr />
            <p>
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <button>About Skillz</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixsSection;
