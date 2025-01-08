import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";


const Navigation = () => {
    return (
        <nav className="py-2">
             <div className="container flex items-center justify-end gap-8">
            <div className="col_1 w-[20%]">
                <Button className="!text-black !font-semibold gap-2"><RiMenu2Fill className="text-[14px] font-bold "></RiMenu2Fill> SHOP BY CATEGORIES<LiaAngleDownSolid></LiaAngleDownSolid></Button>
            </div>

            <div className="col_2 w-[60%]">
                <ul className="flex items-center gap-3">
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">

                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">Home</Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Fashion
                        </Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Electronics
                        </Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Footwear
                        </Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Groceries
                        </Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Beauty
                        </Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Wellnees
                        </Button>
                        </Link>

                    </li>
                    <li className="list-none">
                        <Link to="/" className="transition text-[16px] font-semibold no-underline hover:text-[#ff5252]">
                        <Button className="link transition !font-semibold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                        Jewellery
                        </Button>
                        </Link>

                    </li>

                </ul>

            </div>

            <div className="col_3 w-[20%] ">
                <p className="font-semibold flex items-center gap-3  mb-0 mt-0"><GoRocket className="text-[18px]"></GoRocket> Free International Delivery</p>
            </div>

            
 
           </div>
        </nav>
    );
};

export default Navigation;