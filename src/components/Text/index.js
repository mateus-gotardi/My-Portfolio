import { Paragraph } from "./styles";

export default function Text({ children, fontSize='1', color = '#1b1b1b' }) {
    return (
        <Paragraph color={color} fontSize={fontSize}>{children}</Paragraph>
    )
}