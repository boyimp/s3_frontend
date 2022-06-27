//In the name of Allah

import {useNavigate} from 'react-router-dom'
export default function Page2(){
    let navigate = useNavigate();
    return (
        <div>
            <h1>Page2</h1>
            <button onClick={
        ()=>{
            navigate('/page1',{replace:true});
        }
    }>Page1</button>
        </div>
    );
}//func