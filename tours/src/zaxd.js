import React from 'react';

const Zaxd = () => {
    return (
        <div className="outerheader">
          <h1>No Tours Left</h1>
          <button type="button" className="refresh" onClick={()=>window.location.reload()}>Refresh</button>
        </div>
    );
}

export default Zaxd;
