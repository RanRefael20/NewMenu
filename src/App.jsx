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

        <h3>סלטים</h3>
<div class="item">
   סלט חלומי |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
   סלט כרוב עם פיצוחים ברוטב חמאת בוטנים |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
    מיקס ירוקים עם בטטה צרובה ושקדים ברוטב מתוק |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
   סלט יווני |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
   סלט קינואה בלווי ירקות |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
   סלט כרוב עם פיצוחים ברוטב מתוק |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
   סלט ישראלי |<br></br> 3 / 4.5 ליט'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 165₪/110₪  </span>
</div>
<div class="item">
   מגש ירקות אנטי-פסטי בתנור |<br></br> L / M      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 185₪/120₪  </span>
</div>
<div class="item">
   כוסות אישיות עם ירקות חתוכים |<br></br> 20 יח' / 30 יח'      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 185₪/130₪  </span>
</div>

<div class="item">
   פלטת ירקות |<br></br> L / M      <span class="sizes"  style={{ position: "relative", right: "2px" , top: "19px" }}> 185₪/130₪  </span>
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
