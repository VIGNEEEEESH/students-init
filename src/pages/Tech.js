import React from "react"
import Twelve from "../components/club_logos/twelve.png"
import { Dropdown } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../Css files/Tech.css"
import P from "../components/images/PTechnology.jpg"
import VP from "../components/images/VTechnology.jpg"

class Tech extends React.Component{
    render(){
        return(
            <div className="Tech">
            <CardGroup >
                <div className="One">
      <Card className="cardGroup">
        
        <img variant="top" src={Twelve} id="Twelve" width="100%"/>
        
      </Card>
      </div>
      <Card className="cardGroup">
        
        <Card.Body >
        <div className="misso">
        <Card className="mission">
        <Card.Body >
         <Card.Title><b>Mission</b></Card.Title>
         <Card.Text>
         Spreading the awareness of  cohort study regarding principles and practices that are the foundation of understanding how technology and engineering support each other and how they work. Technology club enables an individual to build a successful career in tech by sharing knowledge, providing meaningful and relevant opportunities and gaining access to a wide network in the industry.
         </Card.Text>
       </Card.Body>
       </Card>
        </div>
        <Card className="vision">
        <Card.Body >
         <Card.Title><b>Vision</b></Card.Title>
         
         <ol className="list-styled" >
                        <li>A mode of thinking and understanding is supported and complemented by substantial theoretical and practical knowledge applications which enlighten the individual.</li>
                        <li>To provide practical subject matter promoting the ability for invention, resourcefulness and ultimately innovation.</li>
                        <li>To promote science interest and engagement through challenging and mind-stretching tasks.</li>
                        <li>To provide a platform for understanding and development of algorithms and applications in emerging computing trends.</li>
                    </ol>
         
       </Card.Body>
       </Card>
        </Card.Body >
      </Card>
    </CardGroup>
    <br/>


<div className="presidents">
  <br/><br/>
  <center>
    <div className="card-group d-flex align-items-center justify-content-center">
      <div className="ab ">
  <div className="card " id="PR">
    
    <img className="card-img-top"   src={P} alt="Card image cap" height="170px" />

    <div className="card-body">
      <h5 className="card-title"><b>President</b></h5>
      <p className="card-text">Akash Gurrala</p>
    </div>
  </div>
  </div>
  <div className="cd">
  <div className="card" id="VR">
    
    <img className="card-img-top"  src={VP} alt="Card image cap" height="170px" />
    
    <div className="card-body">
    <h5 className="card-title"><b>Vice-President</b></h5>
      <p className="card-text">Aditi Baggu</p>
    </div>
  </div>
  </div>
</div>
</center>
<br/><br/>
</div>


<div className="container">
                <div className="box">
                  <img src="https://source.unsplash.com/1000x800"/>
                  <span>CSS</span>
                </div>
                <div className="box">
                  <img src="https://source.unsplash.com/1000x802"/>
                  <span>Image</span>
                </div>
                <div className="box">
                  <img src="https://source.unsplash.com/1000x804"/>
                  <span>Hover</span>
                </div>
                <div className="box">
                  <img src="https://source.unsplash.com/1000x806"/>
                  <span>Effect</span>
                </div>
              </div>
   </div>
    
        );
    }
}
export default Tech