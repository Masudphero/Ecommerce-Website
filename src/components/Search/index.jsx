import "../Search/style.css"
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";


const Search = () => {
    return (
        <div className="searchBox w-[100%] p-2 h-[50px] relative rounded-[5px] bg-[#e5e5e5]">
            <input type="text" placeholder="Search for products..." className="w-full h-[35px] focus:outline-none bg-inherit text-[15px] p-2" />
            <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] !h-[37px] !rounded-full !text-black  "><IoSearch className="text-[#4e4e4e] text-[22px]"></IoSearch></Button>
        </div>
    );
};

export default Search;