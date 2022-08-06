import { Section } from "./styles";

export default function FlexSection({ children, backgroundColor = '#1b1b1b' }) {
    return (
        <Section backgroundColor={backgroundColor}>{children}</Section>
    )
}