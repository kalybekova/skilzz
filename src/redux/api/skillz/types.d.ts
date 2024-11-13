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

  type getCoursesByIdRes = {
    id: number;
    name: string;
    author: string;
    price: number;
    image: string;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
  };

  type getCoursesByIdReq = void;

  type getWorkShopRes = {
    name: string;
    description: string;
    created_date: string;
    id: number;
  }[];

  type getWorkShopReq = void;

  type getArticlesRes = {
    name: string;
    author: string;
    created_date: string;
    updated_date: string;
    image: string;
  }[];

  type getArticlesReq = void;
}
