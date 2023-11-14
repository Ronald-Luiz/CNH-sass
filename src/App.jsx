import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Payments from './pages/payment';



function App() {


  return (
    <>



      <BrowserRouter>



        <Header Payments='/payments' Home='/' />


        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/payments' element={<Payments />} />
        </Routes>


      </BrowserRouter>


      <Footer />


    </>
  )
}

export default App
