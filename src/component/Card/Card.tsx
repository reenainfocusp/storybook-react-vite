interface CardProps {
    title : string;
}
const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div style={{ backgroundColor : "palegoldenrod"}}>
            {title}
        </div>
    )
}

export default Card