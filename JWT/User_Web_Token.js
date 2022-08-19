import { jwtVerify } from "jose"

const JWT_Verify = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) res.status(401).send('Error, user no verify')
    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(authorization, encoder.encode("00809a7c-1050-11ed-861d-0242ac120002"))
        req.id = payload.id
        next()
    } catch (error) {
        res.status(401).send('Error,  user no verify')
    }
}

export { JWT_Verify }