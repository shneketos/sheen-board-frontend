import { OverviewContent, OverviewHeader } from "entities/Overview";
import React from "react";
import { useParams } from "react-router-dom";
import { Modal } from "shared/ui/modal/Modal";
import { Sidebar } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
export const OverviewPage = () => {
    const { id } = useParams();
    console.log(id);
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Sidebar />
            <section className="content__wrapper">
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <OverviewHeader />
                <OverviewContent />
                <ThemeSwitcher />
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    perferendis optio at placeat praesentium similique
                    veritatis, reiciendis distinctio quam veniam?
                </Modal>
            </section>
        </>
    );
};
export default OverviewPage;
