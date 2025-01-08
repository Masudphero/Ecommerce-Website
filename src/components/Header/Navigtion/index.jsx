import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <nav className="py-2">
             <div className="container flex items-center justify-end gap-8">
            <div className="col_1 w-[20%]">
                <Button className="!text-black !font-semibold gap-2"><RiMenu2Fill className="text-[14px] font-bold "></RiMenu2Fill> SHOP BY CATEGORIES<LiaAngleDownSolid></LiaAngleDownSolid></Button>
            </div>

            <div className="col_2 w-[80%]">
                <ul className="flex items-center gap-5">
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Home</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Fashion</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Electronics</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Footwear</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Groceries</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Beauty</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        Wellnees</Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        jewellery</Link>

                    </li>

                </ul>

            </div>

            
 
           </div>
        </nav>
    );
};

export default Navigation;