import { Routes } from "src/configs/routes";
import NotFound from "src/pages/NotFound";
import TodoDetail from "src/pages/TodoDetail";
import Welcome from "src/pages/Welcome";

interface Route {
  key: string;
  url: string;
  Component: () => JSX.Element;
}

export const useRoute = () => {
  const routes: Route[] = [
    {
      key: "welcome",
      url: Routes.ROOT,
      Component: Welcome,
    },
    {
      key: "todoDetail",
      url: Routes.TODO_DETAIL,
      Component: TodoDetail,
    },
    {
      key: "notFound",
      url: Routes.NOT_FOUND,
      Component: NotFound,
    },
  ];

  return { routes };
};
