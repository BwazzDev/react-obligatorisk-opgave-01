import {useCallback, useEffect, useState} from "react";
import Homes__List from "./Homes__List";
import Homes__Filter from "./Homes__Filter";

const Homes = (props) => {
    const [homes, setHomes] = useState([]);
    const [filteredPropertyType, setFilteredPropertyType] = useState("ALL");
    const [isLoading, setIsLoading] = useState(false);

    const fetchHomesHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8080/property-listings");
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

    const filterChangeHandler = (selectedFilter) => {
        setFilteredPropertyType(selectedFilter);
    }

    const filteredHomes = homes.filter(home => {
        if (filteredPropertyType === "ALL") {
            return homes;
        }
        return home.propertyType.toString() === filteredPropertyType;
    })


    useEffect(() => {
        fetchHomesHandler();
    }, [fetchHomesHandler])

    return (
        <div className="property-listings">
            <Homes__Filter selectedFilter={filteredPropertyType} onChangeFilter={filterChangeHandler}/>
            <div className="homes">
                {!isLoading && <Homes__List homes={filteredHomes}/>}
                {!isLoading && homes.length === 0 && <p>Found no property listings</p>}
                {isLoading && <div className="loader">Loading...</div>}
            </div>
        </div>
    );
}


export default Homes;