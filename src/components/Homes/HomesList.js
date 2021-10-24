import HomesCard from "./HomesCard";
import {Fragment} from "react";

const HomesList = (props) => {
    return (
        <Fragment>
            {props.homes.map(home => (
                <HomesCard
                    key={home.id}
                    imgUrl={home.img}
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

export default HomesList;