import React, { useEffect, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import {FiMenu} from 'react-icons/fi';
import {RxCross1} from 'react-icons/rx';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isTheme, setIsTheme] = useState(false);


    useEffect(() => {
        setIsTheme(!isTheme)
    }, [])

    const handleTheme = () => {

        if (isTheme) {
            setIsTheme(!isTheme);
            document.body.setAttribute('data-theme', 'cupcake')
        }
        else {
            setIsTheme(!isTheme);
            document.body.setAttribute('data-theme', 'night')
        }

    }

    return (
        <div>
            <div className="navbar bg-base-100 relative">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Crypto Dekho</Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                    {isOpen ? <RxCross1 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                </div>
                <div className="flex-none" >
                    <ul className={`md:menu md:menu-horizontal px-1 space-x-2 md:static absolute md:flex duration-500 z-10 ${isOpen?'top-16' : '-top-60'} md:p-2 left-0 md:bg-transparent bg-slate-500 md:space-y-0 space-y-4 w-full p-3 text-center `}>
                        <li><ActiveLink to='/home'>Home</ActiveLink></li>
                        <li><ActiveLink to='/about'>About</ActiveLink></li>
                        <li><ActiveLink to='/contact'>Contact Us</ActiveLink></li>
                        <li><button onClick={handleTheme}>
                            {
                                isTheme ? <BsMoonFill /> : <BsSunFill />
                            }
                        </button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;