import Image from 'next/image';
import { useState } from 'react';
import Star from '../../../public/third/star.svg';
import Dollar from '../../../public/third/dollar.svg';
import { motion } from 'framer-motion';
import User from '../../../public/third/user.svg';

export default function List() {

    const [hover, setHover] = useState<number>(-1);

    interface IParticipant {
        rank: number;
        name: string;
        avatar: string;
        win?: number;
        track?: number;
        prize?: number;
    };

    const particicpant: IParticipant[] = [
        {
            rank: 1,
            name: 'Desirae Vaccaro',
            track: 24,
            avatar: 'https://github.com/shadcn.png'
        },
        {
            rank: 2,
            name: 'Kaylynn Aminof',
            track: 12,
            avatar: 'https://github.com/shadcn.png'
        },
        {
            rank: 3,
            name: 'Angel Bator',
            prize: 10450,
            win: 1,
            avatar: 'https://github.com/shadcn.png'
        }, 
        {
            rank: 4,
            name: 'Cheyenne Ekstrom Bothman',
            prize: 15500,
            win: 2,
            avatar: 'https://github.com/shadcn.png'
        }
    ]


    return (
        <div className="flex flex-col relative">
            {particicpant.map((participant: IParticipant, index) => (
                <motion.div className="flex justify-between py-8 border-b-[1px] border-gray-500/25 transition-all duration-300 ease-linear" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}
                initial={{ translateY: -100, opacity: 0 }}
                whileInView={{ translateY: 0 , opacity: 1, transition: { duration: 0.5, ease: 'easeOut' }}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                    <div className="flex gap-4 items-center">
                        <span className="flex justify-center items-center border-[1px] border-white rounded-3xl px-4 py-2 text-lg transition-all duration-300 ease-linear"
                        style={{
                            marginLeft: index === hover ? '1.5rem' : '0',
                        }}
                        >{participant.rank.toString().padStart(2, '0')}/</span>
                        <Image src={participant.avatar} alt="avatar" width={50} height={50} className="rounded-full" />
                        <span className="font-medium karla-font text-[7vh] spacing-[-4px]" style={{
                            color: hover === index ? 'white' : 'hsl(233 11% 57%)'
                        }}>{participant.name}</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        {participant.track && (
                            <div className="flex gap-4 justify-center items-center">
                                <div className="flex justify-center items-center rounded-full bg-white p-1" style={{
                                        opacity: hover === index ? 1 : 0.5,
                                    }}>
                                    <Image src={Star} alt="star" width={20} height={20} style={{
                                        marginTop: '0.05rem'
                                    }} />
                                </div>
                                <span className="font-semibold karla-font text-xl spacing-[-4px] transition-all duration-300 ease-linear" style={{
                                    color: hover === index ? 'white' : 'hsl(233 11% 57%)'
                                }}>{participant.track} Tracks</span>
                            </div>
                        )}
                        {participant.prize && (
                            <div className="flex gap-4 justify-center items-center">
                                <div className="flex justify-center items-center rounded-full bg-white p-1" style={{
                                        opacity: hover === index ? 1 : 0.5,
                                    }}>
                                    <Image src={Dollar} alt="star" width={20} height={20} style={{
                                        marginTop: '0.05rem'
                                    }} />
                                </div>
                                <span className="font-semibold karla-font text-xl spacing-[-4px] transition-all duration-300 ease-linear" style={{
                                    color: hover === index ? 'white' : 'hsl(233 11% 57%)'
                                }}>{participant.prize.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                            </div>
                        )}
                        {participant.win && <span className="font-semibold karla-font text-xl spacing-[-4px] transition-all duration-300 ease-linear" style={{
                            color: hover === index ? 'white' : 'hsl(233 11% 57%)'
                        }}>{participant.win} Win</span>
                        }
                    </div>
                </motion.div>
            ))}
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                <motion.div
                    initial={{ rotate: '-20deg', opacity: 0.85 }}
                    whileInView={{ rotate: '30deg' , opacity: 1, transition: { duration: 2, ease: 'easeOut' }}}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <Image src={User} alt="user" width={459} height={337} />
                </motion.div>
                
            </div>
        </div>
    )
}