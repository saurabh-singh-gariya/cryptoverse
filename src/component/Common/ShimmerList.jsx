/* eslint-disable react/prop-types */
import Skeleton from "./Skeleton";

const ShimmerList = ({ itemQuantity = 10 }) => {
  const array = new Array(itemQuantity).fill("-");
  return (
    <div className="flex gap-2 flex-col mt-4">
      {array.map((val, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

export default ShimmerList;
