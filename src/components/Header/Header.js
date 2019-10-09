import React from 'react'



export default function Header({children,title,styleClass}) {
    return (
        
             <header>
                    <div className='container-fluid'>
                        <div className={`row align-items-center ${styleClass}`}>
                            <div className='col text-center'>
                                <h1 className='text-light text-uppercase display-3
                                text-slanted letter-spacing'>
                                    {title}
                                </h1>
                                {children}
                            </div>
                        </div>
                    </div>
                </header>
        
    )
}

Header.defaultProps = {
    title:"Default Title",
    styleClass:'header-hero',
}
