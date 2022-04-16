import * as React from 'react'
import styles from './Button.module.css'

export function Button({ title = 'Title' }) {
  return (
    <div>
      <button className={styles.button}>{title}</button>
    </div>
  )
}
