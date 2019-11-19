import React from 'react';
import LINKS from '../data/links'

const Link = props => {
    
    const { link, image } = props.links;

    return(
        <span>
            <span>
                <a href={link} target='_blank'>
                    <img src={image} alt='links' style={{ width: 50, height: 50, margin: 10 }}/>
                </a>
            </span>
        </span>
    )
}

const Links = () => (
    <div id="links">
        <div>
            {
                LINKS.map(LINKS =>(
                    <Link key={LINKS.id} links={LINKS}/>
                ))
            }
        </div>
    </div>
)

export default Links;