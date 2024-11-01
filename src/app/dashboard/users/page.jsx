"use client"
import React, { useState } from "react";
import useGetUser from "@/libs/query/useGetUser";
import DataTableComponent from "@/components/dataTable";

const User = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: AllUser, isLoading: AllUserLoading } = useGetUser({
    page,
    limit,
  });
 
  const columns = [
    {
      name: " Name",
      selector: (row) => row.name,
      sortable: true,
      sortFunction: (a, b) => a.name.localeCompare(b.name),
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Phone No.",
      selector: (row) => {
        const phone = row?.phone?.toString();
        if (phone && phone.length >= 10) {
          return  "******"+phone.slice(6, 10) ; // Keep the first 4 digits and replace the rest with asterisks
        }
        return phone; // Return the original phone number if it doesn't meet the condition
      },
      sortable: true,
    },
  
    
    
    
  ];

  if (AllUserLoading) {
    return (
      <div>
        <span>Please wait...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-auto">
     

      <div className="w-full h-full flex flex-col overflow-auto">
        <div className="text-lg font-bold text-black">
          <span>All User</span>
        </div>
        <DataTableComponent
          data={AllUser?.data}
          onChangeRowsPerPage={setLimit}
          paginationPerPage={limit}
          paginationDefaultPage={1}
          paginationTotalRows={AllUser?.length}
          total={AllUser?.total}
          setPage={setPage}
          page={page}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default User;
