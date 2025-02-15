
import "./SearchBar.css";
import Search from "../Images/Search.png";
const SearchBar = ({ onSearch }) => {
    return (
        <div className="search-bar">
            <div className="search-input">
                <img src={Search} alt="search" className="search" />
                <span>Search by doctor's name, location, Specialization</span>
            </div>
        </div>
    );
};

export default SearchBar;
