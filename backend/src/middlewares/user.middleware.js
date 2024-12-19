import { verifyToken } from "../utilities/jwt.js";

const authentication = async (req, res, next) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        // Verify the token
        const decoded = verifyToken(token);
        console.log("Decoded,decoded")

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(500).send({ message: "Error in authorization", error: error.message });
    }
};

export {
    authentication
};
