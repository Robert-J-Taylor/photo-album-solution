const assert = require('chai').assert;
const expect = require('chai').expect;
const album = require('../albums');
const mockData = require('./album.mockData');
describe('Retrieve Album', () => {
    it('should return an array of albums/photos', (done) => {
        let result = album.retrieveAlbums();
        let testString = "accusamus beatae ad facilis cum similique qui sunt";

        result.then((result) => {
            assert.isArray(result);
            expect(result[0].title).to.equal(testString);
            done();
        })
    })
})
describe('Alphabetical Sort', () => {
    it('should return a sorted array', (done) => {

        let result = album.alphabeticalSort(mockData.alphabeticalSortBefore);
        result.then((result) => {
            expect(result[0].title).to.equal(mockData.alphabeticalSortAfter[0].title);
            done();
        })
    })
});
describe('Filter By ID', () => {
    it('should return an array of ID specified', (done) => {
        let albumID = 2;
        let body = mockData.filterSortBefore;
        let result = album.filterAlbumsByID(2, body);
        result.then((result) => {
            expect(result.length).to.equal(2);
            expect(result[0].title).to.equal(mockData.filterSortAfter[0].title);
            done();
        })
    })
});

describe('Process Album Promises', () => {
    it('should return all photos for albumID=5', (done) => {
        let albumID = 5;
        let sort = 'no';
        let testTitle = 'nesciunt dolorum consequatur ullam tempore accusamus debitis sit';
        let testId = 201;
        result = album.processAlbumPromises(albumID, sort);
        result.then((result) => {
            assert.isArray(result);
            expect(result[0].title).to.equal(testTitle);
            expect(result[0].id).to.equal(testId);
            done();
        })
    })
    it('should return all photos for albumID=5 sorted alphabetically', (done) => {
        let albumID = 5;
        let sort = 'yes';
        let testTitle = 'a deleniti quae exercitationem aut et reprehenderit';
        let testId = 230;
        result = album.processAlbumPromises(albumID, sort);
        result.then((result) => {
            assert.isArray(result);
            expect(result[0].title).to.equal(testTitle);
            expect(result[0].id).to.equal(testId);
            done();
        })
    })
    it('should return all albums', (done) => {
        let albumID = 0;
        let sort = 'no';
        result = album.processAlbumPromises(albumID, sort);
        result.then((result) => {
            assert.isArray(result);
            expect(result.length).to.equal(5000);
            done();
        })
    })
    it('should return all albums sorted alphabetically', (done) => {
        let albumID = 0;
        let sort = 'yes';
        let testString = 'a aliquam quia';
        let testID = 1005;
        result = album.processAlbumPromises(albumID, sort);
        result.then((result) => {
            assert.isArray(result);
            expect(result.length).to.equal(5000);
            expect(result[0].title).to.equal(testString);
            expect(result[0].id).to.equal(testID);
            done();
        })
    })

})