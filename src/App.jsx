import PizzaBlock from './Pizzablock.module/Pizzablock.module'
import Header from './Header/ReactPizzaLogo.main'
import Options from './Options/Options.main'
import pizzas from './assets/pizza.json'

function App() {
  

  return (
    <>
      <Header></Header>
      <Options></Options>
      <div className='pizzadisplay'>
        {pizzas.map(pizzasitems => <PizzaBlock name = {pizzasitems.title} price = {pizzasitems.price} types={pizzasitems.types} image = {pizzasitems.imageUrl} sizes={pizzasitems.sizes}></PizzaBlock>)}
      </div>
      <div className='footer'>
        
      </div>
      

      
    </>
  )
}

export default App
