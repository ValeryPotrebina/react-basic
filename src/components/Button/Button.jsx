import './Button.css'
export default function Button({ children, onClick, isActive}) {
    // document.querySelector('button')   НЕ НУЖНО
    // console.log('Button Component Render')

    return (
        <button className={isActive ? 'button active' : 'button'} onClick={onClick}>{children}</button>
    )
}

// Обработка кликов
// Посмотри различные обработки событий 