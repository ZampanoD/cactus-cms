import axios from "axios";
import React, { FormEvent, useState } from "react";

export default function Contact(){
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [text, setText] = useState('')

    const [loading, setLoading] = useState(false)

    function handlerSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setLoading(true)

        axios.post('http://localhost:1337/api/contacts', {
            data: {
                name: name,
                phone: phone,
                email: email,
                topic: topic,
                text: text,
            }
        }).then((r) => {
            alert('Письмо успешно отправлено!')
        }).catch((error) => {
            alert('Произошла ошибка при отправке письма: ' + error.message)
        }).finally(() => {
            setLoading(false)
            setName('')
            setPhone('')
            setEmail('')
            setTopic('')
            setText('')
        })
    }
    return(
        <div id='Contact' className="max-w-[1040px] m-auto md:pl-20 p-4 py-20">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Связь с нами</h1>
            <form onSubmit={handlerSubmit} encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Имя</label>
                        <input
                            disabled={loading}
                            value={name}
                            onInput={(event) => setName((event.target as HTMLInputElement).value)}
                            className="border-2 rounded lg-3 p-3 flex border-gray-300"
                            type="Text"
                            name="Имя"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Номер телефона</label>
                        <input
                            disabled={loading}
                            value={phone}
                            onInput={(event) => setPhone((event.target as HTMLInputElement).value)}
                            onKeyDown={(event) => {
                                if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
                                    event.preventDefault();
                                }
                            }}
                            className="border-2 rounded lg-3 p-3 flex border-gray-300"
                            type="text"
                            name="Номер телефона"
                            maxLength={11}
/>

                    </div>
                    <div className="flex flex-col md:col-span-2 py-2">
                        <label className="uppercase text-sm py-2" >Электронная почта</label>
                        <input
                            disabled={loading}
                            value={email}
                            onInput={(event) => setEmail((event.target as HTMLInputElement).value)}
                            className="border-2 rounded lg-3 p-3 flex border-gray-300"
                            type="Email"
                            name="Электронная почта"/>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="uppercase text-sm py-2" >Тема</label>
                        <input
                            disabled={loading}
                            value={topic}
                            onInput={(event) => setTopic((event.target as HTMLInputElement).value)}
                            className="border-2 rounded lg-3 p-3 flex border-gray-300"
                            type="Text"
                            name="Тема"
                        />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="uppercase text-sm py-2">Сообщение</label>
                        <textarea
                            disabled={loading}
                            value={text}
                            onInput={(event) => setText((event.target as HTMLInputElement).value)}
                            className="border-2 rounded lg-3 p-3 flex border-gray-300 "
                            name="Сообщение"
                            rows={10}
                        />
                    </div>

                </div>
                <button type="submit" className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
                            Отправить письмо
                        </button>
            </form>
        </div>

    )
}