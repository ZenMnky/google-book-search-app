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
                        <option value="ebooks">E-Books</option>
                        <option value="free-ebooks">Free E-Books</option>
                        <option value="paid-ebooks">Paid E-Books</option>
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
                        <option value="books">Books Only</option>
                        <option value="magazines">Magazines Only</option>
                    </select>
                </div>
                
            </section>
        )
    }
}

export default FilterOptions;