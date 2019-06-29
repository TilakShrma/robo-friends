import React from 'react';

const Card = (props) => {
        const {id, name, email} = props;
        return(
            <div className='tc bg-light-green br3 dib pa1 ma2 grow bw2 w5 shadow-5'>
                <img src={`https://robohash.org/${id}?100*100`} alt="robots"/>
                <h2>
                    {name}  
                </h2>
                <p>
                    {email}
                </p>
            </div>
        );
}

export default Card;