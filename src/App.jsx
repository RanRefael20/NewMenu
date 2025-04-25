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


  <div className="menu">

  <div class="section">
<h3>קינוחים</h3>
<div class="item">מגש פובלובות | 30 יחידות.............300₪</div>
<div class="item">מגש פחזניות | 30 יחידות............320₪</div>
<div class="item">מגש קונוסים במילוי קרם | 30 יחידות......300₪</div>
<div class="item">מגש טארלטים במילוי טעמים שונים | 28 יחידות......220₪</div>
<div class="item">מגש עוגיות גדול - תמרים , שקדים ובראוניז .....280₪</div>
<div class="item">מגש עוגות גדול - תפוזים , גזר , שוקולד ......200₪</div>
<div class="item">עוגת שמרים שוקולד | 2 פסים.......210₪</div>
<div class="item">עוגת קדאיף | קוטר 29.......230₪</div>
<div class="item">אצבעות מילפיי | 20 יחידות.......310₪</div>
<div class="item">מגש פירות העונה.......280₪</div>
</div>


  </div>

  <div className="menu">




   

   


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
