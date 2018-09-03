const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
    // console.log('***** catch-all.routes *****');
    // console.log('***** route', request.url, ' not found; sending index.html ******');
    response.sendFile(path.join(__dirname, '../../dist/devsOnDeck/index.html'));
});

module.exports = router;