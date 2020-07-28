import React from 'react';

function ButtonLink(props) {
    // props => { className: "O que for passado", href = "/" }
   
    return (
        <nav>
           <a href={props.href} className={props.className}>
                Novo Video
           </a>
        </nav>
    );
}


export default ButtonLink;