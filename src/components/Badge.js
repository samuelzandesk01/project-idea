import React from 'react';
import { Link } from 'react-router-dom'

function Badge() {
    return (
        <div>
            <div className="badges">
                <div className="msg-alrt">New</div>
                  <Link className="badges-link" to="" >Download app alert..</Link>
            </div>
        </div>
    )
}

export default Badge
