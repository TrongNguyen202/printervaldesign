
import './App.css';
import ContainerDesign from './components/ContainerDesign';
import CustomSelect from './components/CustomSelect';
import Resource from './components/Resource';

function App() {
  return (
    <div className="App flex space-x-10 items-center  justify-center bg-gray-200">
   {/* <div>
    <Resource/>
   </div> */}
    
    <div className=''>
      <ContainerDesign/>
    </div>
    <div>
      <CustomSelect/>
    </div>
        
    </div>
  );
}

export default App;
