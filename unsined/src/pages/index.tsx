import Home from "./home/home";
import SContainer from "./page2/page";
import Page3 from "./page3/page";
import Nav from "./home/nav";
import { useEffect, useState } from "react";

export default function Container() {

  const [pagetop, setPagetop] = useState(false);

  const handleScroll = () => {
    console.log(window)
    if (window.scrollY > 0) {
      setPagetop(true);
    } else {
      setPagetop(false);
    }
  }

  return (
    <>
      <Nav pageTop={pagetop} />
      <div className="w-full absolute top-0 left-0 h-full overflow-y-scroll overflow-x-hidden no-scroll pt-[16vh] bg-primary-theme" onScroll={handleScroll}>
        <Home />
        <SContainer />
        <Page3 />
      </div>
    </>
  );
}
