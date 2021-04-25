import React from 'react';

const senateTable = () => {
        return (
        <div className="header">
            <h1>Senate $$ Watcher</h1>
            <span className="sr-only">Loading Senate Stock Data...</span>
            <div className="spinner-border" role="status" id="loading"></div>
            <div className="table"></div>
        </div>
    )
}
export default senateTable
