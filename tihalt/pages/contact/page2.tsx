import { Container, Group, Stack, Text, Box, rem, TextInput, Textarea, Button } from "@mantine/core";
import classes from "./styles/page2.module.css";
import { useForm } from '@mantine/form';
import { Email } from "./email.template";
import { useState } from "react";


export default function Page2() {
    const [success, setSuccess] = useState(false);
    function verifyPhoneNumber(phoneNumber: string): boolean {
        const pattern = /^(\+1)?\s?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return pattern.test(phoneNumber);
    }

    const openEmailInNewTab = (htmlContent: any) => {
        const newWindow = window.open('', '_blank');
        if (!newWindow) return;
        newWindow.document.write(htmlContent);
        newWindow.document.close();
        form.reset();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    };

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            name: (value) => (value.length > 0 ? null : 'Name is required'),
            phone: (value) => (verifyPhoneNumber(value)? null : 'Invalid phone number'),
            subject: (value) => (value.length > 0 ? null : 'Subject is required'),
            message: (value) => (value.length > 0 ? null : 'Message is required'),
        },
    });

    return (
        <Box className={classes.body} >
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Stack gap='md' justify="center" align="center">
                    <Text style={{
                        fontSize: rem('39px'),
                        color: '#383838',
                        fontWeight: 600,
                        lineHeight: 1
                    }}>Leave us your info</Text>
                    <Text size='md' style={{
                        fontSize: rem('19px'),
                        color: '#747474',
                        fontWeight: 500
                    }}>and we will get back to you.</Text>
                    <Box className={classes.inner}><Box className={classes.line}></Box></Box>
                    <form style={{width: '50%'}} onSubmit={form.onSubmit((values) => openEmailInNewTab(Email({name: values.name, sender: 'Soham Gon', contact: '+91 9051018504', position: 'Intern'})))} >
                        <Stack gap="lg" style={{
                                width: '100%'
                            }}>
                                <Group gap="lg" align="stretch"  grow style={{
                                    width: '100%'
                                }}>
                                    <TextInput
                                        size="lg"
                                        placeholder="Full Name*"
                                        classNames={{input: classes.inputarea}}
                                        key={form.key('name')}
                                        {...form.getInputProps('name')}
                                    />
                                    <TextInput
                                        size="lg"
                                        placeholder="Email*"
                                        classNames={{input: classes.inputarea}}
                                        key={form.key('email')}
                                        {...form.getInputProps('email')}
                                    />
                                </Group>
                                <Group gap="lg" align="stretch" grow style={{
                                    width: '100%'
                                }}>
                                    <TextInput
                                        size="lg"
                                        placeholder="Phone Number*"
                                        classNames={{input: classes.inputarea}}
                                        key={form.key('phone')}
                                        {...form.getInputProps('phone')}
                                    />
                                    <TextInput
                                        size="lg"
                                        placeholder="Subject*"
                                        classNames={{input: classes.inputarea}}
                                        key={form.key('subject')}
                                        {...form.getInputProps('subject')}
                                    />
                                </Group>
                                <Textarea
                                    placeholder="Message*"
                                    classNames={{input: classes.inputmsg}}
                                    style={{
                                        width: '100%'
                                    }}
                                    key={form.key('message')}
                                    {...form.getInputProps('message')}
                                />
                                <Button variant="filled" type='submit' style={{
                                    height: '5vh',
                                    backgroundColor: '#233c85'
                                }}>SUBMIT NOW</Button>;
                                {success && <Text size='xl' c='rgb(116, 116, 116)' style={{
                                    textAlign: 'center'
                                }}>Request Sent!</Text>}
                        </Stack>
                    </form>
                </Stack>
            </Container>
            <Container size="xl" hiddenFrom="xs" className={classes.mcontainer}>
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
            </Container>
        </Box>
    );
}