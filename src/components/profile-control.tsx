import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProfileIcon } from "./profile-icon";

export function ProfileControl() {
  const {value} = useLocalStorage('logout', 'signin')
  return (
    <div>
      <ProfileIcon/>
      {/* {value.length} */}
    </div>
  )
}
