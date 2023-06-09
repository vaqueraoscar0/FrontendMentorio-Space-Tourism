import logo from './logo.svg'
import './Header.css'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'


function Header(props) {
    const location = useLocation()
    const [tab, setTab] = useState(0)
    const [openSideTab, setOpenSideTab] = useState(window.innerWidth >= 768)
    const [navBarScroll, setNavBarScroll] = useState('transparent')

    const menuToggle = () =>{
        let menu = document.querySelector('#menu-icon')
        let nav = document.querySelector('.navigate-bar')
        menu.classList.toggle('bx-x')
        nav.classList.toggle('open')
    }

    const handleResize = () => {
        if(window.innerWidth >= 768){
            setOpenSideTab(true)
        }else{
            setOpenSideTab(false)
        }
    }

    useEffect(() =>{
        if(location.pathname === '/home'){
            setTab(0)
        }else if(location.pathname === '/destination'){
            setTab(1)
        }else if(location.pathname === '/crew'){
            setTab(2)
        }else{
            setTab(3)
        }

        window.onscroll = function() {
            if(window.pageYOffset === 0) {
                setNavBarScroll("transparent")
            }else{
                setNavBarScroll('black')
            }
        };

        window.addEventListener("resize", handleResize)
    }, [tab, location.pathname])


    return (
        <header className={'app-header'} style={{background: navBarScroll}}>
            <div className={'header-main'}>
                <div className={'nav-logo'}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <hr className={'header-divider'}/>
                {openSideTab ?
                    (
                        <div className={"navigate-bar"}>
                            <Link onClick={() => setTab(0)} to={"/home"} style={{borderBottom: tab === 0 ? "3px solid #ffffff": 'none', lineHeight: tab === 0 ? '50px': '0'}}>00 Home</Link>
                            <Link onClick={() => setTab(1)}  to={"/destination"} style={{borderBottom: tab === 1 ? "3px solid #ffffff": 'none', lineHeight: tab === 1 ? '50px': '0'}}>01 Destination</Link>
                            <Link onClick={() => setTab(2)}  to={"/crew"} style={{borderBottom: tab === 2? "3px solid #ffffff": '', lineHeight: tab === 2 ? '50px': ''}}>02 Crew</Link>
                            <Link onClick={() => setTab(3)}  to={"/technology"} style={{borderBottom: tab === 3? "3px solid #ffffff": 'none', lineHeight: tab === 3 ? '50px': '0'}}>03 Technology</Link>
                        </div>

                    ):(
                        <div className={"navigate-bar"}>
                            <Link onClick={() => setTab(0)} to={"/home"} style={{borderBottom: tab === 0 ? "1px solid #ffffff": 'none', lineHeight: tab === 0 && openSideTab ? '50px': '0'}}>00 Home</Link>
                            <Link onClick={() => setTab(1)}  to={"/destination"} style={{borderBottom: tab === 1? "1px solid #ffffff": 'none', lineHeight: tab === 1 && openSideTab ? '50px': '0'}}>01 Destination</Link>
                            <Link onClick={() => setTab(2)}  to={"/crew"} style={{borderBottom: tab === 2 ? "1px solid #ffffff": 'none', lineHeight: tab === 2 && openSideTab ? '50px': '0'}}>02 Crew</Link>
                            <Link onClick={() => setTab(3)}  to={"/technology"} style={{borderBottom: tab === 3 ? "1px solid #ffffff": 'none', lineHeight: tab === 3 && openSideTab ? '50px': '0'}}>03 Technology</Link>
                        </div>

                    )
                }
                <div id={'menu-icon'} className={'open'} onClick={menuToggle}><GiHamburgerMenu/></div>
            </div>
        </header>
    );
}

export default Header;
