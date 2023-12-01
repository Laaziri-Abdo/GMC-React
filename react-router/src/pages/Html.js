import React from 'react'
export default function Html() {
    return (
        <>
            <header className='hide-when-mobile'>
                <h1>Go My Code</h1>
                <ul className='flex'>
                    <li className='main-list'>
                        <a className='main-link' href='html'>HTML</a>
                        <ul className='sub-ul'>
                            <li>
                                <a>cours 1</a>
                            </li>
                            <li>
                                <a>cours 1</a>
                            </li>
                            <li>
                                <a>cours 1</a>
                            </li>
                        </ul>

                        <a className='main-link' href='react'>React</a>
                        <ul className='sub-ul'>
                            <li className='main-list'>
                                <a>cours 1</a>
                            </li>
                            <li className='main-list'>
                                <a>cours 1</a>
                            </li>
                            <li className='main-list'>
                                <a>cours 1</a>
                            </li>
                        </ul>
                        <a className='main-link' href='node'>Node</a>
                        <ul className='sub-ul'>
                            <li className='main-list'>
                                <a>cours 1</a>
                        
                            </li>
                            <li className='main-list'>
                                <a>cours 1</a>
                            </li>
                            <li className='main-list'>
                                <a>cours 1</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </header>
            <main>
                 hiiiiiiiiiiiiiiiii Html page
            </main>
            <footer> deve by gomycode </footer>
        </>
    )
}
