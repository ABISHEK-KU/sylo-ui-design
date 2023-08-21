import './App.css';
import Header from './view/Header'
import Footer from './view/Footer';
import Main from './view/Main';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
