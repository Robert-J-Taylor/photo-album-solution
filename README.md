# lt-photo-album
LT Photo Album Solution
## Original Question
Create a console application that displays photo ids and titles in an album. The photos are available in this online web service (https://jsonplaceholder.typicode.com/photos).

Hint: Photos are filtered with a query string. This will return photos within albumId=3 (https://jsonplaceholder.typicode.com/photos?albumId=3)

### Details
Answered using Node.js. The Yargs package was used to create commands and retrieve input from the user and the Request package was used to retrieve JSON data from the URL. Test cases were created using Mocha and Chai. 
Along with returning photos based on the specific AlbumId the user inputs, I have also added options to sort the returned results by title and paginate the results for readability and organization.
### Build Project
Be sure to install the latest recommended version of Node and NPM.
In the project root directory run the following command:
```
npm install
```
### Run Project
To review a list of valid commands and what they are looking for run this:
```
node app searchAlbums -h
```

To view all photo IDs and Titles of all albums run:
```
node app searchAlbums
```
To display all titles alphabetically run:
```
node app searchAlbums -s="yes"
```
To view all photo Ids and Titles of a specific album(ie albumId=3) run:
```
node app searchAlbums -a=3
```
To display all tites alphabetically of a specific album(ie albumId=3) run:
```
node app searchAlbums -a=3 -s="yes"
```
To paginate results add the -p flag, the number the user enters here will correlate to the number of results they wish to display per page. For example if the user were to display all photos and entered -p=100 there would be 50 pages with 100 photos each. Here's what that command would look like:
```
node app searchAlbums -p=100
```

### Tests
to run unit tests use:
```
npm test

```

### Author
Robert Taylor
If you have questions or have issues running the project, send a message to my email:
Email: robtaylor3012@gmail.com


