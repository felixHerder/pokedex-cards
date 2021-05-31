import './searchbox.style.css'

export const SearchBox = (props) => (
  <div className="input-container">
    <input type="search" placeholder="Search Cards by Name, Type or Ability"
      onChange={props.searchBoxChange} />
  </div>
)