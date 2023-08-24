import "./Header.scss"
import  { ChangeEvent } from "react";

interface HeaderProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
 
const Header: React.FC<HeaderProps> = ({ onChangeHandler }) => {
  
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
