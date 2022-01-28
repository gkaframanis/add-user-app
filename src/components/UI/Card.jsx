import {card} from "./Card.module.css";

// To accept the className prop and what to do with it.
const Card = props => {
    return (
        <div className={`${card} ${props.className}`}>{props.children}</div>
    )
};

export default Card;