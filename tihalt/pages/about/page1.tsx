import { Box, Container, rem, Stack, Text, Group } from '@mantine/core';
import Formatter from '../home/common/formatter';
import Image from 'next/image';
import { text } from 'stream/consumers';

export default function Page1() {
    return (
        <>
            <Box style={{
                height: 'auto',
                backgroundColor: 'white',
                padding: '6vh 0'
            }}>
                <Container size='xl' visibleFrom='xs'>
                    <Stack gap="xl">
                        <Text c={'rgb(30, 51, 117)'} fw={700} style={{
                            fontSize: rem('48px'),
                            lineHeight: 1.2,
                            textAlign: 'center',
                            padding: '0 4vw',
                            marginBottom: '4vh'
                        }}>“We are regarded as industry leaders in digital strategy and solutions, focused solely on delivering great user experiences”</Text>
                        <Group wrap='nowrap' style={{
                            padding: '0 4vw',
                            gap: '4vw'
                        }}>
                            <Stack gap='lg'>
                                <Formatter text={'NEED to know how technology can bring you value? Never stop looking for better solutions to consult us. We design, develop and manage web-based enterprise solutions and mobile applications. Tihalt Technologies can make your business perform better, compete better, and generate more money.'} anchor={['Tihalt Technologies']} style={{
                                    color: '#666666',
                                    textAlign: 'justify',
                                    fontWeight: 500,
                                }} />
                                <Text c={'rgb(56,56,56)'} fw={700} style={{
                                    fontSize: rem('36px'),
                                    fontStyle: 'italic',
                                    lineHeight: 1.2,
                                }}>Quality, Usability, Security! Creative Web Solutions!</Text>
                                <Text c={'rgb(102, 102, 102)'} fw={500} >Are all at the heart of our unique smart tools Our digital solutions support your business with innovative technology and user-centered design.</Text>
                                <Formatter text={'We support clients to reach more customers by bringing them online/Digital Space with Websites Development, Digital Marketing, and eCommerce Developments.,'} bold={['Websites Development, Digital Marketing, and eCommerce Developments.,']} style={{
                                    color: '#666666',
                                    textAlign: 'justify',
                                    fontWeight: 500,
                                }} />
                            </Stack>
                            <Image src='https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/gal-1.jpg?fit=461%2C307&ssl=1' width={461} height={307} alt='user' />
                        </Group>
                    </Stack>
                </Container>
                <Container size='xl' hiddenFrom='xs'>
                    <Stack gap="xl">
                        <Text c={'rgb(30, 51, 117)'} fw={700} style={{
                            fontSize: rem('45px'),
                            lineHeight: 1.2,
                            textAlign: 'center',
                            padding: '0 4vw',
                            marginBottom: '4vh'
                        }}>“We are regarded as industry leaders in digital strategy and solutions, focused solely on delivering great user experiences”</Text>
                        <Stack style={{
                            padding: '0 4vw',
                            gap: '4vw'
                        }}>
                            <Stack gap='lg'>
                                <Formatter text={'NEED to know how technology can bring you value? Never stop looking for better solutions to consult us. We design, develop and manage web-based enterprise solutions and mobile applications. Tihalt Technologies can make your business perform better, compete better, and generate more money.'} anchor={['Tihalt Technologies']} style={{
                                    color: '#666666',
                                    textAlign: 'justify',
                                    fontWeight: 500,
                                }} />
                                <Text c={'rgb(56,56,56)'} fw={700} style={{
                                    fontSize: rem('36px'),
                                    fontStyle: 'italic',
                                    lineHeight: 1.2,
                                }}>Quality, Usability, Security! Creative Web Solutions!</Text>
                                <Text c={'rgb(102, 102, 102)'} fw={500} >Are all at the heart of our unique smart tools Our digital solutions support your business with innovative technology and user-centered design.</Text>
                                <Formatter text={'We support clients to reach more customers by bringing them online/Digital Space with Websites Development, Digital Marketing, and eCommerce Developments.,'} bold={['Websites Development, Digital Marketing, and eCommerce Developments.,']} style={{
                                    color: '#666666',
                                    textAlign: 'justify',
                                    fontWeight: 500,
                                }} />
                            </Stack>
                            <Image src='https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/gal-1.jpg?fit=461%2C307&ssl=1' width={461} height={307} alt='user' style={{
                                width: '100%',
                                height: 'auto'
                            }} />
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}