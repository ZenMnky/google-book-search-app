import React, {Component} from 'react';

class FilterOptions extends Component {
    
    render(){
        const {
            filterPrintChanged, 
            filterTypeChanged, 
        } = this.props;

        return(
            <section id="search_filterOptions">
                <div id="search_filterOptions_printType">
                    <label htmlFor="selectPrintType">
                        Print Type: 
                    </label>
                    <select 
                        id="selectPrintType" 
                        onChange={e => {
                            filterPrintChanged(e.target.value) 
                        }}
                    >
                        <option value="false">All</option>
                        <option value="god mode">GOD MODE</option>
                    </select>
                </div>
                <div id="search_filterOptions_bookType">
                    <label htmlFor="selectBookType">
                        Book Type: 
                    </label>
                    <select 
                        id="selectBookType"
                        onChange={e => 
                            {
                                filterTypeChanged(e.target.value)
                            }}
                    >
                        <option value="false">No Filter</option>
                        <option value="god mode">GOD MODE</option>
                    </select>
                </div>
                
            </section>
        )
    }
}

export default FilterOptions;