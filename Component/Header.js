import DropDown from "./DropDown";

const Header=() =>{
    return (
        <>
            <div className="header">
                <div className="title">
                    <h2>GeekBot</h2>
                </div>
                <div >
                    <DropDown/>
                </div>
            </div>
        </>
    )
}
export default Header;