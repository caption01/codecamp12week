import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './Children.css'


class Children extends React.Component {

    render(){

        return(
            <div className="children-component">
                <Card className="text-left">
                    <Card.Header className="font-weight-bold" >This is Impotant</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            This is some important text or error or something.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-right">
                        <Button variant="outline-dark">close</Button>
                    </Card.Footer>
                </Card>
            </div>
        )

    }
}


export default Children