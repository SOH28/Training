import { useState } from "react";

import classes from '../../global.module.css';

import Footer from "../footer";
import Helper from "../helper";
import Nav from "../nav";


interface WrapperInterface{
    children:JSX.Element
}

const Wrapper = ({children}:WrapperInterface) => {
      const [pagetop, setPagetop] = useState(true);
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    if(e.currentTarget.scrollTop === 0) 
      setPagetop(true);
    else
      setPagetop(false);
  } 

  return (
    <>
     <Nav top={pagetop}/>
      <Helper />
      <main className={classes.body} onScroll={handleScroll} >
      {children}
       <Footer />
      </main>
    </>

  )
}

export default Wrapper;
