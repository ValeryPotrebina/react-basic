import logo from '/logo-name.svg'
import {useState} from 'react'

export default function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)
    return (
      <header>
        <img src={logo}/>
          <span>{now.toLocaleTimeString()}</span>
        </header>
    )
  }
//   В фигурных скобочках находится js code