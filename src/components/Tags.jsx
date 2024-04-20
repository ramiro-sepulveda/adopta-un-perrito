import Badge from "react-bootstrap/Badge";

const Tags = ({tag, bg}) => {

    return (
        <Badge bg={bg}>{tag}</Badge>
    )
}

export default Tags