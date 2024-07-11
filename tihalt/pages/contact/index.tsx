import { Box, rem, Text } from "@mantine/core";
import classes from "./styles/contact.module.css";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

export default function Contact() {

    return (
        <section >
            <Box className={classes.body}>
                <Box visibleFrom="xs" style={{
                    paddingTop: '10vh'
                }}>
                    <Text c='white' fw={700} style={{
                        fontSize: rem('70px'),
                        textAlign: 'center',
                    }}>Contact Us</Text>
                    <Text fw={600} size='xl' style={{
                        letterSpacing: '1px',
                        textAlign: 'center',
                    }}>Get In Touch</Text>
                </Box>
                <Box hiddenFrom="xs" style={{
                    paddingTop: '2vh'
                }}>
                    <Text c='white' fw={700} style={{
                        fontSize: rem('60px'),
                        textAlign: 'center',
                    }}>Contact Us</Text>
                    <Text fw={600} style={{
                        letterSpacing: '1px',
                        textAlign: 'center',
                        padding: '0 10%'
                    }}>Get In Touch</Text>
                </Box>
            </Box>
            <Box className={classes.container} >
                <Page1 />
                <Page2 />
                <Page3 />
            </Box>
        </section>
    );
}