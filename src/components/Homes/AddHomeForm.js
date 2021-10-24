import {Fragment, useState} from "react";
import HomesCard from "./HomesCard";

const AddHomeForm = props => {
    const [selectedPropertyType, setSelectedPropertyType] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredLocation, setEnteredLocation] = useState("");
    const [enteredRooms, setEnteredRooms] = useState("");
    const [enteredArea, setEnteredArea] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredImgUrl, setEnteredImgUrl] = useState("");

    const updateSelectedPropertyType = (event) => {
        setSelectedPropertyType(event.target.value);
    }
    const updateEnteredName = (event) => {
        setEnteredName(event.target.value)
    };
    const updateEnteredLocation = (event) => {
        setEnteredLocation(event.target.value)
    };
    const updateEnteredRooms = (event) => {
        setEnteredRooms(event.target.value)
    };
    const updateEnteredArea = (event) => {
        setEnteredArea(event.target.value)
    };
    const updateEnteredPrice = (event) => {
        setEnteredPrice(event.target.value)
    };
    const updateEnteredImgUrl = (event) => {
        setEnteredImgUrl(event.target.value)
    };

    function submitHandler(event) {
        event.preventDefault();

        // JSON object
        const propertyListingData = {
            id: Math.random(),
            propertyType: selectedPropertyType,
            name: enteredName,
            location: enteredLocation,
            rooms: enteredRooms,
            area: enteredArea,
            price: enteredPrice,
            imgUrl: enteredImgUrl
        }

        // Reset fields
        setEnteredName("");
        setEnteredLocation("");
        setEnteredRooms("");
        setEnteredArea("");
        setEnteredPrice("");
        setEnteredImgUrl("");


        props.addListing(propertyListingData);
        props.close();
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className={"addHomeForm"}>

                    <h2 className={"addHomeForm__title"}>New Listing</h2>

                    <div className={"new-property-listing"}>
                        Property Type
                        <div className={"radio-group"}
                             onChange={updateSelectedPropertyType}>
                            <input type="radio" name={"property-type"} value={"APARTMENT"}/>
                            <label>Apartment</label>
                            <input type="radio" name={"property-type"} value={"HOUSE"}/>
                            <label>House</label>
                        </div>

                        <label htmlFor="new-property-listing__title">Name</label>
                        <input type="text" value={enteredName} id={"new-property-listing__title"}
                               onChange={updateEnteredName}/>

                        <label htmlFor="new-property-listing__location">Location</label>
                        <input type="text" value={enteredLocation} id={"new-property-listing__location"}
                               onChange={updateEnteredLocation}/>

                        <label htmlFor="new-property-listing__rooms">Rooms</label>
                        <input type="number" value={enteredRooms} id={"new-property-listing__rooms"}
                               onChange={updateEnteredRooms}/>

                        <label htmlFor="new-property-listing__area">Area (m2)</label>
                        <input type="number" value={enteredArea} id={"new-property-listing__area"}
                               onChange={updateEnteredArea}/>

                        <label htmlFor="new-property-listing__price">Price</label>
                        <input type="number" value={enteredPrice} id={"new-property-listing__price"}
                               onChange={updateEnteredPrice}/>

                        <label htmlFor="new-property-listing__img-url">Image URL</label>
                        <input type="url" value={enteredImgUrl} id={"new-property-listing__img-url"}
                               onChange={updateEnteredImgUrl}/>
                    </div>

                    <HomesCard
                        className={"addHomeForm__preview"}
                        isPreview={true}
                        property
                        name={enteredName}
                        location={enteredLocation}
                        rooms={enteredRooms}
                        area={enteredArea}
                        price={enteredPrice}
                        imgUrl={enteredImgUrl}
                    />

                    <button type="submit" className="addHomeForm__submit btn">Submit</button>
                </div>
            </form>
        </Fragment>
    );
};

export default AddHomeForm;