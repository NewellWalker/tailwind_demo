import { Link } from "react-router-dom";

const SideBar = () => {
    return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-400 text-white shadow-lg
                    dark:bg-slate-600 dark:text-white">
        
        <Link to="/">
            <SideBarIcon className="NDS" icon={<img src={process.env.PUBLIC_URL + '/Icons/NASA_Digital.gif'} className="size-auto" />} text="Learn about NASA Ditital Service!" />
        </Link>
        <Link to="/NASA">
            <SideBarIcon icon={<img src={process.env.PUBLIC_URL + '/Icons/NASA.png'} />}  text="Learn about NASA!"/>
        </Link>
        <Link to="/Mars">
            <SideBarIcon icon={<img src={process.env.PUBLIC_URL + '/Icons/Mars.png'} />} text="Learn about Mars Rover!" />
        </Link>
        <Link to="/Gemini">
            <SideBarIcon icon={<img src={process.env.PUBLIC_URL + '/Icons/Gemini.png'} />} text="Learn about Project Gemini!" />
        </Link>
        <Link to="/Artemis">
            <SideBarIcon icon={<img src={process.env.PUBLIC_URL + '/Icons/Artemis.png'} />} text="Learn about Artemis!" />
        </Link>
    </div>
    )

};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;