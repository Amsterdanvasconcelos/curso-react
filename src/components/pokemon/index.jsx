import style from './style.module.css'

export const Pokemon = ({ name = 'Pikachu', index }) => {
    return (
        <h2>Pokemon: <span className={style.name}>{name}</span></h2> 
    )
}