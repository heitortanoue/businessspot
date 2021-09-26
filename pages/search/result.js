import Container from "../../components/global/container";
import Connect from "/server/connect"

export default function Result () {
    return (
        <Container>
            <button onClick={Connect()}></button>
        </Container>
    )
}