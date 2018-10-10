const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/photos'

let retrieveAlbums = (() => {
    let options = {
        url: url,
        json: true
    };
    return new Promise((resolve, reject) => {
        request.get(options, (err, resp, body) => {
            if (!err) {
                resolve(body);
            } else {
                reject(err);
            }
        })
    })
})

let processAlbumPromises = (albumID, sort) => {
    return new Promise((resolve)=>{
         retrieveAlbums(albumID, sort)
        .then((result, errHandler) => {
            if (albumID !== 0 && sort === 'yes') {
                 filterAlbumsByID(albumID, result)
                .then((result, errHandler) => {
                     alphabeticalSort(result)
                    .then((result, errHandler) => {
                        resolve(result);
                    }, errHandler)
                }, errHandler)
            } else if (albumID !== 0 && sort === 'no') {
                 filterAlbumsByID(albumID, result)
                .then((result, errHandler) => {
                    resolve(result);
                }, errHandler)
            } else if (albumID === 0 && sort === 'yes') {
                 alphabeticalSort(result)
                .then((result, errHandler) => {
                    resolve(result);
                }, errHandler)
    
            } else  {
                resolve(result);
            } 
        }, errHandler)
    })
 
}

let errHandler = (err) => {
    console.log(err);
}
let filterAlbumsByID = (albumID, body) => {
    filteredBody = body.filter(v => v.albumId === albumID)
    return new Promise((resolve, reject) => {
        if (filteredBody !== undefined) {
            resolve(filteredBody)
        } else(reject(err));
    })
}
let alphabeticalSort = ((album) => {
    album.sort((a, b) => {
        return a.title.localeCompare(b.title);
    })
    return new Promise((resolve, reject) => {
        if (album !== undefined) {
            resolve(album);
        } else {
            reject(err);
        }
    })

})

let logResults = ((album) => {
    for (i = 0; i < album.length; i++) {
        console.log(`Photo ID: ${album[i].id}  Title: ${album[i].title}`);
    }
})


module.exports = {
    alphabeticalSort,
    filterAlbumsByID,
    retrieveAlbums,
    logResults,
    processAlbumPromises
}