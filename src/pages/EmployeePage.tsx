import { type FC } from 'react';
import { Link } from 'react-router-dom';
import Employee, { sampleEmployees } from '../components/Employee/Employee';

const EmployeePage: FC = () => {
  return (
    <div className="employee-page">
      <div className="page-header">
        <h1>Employee Directory</h1>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
      
      <div className="employee-container">
        {sampleEmployees.map(employee => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
