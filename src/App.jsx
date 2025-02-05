import Header from "./components/Header/Header.jsx"
import TeachingSection from "./components/TeachingSection.jsx"
import DifferencesSection from "./components/DifferencesSection.jsx"
import IntroSection from "./components/IntroSection.jsx"
import TabsSection from "./components/TabsSection.jsx"
import FeedBackSection from "./components/FeedBackSection.jsx"
import { useState } from "react"
import EffectSection from "./components/EffectSection.jsx"
// Компонента App
// Создать функцию, вернуть шаблон
export default function App() {
  // state - если состояние, то он будет меняться, иначе не меняться
  // Использование state
  // 1. Не писать ее вне компонентов (Использовать внутри компонента)
  // 2. Находиться на верхнем уровне

  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect')


  setTimeout(() => setVisible(false), 3000)
  return (
    <>
      {visible && <Header/>}
      <main>
        <IntroSection/>

        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
        <>
         <TeachingSection/>
         <DifferencesSection/>
        </>
        )}

        {tab === 'feedback' && (<FeedBackSection/>)}
       

        {tab === 'effect' && (<EffectSection/>)}

        {/* <FeedBackSection/> */}
      </main>
    </>
  )
}


