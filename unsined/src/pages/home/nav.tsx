import Image from 'next/image'
import Logo from '../../../public/logo.svg'

export default function Nav(props: any) {
    return (
        <header className='w-full z-[100] flex justify-between py-[5vh] backdrop-blur-xl px-[10vh] bg-transparent absolute' style={{
            height: props.pageTop ? '16vh':'10vh',
            backgroundColor: props.pageTop ? 'transparent' : '#010625',
        }}>
            <button>
                <Image src={Logo} alt="Logo" width={220} height={54} />
            </button>
            <div className='flex gap-[4vw] karla-font justify-center items-center'>
                <button className='text-white font-semibold text-sm border-b-0 hover:border-b-[2px] border-white'>
                    CREATE
                </button>
                <button className='text-white font-semibold text-sm border-b-0 hover:border-b-[2px] border-white'>
                    ARTIST
                </button>
                <button className='text-white font-semibold text-sm border-b-0 hover:border-b-[2px] border-white'>
                    LOGIN
                </button>
                <button className='text-white font-semibold text-sm border-[1px] rounded-[44px] border-white px-4 leading-[14px] bg-white/10 h-10 transition ease-in-out duration-300 hover:bg-white/90 hover:text-[#0d1645]'>
                    SIGNUP
                </button>

            </div>
        </header>
    )
}