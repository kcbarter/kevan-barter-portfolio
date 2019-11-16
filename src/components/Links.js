import React from 'react';
import LINKS from '../data/links'

const Link = props => {
    
    const { link, image } = props.links;

    return(
        <span>
            <span>
                <a href={link}>
                    <img src={image} alt='links' style={{ width: 50, height: 50, margin: 10 }}/>
                </a>
            </span>
        </span>
    )
}

const Links = () => (
    <div>
        <div>
            {
                LINKS.map(LINKS =>(
                    <Links key={LINKS.id} links={LINKS}/>
                ))
            }
        </div>
    </div>
)

export default Links;