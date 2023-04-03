import React, { useEffect, useState } from 'react';
import {BsSunFill, BsMoonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {

    const [isTheme, setIsTheme] = useState(false);

    useEffect(()=>{
        setIsTheme(!isTheme)
    },[])
    
    const handleTheme =()=>{
        
        if(isTheme){
            setIsTheme(!isTheme);
            document.body.setAttribute('data-theme','cupcake')
        }
        else{
            setIsTheme(!isTheme);
            document.body.setAttribute('data-theme','dark')
        }

    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Crypto Dekho</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><ActiveLink to='/home'>Home</ActiveLink></li>
                        <li><ActiveLink to='/about'>About</ActiveLink></li>
                        <li><ActiveLink to='/contact'>Contact Us</ActiveLink></li>
                        <li><button onClick={handleTheme}>
                            {
                                isTheme?<BsMoonFill/>:<BsSunFill/>
                            }    
                        </button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;