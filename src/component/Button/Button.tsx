import { Button } from "@/components/ui/button";

interface ButtonProps {
    text : string;
    size : string;
}
const Card: React.FC<ButtonProps> = ({ text, size }) => {
    return (
        <Button>
            {text}
        </Button>
    )
}

export default Card