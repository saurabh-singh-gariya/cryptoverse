import React from "react";

const Pagination = ({ listSize, pageSize, setCurrentPage, currentPage }) => {
  let pageNos = [];
  let totalPages = Math.ceil(listSize / pageSize);
  for (let i = 1; i <= totalPages; i++) {
    pageNos.push(i);
  }
  return (
    <div className="w-full flex justify-between mt-6 px-10 flex-wrap gap-2">
      {/* <div
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        className="p-1 rounded-lg hover:bg-[#FFD700] hover:text-black transition-all bg-black text-white font-lg font-medium cursor-pointer"
      >
        Prev
      </div> */}
      {pageNos &&
        pageNos.length > 0 &&
        pageNos.map((pageNo) => (
          <button
            className={`px-1.5 py-1 w-8 rounded-lg hover:bg-[#FFD700] hover:text-black transition-all font-lg ${
              pageNo === currentPage
                ? "bg-[#FFD700] text-black"
                : "bg-black text-white"
            }`}
            key={pageNo}
            onClick={() => setCurrentPage(pageNo)}
          >
            {pageNo}
          </button>
        ))}
      {/* <div
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
        className="p-1 rounded-lg hover:bg-[#FFD700] hover:text-black transition-all bg-black text-white font-lg font-medium cursor-pointer"
      >
        Next
      </div> */}
    </div>
  );
};

export default Pagination;
