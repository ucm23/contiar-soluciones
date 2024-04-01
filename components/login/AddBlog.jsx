import React from 'react'
import { message, Upload } from 'antd';
import { useState } from 'react';
import { uploadImage } from '../../api/uploadImage';
import Spinner from '../Spinner';
const { Dragger } = Upload;

const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXdpcnFlbHF4YXlwbG90ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNTYxMjIsImV4cCI6MjAxMTYzMjEyMn0.Il1rEQXO1tk5XrjjFhCtMFE0nqqJBbfBx_b2KqEaMD0"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXdpcnFlbHF4YXlwbG90ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNTYxMjIsImV4cCI6MjAxMTYzMjEyMn0.Il1rEQXO1tk5XrjjFhCtMFE0nqqJBbfBx_b2KqEaMD0"
const url = "https://bsmwirqelqxayplotewx.supabase.co/rest/v1/blogs"

function getID() {
    const length = 8;
    const characters = '0123456789';
    let id = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  
    return id;
}


const AddBlog = () => {

    const [Data, setData] = useState({
        title: "",
        body: "",
        author: "Grupo CTI",
        image: "http://"
    })

    const [selectedFile, setSelectedFile] = useState(null);
    const [Name, setName] = useState(null);
    const [IsLoading, setIsLoading] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setData({
            ...Data,
            [name]: value
        })
    }

    const checkImage = _ => {
        if (!selectedFile) return false;

        const dataImg = new FormData();
        dataImg.append('file', selectedFile);
        dataImg.append('ticket_id', getID());
        dataImg.append('upload_preset',"NMlxnE40tyV9gjIn"); 

        return dataImg;
    }

    const handleSaveBLog = async () => {
        setIsLoading(true)
        const { title, body } = Data;
        if( title === "" || body === "" ) return;
        const formData  = checkImage()

        if(!formData) return;

        const { secure_url } = await uploadImage(formData);

        const newData = {
            ...Data,
            image: secure_url || "-"
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    "Prefer": "return=minimal",
                    "apikey": apikey,
                    "Authorization": auth
                },
                body: JSON.stringify(newData),
            });

        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
        }
        setIsLoading(false)
        setData({
            ...Data,
            title: "",
            body: "",
        })
    }

    const handleFileChange = e => {
        setName(e.target?.files[0].name)
        setSelectedFile(e.target?.files[0])
    }

    return (
        <div className="form-bo" id='add_blog_form'>
            <form className="form">
                {
                    !IsLoading ? (
                        <>
                            <span className="title">Agregar Blog</span>
                            <div className="form-container">
                                <input 
                                    type="text" 
                                    name="title" 
                                    className="input" 
                                    placeholder="Titulo"
                                    onChange={handleInputChange}
                                    value={Data.title}
                                />  
                                <textarea 
                                    style={{ width: "100%", padding: 10, resize: "none" }} 
                                    name="body" 
                                    id="descBlog" 
                                    rows="3"
                                    placeholder='Contenido'
                                    onChange={handleInputChange}
                                    value={Data.body}
                                ></textarea>
            
                                <input 
                                    type="file" 
                                    id="file" 
                                    name="imagen" 
                                    accept="image/*" 
                                    onChange={handleFileChange}
                                    style={{ padding: 15 }}
                                />
            
                            </div>
                            <button 
                                onClick={handleSaveBLog} 
                                type='button' 
                                id='btn-success'
                            >Guardar</button>
                        </>
                    ) : (
                        <Spinner />
                    )
                }
            </form>
        </div>
    )
}

export default AddBlog