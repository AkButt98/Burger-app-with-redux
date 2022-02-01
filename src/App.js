import './App.css';
import  Meat from './Meat'
import Cheese from './Cheese';
import Vegetable from './Vegetable';
import Tamato from './Tamato';
import { useDispatch, useSelector } from 'react-redux'
import { Adder, CheeseAdder, CheeseRemover, MeatAdder, MeatRemover, Remover, TamatoAdder, TamatoRemover, VegetableAdder, VegetableRemover } from './actions';



function App() {
  const dispatch =useDispatch();
 
  {/* Meat handling */}

 
  const handleOnADDMeat=()=>{
    dispatch(MeatAdder());
  }
  const handleOnREMOVEMeat=()=>{
    dispatch(MeatRemover());
  }

  {/* Cheese handling */}

  const handleOnADDCheese=()=>{
    dispatch(CheeseAdder());
  }
  const handleOnREMOVECheese=()=>{
    dispatch(CheeseRemover());
  }

  {/* Vegetable handling */}

  const handleOnADDVegetable=()=>{
    dispatch(VegetableAdder());
  }
  const handleOnREMOVEVegetable=()=>{
    dispatch(VegetableRemover());
  }

 {/* Tamato handling */}


  const handleOnADDTamato=()=>{
    dispatch(TamatoAdder());
  }
  const handleOnREMOVETamato=()=>{
    dispatch(TamatoRemover());
  }

  {/* counter handling */}


  const handleOnADD=()=>{
    dispatch(Adder());
  }
  const handleOnREMOVE=()=>{
    dispatch(Remover());
  }
  const state = useSelector(state => state);
  console.log('state =======', state);
  const obj = useSelector(state => state.obj);
  console.log('object =======', obj);

  const Meat = useSelector(state => state.obj.meat);
  console.log('Meat =======', Meat);

  const Cheese = useSelector(state => state.obj.cheese);
  console.log('Cheese =======', Cheese);

  const Vegetable = useSelector(state => state.obj.vegetable);
  console.log('Vegetable =======', Vegetable);

  const Tamato = useSelector(state => state.obj.tamato);
  console.log('Tamato =======', Tamato);

  const counter = useSelector(state => state.obj.counter);
  console.log('counter =======', counter);
  if (Meat >-1) {
    var M =Meat;
  }
  else{
    var M=0;
  }
  if (Cheese >-1) {
    var C=Cheese;
  }
  else{
    var C=0;
  }
  if (Vegetable >-1) {
    var V =Vegetable;
  }
  else{
    var V=0;
  }
  if (Tamato >-1) {
    var T =Tamato;
  }
  else{
    var T =0;
  }


  return (
    <div className="App">


      <div className='Burger'>
        <div className='Burger-top'>
          
        </div>







     {
     
     [...Array(M).fill(1).map((element,index) =>{
            console.log(Meat);
            
           return <div className="Meat">
      
        </div>
            // return <Meat key={index}/>
        } 
        )]
      } 


      { [...Array(C).fill(1).map((element,index) =>{
            console.log(Cheese);
          return <div className="Cheese">
          
          </div>
            // return <Cheese key={index}/>
        } 
        )]
      } 


      { [...Array(V).fill(1).map((element,index) =>{
            console.log(Vegetable);
            return <div className='Vegetable'>

            </div>
            // return <Vegetable key={index}/>
        } 
        )]
      }



      { [...Array(T).fill(1).map((element,index) =>{
            console.log(Tamato);
          return <div className="Tamato">
        
          </div>
            // return <Tamato key={index}/>
        } 
        )]
      }




    <div className='Burger-bottom'>

    </div>
        
        
     
      </div>
       <div className="order-form"  >
      <h3>This is Burger app using redux</h3>

      {/* Meat handling */}
          <div className='menu-divs'>
         <h4>Meat value is </h4>
      <button onClick={handleOnADDMeat}     className='menu-button'  >ADD</button>
      <h3>{Meat}</h3>
      <button onClick={handleOnREMOVEMeat}    className='menu-button'  >REMOVE</button>
   
          </div>
      
      {/* Cheese handling */}
        <div className='menu-divs'>
         <h4>Cheese value is </h4>
      <button onClick={handleOnADDCheese}   className='menu-button'  >ADD</button>
      <h3>{Cheese}</h3>
      <button onClick={handleOnREMOVECheese}    className='menu-button'  >REMOVE</button>
 
        </div>
      
      {/* Vegetable handling */}
      <div className='menu-divs'>
        
      <h4>Vegetable value is </h4>
      <button onClick={handleOnADDVegetable}    className='menu-button'  >ADD</button>
      <h3>{Vegetable}</h3>
      <button onClick={handleOnREMOVEVegetable}   className='menu-button'  >REMOVE</button>
      </div>

      {/* Tamato handling */}
      <div className='menu-divs'>
        <h4>Tamato value is </h4>
      <button onClick={handleOnADDTamato}   className='menu-button'  >ADD</button>
      <h3>{Tamato}</h3>
      <button onClick={handleOnREMOVETamato}    className='menu-button'  >REMOVE</button>

      </div>
      
      {/* counter handling */}
      <div className='menu-divs'>
        <h4>Counter value is </h4>
      <button onClick={handleOnADD}   className='menu-button'  >ADD</button>
      <h3>{counter}</h3>
      <button onClick={handleOnREMOVE}    className='menu-button'  >REMOVE</button>
      </div>
      

      </div>
    </div>
  );
}

export default App;
