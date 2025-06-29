import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./LL.png";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='one'>
<header className="header-container" dir="rtl">
{/* <img src={logo} alt="Dairy Delights Logo"  className="h1" />
 */}
  <h1>מעדני שנאל</h1>
  <h2>מגשי אירוח יוקרתיים</h2>
{/*   <div className="kosher">כל המוצרים<br />בד"ץ</div>
 */}
   <div className="kosher">בס"ד</div>

 </header>


  <div className="menu">




  </div>

  <div className="menu">




<div class="section">
  
        <h3>פסטות | 3 / 4.5 ליט'</h3>
        
<div class="item">
   שמנת פטריות      <span class="sizes"  style={{ position: "relative", right: "2px" }}> 385₪/255₪  </span>
</div>
<div class="item">
 פסטה  רוזה    <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 1655₪/110₪  </span>
</div>
<div class="item">
 פסטה עגבניות     <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>
<div class="item">
  פסטה  פסטו שמנת  <br></br> <span class="sizes"  style={{ position: "relative", right: "1px" , top: "21px" }}> 385₪/255₪  </span>
</div>
<div class="item">
 לזניה     <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>
<div class="item">
 תפו"א מוקרם   <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>


   </div>
   


  </div>
</div>


 

<footer>
  <div className='num'>
    050-2255425 | 052-3225482 <a href="https://instagram.com/Julias.bakery" target="_blank"></a>
  </div>
</footer>


    </>
  )
}

export default App
