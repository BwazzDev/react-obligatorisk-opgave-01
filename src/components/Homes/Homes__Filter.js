const Homes__Filter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="homes-filter">
            <div className="homes-filter__control">
                <label className="homes-filter__label">Filter by property type</label>
                <select className="homes-filter__select" value={props.selectedFilter} onChange={dropdownChangeHandler}>
                    <option value="ALL">All</option>
                    <option value="APARTMENT">Apartment</option>
                    <option value="HOUSE">House</option>
                </select>
            </div>
        </div>
    );
}
export default Homes__Filter;