import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import Swal from "sweetalert2";
import Modal from "../../Components/common/Modal";
const Designation = () => {
    const [allEmployees, setAllEmployees] = useState([
        {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            phone_number: "1234567890",
            hire_date: "2022-01-01",
            salary: 50000,
            job_title: "Software Engineer",
            department_name: "IT",
        },
        {
            id: 2,
            first_name: "zohn",
            last_name: "Doe",
            email: "john.doe@example.com",
            phone_number: "1234567890",
            hire_date: "2022-01-01",
            salary: 100000,
            job_title: "Software Engineer",
            department_name: "IT",
        },
        // Add more employees here
    ]);
    const [open, setOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your employee submission logic here
        console.log("Employee added!");
        handleCloseModal(); // Close modal after submission
    };
    const handleOpen = (employee) => {
        setSelectedEmployee(employee);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                setAllEmployees(allEmployees.filter((e) => e.id !== id));
                Swal.fire("Deleted!", "Employee has been deleted.", "success");
            }
        });
    };

    const columns = [
        { field: "first_name", headerName: "Name", width: 150 },
        { field: "last_name", headerName: "Date", width: 150 },

        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => (
                <div className="flex space-x-2">
                    <Button variant="contained" className="bg-customblue text-white rounded-md  hover:bg-hoverblue" onClick={() => handleOpenModal(params.row)}>
                        Edit
                    </Button>
                    <Button variant="contained" className="bg-customblue text-white rounded-md  hover:bg-hoverblue" onClick={() => handleOpen(params.row)}>
                        Details
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => handleDelete(params.row.id)}>
                        Delete
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpenModal}
                className="px-4 py-2 bg-customblue text-white rounded-md  hover:bg-hoverblue"
            >
                Add Employee
            </Button>
            <div style={{ height: 400, width: "100%", margin: "20px auto" }}>



                <Modal
                    isOpen={showModal}
                    title="Add Employee"
                    onClose={handleCloseModal}
                >
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter last name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter email"
                            />
                        </div>
                        <Button
                            variant="contained"
                            type="submit"
                            className="px-4 py-2 bg-customblue hover:bg-hoverblue text-white rounded-md"
                        >
                            Submit
                        </Button>
                    </form>
                </Modal>
                <div className="bg-white p-4 rounded-xl max-w-3xl mx-auto">
                    <DataGrid
                        rows={allEmployees}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        autoHeight
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                fontWeight: "bold",
                                fontSize: "1rem", // Optional: Increase font size
                            },
                        }}
                    />

                </div>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Employee Details</DialogTitle>
                    <DialogContent>
                        {selectedEmployee && (
                            <div>
                                <p>
                                    <strong>Name:</strong> {selectedEmployee.first_name} {selectedEmployee.last_name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {selectedEmployee.email}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {selectedEmployee.phone_number}
                                </p>
                                <p>
                                    <strong>Hire Date:</strong> {selectedEmployee.hire_date}
                                </p>
                                <p>
                                    <strong>Salary:</strong> ${selectedEmployee.salary}
                                </p>
                                <p>
                                    <strong>Job Title:</strong> {selectedEmployee.job_title}
                                </p>
                                <p>
                                    <strong>Department:</strong> {selectedEmployee.department_name}
                                </p>
                            </div>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Designation
