import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='one'>
<header className="header-container" dir="rtl">
  <h1>מעדני שנאל</h1>
  <h2>מגשי אירוח יוקרתיים</h2>
  <div className="kosher">כל המוצרים<br />בד"ץ</div>
</header>

<div className="all">
  <div className="menu">
  <div class="section">
        <h3>מגשי אירוח</h3>
        <div class="item">מגש גבינות מפנק ועשיר..............400₪</div>
        <div class="item">מגש דגים מעושנים...........400₪</div>
        <div class="item">מגש בורקיטס במילוי ממרח פסטו , בולגרית וחסה לאליק | 30 יחידות.........400₪</div>
        <div class="item">טארטלים במילוי שמנת וסלמון | 30 יחידות......300₪</div>
        <div class="item">מגש פריקסה | 25 יחידות...........450₪</div>
        <div class="item">מגש פיתות סביח אישיות | 25 יחידות...........375₪</div>
        <div class="item">מגש חצאי טורטיות במילוי סלט טונה \ ביצים | 20 יחידות............330₪</div>
      </div>


  </div>

  <div className="menu">




      <div class="section">
        <h3>בייגל בייגל</h3>
        <div class="item">19 לחמניות בייגל עם ממרח פסטו , גבינה בולגרית ואנטי-פסטי..........330₪</div>
        <div class="item">19 לחמניות בייגל במילוי סלט טונה מפנק וחסה לאליק...............330₪</div>
        <div class="item">19 לחמניות בייגל במילוי סלט ביצים עם בצל ירוק וחסה לאליק...............330₪</div>
        <div class="item">19 לחמניות בייגל במילוי ממרח שמנת עם דג סלמון ועגבנייה............400₪</div>
      </div>


  </div>
</div>

<footer>
  <div>
    050-2255425 | 052-3225482 <a href="https://instagram.com/Julias.bakery" target="_blank"></a>
  </div>
</footer>
</div>
    </>
  )
}

export default App
