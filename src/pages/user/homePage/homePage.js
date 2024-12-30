import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Divider } from "antd";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <banner>
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
            </banner>
            <unit className="container">
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
                                        <img className="dvtc_img" src="https://vietnamdefence.vdi.org.vn/quantri/knd/quangcao/PublishingImages/QuangCao/AnhDaiDien/2024/05/untitled.png" className="img-fluid" alt=""/>
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
            </unit>
            <div className="container">
                <Divider style={{borderColor: '#434e4c', borderWidth: '0.15rem'}} />
            </div>
            <div class="container">
			<div class="section_head">
				<h2 class="text-danger text-center fw-bold">Tin tức - sự kiện</h2>
			</div>
			<div class="blog_slider owl-carousel ttsk owl-loaded owl-drag">
			    <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item cloned" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">19/12/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">Khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Sáng 19-12, Bộ Quốc phòng Việt Nam long trọng tổ chức Lễ khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024 tại khu vực sân bay Gia Lâm (Hà Nội). Dự khai mạc có đồng chí Phạm Minh Chính, Ủy viên Bộ Chính trị, Thủ tướng Chính phủ.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item cloned" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/574_1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">05/05/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">Đảm bảo tốt an ninh, an toàn cho Triển lãm quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									(ĐCSVN) - Thượng tướng Phùng Sĩ Tấn yêu cầu Tiểu ban điều hành - an ninh tiếp tục nghiên cứu, hoàn chỉnh các phương án tối ưu tổ chức hiệp đồng các lực lượng, tăng cường phối hợp, nỗ lực ở mức cao nhất, đảm bảo cho thành công của Triển lãm quốc phòng quốc tế Việt Nam 2024; góp phần lan tỏa hình ảnh đẹp của đất nước, Quân đội nhân dân Việt Nam.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item cloned" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/tap-huan-si-quan-lien-lac-phien-dich-phuc-vu-trien-d34-t35.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">03/05/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/tap-huan-si-quan-lien-lac-phien-dich-phuc-vu-trien-d34-t35.html">Tập huấn sĩ quan liên lạc, phiên dịch phục vụ Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Sáng 22-4, tại Hà Nội diễn ra Lễ khai mạc lớp tập huấn sĩ quan liên lạc và phiên dịch phục vụ Triển lãm Quốc phòng quốc tế Việt Nam 2024. Tham gia tập huấn có đông đủ các đồng chí được cử làm sĩ quan liên lạc, phiên dịch đến từ các cơ quan, đơn vị trực thuộc Bộ Quốc phòng và các học viện, nhà trường quân đội. Giảng viên là những cán bộ có kinh nghiệm đang công tác tại Tổng cục Công nghiệp Quốc phòng, Cục Bảo vệ an ninh quân đội (Tổng cục Chính trị Quân đội nhân dân Việt Nam) và Cục Đối ngoại/Bộ Quốc phòng.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/tap-huan-si-quan-lien-lac-phien-dich-phuc-vu-trien-d34-t35.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item active" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/thu-tuong-pham-minh-chinh-tham-quan-cac-gian-hang--d34-t90.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/2.1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">19/12/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/thu-tuong-pham-minh-chinh-tham-quan-cac-gian-hang--d34-t90.html">Thủ tướng Phạm Minh Chính tham quan các gian hàng của Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Ngay sau khi tham dự và phát biểu tại lễ khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024, Thủ tướng Phạm Minh Chính đã cùng các đại biểu tham quan các gian hàng trưng bày của triển lãm.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/thu-tuong-pham-minh-chinh-tham-quan-cac-gian-hang--d34-t90.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item active" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">19/12/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">Khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Sáng 19-12, Bộ Quốc phòng Việt Nam long trọng tổ chức Lễ khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024 tại khu vực sân bay Gia Lâm (Hà Nội). Dự khai mạc có đồng chí Phạm Minh Chính, Ủy viên Bộ Chính trị, Thủ tướng Chính phủ.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item active"><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/574_1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">05/05/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">Đảm bảo tốt an ninh, an toàn cho Triển lãm quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									(ĐCSVN) - Thượng tướng Phùng Sĩ Tấn yêu cầu Tiểu ban điều hành - an ninh tiếp tục nghiên cứu, hoàn chỉnh các phương án tối ưu tổ chức hiệp đồng các lực lượng, tăng cường phối hợp, nỗ lực ở mức cao nhất, đảm bảo cho thành công của Triển lãm quốc phòng quốc tế Việt Nam 2024; góp phần lan tỏa hình ảnh đẹp của đất nước, Quân đội nhân dân Việt Nam.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/tap-huan-si-quan-lien-lac-phien-dich-phuc-vu-trien-d34-t35.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">03/05/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/tap-huan-si-quan-lien-lac-phien-dich-phuc-vu-trien-d34-t35.html">Tập huấn sĩ quan liên lạc, phiên dịch phục vụ Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Sáng 22-4, tại Hà Nội diễn ra Lễ khai mạc lớp tập huấn sĩ quan liên lạc và phiên dịch phục vụ Triển lãm Quốc phòng quốc tế Việt Nam 2024. Tham gia tập huấn có đông đủ các đồng chí được cử làm sĩ quan liên lạc, phiên dịch đến từ các cơ quan, đơn vị trực thuộc Bộ Quốc phòng và các học viện, nhà trường quân đội. Giảng viên là những cán bộ có kinh nghiệm đang công tác tại Tổng cục Công nghiệp Quốc phòng, Cục Bảo vệ an ninh quân đội (Tổng cục Chính trị Quân đội nhân dân Việt Nam) và Cục Đối ngoại/Bộ Quốc phòng.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/tap-huan-si-quan-lien-lac-phien-dich-phuc-vu-trien-d34-t35.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item cloned" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/thu-tuong-pham-minh-chinh-tham-quan-cac-gian-hang--d34-t90.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/2.1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">19/12/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/thu-tuong-pham-minh-chinh-tham-quan-cac-gian-hang--d34-t90.html">Thủ tướng Phạm Minh Chính tham quan các gian hàng của Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Ngay sau khi tham dự và phát biểu tại lễ khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024, Thủ tướng Phạm Minh Chính đã cùng các đại biểu tham quan các gian hàng trưng bày của triển lãm.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/thu-tuong-pham-minh-chinh-tham-quan-cac-gian-hang--d34-t90.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item cloned" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/24.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" alt=""/>
									<p class="date">19/12/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">Khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									Sáng 19-12, Bộ Quốc phòng Việt Nam long trọng tổ chức Lễ khai mạc Triển lãm Quốc phòng quốc tế Việt Nam 2024 tại khu vực sân bay Gia Lâm (Hà Nội). Dự khai mạc có đồng chí Phạm Minh Chính, Ủy viên Bộ Chính trị, Thủ tướng Chính phủ.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/khai-mac-trien-lam-quoc-phong-quoc-te-viet-nam-202-d34-t89.html">Xem thêm</a>
						</div>
					</div></div><div class="owl-item cloned" ><div class="item">
						<div class="content">
							<div class="img">
								<a href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">
									<img src="/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/05/574_1.jpg" alt=""/>
								</a>
							</div>
							<div class="cont">
								<div class="imgDate">
									<img src="/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png" />
									<p class="date">05/05/2024</p>
								</div>
								<h3><a href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">Đảm bảo tốt an ninh, an toàn cho Triển lãm quốc phòng quốc tế Việt Nam 2024</a></h3>
								<div class="except">
									(ĐCSVN) - Thượng tướng Phùng Sĩ Tấn yêu cầu Tiểu ban điều hành - an ninh tiếp tục nghiên cứu, hoàn chỉnh các phương án tối ưu tổ chức hiệp đồng các lực lượng, tăng cường phối hợp, nỗ lực ở mức cao nhất, đảm bảo cho thành công của Triển lãm quốc phòng quốc tế Việt Nam 2024; góp phần lan tỏa hình ảnh đẹp của đất nước, Quân đội nhân dân Việt Nam.
								</div>
							</div>
							<a class="readmore_txt" href="/tin-tuc---su-kien-vie/dam-bao-tot-an-ninh-an-toan-cho-trien-lam-quoc-pho-d34-t36.html">Xem thêm</a>
						</div>
					</div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="ic ic_left_vector"></i></button><button type="button" role="presentation" class="owl-next"><i class="ic ic_right_vector"></i></button></div><div class="owl-dots disabled"></div></div>
		</div>
        </>
    );
};

export default memo(HomePage);

