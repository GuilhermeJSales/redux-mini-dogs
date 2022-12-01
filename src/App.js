import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Content } from './Components/Content';
import { Header } from './Components/Header/Header';
import { autoLogin } from './store/login';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  },[dispatch]);

  return (
    <section className='container'>
      <Header />
      <Content />
    </section>
  );
}

export default App;
