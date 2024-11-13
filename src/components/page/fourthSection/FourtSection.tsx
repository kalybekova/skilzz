"use client";
import { useGetWorkShopsQuery } from "@/redux/api/skillz";
import scss from "./fourthSection.module.scss";

const FourtSection = () => {
  const { data } = useGetWorkShopsQuery();

  return (
    <section className={scss.SecondSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.firstBlock}>
            <h2>Upcoming Free Workshops</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>View All Workshops</button>
          </div>
          <div className={scss.secondBlock}>
            {data?.map((el, id) => (
              <div key={id} className={scss.card}>
                <h2>{el.name}</h2>
                <p>{el.description}</p>
                <button>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourtSection;
