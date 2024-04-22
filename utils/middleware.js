module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        next(new ExpressError(401, "You need to login!"));
    }
    next();
}