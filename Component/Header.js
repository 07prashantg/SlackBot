import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to="/">
                    <div className="title">
                        <h2 onClick={() => {

                        }}>GeekBot</h2>
                    </div>
                </Link>
                <div >
                    <DropDown />
                </div>
            </div>
        </>
    )
}
export default Header;