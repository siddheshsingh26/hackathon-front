import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import { useRouter } from "next/router";

import "../styles/globals.css";
import "flowbite";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <div>
          <Component {...pageProps} />
        </div>
      ) : (
        <div className="">
          <div className="flex flex-row h-max">
            <div className="w-[23%]">
              <Sidebar />
            </div>
            <div className="w-[100%] ">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
