import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Wheel.css'

Chart.register(...registerables);

const WalmartWebsite = () => {
  const [finalValue, setFinalValue] = useState("Click On The Spin Button To Start");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [rotationInterval, setRotationInterval] = useState(null);
  const chartRef = useRef(null);

  const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: "30% off" },
    { minDegree: 31, maxDegree: 90, value: "10% off" },
    { minDegree: 91, maxDegree: 150, value: "50% off" },
    { minDegree: 151, maxDegree: 210, value: "20% off" },
    { minDegree: 211, maxDegree: 270, value: "5% off" },
    { minDegree: 271, maxDegree: 330, value: "40% off" },
    { minDegree: 331, maxDegree: 360, value: "30% off" }
  ];

  const data = [16, 16, 16, 16, 16, 16];
  const pieColors = ["#8b35bc", "#b163da", "#8b35bc", "#b163da", "#8b35bc", "#b163da"];

  useEffect(() => {
    const wheel = document.getElementById("wheel");

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance
    }

    const chart = new Chart(wheel, {
      plugins: [ChartDataLabels],
      type: "pie",
      data: {
        labels: ["30% off", "10% off", "50% off", "20% off", "5% off", "40% off"],
        datasets: [{
          backgroundColor: pieColors,
          data: data
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
          tooltip: false,
          legend: { display: false },
          datalabels: {
            color: "#ffffff",
            formatter: (_, context) => context.chart.data.labels[context.dataIndex],
            font: { size: 18 }
          }
        }
      }
    });

    chartRef.current = chart; // Save the chart instance to the ref

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Cleanup on unmount
      }
    };
  }, []);

  const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        setFinalValue(`You won: ${i.value}`);
        showWinningMessage(i.value);
        break;
      }
    }
  };

  const showWinningMessage = (discount) => {
    setPopupText(`Hurray! You have won a ${discount} discount!`);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSpin = () => {
    let count = 0;
    let resultValue = 101;
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    
    const interval = setInterval(() => {
      chartRef.current.options.rotation += resultValue;
      chartRef.current.update();

      if (chartRef.current.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        chartRef.current.options.rotation = 0;
      } else if (count > 15 && chartRef.current.options.rotation === randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(interval);
        setRotationInterval(null);
      }
    }, 10);

    setRotationInterval(interval);
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="https://www.logolynx.com/images/logolynx/b8/b865607bcb2b220f9f2eb738df079ac6.jpeg" alt="Walmart logo" />
        </div>
        <div className="nav">
          <a href="#">Departments</a>
          <a href="#">Services</a>
        </div>
        <div className="search">
          <input type="text" placeholder="Search everything at Walmart online and in store" />
          <button>Search</button>
        </div>
        <div className="account">
          <a href="#">
            <img src="https://cdn2.iconfinder.com/data/icons/economy-and-finance-1/24/_favourite_shopping_bag-512.png" alt="Wishlist icon" />
            MY ITEMS
          </a>
          <a href="#">
            <img src="https://static.vecteezy.com/system/resources/previews/019/787/045/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Lock icon" />
          </a>
        </div>
      </div>
      <div className="sub-header">
        <p>Sacramento Supercenter | Sacramento, 95829</p>
      </div>
      <div className="main-content">
        <div className="spin-game-container">
          <canvas id="wheel"></canvas>
          <button id="spin-btn" onClick={handleSpin} disabled={rotationInterval !== null}>Spin</button>
          <div id="final-value">
            <p>{finalValue}</p>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div id="popup-message" className="popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <span className="close-btn" onClick={handleClosePopup}>&times;</span>
            <p>{popupText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalmartWebsite;
