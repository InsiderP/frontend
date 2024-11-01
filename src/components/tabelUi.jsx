import { Skeleton } from "@nextui-org/react";
import React from "react";
// import { Skeleton } from "@nextui-org/react";

const TableSkeleton = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div style={{ width: "100%" }} className="flex w-full gap-5">
      {arr.map((el, i) => (
        <div key={i} className="flex flex-col gap-2 ml-1">
          {arr.map((el, i) => (
            <Skeleton key={i} className="h-8 w-[180px]" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;