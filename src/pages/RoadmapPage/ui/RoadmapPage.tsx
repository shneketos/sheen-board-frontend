import { RoadmapContent } from "entities/Roadmap";
import { useParams } from "react-router-dom";

export const RoadmapPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <RoadmapContent />
        </>
    );
};
export default RoadmapPage;
