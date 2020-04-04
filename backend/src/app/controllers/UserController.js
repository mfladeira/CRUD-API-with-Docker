const User = require('../models/User')

class UserController {
    async store(req, res) {
        const user = await User.create(req.body)
        return res.json(user)
    }

    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

    async show(req, res) {
        const { id } = req.params
        console.log(id)
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        return res.json(user)
    }

    async update(req, res) {
        const { id } = req.params
        const { name, email } = req.body
        await User.update({ name: name, email: email },
            {
                where: {
                    id: id
                }
            })
        res.json(id)
    }

    async delete(req, res) {
        const { id } = req.params
        await User.destroy({ where: { id: id } })
        res.json(id)
    }
}

module.exports = new UserController();