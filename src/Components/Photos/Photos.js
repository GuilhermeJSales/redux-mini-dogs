import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {loadMorePhotos} from "../../store/photos"
import { ButtonLoadMore } from "../Forms/ButtonLoadMore/ButtonLoadMore";
import { PhotosContent } from "./PhotosContent";

export const Photos = () => {
  const {data} = useSelector(state => state.photos)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadMorePhotos(1))
  },[dispatch])



  return (
    <div>
      {data && <PhotosContent />}
      <ButtonLoadMore />
    </div>
  )
}