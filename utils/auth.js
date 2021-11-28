// method to determine session status
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        // if there is no user_id in the session redirect to login page
        res.redirect('/login');
    }
    else {
        next();
    }
};

module.exports = withAuth;