//In the name of Allah
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './Main.css'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Menu from './Menu';
import Form from './Pages/Form';
import AddProductForm from './Pages/AddNewProduct';
import EditProductForm from './Pages/EditNewProduct';

export default function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/' element={<Form/>}/>
                <Route path='/product/add' element={<AddProductForm/>}/>
                <Route path='/product/edit' element={<EditProductForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}//func