import {Container,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer(props){
    return(        
        <footer className={(props.classExt===undefined)?"":props.classExt}>
            <Container fluid className="py-1">
                <Row className="w-100 mx-0 text-center">
                    <Col xs={12} className="small text-shadow">
                        <p className="small text-danger mb-0">
                            Copyright &copy; 2022. All rights reserved. 
                            <Link to="/privacy" className="text-decoration-none text-danger">
                                Privacy policy
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;