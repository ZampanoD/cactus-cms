import React, { useEffect, useState } from "react";
import axios from 'axios';
import TextItemComponent from './TextItem';

interface TextItemAttributes {
    year: string;
    title: string;
    duration: string;
    details: string;
}

interface TextItemResponse {
    id: number;
    attributes: TextItemAttributes;
}

interface ApiResponse {
    data: TextItemResponse[];
}

const Text = () => {
    const [data, setData] = useState<TextItemAttributes[]>([]);

    useEffect(() => {
        axios.get<ApiResponse>('http://localhost:1337/api/text-items')
            .then(response => {
                // Обработка полученных данных
                const formattedData = response.data.data.map(item => item.attributes);
                setData(formattedData);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div id='Text' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Виды кактусов</h1>
            {data.map((item, idx) => 
                <TextItemComponent 
                    key={idx}
                    year={item.year} 
                    title={item.title}
                    duration={item.duration}
                    details={item.details}/>
            )}
        </div>
    );
}

export default Text;