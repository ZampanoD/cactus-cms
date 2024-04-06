import React from "react";

export default function Contact(){
    return(
        <div id='Contact' className="max-w-[1040px] m-auto md:pl-20 p-4 py-20">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Связь с нами</h1>
            <form action="" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Имя</label>
                        <input className="border-2 rounded lg-3 p-3 flex border-gray-300" type="text" name="Имя"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Номер телефона</label>
                        <input className="border-2 rounded lg-3 p-3 flex border-gray-300" type="text" name="Номер телефона"/>
                    </div>
                    <div className="flex flex-col md:col-span-2 py-2">
                        <label className="uppercase text-sm py-2" >Электронная почта</label>
                        <input className="border-2 rounded lg-3 p-3 flex border-gray-300" type="email" name="Электронная почта"/>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="uppercase text-sm py-2" >Тема</label>
                        <input className="border-2 rounded lg-3 p-3 flex border-gray-300" type="text" name="Тема"/>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="uppercase text-sm py-2">Сообщение</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={10} name="Сообщение"></textarea>
                    </div>
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
                    Отправить письмо
                </button>
            </form>
        </div>

    )
}
