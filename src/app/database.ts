import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"


const app = initializeApp({})
console.log(app)
const analytics = getAnalytics(app)
