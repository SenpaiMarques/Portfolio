import React from 'react'

const BGBlob = () => {
    const blob = document.getElementById('bgblob');
    

    document.body.onpointermove = event => {
        const { clientX, clientY} = event;

        blob.animate({
            left:`${clientX}px`,
            top: `${clientY}px`,
        }, { duration: 3000, fill: "forwards"
        });
    }
    
  return (
    
    <div id="bgblob" ></div>
    
  )
}

export default BGBlob