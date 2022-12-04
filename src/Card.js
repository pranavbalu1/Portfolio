import "./Card.css";
import {VscGithub} from "react-icons/vsc";

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function cardRight(props){
    if (props.titleRight != null) {
        return (<div class="card cardright">
              <h2>{props.titleRight}</h2>
              <p>
                  {props.bodyRight}
                  <br/>
                  <button id="linkButton" onClick={() => openInNewTab(props.rightLink)}><VscGithub/></button>
              </p>
              
              
          </div>
          );
    }
}


export default function Card(props) {

             

  return (
    <>
        <div class="cards">
          <div class="card cardleft">
              <h2>{props.titleLeft}</h2>
              <p>
                  {props.bodyLeft}
              </p>
              <button id="linkButton" onClick={() => openInNewTab(props.leftLink)} ><VscGithub/></button>
              
          </div>

        {cardRight(props)}
        
        
      </div></>
  );
}

