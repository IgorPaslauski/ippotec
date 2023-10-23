import './App.css';
import './LoginForm/LoginForm'
import LoginForm from './LoginForm/LoginForm';
import Table from './Table/Table';

function App() {
  //<LoginForm></LoginForm>
  return (
    <div className="App">
      <div className="">
        <Table NomeDaTabela={'Tabela'}></Table>
        <Table NomeDaTabela={'Tabela 2'}></Table>
      </div>
    </div>
  );
}

export default App;
