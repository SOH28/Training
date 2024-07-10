import { Container, Stack, Text, Box, Group, Avatar } from "@mantine/core";
import classes from "./styles/page5.module.css";
import { faPenToSquare, faMobileScreenButton, faChartArea, faPodcast, faAudioDescription, faChartLine, faCircleUser, faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page5() {

    interface IInfo {
        avatar: any;
        title: string;
        description: string;
    }

    const info: IInfo[] = [
        {
            avatar: faPenToSquare,
            title: 'CONTENT MARKETING',
            description: 'Content marketing is a strategy to create valuable and relevant content to attract customers to drive profitable customer action.'
        },
        {
            avatar: faMobileScreenButton,
            title: 'MOBILE MARKETING',
            description: 'Mobile marketing is one kind of digital marketing to reach the audience to their mobile via websites, emails, SMS, social media and apps.',
        },
        {
            avatar: faChartArea,
            title: 'ADVANCED ANALYTICS',
            description: 'Advanced analytics is one of the data science methods that focus on projects future trends, events and behaviors. It gives a clear view of various aspects of the operations'
        },
        {
            avatar: faPodcast,
            title: 'PPC MANAGEMENT',
            description: 'In PPC the Digital marketer analyses the strategy and budget. And they monitor each campaign and all keyword’s effectiveness. Just ensure PPC efforts are yielding a positive ROI.'
        },
        {
            avatar: faAudioDescription,
            title: 'ADS ON TARGET',
            description: 'It’s one technique of online advertising model that is directed the audience based on the product or person the advertiser promoting.'
        },
        {
            avatar: faChartLine,
            title: 'VIRTUAL MARKETING',
            description: 'Virtual marketing is a contrast to traditional marketing methods such as printing and broadcast. It’s fully an online advertisement that fully focuses on clicks, impression, hits and its easily convert the viewer as a customer.'
        },
        {
            avatar: faCircleUser,
            title: 'SOCIAL MEDIA SERVICES',
            description: 'Our social media strategies will help to grow your business and always maintain your social presence and engage the audience in a good manner.'
        },
        {
            avatar: faChartColumn,
            title: 'WEB ANALYTICS',
            description: 'Web analytics is the collection, measurement, analysis, and reporting of web and purpose of understanding and optimizing web usage by the user.'
        }
    ]

    return (
        <Box className={classes.body}>
            <Container size="lg" visibleFrom="xs" className={classes.container}>
                <Stack gap="xl" justify="center" align="center">
                    <Text fw={700} className={classes.title}>Tihalt Offers Affordable SEO Services in Bangalore</Text>
                    <Text size='md' className={classes.description}>Our SEO services offer a visible and effective search presence leading to a considerable increase in sales, profitability, and cost efficiency for our clients.</Text>
                    <Group gap="lg" align="stretch">
                        {info.map((item, index) => (
                            <Stack gap="lg" key={index} style={{
                                width: '22%',
                            }}>
                                <Box style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >
                                    <Avatar variant="filled" color='blue' className={classes.avatar}>
                                        <FontAwesomeIcon icon={item.avatar} style={{
                                            width: '3vh',
                                            height: '3vh'
                                        }} />
                                    </Avatar>
                                </Box>
                                <Text fw={700} className={classes.infoTitle}>{item.title}</Text>
                                <Text className={classes.infoDescription}>{item.description}</Text>
                            </Stack>
                        ))}
                    </Group>
                </Stack>
            </Container>
            <Container size="lg" hiddenFrom="xs" className={classes.container}>
                <Stack gap="xl" justify="center" align="center" style={{
                    width: '100%'
                }}>
                    <Text fw={700} className={classes.title}>Tihalt Offers Affordable SEO Services in Bangalore</Text>
                    <Text size='md' className={classes.description}>Our SEO services offer a visible and effective search presence leading to a considerable increase in sales, profitability, and cost efficiency for our clients.</Text>
                    <Stack gap="lg" align="stretch">
                        {info.map((item, index) => (
                            <Stack gap="lg" key={index} style={{
                                width: '100%',
                            }}>
                                <Box style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >
                                    <Avatar variant="filled" color='blue' className={classes.avatar}>
                                        <FontAwesomeIcon icon={item.avatar} style={{
                                            width: '3vh',
                                            height: '3vh'
                                        }} />
                                    </Avatar>
                                </Box>
                                <Text fw={700} className={classes.infoTitle}>{item.title}</Text>
                                <Text className={classes.infoDescription}>{item.description}</Text>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}