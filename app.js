let express = require('express');
let app = express();

let logger = function(req, resp, next){
    console.log(req.url);
    console.log(req.method);

    next();
}

let sayNamaste = (req, resp) => {
    return resp.send(
        "<body style='width: 100vw;padding: 0;height: 100vh;overflow: hidden;margin: 0;background: #dbdbdb;display: flex;align-items: center;justify-content: center;'>"
        + "<div style='display:flex;align-items:center;justify-content: center;width: 80%;height: 80%;background: #fdfdfd;border-radius: 2vw;'>"
        + "<h1 style='font-size: 5vw;'>नमस्ते भारत! 🙏🏼</h1>"
        + "<div>"
        + "</div>"
        + "</div>"
        + "</body>"
    );
}

let sayVanakkam = (req, resp) => {
    return resp.send(
        "<body style='width: 100vw;padding: 0;height: 100vh;overflow: hidden;margin: 0;background: #dbdbdb;display: flex;align-items: center;justify-content: center;'>"
        + "<div style='display:flex;align-items:center;justify-content: center;width: 80%;height: 80%;background: #fdfdfd;border-radius: 2vw;'>"
        + "<h1 style='font-size: 5vw;'>வணக்கம் பாரதம்! 🤙🏽</h1>"
        + "<div>"
        + "</div>"
        + "</div>"
        + "</body>"
    );
}

let sayHello = (req, resp) => {
    return resp.send(
        "<body style='width: 100vw;padding: 0;height: 100vh;overflow: hidden;margin: 0;background: #dbdbdb;display: flex;align-items: center;justify-content: center;'>"
        + "<div style='display:flex;align-items:center;justify-content: center;width: 80%;height: 80%;background: #fdfdfd;border-radius: 2vw;'>"
        + "<h1 style='font-size: 5vw;'>Hello World! 🤝🏽</h1>"
        + "<div>"
        + "</div>"
        + "</div>"
        + "</body>"
    );
}

app.use(logger);
app.use('/vanakkam', sayVanakkam);
app.use('/hello', sayHello);
app.use('/', sayNamaste);

app.listen(8081, () => {
    console.log('Server is started on http://localhost:8081');
})
