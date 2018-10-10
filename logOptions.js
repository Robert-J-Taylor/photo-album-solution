let logResults = ((album, sort, paginate,albumID) => {

    let arrayOfArrays = [];
    let size = paginate;
    if (paginate > 0) {
        console.log(`\nNumber of pages: ${size>album.length ? 1: album.length/size} Results per page: ${size} Sort: ${sort}\n`)
        if (album.ID === 0) {
            console.log(`Displaying All photo Ids and Titles. . .\n`)
        } else {
            console.log(`Displaying results for AlbumId : ${album[0].albumId} . . .\n`)
        }

        for (var i = 0; i < album.length; i += size) {
            arrayOfArrays.push(album.slice(i, i + size));
        }

        for (i = 0; i < arrayOfArrays.length; i++) {
            console.log(`\n\nPage(${i+1})\n\n`);

            for (j = 0; j < arrayOfArrays[i].length; j++) {
                console.log(`Photo ID: ${arrayOfArrays[i][j].id}   Title: ${arrayOfArrays[i][j].title}`)
            }
        }
    } else {
        console.log(`\nPaginate: no    Sort: ${sort}\n`)
        if (album.ID === 0) {
            console.log(`Displaying All photo Ids and Titles. . .\n`)
        } else {
            console.log(`Displaying results for AlbumId : ${album[0].albumId} . . .\n`)
        }
        for (i = 0; i < album.length; i++) {
            console.log(`Photo ID: ${album[i].id}   Title: ${album[i].title}`)
        }
    }
});

module.exports = {
    logResults
}