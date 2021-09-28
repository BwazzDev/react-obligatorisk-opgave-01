import {Link, NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <NavLink to={props.to} className="navigation__item" activeClassName={"navigation__item--active"}>
            <div className="navigation__link">
                <div className="navigation__icon">
                    {props.icon}
                </div>
                {props.text}
            </div>
        </NavLink>
    );
};

export default NavItem;