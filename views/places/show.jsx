const React = require('react')
const Def = require('../default')

function show(data) {
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
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
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
                            <h3>Ratings</h3>
                        </div>

                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                                <h3>Comments</h3>
                            </div>
                            <div className="col-sm-4">
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