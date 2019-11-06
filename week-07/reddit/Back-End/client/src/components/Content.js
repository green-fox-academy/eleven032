import React from 'react';

function Content(props) {
    return (
        <div>
            <header>
                <h2>{props.title}</h2>
            </header>
            <article>
                submitted {props.timestamp}
            </article>
        </div>
    )
}

export default Content;