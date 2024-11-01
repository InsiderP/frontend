import { Spinner } from "@nextui-org/react";
import React from "react";
import DataTable from "react-data-table-component";
import TableSkeleton from "./tabelUi";


const DataTableComponent = ({
  title,
  columns,
  data,
  onRowClicked,
  selectableRows = false,
  selectableRowDisabled,
  conditionalRowStyles,
  onChangeRowsPerPage,
  paginationPerPage,
  paginationDefaultPage,
  paginationTotalRows,
  setPage,
  page,
  total,
}) => {
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#FFFFFF",
        "&:nth-child(2n)": {
          backgroundColor: "#EEEEEE",
        },
      },
    },
    headRow: {
      style: {
        border: "none",
        height: "30px",
        // backgroundColor : "red",
      },
    },
    striped: {
      default: "red",
    },
    // heading row
    headCells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "8px",
        height: "40px",
        gap: "10px",
        // backgroundColor: "#E9E9E9",
        backgroundColor: "#27814b",
        color: "white",
        fontSize: "13px",
        fontWeight: 500,
      },
    },
    cells: {
      style: {
        // backgroundColor : "green",
        paddingLeft: "18px",
        paddingRight: "8px",
        wordBreak: "break-word",
      },
    },
  };

  const CustomRow = [
    {
      when: (row, index) => index % 2 === 0,
      style: {
        border: "none",
        backgroundColor: "#F03F3F",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];

  const handlePageChange = (page) => {
    console.log("page function", page);
  };
  return (
    <DataTable
      title={title}
      columns={columns}
      onRowClicked={onRowClicked}
      onChangeRowsPerPage={onChangeRowsPerPage} // this is the function to change the page size basically limit
      paginationPerPage={paginationPerPage} // number of rows per page basically limit
      paginationDefaultPage={page} // default page number
      onChangePage={setPage} // this is the function to change the page
      paginationServer
      paginationTotalRows={total} // total number of leads
      persistTableHead
      className="mt-2 w-full min-hh-[100px] bg-white overflow-auto scrollbar-hide"
      selectableRows={selectableRows}
      selectableRowDisabled={selectableRowDisabled}
      data={data}
      fixedHeader
      pagination
      responsive
      customStyles={customStyles}
      conditionalRowStyles={conditionalRowStyles}
      progressPending={!data}
      progressComponent={
        <>
          <TableSkeleton />
        </>
      }
    />
  );
};

export default DataTableComponent;
