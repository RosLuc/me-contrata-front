import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProfileIcon } from "./icons/profile-icon";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	right: -10px;
	top: 50%;
`;

export function ProfileControl() {
	const { value } = useLocalStorage("logout", "signin");
	return (
		<Container>
			<ProfileIcon />
			{/* {value.length} */}
		</Container>
	);
}
