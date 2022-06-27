//In the name of Allah

import {useNavigate} from 'react-router-dom'

export default function Page1(){
    let navigate = useNavigate()
    return (
        <div>
            <h1>Page 1</h1>
            <button onClick={()=>{
                navigate('/page2',{replace:true});
            }}>Page2</button>
        </div>
    );
}//func