import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value= ""
        navigate("/pokedex")
    }

  return (
    <div className='design__header'>
        <div className='design__header-black'>black</div>
        <div className='center__input'>
        <img src="/Home/pokedex.png" alt="" />
        <h1>Hi Trainer!!</h1>
        <p>Give me your name to start</p>
        <form className='broad__input' onSubmit={handleSubmit}>
            <input id='name' type="text" placeholder='Escribe tu nombre' />
            <button>Start</button>
        </form>
        </div>

        <div className='container_img_fondo'>
          <img src="./Home/poke.png" alt="" />
          <img src="./Home/Pokemon2.jfif" alt="" />
        </div>

        <div className='create'>
          <span>Hecho por Jorge Gabriel Reyes🏆</span>
        </div>
    </div>
  )
}

export default Home