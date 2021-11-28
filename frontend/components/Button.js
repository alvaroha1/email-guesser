import React from 'react'
import styles from '../styles/Button.module.css'

export default function Button(props) {
  const { type, value, style } = props;
  return (
    <button type={type} id={style} className={styles.button} data-testid="button">{value}</button>
  )
}