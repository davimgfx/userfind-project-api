import "./Header.scss"

const Header = ({ onChangeHandler }) => {

  return (
    
      <header className="header">
        <h2 className="header-title">List Users</h2>
        <input
          type="text"
          placeholder="Search user..."
          className="header-search-bar"
          onChange={onChangeHandler}
        />
        <div className="header-bar" />
      </header>
  );
};

export default Header;
