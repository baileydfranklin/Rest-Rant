const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet! 🧐
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated! 🧐
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i =0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars}
            </h3>
        )
        comments = data.place.comments.map((c) => {
            return (
                <div classaName='border col-sm-4'>
                    <h2 className='rant 🤬'>{c.rant ? 'Rant! 😠' : 'Rave! 😃'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input
                            type='submit'
                            className='btn btn-danger'
                            value='Delete Comment'
                        />
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
            <main className="px-5 py-4">
                <div className="row">
                    <div className="col-sm">
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">✏️ Edit</a>
                    </div>
                    <div className="col-sm">
                        <h1>{data.place.name}</h1>
                    </div>
                    <div className="col-sm">
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                            <input 
                                type='submit'
                                className='btn btn-danger'
                                value='Delete Place'
                                />
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <img src={data.place.pic} alt={data.place.name} className="img-max" />
                    </div>

                    <div className="col-sm">
                        <div className="row">
                            <h3>Description</h3>
                            <p className="text-center bigger-font">
                                {data.place.showEstablished()}
                                <br />
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                                <h3>Rating</h3>
                            </div>
                            {rating}
                        </div>

                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                                <h3>Comments</h3>
                            </div>
                            <div className="col-sm-4" border>
                                <a href={`/places/${data.place.id}/comment`} className="btn btn-primary">
                                    Add your review!
                                </a>
                            </div>
                            {comments}
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show