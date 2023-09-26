import { Pokemon } from '../../components/pokemon'
import squirtleImg from '../../assets/img/squirtle.png'
import style from './style.module.css'

export const Home = () => {
  return (
    <div className={style.card}>
      <img src={squirtleImg} alt="Pokemon Squirtle" />
      <Pokemon name="Squirtle"/>
    </div>
  ) 
}