const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
    // console.log('***** catch-all.routes *****');
    // console.log('***** route', request.url, ' not found; sending index.html ******');
    console.log('*** you fucked up the route cuz this is catch-all-routes sending u back to index ***');
    response.sendFile(path.join(__dirname, '../../dist/devsOnDeck/index.html'));
});

module.exports = router;