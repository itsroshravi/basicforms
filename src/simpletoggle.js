import React, { useState } from 'react';
import './App.css'
    
    function ToggleText() {
      const [isVisible, setIsVisible] = useState(true);
    
      return (
        <div className='App'>
          
          <button onClick={() => setIsVisible(!isVisible)}>
                      Toggle Text
          </button>
          <p> {isVisible && <p>This text is toggleable</p>} </p>
        </div>
      );
    }
    
    export default ToggleText;