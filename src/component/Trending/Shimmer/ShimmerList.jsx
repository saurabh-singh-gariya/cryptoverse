/* eslint-disable react/prop-types */
import ShimmerItem from "./ShimmerItem";

const ShimmerList = ({ itemQuantity = 10 }) => {
  const array = new Array(itemQuantity).fill("-");
  return (
    <div className="flex flex-wrap gap-5 mt-10 justify-around">
      {array.map((coin, index) => (
        <ShimmerItem key={index} />
      ))}
    </div>
  );
};

export default ShimmerList;
