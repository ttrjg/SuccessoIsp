import { ArrowRight } from 'phosphor-react';
import { Link } from "react-router-dom";
import "./ReadMore.css"


interface getLink {
   link: string
}

export function ReadMore(props:getLink) {

   return (
      <div className="ReadMoreButton">
         <Link to={props.link}>Saiba mais <ArrowRight weight="bold"/></Link>
      </div>         
   )
}