import { Box, Container,rem, Text } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';


export default function Page7() {

    const indicatorStyle ={
        backgroundColor: 'rgb(59, 59, 59)',
    }

    interface Review {
        user: string;
        institute?: string;
        review: string;
    }

    const reviews: Review[] = [
        {
            user: 'VENKAT A BEGUR',
            institute: 'ASA GLOBAL INTERIOR SOLUTIONS',
            review: 'They Never stop unless the client is satisfied, I am the witness. Great service and lively support are essential to run a digital business and a digital business and Tihalt is best at it!'
        },
        {
            user: 'SUJOVIN',
            review: 'Best website development company for my online business, they helped me with the web design and digital marketing From that I m getting good business. Nice working with the team, I will definitely recommend. And also Best digital marketing company in Bangalore I’ve had the chance to work for team from the past 3 years and that was an incredible experience. The whole team is talented and experienced.'
        },
        {
            user: 'VENKAT A BEGUR',
            institute: 'ASA GLOBAL INTERIOR SOLUTIONS',
            review: 'They Never stop unless the client is satisfied, I am the witness. Great service and lively support are essential to run a digital business and a digital business and Tihalt is best at it!'
        },
        {
            user: 'SUJOVIN',
            review: 'Best website development company for my online business, they helped me with the web design and digital marketing From that I m getting good business. Nice working with the team, I will definitely recommend. And also Best digital marketing company in Bangalore I’ve had the chance to work for team from the past 3 years and that was an incredible experience. The whole team is talented and experienced.'
        },
        {
            user: 'VENKAT A BEGUR',
            institute: 'ASA GLOBAL INTERIOR SOLUTIONS',
            review: 'They Never stop unless the client is satisfied, I am the witness. Great service and lively support are essential to run a digital business and a digital business and Tihalt is best at it!'
        },
        {
            user: 'SUJOVIN',
            review: 'Best website development company for my online business, they helped me with the web design and digital marketing From that I m getting good business. Nice working with the team, I will definitely recommend. And also Best digital marketing company in Bangalore I’ve had the chance to work for team from the past 3 years and that was an incredible experience. The whole team is talented and experienced.'
        },
    ]

    return (
        <Box style={{
            backgroundColor: 'white',
            height: 'auto',
            padding: '8vh 0',
        }}>
            <Container size='xl' >
                <Text c='rgb(59, 59, 59)' fw={700} size='2rem' style={{
                    textAlign: 'center',
                    paddingBottom: '5vh'
                }}>TESTIMONIALS</Text>
                <Carousel
                    slideGap='xs'
                    loop
                >
                    {reviews.map((review: Review, index: number) => (
                        <Carousel.Slide key={index} style={{
                            padding: '0 5vw',
                        }}>
                            <Text c='rgb(59, 59, 59)' fw={700} size='xl' >{review.user}</Text>
                            <Text c='rgb(59, 59, 59)' size='md' style={{
                                paddingBottom: '3vh'
                            }}>{review.institute}</Text>
                            <Text c='rgb(112, 112, 112)' size='md' style={{
                                textAlign: 'justify'
                            }}>{review.review}</Text>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
}