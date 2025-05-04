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
<img src={logo} alt="Dairy Delights Logo"  className="h1" />

 {/*  <h1>מעדני שנאל</h1>
  <h2>מגשי אירוח יוקרתיים</h2> */}
  <div className="kosher">כל המוצרים<br />בד"ץ</div>
</header>


  <div className="menu">




  </div>

  <div className="menu">




  <div class="section">
<h3>תפריט שבועות | מעדני שנאל 🐮🧀🥛🥮</h3>
<p class="item"> <p class="shavuot">לכבוד חג שבועות המתקרב אלינו לטובה ולברכה !</p>
<p class="shavuot2">אנחנו יוצאים בתפריט מיוחד וחדשני במיוחד בשבילכם !</p> 
ולכם מנהלים יקרים , אנחנו יודעים כמה אתם דואגים לכל העובדים שלכם כדי שכל עובד יהיה מרוצה ומסופק ויצא לחג בהרגשה טובה וחגיגית !!<br></br> אז מה שבאמת נשאר לכם זה לסגור איתנו ואנחנו נדאג להכל !! <br></br>
ולכן אנחנו מקדימים ומזכירים לכם שמעכשיו ניתן לסגור הזמנות ! <br></br> 
במידה ואתם מעוניינים שלחו הודעה חוזרת ונחזור אליכם בהקדם האפשרי 🌼❤️</p>

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
