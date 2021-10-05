import Homes__Home from "./Homes__Home";
import {Fragment} from "react";

const Homes__List = (props) => {
    return (
        <Fragment>
            {props.homes.map(home => (
                <Homes__Home
                    key={home.id}
                    img={home.img}
                    name={home.name}
                    location={home.location}
                    rooms={home.rooms}
                    area={home.area}
                    price={home.price}
                />
            ))}
        </Fragment>
    )
}

export default Homes__List;