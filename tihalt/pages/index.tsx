import { Box } from "@mantine/core";
import Home from "./home";
import { useRouter } from "next/router";
import About from "./about";
import Contact from "./contact";

export default function IndexPage() {

  const router = useRouter();

  



  return (
    <Box>
     
        { (router.pathname === '/' || router.pathname === '/home') && <Home /> }
        { router.pathname === '/about' && <About /> }
        { router.pathname === '/contact' && <Contact /> }
    </Box>

  );
}
