import React from 'react'; 
import ColorsBox from './Components/ColorsBox';
import ImageDisplay from './Components/ImageDisplay';
import SearchBar from './Components/SearchBar';
import './App.css'; 
  
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <h1>  <i className="fa fa-search" aria-hidden="true"></i>  Color Detector</h1>
        </div>
        <SearchBar />
        <div className="main-container">
          <ImageDisplay />
          <ColorsBox />
        </div>
      </div>
    );
  }
}

export default App;
