import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from 'styled-components'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
    <GlobalStyled />
    <SignIn />
    </div>
  );
}

const GlobalStyled = createGlobalStyle`
html , body , #root{
  /* height:100%; */
  background: #181818;
  /* background: #181818; */
  /* #121212 */
  font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
}
a, a:link, a:visited , a:hover , a:focus{
  text-decoration:none;
  color:unset
}
  body::-webkit-scrollbar {
    width: 6px;
    /* border-radius: 10px; */
  }
  body::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    /* border-radius: 10px; */
  }
  body::-webkit-scrollbar-track {
    background-color: grey;
    /* border-radius: 10px; */
  }
`;

export default App;
