import './App.css'
import Header from './components/Header/Header'
import FormComponent from './components/FormComponent/FormComponent'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
        <Header/>
        <div className="App">
        <FormComponent/>
        </div>
        <Footer/>
    </div>
  )
}
export default App
