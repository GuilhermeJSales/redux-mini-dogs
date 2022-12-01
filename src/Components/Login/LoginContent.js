import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../store/login";
import { Input } from "../Forms/Inputs/Input"
import styles from './LoginContent.module.css'

export const LoginContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({username, password}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id={'username'} name={"Username"} type="text" onChange={({target}) => setUsername(target.value)} value={username}/>
      <Input id={'password'} name={"Password"} type="password" onChange={({target}) => setPassword(target.value)} value={password}/>
      <button className={styles.button}>Entrar</button>
    </form>
  )
}