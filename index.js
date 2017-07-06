const express = require( 'express' );
const expressApp = express();
const userScores = [
    { 
        user: 'Ivan',
        score: 534
    },
    { 
        user: 'Petro',
        score: 2505
    },
    { 
        user: 'Marko',
        score: 60
    },
    { 
        user: 'Marichka',
        score: 1155
    },
    { 
        user: 'Nina',
        score: 333
    }
];

expressApp.get( '/', invitationProcesser );
expressApp.get( '/scores', topScoreProcesser );
expressApp.get( '/scores/user/:user', userScoreProcesser );
expressApp.get( '/scores/:user/user', userScoreProcesser );
//--------------------------------------------------------------------------------
const httpServer = expressApp.listen( 8080, () => {

    console.log( 'Server has been started port: 8080' );
} );
//--------------------------------------------------------------------------------
function invitationProcesser( re, res, next ) {

    responce.end( 'Would you like to check score?\n' + 
                  'Please follow /scores to watch rate list\n' + 
                  'Please follow /scores/user/userName to watch rate of exact user' );
} 
//--------------------------------------------------------------------------------
function topScoreProcesser( req, res, next ) {
    res.end( 'this is rate table(array)\n' + JSON.stringify( userScores, null, '    ' ) );
}
//--------------------------------------------------------------------------------
function userScoreProcesser( req, res, next ) {
    let index;
    let resObject = { user: 'unknown user', score: 0 };

    index = userScores.findIndex( el => el.user.toLowerCase() === ( '' + req.params.user ).toLowerCase() );
    if ( index !== -1 ) {
        resObject.user = userScores[ index ].user;
        resObject.score = userScores[ index ].score;
    }

    res.json( resObject );
}
//--------------------------------------------------------------------------------