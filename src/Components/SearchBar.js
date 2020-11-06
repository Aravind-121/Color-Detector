import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchModel } from "../Actions";
import '../Styles/SearchBar.css';


class SearchBar extends React.Component {
    renderInput = ({ input }) =>{ 
        return (
            <div>
                <input autoFocus="on" placeholder="Paste image url" className="input-box" type="text" {...input} autoComplete="off"/>
            </div>
        )
    }
    onSubmit = formValues => { 
        this.props.fetchModel(formValues.url);
    }
    render() {
        return (
            <div className="form-container" >
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="url" component={this.renderInput} />
                    <button>Detect</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchModel }, dispatch);
}
SearchBar = connect(
    null,
    mapDispatchToProps
)(SearchBar)

export default reduxForm({
    form: 'SearchBar'
})(SearchBar);