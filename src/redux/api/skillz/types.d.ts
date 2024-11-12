namespace SKILLZ {
  type getCoursesRes = {
    name: string;
    author: string;
    price: number;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
    image: string;
  }[];

  type getCoursesReq = void;
}
