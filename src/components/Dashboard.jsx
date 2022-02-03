import './Dashboard.css';

const Dashboard = ({ result, reset }) => {
  return (
    <div className='part-two'>
      <div className='item'>
        <div>
          <h3>Tip Amount</h3>
          <span>/person</span>
        </div>

        <div className='amount'>
          <span>
            <img src='/images/icon-dollar.svg' alt='' />
          </span>
          <span>{result}</span>
        </div>
      </div>
      <div className='item'>
        <div>
          <h3>Total</h3>
          <span>/person</span>
        </div>

        <div className='amount'>
          <span>
            <img src='/images/icon-dollar.svg' alt='' />
          </span>
          <span>{result}</span>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Dashboard;
