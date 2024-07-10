import { Container, Box, Text, Group, Stack, rem, Image } from "@mantine/core";
import classes from './styles/page3.module.css';
import Formatter from "./common/formatter";

export default function Page3() {

    interface IInfo {
        avatar: string;
        title: string;
        description: string;
        bold?: string[];
        anchor?: string[];
    }

    const info: IInfo[] = [
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/COST-QUALITY.png?fit=72%2C72&ssl=1',
            title: 'Cost & Quality',
            description: 'A good web development company knows the cost of services and quality of work at the end. Each project must be accomplished with the time frame and with good quality. Make sure you are hiring the best web designer.',
            bold: ['good web development company', 'best web designer']
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/VARIETY-OF-SERVICES.png?fit=72%2C72&ssl=1',
            title: 'Variety of Services',
            description: 'A company which is having various services that they having more exposure to web design and its related techniques. Before hiring check with them that they have SEO, SEM, SMM along web development.',
            bold: ['SEO, SEM, SMM along web development'],
            anchor: ['web design']
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/SIMPLE-AND-PROFESSIONAL-WEB-DESIGN.png?fit=72%2C72&ssl=1',
            title: 'Simple and Professional Web Design',
            description: 'Websites are the best medium that converts the visitor into buying the customer. So it should carry an attractive layout, clean and simple. Make it in a good way and choose the best service provider.'
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/WEB-PAGE-SPEED.png?fit=72%2C72&ssl=1',
            title: 'Web Page Speed',
            description: 'Most peoples inherently lose patients very soon. If our website taking too much time it makes them get out of our site. So a techie should take care of minimizing all controllable factors slowing down your site speed. Check now your website speed in PageSpeed Insights.',
            anchor: ['PageSpeed Insights']
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/SEARCH-ENGINE-OPTIMIZATION.png?fit=72%2C72&ssl=1',
            title: 'Search Engine Optimization',
            description: 'When we are creating new websites the company should have the idea of SEO, then only they will create SEO optimized website for you. SEO gives various improvements to your business. Enable all SEO compatible components. '
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/RESPONSIVE-DESIGN.png?fit=72%2C72&ssl=1',
            title: 'Responsive Design',
            description: 'Create a website is easy, but the challenge is to render the website ought to be easily fixed in different platforms like mobiles and laptops. When the size of the device increase it will not affect the functionality and view of the product.'
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/PORTFOLIO.png?fit=72%2C72&ssl=1',
            title: 'Portfolio',
            description: 'Look at our portfolio. It is the most important things to attract clients to hire the best web design company in Bangalore. Its show the credibility of the company and the skills, capability. It’s an effective tool to communicate with the customer.',
            bold: ['best web design company in Bangalore'],
            anchor: ['portfolio']
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/05/RELATIONSHIP-WITH-CLIENTS.png?fit=72%2C72&ssl=1',
            title: 'Relationship with Clients',
            description: 'The web design company must have a good relationship with their clients. Support them and handle every issue related to the applications or websites. Analyze them if they can able to give 24×7 support.',
            bold: ['web design company']
        }
    ]


    return (
        <Box className={classes.body}>
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Group gap="lg" style={{
                    paddingBottom: '8vh'
                }}>
                    <Text size="sm" c='white' fw={700} style={{
                        letterSpacing: '3px',
                        fontFamily: 'Montserrat, sans-serif',
                    }} >KEY FEATURES</Text>
                    <Box className={classes.line}></Box>
                </Group>
                <Group justify="space-between">
                    {info.map((item: IInfo, index: number) => (
                        <Group wrap="nowrap" key={index} align="flex-start" justify="space-between" gap="lg" style={{
                            width: '45%',
                        }}>
                            <Image src={item.avatar} alt={item.title} width={800} height={500} style={{
                                    width: rem('72px'),
                                    height: rem('72px')
                                }}
                            />
                            <Stack>
                                <Text fw={600} className={classes.title}>{item.title}</Text>
                                <Formatter text={item.description} bold={item.bold} anchor={item.anchor} classes={classes.description} />
                            </Stack>
                        </Group>
                    ))}
                </Group>
            </Container>
            <Container size="xl" hiddenFrom="xs" className={classes.container}>
                <Group gap="lg" style={{
                    paddingBottom: '8vh'
                }}>
                    <Text size="sm" c='white' fw={700} style={{
                        letterSpacing: '3px',
                        fontFamily: 'Montserrat, sans-serif',
                    }} >KEY FEATURES</Text>
                    <Box className={classes.line}></Box>
                </Group>
                <Stack justify="space-between" style={{
                    width: '100%'
                }}>
                    {info.map((item: IInfo, index: number) => (
                        <Group wrap="nowrap" key={index} align="flex-start" justify="space-between" gap="lg" style={{
                            width: '100%',
                        }}>
                            <Image src={item.avatar} alt={item.title} width={800} height={500} style={{
                                    width: rem('72px'),
                                    height: rem('72px')
                                }}
                            />
                            <Stack>
                                <Text fw={700} className={classes.title}>{item.title}</Text>
                                <Formatter text={item.description} bold={item.bold} anchor={item.anchor} />
                            </Stack>
                        </Group>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}