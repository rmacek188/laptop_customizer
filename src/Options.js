import React, { Component } from 'react';
import Option from '../Option/option'

class Options extends Component{
    
    render() 
    {
        const features = Object.keys(this.props.features).map(key=>
            <Option
                features={this.props.features}
                selected={this.props.itemsSelected}
                key={key}
                name={key}
                onSelect={this.props.handleUpdateSummary}/>)
        return (          
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        )       
    }
}

Options.defaultProps ={
    features:{},
    itemsSelected:{},
    selectedItems:{},
}
export default Options;
          /* second component */
            /* //create another component here that looks to check for updating state. */
            
           /* <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
                </div>
            </section>
        </main>
        )
    }
    
}*/