import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TagInput } from './demos/hooks/tagInput'
import { Modal } from './demos/hooks/modalDialog'
import './App.css'
import { ShoppingList } from './demos/classComponents/shoppingList'
import { Context1, Context2 } from './demos/classComponents/context'
import { SignUpDialog } from './demos/classComponents/compose'

function App() {
  const [count, setCount] = useState(0)
  const [isModal, setModal] = useState(false);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => setModal(true)}>Click Here</button>
      <Modal
        isVisible={isModal}
        title="Model Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
      {/* <TagInput tags={['Nodejs', 'MongoDB']} />
      <ShoppingList name='My Shopping' />
      <Context1 /><Context2 />
      <SignUpDialog /> */}
    </div>
  )
}

export default App
