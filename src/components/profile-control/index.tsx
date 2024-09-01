import styles from "./styles.module.css";
import { ProfileIcon } from "../icons/profile-icon";


export function ProfileControl() {

	return (
		<div className={styles.container}>
			<ProfileIcon />
		</div>
	);
}
