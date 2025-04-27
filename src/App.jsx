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




  </div>

  <div className="menu">




  <div class="section">
<h3>סלטים</h3>
<div class="item">סלט חלומי | 4.5 ליטר..................200₪</div>
<div class="item">סלט כרוב עם פיצוחים ברוטב חמאת בוטנים | 4.5 ליטר...................200₪</div>
<div class="item">סלט מיקס ירוקים עם בטטה ושקדים ברוטב מתוק | 4.5 ליטר.....................200₪</div>
<div class="item">סלט יווני | 4.5 ליטר......................200₪</div>
<div class="item">סלט קינואה בליווי ירקות | 4.5 ליטר.......................200₪</div>
<div class="item">סלט כרוב עם פיצוחים ברוטק מתוק | 4.5 ליטר.......200₪</div>
<div class="item">סלט ירקות ישראלי | 4.5 ליטר.......................200₪</div>
<div class="item">מגש ירקות אנטי פסטי......................200₪</div>
<div class="item">כוסות אישיות עם ירקות חתוכים | 30 יחידות.............200₪</div>
<div class="item">פלטת ירקות............200₪</div>
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
