const User = require('../../models/User')

const SessionController = {

    async createSession(req, res) {

        const { username, password } = req.body

        try {

            const user = await User.findOne({ username, password })
            return res.status(200).json(user)

        } catch(err) {

            return res.status(400).json(err)
        }
    
    }
}

module.exports = SessionController