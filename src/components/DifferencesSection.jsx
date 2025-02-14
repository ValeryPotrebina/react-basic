import {differences} from '../data'
import Button from './Button/Button'
import {useState} from 'react'

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)
    
    function handleClick(type) {
        setContentType(type)
        console.log(contentType)
    }

    return (
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
    )
}