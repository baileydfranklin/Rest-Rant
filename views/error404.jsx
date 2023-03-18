const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='/images/404ConfusedDog.avif' alt='Picture of a dog'></img>
                    <div>Photo by <a href='https://unsplash.com/@charlesdeluvio'>Chad Montano</a> on <a href='https://unsplash.com/s/photos/food'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404