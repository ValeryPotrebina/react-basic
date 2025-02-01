import Header from "./components/Header.jsx"
import {ways, differences} from './data'
import WayToTeach from "./components/WayToTeach.jsx"
import Button from "./components/Button/Button.jsx"


import {useState} from 'react'
// Компонента App
// Создать функцию, вернуть шаблон
export default function App() {
  const [contentType, setContentType] = useState(null)
  // state - если состояние, то он будет меняться, иначе не меняться
  // Использование state
  // 1. Не писать ее вне компонентов (Использовать внутри компонента)
  // 2. Находиться на верхнем уровне


  // console.log('App Component Render')
  // let tabContent = null
  
  // if (contentType) {
  //   tabContent = (<p>{differences[contentType]}</p>)
  // } else {
  //   tabContent = (<p>Нажмите кнопку</p>)
  // }
  function handleClick(type) {
    setContentType(type)
    console.log(contentType)

  }

  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Наш поход к обучению</h3>
          <ul>
            <WayToTeach {... ways[0]}/>
            <WayToTeach {... ways[1]}/>
            <WayToTeach {... ways[2]}/>
            <WayToTeach {... ways[3]}/>
            {/* <WayToTeach title={ways[3].title} description={ways[3].description}/> */}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={contentType === 'way'}  onClick={() => handleClick('way')}>подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>доступность</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>концентрация</Button>

          {/* {contentType ? (<p>{differences[contentType]}</p>) : (<p>Нажми на кнопку</p>)} */}
          
          {!contentType && (<p>Нажми на кнопку</p>)}
          {contentType  && (<p>{differences[contentType]}</p>)}

          {/* {tabContent} */}
        </section>
      </main>
    </div>
  )
}


