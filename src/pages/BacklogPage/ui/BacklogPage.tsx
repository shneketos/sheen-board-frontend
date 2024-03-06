import { BacklogContent } from "entities/Backlog";
import { useParams } from "react-router-dom";

export const BacklogPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <BacklogContent />
        </>
    );
};
export default BacklogPage;
