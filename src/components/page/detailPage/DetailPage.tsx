import { useGetCoursesByIdQuery } from "@/redux/api/skillz";
import scss from "./detailPage.module.scss";
const DetailPage = () => {
  const { data } = useGetCoursesByIdQuery();
  return (
    <section>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default DetailPage;
