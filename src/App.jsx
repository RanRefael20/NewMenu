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
  
        <h3>מגשי פרימיום</h3>
<div class="item">
  מגש גבינות עשיר ומפנק  | L / M<span class="sizes"> 385₪ / 285₪  </span>
</div>
<div class="item">
  מגש דגים מעושנים  | L / M<span class="sizes"> 385₪ / 285₪  </span>
</div> 
<div class="item">
  מגש בורקיטס עבודת יד במילוי ממרח פסטו , בולגרית וחסה לאליק   | L / M  <br></br> <span class="sizes"  style={{ position: "relative", top: "21px" }}> 385₪/255₪  </span>
</div>
<div class="item">
  טרטלים במילוי שמנת וסלמון |<br></br> 20 יח' / 30 יח'   <span class="sizes"  style={{ position: "relative", top: "21px" }}> 285₪/190₪  </span>
</div>

<div class="item">
  מגש פיתות סביח אישיות  עם סקוויז טחינה ועמבה | 15 יח' / 25 יח'   <span class="sizes"  style={{ position: "relative", top: "21px" }}> 360₪/215₪  </span>
</div>
<div class="item">
  מגש חצאי טורטיות <br></br> במילוי סלט טונה / ביצים | 20 יח'   <span class="sizes"  style={{ position: "relative", top: "20px" }}> 315₪  </span>
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
