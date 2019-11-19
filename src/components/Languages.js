import React from 'react';
import LANGUAGES from '../data/languages';

const Language = props => {
    const { image } = props.language;

    return(
        <span>
            <img src={image} alt='languages' style={{ width: 100, height: 70, margin: 5 }}/>
        </span>
    )
}

const Languages = () => (
    <div id="lang">
        <div>
            {
                LANGUAGES.map(LANGUAGES =>(
                    <Language key={LANGUAGES.id} language={LANGUAGES}/>
                ))
            }
        </div>
    </div>
)

export default Languages;