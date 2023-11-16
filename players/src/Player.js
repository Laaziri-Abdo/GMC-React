import React from 'react'
import { Card } from 'react-bootstrap'

export default function Player(props) {
    return (
        <>
            <Card style={{ width: "20rem" }}>
                <Card.Img src={props.imageUrl}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text><br></br>
                        Team:{props.team}<br/>
                        Nationality:{props.nationality}<br></br>
                        Jerse Number:{props.jerseNumber}<br></br>
                        Age :{props.age}<br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
