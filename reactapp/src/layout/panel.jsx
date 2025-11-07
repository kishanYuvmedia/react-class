import { Row,Col,Container } from "react-bootstrap";
import PanelNav from "./panelnav";
const Panel = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                        <PanelNav />
                    </Col>
                    <Col md={9}>
                        {props.children}
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Panel;