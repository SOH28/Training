import { Box, Container, Group, Avatar, Stack, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faUsers, faMobileScreenButton, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import classes from "../home/styles/page5.module.css";

export default function page3() {

    interface IInfo {
        avatar: any,
        title: string,
        description: string
    }

    const info: IInfo[] =[
        {
            avatar: faGlobeAmericas,
            title: 'BEST TARGET',
            description: 'We Quickly generate exceptional Web Solutions via client-based architectures.'
        },
        {
            avatar: faUsers,
            title: 'BEST SUPPORT',
            description: 'We have in-house support team and tools to manage the different phases of services.'
        },
        {
            avatar: faMobileScreenButton,
            title: 'CLASSIC SERVICE',
            description: 'Our team is dedicated to providing the best Service in all aspects of the Project Scope.'
        },
        {
            avatar: faDollarSign,
            title: 'VALUE OF MONEY',
            description: 'The Service and Support make you feel the Value for your Money and Time.'
        }
    ]

    return (
        <Box style={{
            backgroundColor: 'white',
        }}>
            <Container size='xl' visibleFrom='xs' style={{
                backgroundColor: 'white',
                padding: '6vh 0'
            }}>
                <Group wrap='nowrap' gap="xl" align='stretch'>
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
            </Container>
            <Container size='xl' hiddenFrom='xs' style={{
                backgroundColor: 'white',
                padding: '6vh 6vw'
            }}>
                <Stack gap="xl" align='stretch'>
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
            </Container>
        </Box>
    );
}