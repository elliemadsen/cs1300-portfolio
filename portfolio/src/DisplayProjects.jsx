import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import internship from "./img/internship-review.jpg"
import personas from "./img/personas.jpg"
import redesign from "./img/redesign.jpg"
// import page from "./projects/personas.html"



// maps each product from App.js to an HTML element or Component for render
export default class DisplayList extends React.Component {


    // returns the image to be associated with the item
    getImg = (item) => {
        if (item.name === "Interface Redesign") { return personas;}
        if (item.name === "Website Redesign") { return redesign;}
        if (item.name === "Internship Reviews") { return internship;}

    }
    
    renderList() {
                
        const items = this.props.list.map(item => {

             return <li key={item.name}>
                    <div className="card-list">
                        <Card className="card" style={{ width: '18rem' }}>
                        <Link to="/InterfaceRedesign">
                            <Card.Img variant="top" src={this.getImg(item)}
                            onMouseOver={(e) => (e.currentTarget.style = "filter: opacity(80%); cursor: pointer;")}
                            onMouseOut={(e) => (e.currentTarget.style = "filter: opacity(100%);")}
                            />
                        </Link>

                        </Card>
                    </div>
            </li>

            });

        return items;
}



    //                 // {/* <Card className="card"> 
    //                 // <Card.Body>
    //                 //     <Card.Img src={this.getImg(item)}
    //                 //         onClick={(e) => window.location.href="https://shielded-savannah-51891.herokuapp.com/"}
    //                 //         onMouseOver={(e) => (e.currentTarget.style = "filter: opacity(50%); cursor: pointer;")}
    //                 //         onMouseOut={(e) => (e.currentTarget.style = "filter: opacity(100%);")}
    //                 //     />
    //                 // </Card.Body>
    //                 // </Card>
    //                 // // )} */}
    //         )
            
    // }


    render() {
        return (
            <ul>{this.renderList()}</ul>
        );
    }
}
