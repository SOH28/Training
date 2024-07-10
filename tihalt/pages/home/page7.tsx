import { Container, Group, Stack, Text, Box, rem, TextInput, Textarea, Button } from "@mantine/core";
import classes from "./styles/page7.module.css";
import Image from 'next/image'

export default function Page7() {
    return (
        <Box className={classes.body} >
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Group gap='xl' justify="space-between" wrap='nowrap'>
                    <Stack gap='md' justify="center" style={{
                        width: '48%',
                    }}>
                        <Text style={{
                            fontSize: rem('39px'),
                            color: '#383838',
                            fontWeight: 600,
                            textAlign: 'center',
                            lineHeight: 1
                        }}>Leave us your info</Text>
                        <Text size='md' style={{
                            textAlign: 'center',
                            fontSize: rem('19px'),
                            color: '#747474',
                            fontWeight: 500
                        }}>and we will get back to you.</Text>
                        <Box className={classes.inner}><Box className={classes.line}></Box></Box>
                        <Stack gap="lg" style={{
                            width: '100%'
                        }}>
                            <Group gap="lg" grow style={{
                                width: '100%'
                            }}>
                                <TextInput
                                    size="lg"
                                    placeholder="Full Name*"
                                    classNames={{input: classes.inputarea}}
                                />
                                <TextInput
                                    size="lg"
                                    placeholder="Email*"
                                    classNames={{input: classes.inputarea}}
                                />
                            </Group>
                            <Group gap="lg" grow style={{
                                width: '100%'
                            }}>
                                <TextInput
                                    size="lg"
                                    placeholder="Phone Number*"
                                    classNames={{input: classes.inputarea}}
                                />
                                <TextInput
                                    size="lg"
                                    placeholder="Subject*"
                                    classNames={{input: classes.inputarea}}
                                />
                            </Group>
                            <Textarea
                                placeholder="Message*"
                                classNames={{input: classes.inputmsg}}
                                style={{
                                    width: '100%'
                                }}
                            />
                            <Button variant="filled" style={{
                                height: '5vh',
                                backgroundColor: '#233c85'
                            }}>SUBMIT NOW</Button>;
                        </Stack>
                    </Stack>
                    <Image width={550} height={550} src='https://i0.wp.com/tihalt.com/wp-content/uploads/2020/04/Social-Media-Marketing.png?fit=559%2C559&ssl=1' alt='theme' className={classes.image} />
                </Group>
            </Container>
            <Container size="xl" hiddenFrom="xs" className={classes.mcontainer}>
                <Stack gap='xl' justify="center" style={{
                        width: '90%',
                    }}>
                    <Stack gap='md' justify="center" >
                        <Text style={{
                            fontSize: rem('39px'),
                            color: '#383838',
                            fontWeight: 600,
                            textAlign: 'center',
                            lineHeight: 1
                        }}>Leave us your info</Text>
                        <Text size='md' style={{
                            textAlign: 'center',
                            fontSize: rem('19px'),
                            color: '#747474',
                            fontWeight: 500
                        }}>and we will get back to you.</Text>
                        <Box className={classes.inner}><Box className={classes.line}></Box></Box>
                        <Stack gap="lg" justify="center" style={{
                            width: '100%'
                        }}>
                                <TextInput
                                    size="lg"
                                    placeholder="Full Name*"
                                    classNames={{input: classes.inputarea}}
                                />
                                <TextInput
                                    size="lg"
                                    placeholder="Email*"
                                    classNames={{input: classes.inputarea}}
                                />
                                <TextInput
                                    size="lg"
                                    placeholder="Phone Number*"
                                    classNames={{input: classes.inputarea}}
                                />
                                <TextInput
                                    size="lg"
                                    placeholder="Subject*"
                                    classNames={{input: classes.inputarea}}
                                />
                            <Textarea
                                placeholder="Message*"
                                classNames={{input: classes.inputmsg}}
                                style={{
                                    width: '100%'
                                }}
                            />
                            <Button variant="filled" style={{
                                height: '5vh',
                                backgroundColor: '#233c85'
                            }}>SUBMIT NOW</Button>;
                        </Stack>
                    </Stack>
                    <Image width={550} height={550} src='https://i0.wp.com/tihalt.com/wp-content/uploads/2020/04/Social-Media-Marketing.png?fit=559%2C559&ssl=1' alt='theme' className={classes.mimage} />
                </Stack>
            </Container>
        </Box>
    );
}