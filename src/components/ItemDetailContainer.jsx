import React from 'react'
import {useParams} from 'react-router-dom'
import {useState ,useEffect} from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'


function ItemDetailContainer({productosInfo, pasarParams}) {
    const [state, setstate] = useState([])
    const {ofertasId} = useParams()

    useEffect(() => {
        const prod = [
            {
                nombre:"Despensero Micro Muro",
                precio: 600 ,
                imagen: '/assets/img/productos/1.jpg',
                categoria: 1,
                id: 1
            },
            {
                nombre:"ofertas",
                precio: 523,
                imagen: '/assets/img/productos/2.jpg',
                categoria: 2,
                id: 2
            },
            {
                nombre:"Hindu Muro",
                precio: 843,
                imagen: '/assets/img/productos/3.jpg',
                categoria: 1,
                id: 3
            },
            {
                nombre:"Rrack Muro Vertical",
                precio: 203,
                imagen: '/assets/img/productos/4.jp g',
                categoria: 2,
                id: 4 
            }
        ]
        
        const getPromiseTask = () =>{
            return task
        }

        const task = new Promise ((res, rej) => {
        let valor= 200
        setTimeout(()=>{
            if(valor=200){
                res(prod)
            }
        }, 2000)
        })

        if(ofertasId === undefined){
            getPromiseTask()
            task.then((data)=>{
                return setstate(data)
            })
            .catch(err =>{
                console.log(err)
                return err
            })
        }else{
            getPromiseTask()
            task.then((data)=>{
                return setstate(data.filter(et => et.categoria === parseInt(ofertasId)))
            })
            .catch(err =>{
                console.log(err)
                return err
            })
        }
    }, [ofertasId])

    return (
        <div>
            {state.length > 0 && <ItemDetail state={state}/>}
        </div>
    )
}

export default ItemDetailContainer