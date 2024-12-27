import { memo } from 'react';
import "./style.scss";

export const Footer = () => {
    return(
        <>
            <footer >
                <div className='container'>
                    <div className='row'>
                        <div className='col col-12 col-md-6'>
                            <p className='text-start'>
                                <img alt="" src="https://vietnamdefence.vdi.org.vn/QuanTriENG/KND/HoTro/PublishingImages/HoTro/NoiDung/2024/04/940_exclude.png" />
                            </p>
                            <br/>
                            <p className='text-start text-uppercase'>
                                ban thư ký triển lãm 2024
                            </p>
                            <ul>
                                <li><span><span>Email:&nbsp;vietnamdefence@vdi.org.vn</span></span></li>
                                <li><span >Hotline : 0983609790</span></li>
                            </ul>
                        </div>
                        <div className='col col-12 col-md-6'>
                            <div className='bg-white d-flex flex-column justify-content-center p-3'>
                                    <span className='text-uppercase text-danger fs-3 fw-bold'>đăng ký nhận bản tin</span>
                                    <p className='fs-6 fst-italic text-muted'> để cập nhật thông tin mới nhất</p>
                                    <input type="text" className='form-control fs-6 fst-italic text-muted my-2' placeholder='Họ và Tên'/>
                                    <input type="text" className='form-control fs-6 fst-italic text-muted my-2' placeholder='Địa chỉ Email'/>
                                    <input type="text" className='form-control fs-6 fst-italic text-muted my-2' placeholder='Lĩnh vực; Chuyên ngành'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <img src="https://vietnamdefence.vdi.org.vn/Publishing_Resources/BoQuocPhong/assets/images/Line7mau.png" alt="" />
                    <p>Copyright © Vietnam Defence Expo. All rights reserved</p>
                </div>
                
            </footer>

        
            {/* <footer>
                <div className="container">
                    <ul>
                        <li>Liên hệ: CBM@email.com</li>
                        <li>Địa chỉ: số 4, Tôn Thất Thiệp, Ba Đình, Hà Nội</li>
                        <li>© 2024: Bản quyền thuộc về BTL86</li>
                        <li>
                            Chỉ được phát hành lại thông tin từ website này khi có sự đồng ý bằng văn bản của CBM
                        </li>
                    </ul>
                    <ul className="social-icons" style={{"listStyle": "none", "fontSize": "3em"}}>
                        <li>
                            <Link to={""}>
                                <FaInstagram/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <MdOutlineMailOutline/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <SiFacebook/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <SiZalo />
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-menu">
                        <li><Link to={""}>Trang chủ</Link></li>
                        <li><Link to={""}>Giới thiệu</Link></li>
                        <li><Link to={""}>Thông tin thêm</Link></li>
                        <li><Link to={""}>Dịch vụ</Link></li>
                        <li><Link to={""}>Liên hệ</Link></li>
                    </ul>
                </div>
            </footer> */}
        </>
    )
}

export default memo(Footer);