import styles from "./MemberItem.module.scss";
import { MembersProps } from "entities/Members/model/types/MembersType";
import OwnerSelector from "entities/Members/model/selector/OwnerSelector";
import { RemoveMember } from "features/RemoveMember";
import { useUserStore } from "entities/User";
import { Avatar } from "shared/ui/Avatar/Avatar";
export const MemberItem = (props: MembersProps) => {
    const { name, email, id, avatar } = props;
    const isOwner = OwnerSelector();
    const user = useUserStore((state) => state.user);
    return (
        <li className={styles.member}>
            <div className={styles.info}>
                <Avatar src={avatar} name={name} />
                <span className={styles.name}>{name}</span>
                <span className={styles.email}>{email}</span>
            </div>
            {isOwner && user.id !== id && <RemoveMember id={id} />}
            {isOwner && user.id === id && (
                <span className={styles.owner}>Owner</span>
            )}
        </li>
    );
};
