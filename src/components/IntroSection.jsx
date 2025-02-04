import React from "react"

// export default function IntroSection() {
//     return (
//     <section>
//         <h1 className="centered">Получите профессию frontend-разработчика и постройте карьеру в IT</h1>
//         <h3 className="centered" style={{marginBottom: '2rem', color: 'blue'}} >Устроитесь на работу или вернем деньги, после прохождения полной программы.</h3>
//     </section>
//     )
// }

export default function IntroSection() {
    // 1 - название тега, 2 - опции, 3  - дети
    return React.createElement('section', null, [
        React.createElement('h1', {className: "centered", key: 1}, 'Получите профессию frontend-разработчика и постройте карьеру в IT'),
        React.createElement('h3', {className: "centered", style: {marginBottom: '2rem', color: 'blue'}, key: 2}, 'Устроитесь на работу или вернем деньги, после прохождения полной программы.')
    ])
}