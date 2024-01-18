function myMiddleware(req, res, next) {
    console.log("My custom middleware - Incoming request:", req.method, req.url, req.body);
    next();
}

module.exports = myMiddleware;