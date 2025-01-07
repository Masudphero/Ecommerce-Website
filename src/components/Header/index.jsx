
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='top-strip py-2 border mt-1 border-y-grey-700'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                         <div className='coll w-[50%]'>
                          <p className='text-[14px] font-semibold'>Get up to 50% off season styles,limited time only</p>
                         </div>

                          
                          <div className='col2 flex items-center justify-end'>
                            <ul>
                                <li className='list-none'>
                                <Link>Help Center</Link>
                                </li>
                            </ul>

                          </div>



                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;