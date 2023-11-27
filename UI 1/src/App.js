import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidLarge9 from "./pages/android-large9";
import AndroidLarge8 from "./pages/android-large8";
import AndroidLarge7 from "./pages/android-large7";
import AndroidLarge6 from "./pages/android-large6";
import AndroidLarge5 from "./pages/android-large5";
import AndroidLarge3 from "./pages/android-large3";
import AndroidLarge2 from "./pages/android-large2";
import AndroidLarge1 from "./pages/android-large1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-8":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-7":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-6":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-5":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-3":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-2":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidLarge9 />} />
      <Route path="/android-large-8" element={<AndroidLarge8 />} />
      <Route path="/android-large-7" element={<AndroidLarge7 />} />
      <Route path="/android-large-6" element={<AndroidLarge6 />} />
      <Route path="/android-large-5" element={<AndroidLarge5 />} />
      <Route path="/android-large-3" element={<AndroidLarge3 />} />
      <Route path="/android-large-2" element={<AndroidLarge2 />} />
      <Route path="/android-large-1" element={<AndroidLarge1 />} />
    </Routes>
  );
}
export default App;
