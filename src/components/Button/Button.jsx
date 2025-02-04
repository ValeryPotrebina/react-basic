import  classes from './Button.module.css'
export default function Button({ children, isActive, ... props }) {
    // document.querySelector('button')   НЕ НУЖНО
    // console.log('Button Component Render')

    return (
        <button 
        {... props}
        className={isActive ? `${classes.button} ${classes.active}` : classes.button}>{children}</button>
    )
}

// Обработка кликов
// Посмотри различные обработки событий 