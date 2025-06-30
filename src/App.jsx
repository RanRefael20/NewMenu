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

{/*   <div className="all">
 */}
{/*   <div className="menu1">

<div class="section">

        <h3>פסטות | 3 / 4.5 ליט'</h3>
<div class="item">
   פסטה שמנת פטריות <span class="sizes"  style={{ position: "relative", right: "2px" }}> 165₪/110₪  </span>
</div>
<div class="item">
 פסטה  רוזה    <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>
<div class="item">
 פסטה עגבניות     <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>
<div class="item">
  פסטה  פסטו שמנת  <br></br> <span class="sizes"  style={{ position: "relative", right: "1px"  }}> 165₪/110₪  </span>
</div>
<div class="item">
 לזניה     <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>
<div class="item">
 תפו"א מוקרם   <span class="sizes"  style={{ position: "relative" , right: "1px" }}> 165₪/110₪  </span>
</div>
   </div>


  </div> */}

  <div className="menu2">



<div class="section">

        <h3>קינוחים</h3>
<div class="item">
   מגש פובלובות - תוספת פרי לבחירה  |<br></br> 20 יח' / 30  יח'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 285₪/190₪  </span>
</div>
<div class="item">
   מגש פחזניות   |<br></br> 20 יח' / 30  יח'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 305₪/205₪  </span>
</div>
<div class="item">
   מגש קונוסים (פילו) במילוי קרם |<br></br> 20 יח' / 30  יח'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 285₪/190₪  </span>
</div>
<div class="item">
מגש טארלטים במילוי  קרם פיסטוק , שוקולד לבן , קינדר וכו'  <br></br> 22 יח'     <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 179₪  </span>
</div>
<div class="item">
   אצבעות מילפיי  |<br></br> 10 יח' / 20  יח'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 295₪/150₪  </span>
</div>
<div class="item">
   מגש מיקס עוגיות - בראוניז , תמרים , שקדים |<br></br> L / M      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 265₪/180₪  </span>
</div>
<div class="item">
  מגש מיקס עוגות - שוקולד , תפוזים , גזר |<br></br> L / M     <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 185₪/120₪  </span>
</div>
<div class="item">
   פס שוקולד שמרים |<br></br> 2 יח'       <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 140₪  </span>
</div>
<div class="item">
   עוגת קדאיף |<br></br> קוטר 29     <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 185₪  </span>
</div>

<div class="item">
     מגש פירות העונה |<br></br> L / M      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 270₪/180₪  </span>
</div>
   </div>
   


  </div>
</div>
{/* </div>
 */}

 

<footer>
  <div className='num'>
    050-2255425 | 052-3225482 <a href="https://instagram.com/Julias.bakery" target="_blank"></a>
  </div>
</footer>


    </>
  )
}

export default App
