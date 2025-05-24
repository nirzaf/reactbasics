import { type FC, type ReactNode } from 'react';

// Define the employee data structure
export interface EmployeeData {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
}

// Sample employee data
export const sampleEmployees: EmployeeData[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'UX Designer',
    department: 'Design',
    email: 'michael.johnson@example.com'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Data Scientist',
    department: 'Data',
    email: 'sarah.williams@example.com'
  }
];

interface EmployeeProps {
  employee: EmployeeData;
}

// Create a styled wrapper for the employee component
const EmployeeWrapper: FC<{children: ReactNode}> = ({children}) => (
  <div className="employee-wrapper">
    {children}
  </div>
);

const Employee: FC<EmployeeProps> = ({ employee }) => (
  <EmployeeWrapper>
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Email:</strong> {employee.email}</p>
    </div>
  </EmployeeWrapper>
);

export default Employee;
