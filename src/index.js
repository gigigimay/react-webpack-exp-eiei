import styles from './styles.css'
import { add, subtract, createObject } from './module'

if (module.hot) {
  module.hot.accept()
}

const resultA = add(2, 3)
const resultB = subtract(5, 1)

console.log(resultA, resultB, createObject({ a: 1 }))
console.log(styles.localClass) // _19OBmKu4X8SmIISJiYXz8U
console.log(styles.globalClass) // undefined

console.log(process.env.APP_NAME) // 'reachatty'
