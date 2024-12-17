import './App.css'
import Card from './component/Card/Card'
import { IfUiButton } from './components/ui'
// import Button  from './components/ui/button'

function App() {

  return (
    <>
     <Card title={'hello'}/>
     <IfUiButton>Click me</IfUiButton>  
    </>
  )
}

export default App
