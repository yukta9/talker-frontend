import message from "../../../assets/message.svg"
import setting from "../../../assets/setting.svg"
import userProfile from "../../../assets/userProfile.svg"
import search from "../../../assets/search.svg"
import lock from "../../../assets/lock.svg"
import heart from "../../../assets/heart.svg"
import linked from "../../../assets/linked.svg"
import hidden from "../../../assets/hidden.svg"
import closeCircle from "../../../assets/CloseCircleOutlined.svg"

const SideNav: React.FC = () => {
    return (
        <section className="h-screen w-[62px] fixed shadow-[2px_0_2px_#E9E9E9]">
            <div className="flex items-center justify-center mt-[12px]"><img src={lock} className="w-[38px]"/></div>
            <ul className="flex flex-col items-center justify-center space-y-4">
                <li className="p-[6px] mt-[50px]"><img src={message} className="w-[28px]"/></li>
                <li className="p-[6px]"><img src={search} className="w-[22px]" /></li>
                <li className="p-[6px]"><img src={linked} className="w-[22px]" /></li>
                <li className="p-[6px]"><img src={heart} className="w-[22px]" /></li>
                <li className="p-[6px]"><img src={closeCircle} className="w-[22px]" /></li>
                <li className="p-[6px]"><img src={hidden} className="w-[22px]" /></li>
                <li className="p-[6px]"><img src={userProfile} className="w-[22px]"/></li>
                <li className="p-[6px]"><img src={setting} className="w-[22px]"/></li>
            </ul>
        </section>
    )
}

export default SideNav;