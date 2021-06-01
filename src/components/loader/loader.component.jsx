import './loader.style.css'
import logo from "./logo192.png"

export const Loader = (props)=>(
  props.loading ?
  <div className="loader">
    <img src={logo} alt="Poke ball" />
  </div>
  : <>
  </>
)