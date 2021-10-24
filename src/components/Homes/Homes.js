import {Fragment, useCallback, useEffect, useState} from "react";
import HomesList from "./HomesList";
import HomesFilter from "./HomesFilter";
import AddHomeForm from "./AddHomeForm";
import Modal from "../UI/Modal";

const Homes = (props) => {
    const apiUrl = "http://localhost:8080/property-listings";

    // States
    const [homes, setHomes] = useState([]);
    const [filteredPropertyType, setFilteredPropertyType] = useState("ALL");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const fetchHomesHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            const transformedHomes = data.map((homeData) => {
                return {
                    id: homeData.id,
                    propertyType: homeData.propertyType,
                    name: homeData.name,
                    location: homeData.location,
                    rooms: homeData.rooms,
                    area: homeData.area,
                    price: homeData.price,
                    img: homeData.imgUrl
                };
            });
            setHomes(transformedHomes);

        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    const addListingHandler = useCallback(async (propertyListingData) => {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(propertyListingData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const filterChangeHandler = (selectedFilter) => {
        setFilteredPropertyType(selectedFilter);
    }

    const filteredHomes = homes.filter(home => {
        if (filteredPropertyType === "ALL") {
            return homes;
        }
        return home.propertyType.toString() === filteredPropertyType;
    })

    const modalToggler = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        fetchHomesHandler();
    }, [fetchHomesHandler])

    return (
        <Fragment>

            {showModal &&
            <Modal close={modalToggler}>
                <AddHomeForm apiUrl={apiUrl} addListing={addListingHandler} close={modalToggler}/>
            </Modal>}

            <div className="property-listings">

                <div className="property-listings__top-menu">
                    <button className={"btn"} onClick={modalToggler}>Add New Property Listing</button>
                </div>

                <HomesFilter selectedFilter={filteredPropertyType} onChangeFilter={filterChangeHandler}/>

                <div className="homes">
                    {!isLoading && <HomesList homes={filteredHomes}/>}
                    {!isLoading && homes.length === 0 && <p>Found no property listings</p>}
                    {isLoading && <div className="loader">Loading...</div>}
                </div>

            </div>

        </Fragment>
    );
}


export default Homes;