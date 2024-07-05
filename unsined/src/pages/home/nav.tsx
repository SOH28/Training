import Image from 'next/image'
import Logo from '../../../public/logo.svg'

export default function Nav(props: any) {
    return (
        <header className='w-full z-[100] flex justify-between items-center py-[5vh] transition-all duration-150 ease-in-out px-[10vw] bg-transparent absolute' style={{
            height: props.pageTop ? '16vh':'10vh',
            backgroundColor: props.pageTop ? 'transparent' : '#ffffff1a',
            backdropFilter: props.pageTop ? 'blur(0px)' : 'blur(24px)',
        }}>
            <button>
                <Image src={Logo} alt="Logo" width={220} height={54} />
            </button>
            <div className='flex gap-[4vw] karla-font justify-center items-center'>
                <button className='text-white font-semibold text-sm border-b-0 hover:border-b-[2px] border-white drop-shadow-sm'>
                    CREATE
                </button>
                <button className='text-white font-semibold text-sm border-b-0 hover:border-b-[2px] border-white drop-shadow-sm'>
                    ARTIST
                </button>
                <button className='text-white font-semibold text-sm border-b-0 hover:border-b-[2px] border-white drop-shadow-sm'>
                    LOGIN
                </button>
                <button className='text-white font-semibold text-sm border-[1px] rounded-[44px] drop-shadow-sm border-white px-4 leading-[14px] bg-white/10 h-10 transition ease-in-out duration-300 hover:bg-white/90 hover:text-[#0d1645]'>
                    SIGNUP
                </button>

            </div>
        </header>
    )
}