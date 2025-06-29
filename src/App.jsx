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




    <div className="section">
      <h3>דגים |</h3>
      <div className="item">פילה סלמון שלם ברוטב מתקתק........................................................350₪</div>
      <div className="item">פילה סלמון שלם ברוטב פסטו עם פירורי לחם מעל............................................................350₪</div>
      <div className="item">פילה מושט ברוטב לימוני , עשבי טיבול ושום | 10 יח'...............................................................350₪</div>
      <div className="item">פילה דניס ברוטב לימוני................................450₪</div>
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
