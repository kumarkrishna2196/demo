import React,{useEffect} from 'react'
import {fetchPostsSuccess} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
const Home = () => {
    const data= useSelector(state => state.Data);
    console.log('ddddd',data);
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
          
            dispatch(fetchPostsSuccess(data));
            console.log(data);

        });
    },[])
    return (
        <div>
            {
                data.data.map((val)=>{
                    return(
                        <p>{val.title}</p>
                    )
                })
            }
        </div>
    )
}


export default Home
