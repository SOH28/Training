import { Group, Box, Container, Stack, Text, Anchor, rem } from "@mantine/core";
import classes from "./footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter , faPinterest, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faArrowRightArrowLeft, faEnvelope, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    const section1 = [
        "Drupal Development",
        "CMS Website Development",
        "Ecommerce Website Development",
        "Joomla Development",
        "Responsive Web Design",
        "Website Maintenance Services",
        "WordPress Development"
    ];

    const section21 = [
        "Mobile Application Development",
        "Best Digital Marketing Company in Bangalore",
        "Website Development Services",
        "Creative Communications",
        "Graphic Design Company in Bangalore",
        "SEO Services in Bangalore",
        "Terms and Conditions",
        "Refund and Cancellation Policy"
    ];

    const section22 = [
        "Link Building Services",
        "SEO Copywriting",
        "PPC Company Bangalore",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Content Writing"
    ];

    const section3 = [
        "Mobile Application Development",
        "Application Development",
        "Interactive Application Development",
        "Custom Software Development/Maintenance",
        "Enterprise Solution Development",
        "ERP Solutions & Support",
    ]

    return (
        <>
            <Box className={classes.body} >
                <Container size="xl" visibleFrom="xs" className={classes.container}>
                    <Group wrap="nowrap" align="flex-start">
                        <Stack justify='space-between' gap='xl' align='stretch' style={{
                            paddingRight: '2vw',
                            borderRight: '1px solid #303030',
                            width: '33%'
                        }}>
                            <Image src="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/logo.png?fit=106%2C25&ssl=1" alt="logo" width={106} height={25} />
                            <p>In Tihalt, everyone has a voice and the ability to propose projects directly to the network. Anything you can do.</p>
                            <Group align='center' style={{
                                color: 'white',
                                opacity: 1,
                                fontSize: 'var(--text-fz, var(--mantine-font-size-xl))'
                            }}>
                                <FontAwesomeIcon icon={faFacebook} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faTwitter} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faYoutube} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faInstagram} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faLinkedin} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faPinterest} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                            </Group>
                            <Stack>
                                <Text c='white' fw={700} size='sm'>INTERACTIVE WEB SOLUTIONS</Text>
                                {section1.map((item, index) => (
                                    <Group key={index} style={{
                                        borderBottom: '1px solid #303030',
                                        padding: '10px 0'
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} style={{
                                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                                            width: 'var(--text-fz, var(--mantine-font-size-sm))',
                                        }} />  
                                        <Anchor href="#" underline="hover" c='white' size='md' className={classes.hover}>{item}</Anchor>
                                    </Group>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack justify='space-between' gap='xl' style={{
                            paddingLeft: '1vw',
                            paddingRight: '2vw',
                            borderRight: '1px solid #303030',
                            width: '33%'
                        }}>
                            <Stack>
                                <Text c='white' fw={700} size='md'>USEFUL LINKS</Text>
                                {section21.map((item, index) => (
                                    <Anchor href="#" underline="hover" c='gray' size='sm' key={index}>{item}</Anchor>
                                ))}
                            </Stack>
                            <Stack>
                                <Text c='white' fw={700} size='sm'>DIGITAL MARKETING</Text>
                                {section22.map((item, index) => (
                                    <Group key={index} style={{
                                        borderBottom: '1px solid #303030',
                                        padding: '10px 0'
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} style={{
                                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                                            width: 'var(--text-fz, var(--mantine-font-size-sm))',
                                        }} />  
                                        <Anchor href="#" underline="hover" c='white' size='md'>{item}</Anchor>
                                    </Group>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack justify='space-between' gap='xl' style={{
                            paddingLeft: '1vw',
                            borderRight: '1px solid #303030',
                            width: '33%'
                        }}>
                            <Stack>
                                <Text c='white' fw={700} size='md'>GET IN TOUCH WITH US</Text>
                                <Group wrap='nowrap' align="stretch" style={{
                                    color: 'white'
                                }}>
                                    <FontAwesomeIcon icon={faLocationDot} style={{
                                        height: 'var(--text-fz, var(--mantine-font-size-lg))',
                                        width: 'var(--text-fz, var(--mantine-font-size-lg))',
                                    }} />
                                    <Text size="sm" fw={400} style={{
                                        lineHeight: 1.2
                                    }}>No. 32, 38/1, 2nd Floor, Sri Ram Arcade, Near Bosch Office, Hosur Main Road, Bommanahalli, Bengaluru, Karnataka 560068.</Text>
                                </Group>
                                <Group wrap='nowrap' align="center" style={{
                                    color: 'white'
                                }}>
                                    <FontAwesomeIcon icon={faEnvelope} style={{
                                        height: 'var(--text-fz, var(--mantine-font-size-lg))',
                                        width: 'var(--text-fz, var(--mantine-font-size-lg))',
                                    }} />
                                    <Anchor size="sm" fw={400} href='mailto:info@tihalt.com'>info@tihalt.com</Anchor>
                                </Group>
                                <Group wrap='nowrap' align="center" style={{
                                    color: 'white'
                                }}>
                                    <FontAwesomeIcon icon={faPhone} style={{
                                        height: 'var(--text-fz, var(--mantine-font-size-lg))',
                                        width: 'var(--text-fz, var(--mantine-font-size-lg))',
                                    }} />
                                    <Anchor size="sm" fw={400} href='tel:+91 96 1122 3984'>+91 96 1122 3984</Anchor>
                                </Group>
                            </Stack>
                            <Stack>
                                <Text c='white' fw={700} size='sm'>SOFTWARE DEVELOPMENT</Text>
                                {section3.map((item, index) => (
                                    <Group key={index} style={{
                                        borderBottom: '1px solid #303030',
                                        padding: '10px 0'
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} style={{
                                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                                            width: 'var(--text-fz, var(--mantine-font-size-sm))',
                                        }} />  
                                        <Anchor href="#" underline="hover" c='white' size='md'>{item}</Anchor>
                                    </Group>
                                ))}
                            </Stack>
                        </Stack>
                    </Group>
                </Container>
                <Container size="xl" hiddenFrom="xs" className={classes.container}>
                    <Stack gap='xl' align="flex-start">
                        <Stack justify='space-between' gap='xl' align='stretch' style={{
                            marginBottom: '4vh',
                            padding: '0 2vw',
                        }}>
                            <Image src="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/logo.png?fit=106%2C25&ssl=1" alt="logo" width={106} height={25} style={{
                                width: rem('106px'),
                                height: rem('25px'),
                            }} />
                            <p>In Tihalt, everyone has a voice and the ability to propose projects directly to the network. Anything you can do.</p>
                            <Group align='center' style={{
                                color: 'white',
                                opacity: 1,
                                fontSize: 'var(--text-fz, var(--mantine-font-size-xl))'
                            }}>
                                <FontAwesomeIcon icon={faFacebook} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faTwitter} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faYoutube} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faInstagram} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faLinkedin} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                                <FontAwesomeIcon icon={faPinterest} style={{
                                    height: 'var(--text-fz, var(--mantine-font-size-xl))',
                                    width: 'var(--text-fz, var(--mantine-font-size-xl))',
                                }} />
                            </Group>
                            <Stack>
                                <Text c='white' fw={700} size='sm'>INTERACTIVE WEB SOLUTIONS</Text>
                                {section1.map((item, index) => (
                                    <Group key={index} style={{
                                        borderBottom: '1px solid #303030',
                                        padding: '10px 0'
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} style={{
                                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                                            width: 'var(--text-fz, var(--mantine-font-size-sm))',
                                        }} />  
                                        <Anchor href="#" underline="hover" c='white' size='md'>{item}</Anchor>
                                    </Group>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack justify='space-between' gap='xl' style={{
                            marginBottom: '4vh',
                            padding: '0 2vw',
                        }}>
                            <Stack>
                                <Text c='white' fw={700} size='md'>USEFUL LINKS</Text>
                                {section21.map((item, index) => (
                                    <Anchor href="#" underline="hover" c='gray' size='sm' key={index}>{item}</Anchor>
                                ))}
                            </Stack>
                            <Stack>
                                <Text c='white' fw={700} size='sm'>DIGITAL MARKETING</Text>
                                {section22.map((item, index) => (
                                    <Group key={index} style={{
                                        borderBottom: '1px solid #303030',
                                        padding: '10px 0'
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} style={{
                                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                                            width: 'var(--text-fz, var(--mantine-font-size-sm))',
                                        }} />  
                                        <Anchor href="#" underline="hover" c='white' size='md'>{item}</Anchor>
                                    </Group>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack justify='space-between' gap='xl' style={{
                            marginBottom: '4vh',
                            padding: '0 2vw',
                        }}>
                            <Stack>
                                <Text c='white' fw={700} size='md'>GET IN TOUCH WITH US</Text>
                                <Group wrap='nowrap' align="stretch" style={{
                                    color: 'white'
                                }}>
                                    <FontAwesomeIcon icon={faLocationDot} style={{
                                        height: 'var(--text-fz, var(--mantine-font-size-lg))',
                                        width: 'var(--text-fz, var(--mantine-font-size-lg))',
                                    }} />
                                    <Text size="sm" fw={400} style={{
                                        lineHeight: 1.2
                                    }}>No. 32, 38/1, 2nd Floor, Sri Ram Arcade, Near Bosch Office, Hosur Main Road, Bommanahalli, Bengaluru, Karnataka 560068.</Text>
                                </Group>
                                <Group wrap='nowrap' align="center" style={{
                                    color: 'white'
                                }}>
                                    <FontAwesomeIcon icon={faEnvelope} style={{
                                        height: 'var(--text-fz, var(--mantine-font-size-lg))',
                                        width: 'var(--text-fz, var(--mantine-font-size-lg))',
                                    }} />
                                    <Anchor size="sm" fw={400} href='mailto:info@tihalt.com'>info@tihalt.com</Anchor>
                                </Group>
                                <Group wrap='nowrap' align="center" style={{
                                    color: 'white'
                                }}>
                                    <FontAwesomeIcon icon={faPhone} style={{
                                        height: 'var(--text-fz, var(--mantine-font-size-lg))',
                                        width: 'var(--text-fz, var(--mantine-font-size-lg))',
                                    }} />
                                    <Anchor size="sm" fw={400} href='tel:+91 96 1122 3984'>+91 96 1122 3984</Anchor>
                                </Group>
                            </Stack>
                            <Stack>
                                <Text c='white' fw={700} size='sm'>SOFTWARE DEVELOPMENT</Text>
                                {section3.map((item, index) => (
                                    <Group key={index} style={{
                                        borderBottom: '1px solid #303030',
                                        padding: '10px 0'
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} style={{
                                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                                            width: 'var(--text-fz, var(--mantine-font-size-sm))',
                                        }} />  
                                        <Anchor href="#" underline="hover" c='white' size='md'>{item}</Anchor>
                                    </Group>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box className={classes.copyright}>
                <Text fw={400} c='rgb(131, 131, 131)' size='lg'>Copyright © 2016-2023 Tihalt Technosoft Private Limited.</Text>
            </Box>
        </>
    );
}