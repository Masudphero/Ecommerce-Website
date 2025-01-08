
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';


import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
    return (
        <header>
            <div className='top-strip py-2 mt-1 border-t-[1px] border-gray-300 border-b-[1px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                         <div className='coll w-[50%]'>
                          <p className='text-[12px] font-semibold'>Get up to 50% off season styles,limited time only</p>
                         </div>

                          
                          <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                <Link to='help-center' className='text-[13px] transition font-semibold no-underline hover:text-[#ff5252]'
                                >
                                    Help Center
                                    </Link>
                                </li>

                                <li className='list-none'>
                                <Link to='/order-tracking' className='text-[13px] transition font-semibold no-underline hover:text-[#ff5252]'
                                >
                                   Order Tracking
                                    </Link>
                                </li>
                            </ul>

                          </div>



                    </div>
                </div>

            </div>
           
           <div className='header py-3'>
            <div className='container flex items-center justify-between'>
                <div className='col1 w-[25%]'>
                    <Link to={'/'}> <img src="/logo.png" /> </Link>
                </div>


                <div className='col2 w-[45%]'>
                    <Search></Search>
                </div>


                <div className='col3 w-[30%] flex items-center pl-7'>
                       <ul className='flex items-center gap-3'>
                        <li className='list-none'>
                           <Link to="/login" className=' text-[15px] transition font-semibold no-underline hover:text-[#ff5252]'>Login</Link>| &nbsp; <Link to="/register" className='text-[15px] transition font-semibold no-underline hover:text-[#ff5252]'>Register</Link>
                        </li>
                        <li>
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary bg-[#ff5252]">
                        <IoGitCompare />
                        </StyledBadge>
                        </IconButton>
                        </li>
                        

                        <li>
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary bg-[#ff5252]">
                        < MdOutlineShoppingCart />
                        </StyledBadge>
                        </IconButton>
                        </li>

                        <li>
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary bg-[#ff5252]">
                        < IoGitCompare />
                        </StyledBadge>
                        </IconButton>
                        </li>
                        
                       </ul>
                </div>

            </div>

           </div>

        </header>
    );
};

export default Header;