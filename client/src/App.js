import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActualizarAutor from './Components/ActualizarAutor';
import TodosAutores from './Components/TodosAutores';
import NuevoAutor from './Components/NuevoAutor';
import Error from './Components/Error';
const App= ()=> {
  
  
  
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=><TodosAutores/>}/>
          <Route path="/nuevo"  render={()=><NuevoAutor/>}/>
          <Route path="/autor/editar/:id"  render={()=><ActualizarAutor/>}/>
          <Route path="/error" render={()=><Error/>}/>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
