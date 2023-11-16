import './App.css';
import Module from './Module';
import Modol from './Modol';
import Module1 from './Module1';
function App() {
  return (
    <div className="App">
      <h1> Hello React Props</h1>
      <Modol nom="abdo" pnom="laaziri" note="10"  status="valide"/>
      <hr></hr>
      <Modol nom="khalid" pnom="hamada" note="18"  status="valide"/>
      <hr></hr>
      <Module nom="hamid" pnom="saad" note="73" status=" non valide"/>
      <hr></hr>
      <Module1 inputName='nom' inputLabel="Nom">
        taper votre nom
      </Module1>
    </div>
  );
}
export default App;
