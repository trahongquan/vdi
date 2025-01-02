import { Image } from "antd";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "./slider.css";
import { Link } from "react-router-dom";

export const SliderComponent = ({ arrImages }) => {
  // Custom Arrow components
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        Prev
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="container">
        <div className="section_head">
          <h2 className="text-danger text-center fw-bold">Tin tức - sự kiện</h2>
        </div>
        <Slider {...settings}>
          {arrImages.map((img) => {
            return (
              <div className="owl-item cloned">
                <div className="item">
                  <div className="content m-2">
                    <div>
                      <Link to={"/"}>
                        <Image
                          key={img}
                          src={img}
                          alt=""
                          with="100%"
                          preview={false}
                        />
                      </Link>
                    </div>
                    <div >
                        <div className="date-image">
                            <Image
                            src="https://vietnamdefence.vdi.org.vn/Publishing_Resources/BoQuocPhong/assets/images/industry-demo.png"
                            alt=""
                            preview={false}
                            />
                            <p className="date">05/05/2024</p>
                        </div>
                        <div className="cont">
                            <h3>
                                <a href="/news">
                                Đảm bảo tốt an ninh, an toàn cho Triển lãm quốc phòng
                                quốc tế Việt Nam 2024
                                </a>
                            </h3>
                            <div className="except">
                                (ĐCSVN) - Thượng tướng Phùng Sĩ Tấn yêu cầu Tiểu ban
                                điều hành - an ninh tiếp tục nghiên cứu, hoàn chỉnh các
                                phương án tối ưu tổ chức hiệp đồng các lực lượng, tăng
                                cường phối hợp, nỗ lực ở mức cao nhất, đảm bảo cho thành
                                công của Triển lãm quốc phòng quốc tế Việt Nam 2024; góp
                                phần lan tỏa hình ảnh đẹp của đất nước, Quân đội nhân
                                dân Việt Nam.
                            </div>
                        </div>
                    </div>
                    <div className="cont">
                    <a
                      className="readmore_txt"
                      href="/news"
                    >
                      Xem thêm
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
