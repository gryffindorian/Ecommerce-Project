import React, { useState } from "react";
import { useEffect } from "react";

export default function DealOfDay() {
  //  setInterval(Timer, 1000);
  // var [Days, setDays] = useState(3);
  // var [Hrs, setHrs] = useState(12);
  // var [Min, setMin] = useState(43);
  // var [Sec, setSec] = useState(28);
  // // function SecTime() {
  // //   setSec((Sec = Sec - 1));
  // // }

  // function Timer(){
  //      setSec((Sec = Sec - 1));
  //      if(Sec == 0){
  //        set
  //      }
  //      setSec((Sec = Sec - 1));
  //      setSec((Sec = Sec - 1));
  //      setSec((Sec = Sec - 1));
  // }

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Time is up
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  // Set the duration: 3 days, 2 hours, 43 minutes, and 29 seconds in milliseconds
  const duration =
    274 * 24 * 60 * 60 * 1000 +
    12 * 60 * 60 * 1000 +
    43 * 60 * 1000 +
    29 * 1000;
  const initialTargetDate = new Date(new Date().getTime() + duration);

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(initialTargetDate)
  );
  const [targetDate] = useState(initialTargetDate); // store the target date

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="modal fade custom-modal"
      id="onloadModal"
      tabindex="-1"
      aria-labelledby="onloadModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div
              className="deal"
              style={{
                backgroundImage: "url(template/assets/imgs/banner/popup-1.png)",
              }}
            >
              <div className="deal-top">
                <h6 className="mb-10 text-brand-2">Deal of the Day</h6>
              </div>
              <div className="deal-content detail-info">
                <h4 className="product-title">
                  <a className="text-heading" href="shop-product-right.html">
                    Organic fruit for your family's health
                  </a>
                </h4>
                <div className="clearfix product-price-cover">
                  <div className="product-price primary-color float-left">
                    <span className="current-price text-brand">$38</span>
                    <span>
                      <span className="save-price font-md color3 ml-15">
                        26% Off
                      </span>
                      <span className="old-price font-md ml-15">$52</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="deal-bottom">
                <p className="mb-20">Hurry Up! Offer End In:</p>
                <div
                  className="deals-countdown pl-5"
                  data-countdown="2025/03/25 00:00:00"
                >
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">
                      {timeLeft.days}
                    </span>
                    <span className="countdown-period"> days </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">
                      {timeLeft.hours}
                    </span>
                    <span className="countdown-period"> hours </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">
                      {timeLeft.minutes}
                    </span>
                    <span className="countdown-period"> mins </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">
                      {timeLeft.seconds}
                    </span>
                    <span className="countdown-period"> sec </span>
                  </span>
                </div>
                <div className="product-detail-rating">
                  <div className="product-rate-cover text-end">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="font-small ml-5 text-muted">
                      {" "}
                      (32 rates)
                    </span>
                  </div>
                </div>
                <a className="btn hover-up" href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
