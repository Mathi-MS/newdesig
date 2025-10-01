import CustomToast from "./Custom/CustomToast";
import { ReactQueryProvider } from "./Hooks/ReactQueryProvider";
import "./index.css";
import routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import LoaderSplash from "./Components/LoaderSplash";
import { SmoothCursor } from "./Components/SmoothCursor";
import "aos/dist/aos.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Show splash for 20 seconds on app start
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ReactQueryProvider>
        {showSplash ? <LoaderSplash /> : <RouterProvider router={routes} />}
      </ReactQueryProvider>
      <CustomToast />
      <SmoothCursor />
    </>
  );
};
export default App;
