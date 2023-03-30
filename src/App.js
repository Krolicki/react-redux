// /import { useSelector } from 'react-redux'
import './App.css'
import Posts from './components/Posts/Posts'
//import Reservation from './components/Reservation/Reservation'
// import Account from './components/Account'
// import ChangeBalance from './components/ChangeBalance'
// import ChangeTheme from './components/ChangeTheme'


function App() {
  //const themeColor = useSelector((state) => state.theme.color )

  return (
    <div className="App">
      {/* <h1 style={{ color: themeColor }}>
        React Redux
      </h1>
      <Account />
      <ChangeBalance />
      <ChangeTheme /> */}
      {/* <Reservation /> */}
      <Posts />
    </div>
  )
}

export default App