import { useState } from "react";
import Footer from "../Footer/index.jsx";
import Item from "./Item.jsx"
import './style.scss'

function Blog() {
     const [lineColors, setLineColors] = useState(['black', 'black', 'black'])

     const handleWordClick = (index) => {
          const newColors = [...lineColors]
          newColors[index] = getRandomColor()
          setLineColors(newColors)
     }

     const getRandomColor = () => {
          const letters = '123456789ABCDEF'
          let color = '#'
          for (let i = 0; i < 6; i++) {
               color += letters[Math.floor(Math.random() * 16)]
          }
          return color
     }
     return (



          <>
               <Item />
               <div className="blog-wrapper">
               </div>



               <div className="footer">
                    <Footer />
               </div>
          </>



     );

}

export default Blog;