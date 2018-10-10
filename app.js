const yargs = require('yargs');
const request = require('request');
const albums = require('./albums');
const log = require('./logOptions').logResults
albumOptions = {
    describe: 'The ID Number of the Album, leave this option empty to view all albums',
    default: 0,
    number: 'n',
    type:'number',
    alias: 'a'
}
sortAlbumsOptions = {
    describe: 'Sort Albums Alphabetically',
    default: 'no',
    choices: ['yes','no'],
    alias: 's'
}
paginateOptions = {
    describe: 'Separate Output Into pages for organization/readability',
    default: 0,
    alias: 'p'
}
const argv = yargs
    .command('searchAlbums', 'View a specific album, or all albums', {
        albumID: albumOptions,
        sortAlbums: sortAlbumsOptions,
        paginate: paginateOptions
    }, (argv) => {
            let result = albums.processAlbumPromises(argv.albumID, argv.sortAlbums)
            result.then((result) => {
                log(result, argv.sortAlbums, argv.paginate,argv.albumID);
            }).catch((err)=> {
                console.log(err);
            })
    })
    .demandCommand(1,'searchAlbums is the only valid command \nType searchAlbums -h for a list of options')
    .recommendCommands()
    .help()
    .alias('help', 'h')
    .argv;