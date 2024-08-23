import React, {useContext} from 'react'
import Button from './Button';
import { ThemeContext } from './ThemeContext';
import Cart from './Cart';
const Home = () => {
    const { isDarkTheme, increment, count } = useContext(ThemeContext)
  console.log(count);
    return (
        <div className={`App ${isDarkTheme ? 'darkTheme' : 'lightTheme'}`}>
            <h1>State Managment with contextapi</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quam quisquam enim minus, consectetur dignissimos vero beatae possimus reprehenderit sed officia eveniet obcaecati neque architecto ut, magnam odit optio veniam.</p>
            <Button />
            <button onClick={increment}>add</button>
            <Cart/>
        </div>
    )
}

export default Home