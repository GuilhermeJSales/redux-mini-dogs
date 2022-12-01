import { useSelector } from "react-redux"
import styles from "./PhotosContent.module.css"

export const PhotosContent = () => {
  const {list} = useSelector(state => state.photos)

  return (
    <ul className={styles.list}>
      {list.map(photo => <li key={photo.id} className={`${styles.item} anime`}>
        <img className={styles.img} src={photo.src} alt={photo.title} />
        <h2 className={styles.title}>{photo.title}</h2>
        <span className={styles.acessos}>{photo.acessos}</span>
      </li>)}
    </ul>
  )
}