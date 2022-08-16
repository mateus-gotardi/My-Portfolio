import { TitleStyle } from "./styles";

export default function Title({ children, textAlign, fontSize = '3', color = '#1b1b1b' }) {
    return (
        <TitleStyle color={color} fontSize={fontSize} textAlign={textAlign}>{children}</TitleStyle>
    )
}