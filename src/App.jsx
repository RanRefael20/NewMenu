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
        <div class="item">מגש גבינות מפנק ועשיר | L\M ..............400₪\300₪</div>
        <div class="item">מגש דגים מעושנים...........400₪</div>
        <div class="item">מגש בורקיטס במילוי ממרח פסטו , בולגרית וחסה לאליק | 30 יחידות.........400₪</div>
        <div class="item">טארטלים במילוי שמנת וסלמון | 30 יחידות......300₪</div>
        <div class="item">מגש פריקסה | 25 יחידות...........450₪</div>
        <div class="item">מגש פיתות סביח אישיות | 25 יחידות...........375₪</div>
        <div class="item">מגש חצאי טורטיות במילוי סלט טונה \ ביצים | 20 יחידות............330₪</div>
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
