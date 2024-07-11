import { Box, Text, Group, Stack, Container } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page3() {

    interface Location {
        flag: string,
        country: string,
        address: string
    }

    const locations: Location[] = [
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/india-e1580738614181.png?fit=40%2C27&ssl=1',
            country: 'India',
            address: 'No. 32, 38/1, 2nd Floor, Sri Ram Arcade, Near Bosch Office, Hosur Main Road, Bommanahalli, Bengaluru, Karnataka 560068.'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/india-e1580738614181.png?fit=40%2C27&ssl=1',
            country: 'India',
            address: 'No.1300, 13th Cross, Indira Nagar, Bangalore – 560008.'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/india-e1580738614181.png?fit=40%2C27&ssl=1',
            country: 'India',
            address: 'Software Technology Parks of India, Ministry of Comm. & IT, Govt. of India, Nehru Nagar (East), Bhilai, Chhattisgarh – 490020'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/india-e1580738614181.png?fit=40%2C27&ssl=1',
            country: 'India',
            address: 'TOF -17 & 18, Surya Treasure Island Mall, Junwani Road, Bhilai, Chhattisgarh – 490020'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/india-e1580738614181.png?fit=40%2C27&ssl=1',
            country: 'India',
            address: 'Katare Complex, Luchki Para ,Drug, Chhattisgarh -491001'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/india-e1580738614181.png?fit=40%2C27&ssl=1',
            country: 'India',
            address: 'L-502/503 MegaCenter, Hadapsar, Pune, India.'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/dubai-e1580738787182.png?fit=54%2C27&ssl=1',
            country: 'Dubai',
            address: '3 Office 319 Al Kazim Building Hor Al Anz East Near Atrium Medical Care, Al Ittihad Road, Khubaisi, Dubai.',
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2023/04/scotland-e1580738826754-1.png?fit=45%2C27&ssl=1',
            country: 'UK',
            address: 'CBS Information Systems Ltd. 5, The Arena Stockley Park, Uxbridge, UB11 1AA, UK'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/scotland-e1580738826754.png?fit=45%2C27&ssl=1',
            country: 'Scotland',
            address: 'Westpoint 4 Redheughs Rigg South Gyle Edinburgh EH12 9DQ, United Kingdom.'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2023/04/usa.png?fit=45%2C27&ssl=1',
            country: 'USA',
            address: 'Central Business Solutions Inc. 37600 Central Ct, Ste 214, Newark, CA 94560 USA'
        },
        {
            flag: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2023/04/canada.png?fit=45%2C27&ssl=1',
            country: 'Canada',
            address: 'CBS Information Systems Inc. 185-911 YATES STREET # 352 VICTORIA British Columbia V8V 4Y9, Canada'
        },
        {
            flag: '',
            country: '',
            address: ''
        }
    ]

    return (
        <Box style={{
            backgroundColor: 'white'
        }}>
            <Container size='xl' visibleFrom="xs" >
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '1 !important',                   
                    padding: '8vh 3vw 2vh 3vw',
                    margin: '0 auto',
                    zIndex: 10,
                    position: 'relative',
                }}>
                    <Group justify="space-between" align="stretch">
                        {locations.map((location: Location, index: number) => (
                            <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: (index%2 == 0)? 50 : -50}}
                            whileInView={{ scale: 1 , opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.01 }}}
                            viewport={{ once: false }}
                            style={{
                                width: '30%',
                                marginBottom: '6vh'
                            }}>
                                <Stack>
                                    <Group align="stretch" wrap="nowrap" >
                                        {location.country != '' && <Image src={location.flag} alt={location.country} width={40} height={27} />}
                                        <Text c='rgb(56, 56, 56)' size='xl' fw={600}>{location.country}</Text>
                                    </Group>
                                    <Text c='rgb(102, 102, 102)' size='md' fw={500}>{location.address}</Text>
                                </Stack>
                            </motion.div>
                        ))}
                    </Group>
                </Box>
            </Container>

            <Container size='xl' hiddenFrom="xs" >
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '1 !important',                   
                    padding: '8vh 3vw 2vh 3vw',
                    margin: '0 auto',
                    zIndex: 10,
                    position: 'relative',
                }}>
                    <Stack justify="space-between" align="stretch">
                        {locations.map((location: Location, index: number) => (
                            <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: (index%2 == 0)? 50 : -50}}
                            whileInView={{ scale: 1 , opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.01 }}}
                            viewport={{ once: false }}
                            style={{
                                width: '100%',
                                marginBottom: '6vh'
                            }}>
                                <Stack>
                                    <Group align="stretch" wrap="nowrap" >
                                        {location.country != '' && <Image src={location.flag} alt={location.country} width={40} height={27} />}
                                        <Text c='rgb(56, 56, 56)' size='xl' fw={600}>{location.country}</Text>
                                    </Group>
                                    <Text c='rgb(102, 102, 102)' size='md' fw={500}>{location.address}</Text>
                                </Stack>
                            </motion.div>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
