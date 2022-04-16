import * as React from 'react'
import styles from './Button.module.scss'

export function Button({ title = 'Title' }) {
  return (
    <div>
      <button className={styles.button}>
        {title}
        <span>heyy scss!</span>
      </button>
    </div>
  )
}
