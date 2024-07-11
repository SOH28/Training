import { useState } from 'react';
import { Container, Group, Burger, rem , Text, Stack, Drawer} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './nav.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../public/logo.webp'
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About Us' },
  { link: '/contact', label: 'Contact Us' }
];

export default function Nav(props: any) {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(router.pathname);


  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      style={{
        height: props.top ? 'auto' : '100%',
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header} style={{
        background: props.top ? 'transparent' : 'rgba(0,0,0,0.85)',
        transition: 'all 0.5s ease-in-out',
        height: props.top ?  rem('165px'): rem('80px'),
    }}>
        {props.top &&
            <Group className={classes.info} visibleFrom='xs'>
                <Group align='center' style={{color: 'white', fontSize: 'var(--text-fz, var(--mantine-font-size-md))'}}>
                    <FontAwesomeIcon icon={faPhone} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                    <Text size="md" fw={400}>+91 96 1122 3984</Text>
                </Group>
                <Group align='center' style={{
                    color: 'white',
                    opacity: 1,
                    fontSize: 'var(--text-fz, var(--mantine-font-size-md))'
                }}>
                    <Group align='center' style={{
                        paddingLeft: '1vw',
                        paddingRight: '1vw',
                        borderLeft: '1px solid light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
                        borderRight: '1px solid light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))'
                    }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{
                            height: 'var(--text-fz, var(--mantine-font-size-md))',
                            width: 'var(--text-fz, var(--mantine-font-size-md))'
                        }} />
                        <Text size="md" fw={400}>info@tihalt.com</Text>
                    </Group>
                    <FontAwesomeIcon icon={faFacebook} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                    <FontAwesomeIcon icon={faLinkedin} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                    <FontAwesomeIcon icon={faTwitter} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                    <FontAwesomeIcon icon={faInstagram} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                </Group>
            </Group>
        }
        {props.top &&
            <Stack hiddenFrom="xs" style={{background: '#222222', padding: '1vh 0'}}>
                <Group justify='center' align='center' style={{color: 'white', fontSize: 'var(--text-fz, var(--mantine-font-size-sm))'}}>
                    <FontAwesomeIcon icon={faPhone} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-sm))',
                        width: 'var(--text-fz, var(--mantine-font-size-sm))',
                    }} />
                    <Text size="sm" fw={400}>+91 96 1122 3984</Text>
                </Group>
                <Group align='center' justify='center'  style={{color: 'white', fontSize: 'var(--text-fz, var(--mantine-font-size-sm))'}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{
                            height: 'var(--text-fz, var(--mantine-font-size-sm))',
                            width: 'var(--text-fz, var(--mantine-font-size-sm))'
                        }} />
                        <Text size="sm" fw={400}>info@tihalt.com</Text>
                </Group>
                <Group justify='center' align='center'  style={{color: 'white', fontSize: 'var(--text-fz, var(--mantine-font-size-sm))'}}>
                    <FontAwesomeIcon icon={faFacebook} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                    <FontAwesomeIcon icon={faLinkedin} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                    <FontAwesomeIcon icon={faTwitter} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-sm))',
                    }} />
                    <FontAwesomeIcon icon={faInstagram} style={{
                        height: 'var(--text-fz, var(--mantine-font-size-md))',
                        width: 'var(--text-fz, var(--mantine-font-size-md))',
                    }} />
                </Group>
            </Stack>
        }
        <Container size="xl" className={classes.inner}>
            <Image width={106} height={25} src={Logo} alt='logo' style={{
                width: rem('106px'),
                height: rem('25px'),
            }} />
            <Group gap={'2vw'} visibleFrom="xs" style={{
                height: props.top ? 'auto' : '100%',
            }}>
                {items}
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            <Drawer opened={opened} onClose={toggle} padding="lg" position="right" shadow='xs' color='black'>
                <Stack gap="lg" >
                    {items}
                </Stack>
            </Drawer>
        </Container>
    </header>
  );
}