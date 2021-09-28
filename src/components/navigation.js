import NavItem from "./NavItem";
import {GridIcon, HomeIcon} from "./icons";

const Navigation = (props) => {
    return <div className="navigation">
        <NavItem to={"/welcome"} text={"Welcome"} icon={<HomeIcon/>}/>
        <NavItem to={"/products"} text={"Products"} icon={<GridIcon/>}/>
    </div>
};

export default Navigation;