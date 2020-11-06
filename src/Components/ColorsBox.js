import React from 'react';
import { connect } from "react-redux";
import '../Styles/ColorsBox.css';

class ColorsBox extends React.Component { 
    renderBoxes = () => { 
        if (this.props.state.result[0]) {
            return this.props.state.result[0].outputs[0].data['colors'].map((color,i) => { 
                return (
                    <div key={i} className="inner-div" style={{ backgroundColor: color.raw_hex }}>
                        {`Hex:  ${color.raw_hex}`}
                    </div>
                );
            });
        }
    }
    render() { 
        return (
            <div className="colors-container">
                { this.renderBoxes()}
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return { state };
}
export default connect(MapStateToProps)(ColorsBox);

