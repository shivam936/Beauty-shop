import React from "react";
import { FaTrash } from 'react-icons/fa';

const User = () => {

    const data= [
    { _id: "u001", name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890", role: "Admin" },
    { _id: "u002", name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901", role: "User" },
    { _id: "u003", name: "Charlie Brown", email: "charlie@example.com", phone: "345-678-9012", role: "User" },
    { _id: "u004", name: "David Clark", email: "david@example.com", phone: "456-789-0123", role: "Admin" },
    { _id: "u005", name: "Eve Stone", email: "eve@example.com", phone: "567-890-1234", role: "User" },
    { _id: "u006", name: "Frank Wilson", email: "frank@example.com", phone: "678-901-2345", role: "Admin" },
    { _id: "u007", name: "Grace Lee", email: "grace@example.com", phone: "789-012-3456", role: "User" },
    { _id: "u008", name: "Henry Kim", email: "henry@example.com", phone: "890-123-4567", role: "Admin" },
  ];


    const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "role", headerName: "Role", width: 130 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
  ];

  return (
    <div className="h-screeen p-5 w-[70vw]">
      <div className="flex p-6 justify-between items-center">
        <h2 className="text-md font-semibold">All Products</h2>
        <button className="bg-black p-4 text-white ">Create New </button>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        checkboxSelection
        columns={columns}
      />
    </div>
  );
};

export default User;
