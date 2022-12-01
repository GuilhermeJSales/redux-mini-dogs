import { LoginContent } from "./Login/LoginContent";
import { Loading } from "./Loading/Loading";
import { useSelector } from "react-redux";
import { Photos } from "./Photos/Photos";

export const Content = () => {
 const {token, user} =  useSelector(state => state.login);
 const loading = user.loading || token.loading


  if(loading) return  <Loading />
  if(user.data) return  <Photos />
  else return <LoginContent />
}