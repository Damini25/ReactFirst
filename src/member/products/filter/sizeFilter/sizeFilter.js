import React from 'react';
import  './sizeFilter.css';
class SizeFilter extends React.Component{
    

    render(){
        return (
             <div className="filter-div">
                 <label>Sizes</label>
                 <section>
                     <div onClick={filterData}>XS</div>
                     <div>S</div>
                     <div>M</div>
                     <div>L</div>
                     <div>XL</div>
                     <div>XXL</div>
                 </section>
             </div>
        )
    }
}

export default SizeFilter;