import axios from 'axios';
import LogoutButton from 'components/logoutButton';
import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaInstagram } from "react-icons/fa";
import { IoHome, IoPersonOutline } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
// import Divider from '@mui/material/Divider';

import './style.scss';

export const Header = () => {
    const [isHovered, setIsHovered] = useState(null);


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
            <div className='d-none d-md-block container'>
                <div className="logo">
                    <a href="/">
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
                            <li className="nav-item" onMouseEnter={() => setIsHovered('VỀ TRIỂN LÃM')} onMouseLeave={() => setIsHovered(false)}>
                                <Link to={"/"} >
                                    <span className="nav-link" aria-current="page">VỀ TRIỂN LÃM</span>
                                </Link>
                                {isHovered==='VỀ TRIỂN LÃM' && (
                                    <div className="hovered-menu">
                                        <ul>
                                            <li>
                                            <Link to={"/"}>
                                                Giới Thiệu
                                            </Link>
                                            </li>
                                            <li>
                                            <Link to={"/"}>
                                                Danh sách đơn vị trưng bày
                                            </Link>
                                            </li>
                                            <li>
                                            <Link to={"/"}>
                                                Danh sách đoàn khách Quốc tế
                                            </Link>
                                            </li>
                                            <li>
                                            <Link to={"/"}>
                                                Ban tổ chức
                                            </Link>
                                            </li>
                                            <li>
                                            <Link to={"/"}>
                                                Thời gian và địa điểm
                                            </Link>
                                            </li>
                                            <li>
                                            <Link to={"/"}>
                                                Sơ đồ triển lãm
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item" onMouseEnter={() => setIsHovered('TRƯNG BÀY')} onMouseLeave={() => setIsHovered(false)}>
                                <Link to={"/"} >
                                    <span className="nav-link" >TRƯNG BÀY</span>
                                </Link>
                                {isHovered==='TRƯNG BÀY' && (
                                    <div className="hovered-menu">
                                        <ul>
                                            <li>
                                                <Link to={"/"}>
                                                    Hướng dẫn tham dự
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Tại sao nên tham dự?
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Lĩnh vực trưng bày
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Đơn vị trưng bày
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Phí tham dự và đặt chỗ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Gói dịch vụ quảng cáo
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" onMouseEnter={() => setIsHovered('THAM QUAN')} onMouseLeave={() => setIsHovered(false)}
                                    >THAM QUAN</span>
                                </Link>
                                {isHovered==='THAM QUAN' && (
                                    <div className="hovered-menu">
                                        <ul>
                                            <li>
                                                <Link to={"/"}>
                                                    Tại sao nên tham quan
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Đối tượng tham quan
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Đăng ký tham quan
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Quy định về VISA
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Khách sạn đề xuất
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Về Việt Nam
                                                </Link>
                                            </li>
                                        </ul>     
                                    </div>)}                 
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} >
                                    <span className="nav-link" onMouseEnter={() => setIsHovered('HỘI THẢO')} onMouseLeave={() => setIsHovered(false)}
                                    >HỘI THẢO</span>
                                </Link>
                                {isHovered==='HỘI THẢO' && (
                                    <div className="hovered-menu">
                                        <ul>
                                            <li>
                                                <Link to={"/"}>
                                                    Hội thảo quốc tế
                                                    Hội thaảo quôốc tế 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Đối tượng tham quan
                                                </Link>
                                            </li>
                                        </ul>     
                                    </div>)}                 
                            </li>
                            <li className="nav-item">
                                <Link to={"/"}>
                                    <span className="nav-link" onMouseEnter={() => setIsHovered('BÁO CHÍ')} onMouseLeave={() => setIsHovered(false)}>
                                        HỘI THẢO
                                    </span>
                                </Link>
                                {isHovered === 'BÁO CHÍ' && (
                                    <div className="hovered-menu">
                                        <ul>
                                            <li>
                                                <Link to={"/"}>
                                                    Tin tức cập nhật
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Tin hàng ngày
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Đối tác truyền thông
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    Thư viện ảnh
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
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