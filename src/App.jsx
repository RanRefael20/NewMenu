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
          <div className="section">
            <h3>דגים |</h3>
            <div className="item">פילה סלמון ברוטב מתקתק.......................................................350₪</div>
            <div className="item">פילה סלמון ברוטב פסטו עם פירורי לחם מעל....350₪</div>
            <div className="item">פילה מושט ברוטב לימוני , עשבי טיבול ושום.....350₪</div>
            <div className="item">פילה דניס ברוטב לימוני.................................450₪</div>
          </div>
        </div>

        <div className="menu">
          <div className="section">
            <h3>יינות |</h3>
            <div className="item">שורש אדום \ לבן | יקב צרעה................210₪</div>
            <div className="item">הרי יהודה אדום \ לבן | יקב צרעה..........180₪</div>
            <div className="item">עמוקה לבן.........................................100₪</div>
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
