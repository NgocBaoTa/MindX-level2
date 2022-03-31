import DropDown from "./DropDown";

const Header = () => {
    return (
        <div className='header'>
            <h6 header_title>Filter by year</h6>

            <DropDown />
        </div>
    )
}

export default Header;