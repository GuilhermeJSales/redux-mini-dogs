import { useDispatch, useSelector } from "react-redux"
import { loadMorePhotos } from "../../../store/photos";
import {Loading} from "../../Loading/Loading"
import styles from "./ButtonLoadMore.module.css"

export const ButtonLoadMore = () => {

  const {loading, infinite, pages} = useSelector(state => state.photos)
  const dispatch = useDispatch();

  function handleClickLoadMore(){
    dispatch(loadMorePhotos(pages + 1))
  }

  if(loading) return <Loading />
  if(!infinite) return null
  else return (
    <button onClick={handleClickLoadMore} className={styles.button}>+</button>
  )
}