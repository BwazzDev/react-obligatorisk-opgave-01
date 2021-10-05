import sprite from "../../resources/img/sprite.svg";

const Homes__Home = (props) => {
    return (
        <div className="home">
            <img src={props.img} alt="" className="home__img"/>

            <svg className="home__like">
                <use href={sprite + "#icon-heart-full"}/>
            </svg>

            <h5 className="home__name">{props.name}</h5>

            <div className="home__location">
                <svg>
                    <use href={sprite + "#icon-map-pin"}/>
                </svg>
                <p>{props.location}</p>
            </div>

            <div className="home__rooms">
                <svg>
                    <use href={sprite + "#icon-profile-male"}/>
                </svg>
                <p>{props.rooms} rooms</p>
            </div>

            <div className="home__area">
                <svg>
                    <use href={sprite + "#icon-expand"}/>
                </svg>
                <p>{props.area} m<sup>2</sup></p>
            </div>

            <div className="home__price">
                <svg>
                    <use href={sprite + "#icon-key"}/>
                </svg>
                <p>{props.price}</p>
            </div>

            <button className="btn home__btn">
                Contact realtor
            </button>


        </div>
    );
}

export default Homes__Home;