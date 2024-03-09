import { Backlog } from "entities/Backlog";
import { useParams } from "react-router-dom";

export const BacklogPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <Backlog />
        </>
    );
};
export default BacklogPage;
