import { Backlog } from "entities/Backlog";
import { useParams } from "react-router-dom";

export const BacklogPage = () => {
    const { id } = useParams();
    console.log("WORKSPACE", id);
    return (
        <>
            <Backlog id={id} />
        </>
    );
};
export default BacklogPage;
