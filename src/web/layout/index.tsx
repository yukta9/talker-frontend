import SideNav from "../commonComponent/sideNav";
import Chat from "../pages/chat";

const Layout:React.FC = () => {
    return(
        <section className="h-screen w-screen flex">
            <div>
                <SideNav />
            </div>
            <div className="w-[calc(100vw-62px)] ml-[62px] pl-[4px]">
                <Chat />
            </div>
        </section>
    )
}

export default Layout;