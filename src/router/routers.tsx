import KakaoShareButton from "../components/KakoShareButton";
import { Main } from "../pages";
import AddDnd from "../pages/AddDnd";
import Dragtest from "../pages/Dragtest";

const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "카카오 공유",
    url: "KakaoShareButton",
    component: <KakaoShareButton />,
  },
  {
    title: "드래그",
    url: "DragTest",
    component: <Dragtest />,
  },
  {
    title: "추가 드래그",
    url: "DragTest",
    component: <AddDnd />,
  },
];
export default Router;
