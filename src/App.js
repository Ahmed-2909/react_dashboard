
import './App.css';
import Navbar from './component/navbar';
import FirstGraph from './component/FirstGraph';
import SecondGraph from './component/SecondGraph';
import ThirdGroup from './component/ThirdGroup';

function App() {
  return (
    <div className='bg-gray-900  '>
      <div>
        <h1 className='p-4 font-bold text-white'>DASHBOARD</h1>

      </div>
      <div className='w-full'>
        <div className='w-2/12 bg-blue-500 m-4 rounded-lg fixed '>
          <Navbar />
        </div>
        <div className=' lg:absolute lg:right-0 lg:overflow-hidden mx-4 lg:w-4/5 lg:mx-3 '>
          <FirstGraph />
          <SecondGraph />
          <ThirdGroup />
        </div>
      </div>
    </div>
  );
}

export default App;
