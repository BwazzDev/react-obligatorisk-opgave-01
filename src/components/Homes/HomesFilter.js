const HomesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="homes-filter" onChange={dropdownChangeHandler}>
            <div className="homes-filter__radio-group">
                <div className="homes-filter__radio-group__element">
                    <input type="radio" className="homes-filter__radio-input" id="ALL" value="ALL"
                           name="property-type"/>
                    <label htmlFor="ALL" className="homes-filter__radio-label">
                        <span className="homes-filter__radio-button"></span>
                        All Listings
                    </label>
                </div>

                <div className="homes-filter__radio-group__element">
                    <input type="radio" className="homes-filter__radio-input" id="APARTMENT" value="APARTMENT"
                           name="property-type"/>
                    <label htmlFor="APARTMENT" className="homes-filter__radio-label">
                        <span className="homes-filter__radio-button"></span>
                        Apartments
                    </label>
                </div>

                <div className="homes-filter__radio-group__element">
                    <input type="radio" className="homes-filter__radio-input" id="HOUSE" value="HOUSE"
                           name="property-type"/>
                    <label htmlFor="HOUSE" className="homes-filter__radio-label">
                        <span className="homes-filter__radio-button"></span>
                        Houses
                    </label>
                </div>
            </div>
        </div>
    );
}
export default HomesFilter;