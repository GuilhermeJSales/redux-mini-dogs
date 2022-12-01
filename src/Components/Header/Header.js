import { useDispatch, useSelector } from "react-redux"
import styles from "./Header.module.css"
import {logout} from '../../store/login'


export const Header = () => {

  const {token, user} = useSelector(state => state.login)
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();
  
  function handleLogout(){
    dispatch(logout())
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs Photos</h1>
      <button onClick={handleLogout} className={`${styles.button} ${loading ? styles.loading : ''} ${user.data ? styles.loaded : ''}`}></button>
    </header>
  )
}