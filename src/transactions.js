import React from 'react';
import axios from 'axios';

var Accordion = require('react-bootstrap').Accordion;
var Card = require('react-bootstrap').Card;   

const API_URI = 'http://localhost:8082/transactions';

const title = 'Money Account System Front End';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        };
    }

    componentDidMount(){
        axios.get(API_URI)
            .then(res => {
                this.setState({
                    transactions: res.data
                })
            })  
            .catch(err => console.log(err))
      }

    render() {
        const cards = this.state.transactions.map((x, i) => {
            let header = "type: " + x.type + " - amount: " + x.amount;

            return (
                <Card key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={i}>
                        {header}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i}>
                    <Card.Body>
                        <Card.Text>
                            <p>id: {x.id}</p>
                            <p>type: {x.type}</p>
                            <p>amount: {x.amount}</p>
                            <p>effectiveDate: {x.effectiveDate}</p>
                        </Card.Text>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        });

        return (
            <div>
                <h1>{title}</h1>
                <Accordion defaultActiveKey="0">
                    {cards}
                </Accordion>    
            </div>
        )
    }
}
