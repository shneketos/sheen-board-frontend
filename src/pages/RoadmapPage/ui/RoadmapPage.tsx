import { RoadmapContent } from "entities/Roadmap";
import { useParams } from "react-router-dom";
import { Layout } from "shared/ui/Layout/Layout";

export const RoadmapPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <Layout>
            <RoadmapContent />
        </Layout>
    );
};
export default RoadmapPage;
