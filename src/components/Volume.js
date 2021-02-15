import styles from './Volume.module.css'
import React from 'react'

const Volume = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        type='range'
        min='1'
        max='100'
        defaultValue='80'
        className={styles.slider}
        id='myRange'
        onChange={props.onChange}
        style={{
          background: `linear-gradient(90deg, #ffffff ${
            props.value * 100
          }%, #151616 ${props.value * 100}%)`
        }}
      />
    </div>
  )
}

export default Volume
