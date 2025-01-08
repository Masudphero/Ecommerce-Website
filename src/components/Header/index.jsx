
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';


import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigtion';


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
        <header className='bg-white'>
            <div className='top-strip py-2  border-gray-300 border-b-[1px]'>
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
           
           <div className='header py-4 border-gray-300 border-b-[1px]'>
            <div className='container flex items-center justify-between'>
                <div className='col1 w-[25%]'>
                    <Link to={'/'}> <img src="/logo.png" /> </Link>
                </div>


                <div className='col2 w-[45%]'>
                    <Search></Search>
                </div>


                <div className='col3 w-[30%] flex items-center pl-7'>
                       <ul className='flex items-center justify-end w-full gap-3'>
                        <li className='list-none'>
                           <Link to="/login" className=' text-[15px] transition font-semibold no-underline hover:text-[#ff5252]'>Login</Link>| &nbsp; <Link to="/register" className='text-[15px] transition font-semibold no-underline hover:text-[#ff5252]'>Register</Link>
                        </li>
                        <li>
                        <Tooltip title="Compare" >
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary bg-[#ff5252]">
                        <IoGitCompare />
                        </StyledBadge>
                        </IconButton>
                        </Tooltip>
                        </li>
                        

                        <li>
                        <Tooltip title="Wishlist" >
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary bg-[#ff5252]">
                        < FaRegHeart />
                        </StyledBadge>
                        </IconButton>
                        </Tooltip>
                        </li>

                        <li>
                        <Tooltip title="Cart" >
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary bg-[#ff5252]">
                        < MdOutlineShoppingCart />
                        </StyledBadge>
                        </IconButton>
                        </Tooltip>
                        </li>
                        
                       </ul>
                </div>

            </div>

           </div>

           <Navigation></Navigation>

        </header>
    );
};

export default Header;