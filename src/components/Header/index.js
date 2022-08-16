import React, { useState } from "react"
import Link from "next/link"
import { HeaderStyle } from "./styles"
import { colors, Text } from ".."
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import Logo from "../../SVG/logo"

const Header = () => {
    const [burger, setBurger] = useState('menu')
    const handleBurger = () => {
        if (burger === 'menu') {
            setBurger('menuActive')
        } else {
            setBurger('menu')
        }
    }
    return (
        <HeaderStyle colors={colors}>
            <Link href='/' className="logo" passHref><a><Logo/></a></Link>
            <nav id={`nav${burger}`} className={burger}>
                <div id={burger}>
                    <Link href="#about">
                        <a><Text color={colors.yellow} fontSize='1.3'>Sobre Mim</Text></a>
                    </Link>
                    <Link href='#skills'>
                        <a><Text color={colors.yellow} fontSize='1.3'>Habilidades</Text></a>
                    </Link>
                    <Link href='#projects'>
                        <a><Text color={colors.yellow} fontSize='1.3'>Projetos</Text></a>
                    </Link>
                </div>
                <button className='burgerButton' onClick={handleBurger}>
                    {burger === 'menu' ? <RiMenu3Fill className="bIcon" /> :
                        <AiOutlineClose className="bIcon" />}
                </button>

            </nav>
        </HeaderStyle>
    )
}

export default Header