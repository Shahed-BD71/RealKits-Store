import React from 'react';

const Filter = (props) => {
    return (
        <div className='filter'>
            <div className='filter-result'>{props.count.length} Products</div>
            <div className='filter-short'>Order
                <select value={props.sort} onChange={props.sortProduct}>
                    <option>Latest</option>
                    <option value='lowest'>Lowest</option>
                    <option value='highest'>Highest</option>
                </select>
            </div>
            <div>Filter
                <select value={props.size} onChange={props.filterProduct}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;