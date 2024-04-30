import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartData } from "../../store/slice/singleCoinSlice";
import { getHumanDate, getHumanTime } from "../../Utils/DateTimeCovert";
import ErrorPage from "../../pages/ErrorPage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const buttons = [
  { id: 1, value: 1, display: "1D" },
  { id: 7, value: 7, display: "7D" },
  { id: 30, value: 30, display: "30D" },
];

const SingleCoinGraph = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pricesData, setPricesData] = useState([]);
  const [days, setDays] = useState(1);

  const prices = useSelector((state) => state?.singleCoin?.chartData?.prices);
  const chartLoading = useSelector(
    (state) => state?.singleCoin?.chartData?.chartDataLoading
  );
  const chartError = useSelector(
    (state) => state?.singleCoin?.chartData?.chartDataError
  );

  useEffect(() => {
    dispatch(fetchChartData({ id, days }));
  }, [id, days]);

  useEffect(() => {
    setPricesData(prices);
  }, [prices]);

  const labels =
    pricesData &&
    pricesData?.length &&
    prices?.map((price) =>
      days === 1 ? getHumanTime(price[0]) : getHumanDate(price[0])
    );
  const lineChartData =
    pricesData &&
    pricesData.length &&
    prices.map((price) => Number(price[1]).toFixed(2));
  const data = {
    labels,
    datasets: [
      {
        label: "Price in USD",
        data: lineChartData,
        backgroundColor: "#FFD700",
        borderColor: "#FFD700",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
    ],
  };
  return (
    <div className="w-full flex md:flex-col flex-col-reverse justify-center items-center h-full md:pl-4">
      {chartError ? (
        <ErrorPage errorMessage={chartError} />
      ) : (
        <>
          <Line data={data} options={options} />
          <div className="mt-2 mb-5">
            {buttons?.map((button) => (
              <button
                key={button.id}
                className={`w-12 p-2 font-semibold border border-black ${
                  days === button.value ? "bg-yellow-700" : "bg-yellow-300"
                }`}
                onClick={() => setDays(button.value)}
              >
                {button.display}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCoinGraph;
