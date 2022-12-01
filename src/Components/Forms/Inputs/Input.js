import styles from "./Input.module.css";



export const Input = ({id, name, value, onChange, ...props}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>{name}</label>
      <input className={styles.input} id={id} value={value} onChange={onChange} {...props} />
    </>
  )
}