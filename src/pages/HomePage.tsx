import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import Employee, { sampleEmployees } from '../components/Employee/Employee';

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          Change this {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <div className="employee-section">
        <h2>Employee Directory</h2>
        <Link to="/employees" className="view-all-link">View All Employees</Link>
        <div className="employee-list">
          {sampleEmployees.slice(0, 2).map(e => (
            <Employee key={e.id} employee={e} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
