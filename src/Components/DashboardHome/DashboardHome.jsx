import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// React Icons
import { FaUsers, FaBuilding, FaBriefcase, FaSitemap } from "react-icons/fa";
import Chart from "../charts/Chart";

const DashboardHome = () => {
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/statistics")
            .then((res) => res.json())
            .then((data) => setStatistics(data));
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-6">
            {/* Employee Count Card */}
            <motion.div
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <FaUsers className="text-5xl mb-4" />
                <h4 className="text-xl font-medium">Total Employees</h4>
                <h1 className="text-4xl font-extrabold mt-2">{statistics.employee_count}</h1>
            </motion.div>

            {/* Department Count Card */}
            <motion.div
                className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <FaBuilding className="text-5xl mb-4" />
                <h4 className="text-xl font-medium">Total Departments</h4>
                <h1 className="text-4xl font-extrabold mt-2">{statistics.department_count}</h1>
            </motion.div>

            {/* Job Position Card */}
            <motion.div
                className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
            >
                <FaBriefcase className="text-5xl mb-4" />
                <h4 className="text-xl font-medium">Job Positions</h4>
                <h1 className="text-4xl font-extrabold mt-2">{statistics.job_count}</h1>
            </motion.div>

            {/* Department Wise Employee Count */}
            {statistics.department_wise_employee_count &&
                statistics.department_wise_employee_count.map((a, idx) => (
                    <motion.div
                        className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center"
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 + idx * 0.2 }}
                    >
                        <FaSitemap className="text-5xl mb-4" />
                        <h4 className="text-xl font-medium">{a.department_name}</h4>
                        <h1 className="text-4xl font-extrabold mt-2">{a.employee_count}</h1>
                    </motion.div>
                ))}
                <Chart/>
        </div>
    );
};

export default DashboardHome;
