import React, { useState } from "react"
import Link from "next/link"
import { HeaderStyle } from "./styles"
import { colors, Text } from ".."
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import Logo from "../../SVG/logo"
import { LanguageToggler } from ".."
import AppContext from "../../../AppContext"
import { useContext } from "react"

const Header = () => {
    const value = useContext(AppContext)
    let { english } = value.state
    let { englishTexts, portugueseTexts } = value
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
            <Link href='/' className="logo" passHref><a><Logo /></a></Link>
            <nav id={`nav${burger}`} className={burger}>
                <div id={burger}>
                    <Link href="#about">
                        <a><Text color={colors.yellow} fontSize='1.3'>{english ? englishTexts.header1 : portugueseTexts.header1}</Text></a>
                    </Link>
                    <Link href='#skills'>
                        <a><Text color={colors.yellow} fontSize='1.3'>{english ? englishTexts.header2 : portugueseTexts.header2}</Text></a>
                    </Link>
                    <Link href='#projects'>
                        <a><Text color={colors.yellow} fontSize='1.3'>{english ? englishTexts.header3 : portugueseTexts.header3}</Text></a>
                    </Link>
                    <LanguageToggler />
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