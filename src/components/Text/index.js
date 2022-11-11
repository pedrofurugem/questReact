
import './style.css'

const paragrafh = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const Text = ({color = 'red'}) => {
    return(
        <div className="paragrafo">
          <p style={{ color: color}}>{paragrafh.toUpperCase()}</p>
        </div>
    )
}

export default Text;