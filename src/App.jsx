import './App.css'
import ArrayMethods from './components/ArrayMethods'
import AsyncAndAwait from './components/AsyncAndAwait'
import Conditionals from './components/Conditionals'
import { ArrowFunction, MyFunction, ShortArrowFunction } from './components/Functions'
import Import from './components/Import'
import ObjectDestructuring from './components/ObjectDestructuring'
import SpreadOperator from './components/SpreadOperator'
import TempleteLiterals from './components/TempleteLiterals'

function App() {

  return (
    <>
      <div className="common">
        <ArrowFunction content={"This is arrow function"} />
        <MyFunction />
        <ShortArrowFunction content={"This is shorthand arrow function"} />
      </div>
      <div className="common">
        <h1>Templete Literals</h1>
        <TempleteLiterals/>
      </div>
      <div className="common">
        <h1>Conditionals</h1>
        <Conditionals/>
      </div>
      <div className="common">
        <h1>Array Methods</h1>
        <ArrayMethods/>
      </div>
      <div className="common">
        <h1>Object Destructuring</h1>
        <ObjectDestructuring/>
      </div>
      <div className="common">
        <h1>Spread Operator</h1>
        <SpreadOperator/>
      </div>
      <div className="common">
        <h1>Async and Await</h1>
        <AsyncAndAwait/>
      </div>
      <div className="common">
        <h1>Import</h1>
        <Import/>
      </div>
    </>
  )
}

export default App
