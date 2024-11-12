"use client";
import { useGetCoursesQuery } from "@/redux/api/skillz";
import scss from "./secondSection.module.scss";
import Image from "next/image";

const SecondSection = () => {
  const { data } = useGetCoursesQuery();
  console.log("🚀 ~ SecondSection ~ data:", data);

  return (
    <section className={scss.SecondSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.firstBlock}>
            <h3>Featured Courses</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>View All Courses</button>
          </div>
          <div className={scss.secondBlock}>
            {data?.map((el, id) => (
              <div key={id} className={scss.card}>
                <img src={el.image} alt="photo" />
                <h2>{el.name}</h2>
                <h3>{el.author}</h3>
                <h2>${el.price}USD</h2>
                <button>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
