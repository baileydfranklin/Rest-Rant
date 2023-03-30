const React = require('react')

function Def (html) {
    return(
        <html>
            <head>
                <title>Rest Rant - bFranklin</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                <link rel='stylesheet' href='/css/style.css'></link>                
            </head>
            <body>
                <nav>
                    <ul>
                        <li id='listItem1'>
                            <a href='/'>Home</a>
                        </li>
                        <li id='listItem2'>
                            <a href='/places'>Places</a>
                        </li>
                        <li id='listItem3'>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def