import { Overview, OverviewHeader } from "entities/Overview";
import { useParams } from "react-router-dom";

export const OverviewPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <OverviewHeader />
            <Overview />
        </>
    );
};
export default OverviewPage;
