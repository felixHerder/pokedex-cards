import './loader.style.css'

export const Loader = (props)=>(
  props.loading ?
  <div className="loader">
    <img src="./logo192.png" alt="Poke ball" />
  </div>
  : <>
  </>
)