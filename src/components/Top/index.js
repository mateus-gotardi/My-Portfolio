import {AiOutlineArrowUp} from 'react-icons/ai'
import { TopStyles } from "./styles";
import Link from "next/link"
import {colors} from '../index'

export default function Top() {
    return (
        <TopStyles colors={colors}>
            <Link href='#start'><AiOutlineArrowUp/></Link>
        </TopStyles>
    )
}