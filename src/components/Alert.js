import { Alert } from "react-bootstrap";
import { Button, ListGroupItem} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Col} from "react-bootstrap";
import Row from 'react-bootstrap/Row';

import '../css/alert.css';

const AlertText  = ({setLoading,deleteAll}) =>{

    return(



        <>
          <div className="overlay">
        <Container className="container-alert">
            <Row>
       <Col sm={12}> <Alert id='alert' variant='danger'>
           Stai per cancellare tutte le task
        </Alert>
        </Col>

        <Col>
        <Button  onClick={deleteAll}style={{ marginRight: '10px' }}  variant="outline-danger" >Conferma</Button>
        
        
        <Button   variant="outline-secondary" onClick={()=>setLoading(false)} >Annulla</Button>
        </Col>
        </Row>
        </Container>
        </div>
        </>
    )
}

export default AlertText