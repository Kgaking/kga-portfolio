import React, { useEffect } from 'react';
import "../styles/userData.css";
import Typed from 'typed.js';
import { Link } from 'react-router-dom';


const UserData=()=>{
const el=React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Development","Machine Learning",],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar:''
      });

      return()=>{
        typed.destroy();
        };
        // eslint-disable-next-line
      },[]);

    return(<>
        <Link to="/"><div id='userData'>
            <h1>K G Aniruddha</h1>
            <div id='user_data'>
                <span id='user_data_thick'/>
                <span id='user_data_thin'/>
            </div>
            {/* eslint-disable-next-line */}
        <h2 ref={el}/>
        </div></Link>
    </>
        );
};

export default UserData;