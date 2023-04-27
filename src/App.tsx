import { useDispatch, useSelector } from "react-redux"
import { getPostsStatus, getPostsFetch } from './store/features/posts/postsSlice'
import { useEffect } from 'react'
import './App.css'
import Posts from './components/Posts/Posts'
import Reservation from './components/Reservation/Reservation'
import Account from './components/Account'
import ChangeBalance from './components/ChangeBalance'
import ChangeTheme from './components/ChangeTheme'
import { RootState } from "./store/store"


function App() {
  const themeColor = useSelector((state : RootState) => state.theme.color )
  const dispatch = useDispatch()

  const postsStatus = useSelector(getPostsStatus)
  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(getPostsFetch())
    }
  }, [postsStatus, dispatch])


  return (
    <div className="App">
      <div className="balance-n-theme">
        <h1 style={{ color: themeColor }}>
          React Redux
        </h1>
        <Account />
        <ChangeBalance />
        <ChangeTheme />
      </div>
      <Reservation />
      <Posts />
    </div>
  )
}

export default App