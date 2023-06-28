import './App.css'
import { CakeView } from './app/features/cake/cakeView'
import { IcecreamView } from './app/features/icecream/IcecreamView'
import { UserView } from './app/features/user/UserView'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
