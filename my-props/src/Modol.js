import React, { Component } from "react";
export default class Modol extends Component {
    
    render() {
        console.log(this.props);
        return ( 
            <div>
                <ul>
                    <li>Nom :{this.props.nom}</li>
                    <li>Pnom :{this.props.pnom}</li>
                    <li>Note :{this.props.note}</li>
                    <li>status :{this.props.status}</li>
                </ul>
            </div>
        );
    }
}
