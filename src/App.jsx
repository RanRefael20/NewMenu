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
        <h3>בייגל בייגל</h3>
<div class="item">
  לחמניות בייגל  בממרח פסטו ,  בולגרית ואנטי-פסטי | 12 יח' / 20 יח'   <span class="sizes"  style={{ position: "relative", top: "21px" , right: "1px" }}> 315₪/189₪  </span>
</div>
<div class="item">
  לחמניות בייגל  במילוי סלט טונה מפנק וחסה לאליק | 12 יח' / 20 יח'   <span class="sizes"  style={{ position: "relative", top: "21px" , right: "1px" }}> 315₪/189₪  </span>
</div>
<div class="item">
  לחמניות בייגל  במילוי סלט ביצים  בצל ירוק וחסה לאליק | 12 יח' / 20 יח'   <span class="sizes"  style={{ position: "relative", top: "21px" , right: "1px" }}> 315₪/189₪  </span>
</div>
<div class="item">
  לחמניות בייגל  בממרח שמנת , סלמון ועגבנייה | 12 יח' / 20 יח'   <span class="sizes"  style={{ position: "relative", top: "21px" , right: "1px" }}> 385₪/230₪  </span>
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
