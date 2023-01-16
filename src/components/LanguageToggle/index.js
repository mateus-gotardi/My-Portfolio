import { Toggler } from "./styles";
import {GiBrazilFlag, GiUsaFlag} from 'react-icons/gi'
import AppContext from '../../../AppContext'
import { useContext } from "react";

export default function LanguageToggler() {
    const value = useContext(AppContext)
    let {english} = value.state
    let {setEnglish} = value

    return (
        <Toggler>
            <GiBrazilFlag className="flagbr"/>
            <label className="switch">
                <input type="checkbox" onChange={()=>setEnglish(!english)}/>
                <span className="slider round"></span>
            </label>
            <GiUsaFlag className="flag"/>
        </Toggler>
    )
}