const express = require('express');
const app = express();
module.exports = {
    listen() {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`*:${process.env.SERVER_PORT}`);
        });
    }
};
//# sourceMappingURL=index.js.map