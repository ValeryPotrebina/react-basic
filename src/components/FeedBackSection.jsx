import { useState } from "react";
import Button from "./Button/Button";

function StateVsRef() {
    return (
        <div>
            <h3>Input value</h3>
            <input type="text" />
        </div>
    )
}


export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: 'true',
        reason: 'question'
    })

    function handlerNameChange(event) {
        // console.log(event.target.value)
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm(prev => ({...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
         }))
    }

    function handleReasonChange(event) {
        setForm(prev => ({...prev,
            reason: event.target.value
         }))
        // setReason(event.target.value)
    }

    function toggleError() {
        setHasError((prev) => !prev)
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <Button onClick={toggleError}>Toggle Error</Button>

            <form action="">
                <label htmlFor="name">Ваше имя</label>

                <input type="text" 
                    id="name"  
                    className="control" 
                    value={form.name} 
                    onChange={handlerNameChange}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                />

                <label htmlFor="reason" style={{marginRight: '1rem'}}>Причина обращения</label>

                <select id="reason" className="control" value={form.reason} onChange={handleReasonChange}>
                    <option value="question">Вопрос</option>
                    <option value="complaint">Жалоба</option>
                    <option value="offer">Предложение</option>
                </select>

                {/* <pre>
                    {JSON.stringify(form, null, 2)}
                </pre> */}

                <Button disabled={form.hasError} isActive={!form.hasError} style={{marginDown: '1rem'}}>Отправить</Button>

                <hr />

                <StateVsRef/>



            </form>
            
        </section>
    )
}