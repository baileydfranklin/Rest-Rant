const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/Photo1.avif' alt='Picture of food'></img>
                    <div>Photo by <a href='https://unsplash.com/@briewilly'>Chad Montano</a> on <a href='https://unsplash.com/s/photos/food'>Unsplash</a>
                    </div>
                </div>
                <br/>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home