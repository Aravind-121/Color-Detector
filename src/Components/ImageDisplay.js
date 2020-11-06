import React from 'react';
import { connect } from "react-redux";
import { deleteModel } from "../Actions";
import '../Styles/ImageDisplay.css';
class ImageDisplay extends React.Component { 
    render() {  
        let { state } = this.props;
            
        let imgUrl = '';

        if (state.result[0] && state.form.SearchBar.values) {
            imgUrl = state.form.SearchBar.values.url;
        } else if ( state.result[0] && !state.form.SearchBar.values) { 
            this.props.deleteModel();
        }
        if (imgUrl !== '') {
            return (
                <div className="img-container">
                    <img alt="img" src={imgUrl} />
                </div>
            )
        }
        return<></>
    }
}
const MapStateToProps = (state) => { 
    return { state };
}
export default connect(MapStateToProps, {deleteModel})(ImageDisplay);
