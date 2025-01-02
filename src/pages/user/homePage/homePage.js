import { memo } from "react";
// import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Divider, Image } from "antd";
import { SliderComponent } from "../theme/slider/slider";
import logo1 from '../../../assent/logo192.png'
import logo2 from '../../../assent/logo512.png'

export const HomePage = () => {
    // const navigate = useNavigate();

	
    return (
        <>
            <div>
                <div className="" style={{width: '100%'}}>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/slide-wesite_vn_08052024.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/slide-wesite_vn_08052024%20(1).jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/banner%202024_home%205%201.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>
            <div className="container">
                <div className="section_head text-center my-5">
                    <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/DanhMucQuangCao/AnhDaiDien/2024/04/groupvietnamdefence.png" alt=""></img>
                </div>
                <div className="offices_list row">
                    <div className="item col d-flex flex-column align-items-center">
                        <h3>Cơ quan chủ trì</h3>
                        <div className="col col-4 dvtc ">
                            <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/1.jpg" className="img-fluid" alt=""/>
                            <span className="quangcao_title">Bộ quốc phòng</span>
                        </div>
                    </div>
                    <div className="item col">
                        <h3>Đơn vị tổ chức</h3>
                        <div className="col col-12">
                            <div className="row justify-content-around align-items-center dvtc-boder">
                                <div className="col col-3 dvtc">
                                        <img className="dvtc_img" src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/untitled.png" alt=""/>
                                    <span className="quangcao_title">Bộ Tổng tham mưu</span>
                                </div>
                                <div className="col col-3 dvtc">
                                        <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/04/vdi%20logo.png" className="img-fluid" alt=""/>
                                    <span className="quangcao_title">Tổng cục Công nghiệp Quốc phòng</span>
                                </div>
                                <div className="col col-3 dvtc">
                                        <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/2.jpg" className="img-fluid" alt=""/>
                                    <span className="quangcao_title">Cục đối ngoại</span>
                                </div>
                                <div className="col col-3 dvtc">
                                        <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/z5429731844708_adc17348419e7e5c827a60ff9d5eb1f7.jpg" className="img-fluid" alt=""/>
                                    <span className="quangcao_title">Cục tuyên huấn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item col">
                        <h3>Đơn vị thực hiện</h3>
                        <div className="col col-12">
                            <div className="row justify-content-around align-items-center">
                                <div className="col col-4 dvtc">
                                    <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/04/2024/05/logogaet-final.jpg" className="img-fluid" alt=""/>
                                    <span className="quangcao_title">Tổng công ty kinh tế kỹ thuật công nghiệp quốc phòng</span>
                                </div>
                                <div className="col col-4 dvtc">
                                    <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/3.jpg" className="img-fluid" alt=""/>
                                    <span className="quangcao_title">Tổng công ty Xuất nhập khẩu tổng hợp Vạn Xuân</span>
                                </div>
                                <div className="col col-4 dvtc">
                                    <img src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/eifec.png" className="img-fluid" alt=""/>
                                    <span className="quangcao_title">Công ty TNHH EIFEC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container">
                <Divider style={{borderColor: '#434e4c', borderWidth: '0.15rem'}} />
            </div>

			<div className="container">
				<SliderComponent arrImages={[
					'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg', 
					'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg',
					'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg',
					'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg',
					// 'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg',
					// 'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg',
					// 'https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg',
					]} />
			</div>
        </>
    );
};

export default memo(HomePage);

