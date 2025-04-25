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
        <h3>פסטות</h3>
        <div class="item">פסטה שמנת פטריות | 4.5 ליטר......180₪</div>
        <div class="item">פסטה רוזה | 4.5 ליטר......180₪</div>
        <div class="item">פסטה עגבניות | 4.5 ליטר......180₪</div>
        <div class="item">פסטה פסטו שמנת | 4.5 ליטר......180₪</div>
        <div class="item">לזניה | 4.5 ליטר......180₪</div>
        <div class="item">תפו"א מוקרם | 4.5 ליטר......180₪</div>
      </div>


  </div>

  <div className="menu">




   

      <div class="section">
        <h3>קישים ומאפים</h3>
        <div class="item">קיש גבינות וברוקולי | קוטר 29.............180₪</div>
        <div class="item">קיש גבינות ובטטה | קוטר 29............180₪</div>
        <div class="item">קיש גבינות ופטריות | קוטר 29.............180₪</div>
        <div class="item">קיש גבינות ותירס | קוטר 29.............180₪</div>
        <div class="item">קיש גבינות ובצלים | קוטר 29.............180₪</div>
        <div class="item">מגש לחמי הבית בליווי מטבלים......250₪</div>
        <div class="item">מגש לחם שום | 20 יחידות.........180₪</div>
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
