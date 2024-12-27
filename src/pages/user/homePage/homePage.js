import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="container" style={{width: '400px'}}>
            <div>
                <h2 className="text-center m-2 text-uppercase fw-bold text-success">tin hàng ngày</h2>
            </div>
            <div
            id="carouselExampleIndicators"
            className="carousel slide m-2"
            data-bs-ride="carousel"
            >
            <div className="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img
                    src="https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/805_day4.png"
                    className="d-block w-100"
                    alt="..."
                />
                </div>
                <div className="carousel-item">
                <img
                    src="https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/day2.png"
                    className="d-block w-100"
                    alt="..."
                />
                </div>
                <div className="carousel-item">
                <img
                    src="https://vietnamdefence.vdi.org.vn/quantri/knd/tintucvn/PublishingImages/TinTuc/AnhDaiDien/2024/12/day3.png"
                    className="d-block w-100"
                    alt="..."
                />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default memo(HomePage);
