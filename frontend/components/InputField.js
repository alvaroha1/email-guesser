import React from 'react'
import styles from '../styles/InputField.module.css'

export default function InputField(props) {
  const { name, type, required, handleInput, label } = props;
  return (
    <div className={styles.box}>
      <label htmlFor="inp" className={styles.inp}>
        <input id="inp" placeholder="&nbsp;" name={name} type={type} required={required} onChange={handleInput} data-testid="input-field"/>
        <span className={styles.label}>{label}</span>
        <span className={styles.focusbg}></span>
      </label>
    </div>
  )
}