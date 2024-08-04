import React from 'react'
import ImageContainer from '@/components/Images/ImageContainer'
type Props = {}

const NavbarLeftAside = (props: Props) => {
    return (
        <nav>
            <aside className='flex  items-center gap-[2px]'>
                <p className='text-3xl font-bold'>Saa
                </p>
                <ImageContainer src="/fuzzieLogo.png"
                    width={15} height={15} alt="saaSy Logo"
                    className="shadow-sm" />
                <p className="text-3xl font-bold">y</p>
            </aside>
        </nav>
    )
}

export default NavbarLeftAside