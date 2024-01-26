import "./style.scss"
import HeadingLogo from "../../../assets/icons/logo.png"
 
function Heading(props) {
     const imgSize = {
          imgSize: `calc(50px / ${props.size})`
     }
 
     return (
          <div className="heading-wrapper">
               <img
                    style={imgSize}
                    src={HeadingLogo}
                    alt="Logo"
                    width={`calc(50px / ${props.size})`}
               />
               {props.children}
          </div>
     );
}

export default Heading;