import axios from 'axios';
import LogoutButton from 'components/logoutButton';
import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline, IoHome } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
// import Divider from '@mui/material/Divider';

import './style.scss';

export const Header = () => {
    // const [toValue, setToValue] = useState("/login")
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          axios.get(`http://localhost:3333/auth/profile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            setIsLoggedIn(true);
            toast.success('Đăng nhập thành công!')
            console.log("Chạy lần 1");
            
          })
          .catch(error => {
            setIsLoggedIn(false);
            console.error('Error:', error);
          });
        } else {
            setIsLoggedIn(false)
        }
      }, []);

    return(
        <header className='row' >
            <div className='d-none d-md-block'>
                <div class="logo">
                    <a href="#">
                        <img src="https://vietnamdefence.vdi.org.vn/Publishing_Resources/BoQuocPhong/assets/images/VN_defence_logo1.png" alt=""/>
                    </a>
                </div>
                <div className='row header-top' style={{padding: "1rem", margin: 'unset'}}>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                    </div>
                    <div className='col-6 header-top-right'>
                        <ul className='d-inline-flex justify-items-center' style={{margin: 'unset'}}>
                            <li className='col-2 btn'>
                                <Link to={""}>
                                    <SiFacebook />
                                </Link>
                            </li>
                            <li className='col-2 btn '>
                                <Link to={""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className='col-2 d-inline-flex'>
                                <button type='button' className='btn btn-transparent mb-2' onClick={() => {navigate("/profile")}}>
                                    <IoPersonOutline />
                                </button>
                            </li>
                            <li className='col-6 btn' id="btn_login"
                                style={{cursor: "pointer", display : isLoggedIn ? 'none' : 'block'}}>
                                <button className='btn bnt-login p-1 text-white' onClick={() => window.location.href="/login"}> Đăng nhập </button>
                            </li>
                            <li className='col-6 btn' id="btn_logout"
                            style={{cursor: "pointer", display : isLoggedIn ? 'block' : 'none'}}>
                                <LogoutButton/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto topnav" style={{cursor: "pointer"}}>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link p-0" aria-current="page"><IoHome style={{ fontSize: '1.5rem' }}  /></span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" aria-current="page">VỀ TRIỂN LÃM</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" >TRƯNG BÀY</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" >THAM QUAN</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" >HỘI THẢO</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" >BÁO CHÍ</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" >LIÊN HỆ</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" >VIE</span>
                                </Link>
                            </li>
                        </ul>
                        <div >
                            <button className="btn btn-danger m-1 ">ĐƠN VỊ TRƯNG BÀY</button>
                            <button className="btn btn-danger m-1 ">ĐĂNG KÝ THAM QUAN</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Divider color="error" /> */}
        </header>
    )
}

export default memo(Header);