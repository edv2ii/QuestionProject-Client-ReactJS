import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './Comment.css'
import './Home.css'




function Home() {
    const url = "https://msgtofri.herokuapp.com/api/mes";
    
    useEffect(() => {
        Axios.get(url).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },)
    

    const [data, setData] = useState([])
    const [details, setDetails] = useState({
        name : "",
        mes: "",
        A019dae: "q123sa",
    })


    // useEffect(() => {
    //     localStorage.setItem('data', JSON.stringify(data))
    // }, [data])

    const handleChange = (e) => {
        const {name, value} = e.target
        
        setDetails((prev => {
            return {...prev, [name]: value}
        }))
    }
    

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const inputs = document.querySelector('input')
        const textarea = document.querySelector('textarea')
        
        // setData(datas => {
        //     return [...datas, details
                
        //     ]
        // })
        
        Axios.post("https://msgtofri.herokuapp.com/register", {
            A019dae: details.A019dae,
            name: details.name,
            mes: details.mes
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data);
              
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log('Error', error.message);
              }
              console.log(error.config);
        })
       
        inputs.value = ""
        textarea.value = ""
        
        switchBtn()
    }

    
    const switchBtn = () => {
        const input = document.querySelector('.input'),
        comment = document.querySelector('.comment')
            input.classList.toggle('hide')
            comment.classList.toggle('hide')
    }

    

    
    
    
    
 
    return (
        <div className="Home">
            <div className="card-box input hide">
                <div className='containers'>
                    <div className='topbar'>
                        <button className='switch-btn' onClick={switchBtn} >Back</button>
                        <span></span>
                    </div>
                    <div className='title'>
                        <div className='introduct'>
                            <h6>INFOMATION</h6>
                        </div>
                        <div className='descript'>
                            <p>Write a message to tell your friends</p>
                        </div>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="containerss" >
                        <div className='display'> 
                            <div className='Name'>
                                <input type='text' name="name" autoComplete="off" required="required" onChange={handleChange} />
                                <label className='text'>Your name</label>
                            </div>
            
                            <div className='Message'>
                                <textarea type='text' name="mes" autoComplete="off" required="required"  onChange={handleChange} />
                                <label>Message</label>
                            </div> 
                        </div>
                            <input className="btn" type='submit' value="START"  />
                        </div>
                    </form>
                </div>
            </div>
            <div className="card-box comment ">
                <div className='container'>
                    <div className='topbar'>
                        <button className='switch-btn' onClick={switchBtn} >Add</button>
                        <span></span>
                    </div>
                    
                        <div className='titles'>
                            <div className='comment-title'>
                                <h6>MESSAGE</h6>
                            </div>
                        </div>
                        <div className="scroll-item d-flex justify-content-center">
                        <div className='comment-item '>
                            <ul className='d-flex '> 
                                    {data.map((item, index) => {

                                        return (
                                                <li key={index} >
                                                    <div className='container-item'>
                                                        <div className='head '>
                                                            <h6>{item.name}</h6>
                                                        </div>
                                                        <div className="body">
                                                            <h6>{item.mes}</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;