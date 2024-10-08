// middleware/adminAuth.js
const adminAuth = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).send({ error: 'Access denied. Admins only.' });
    }
};

module.exports = adminAuth;
