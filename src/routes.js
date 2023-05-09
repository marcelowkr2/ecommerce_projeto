const { Router } = require('express')

const UserController = require('../src/controllers/UserController')
const SessionController = require('../src/controllers/Login')
const ProductController = require('../src/controllers/ProductController')
const CartController = require('../src/controllers/CartController')

const { authenticate } = require('../src/middlewares')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login', SessionController.createSession)

routes.post('/products/:user_id', authenticate, ProductController.createProduct)
routes.get('/:user_id/products/:user_id', ProductController.getProducts)
routes.patch('/products/:user_id/:product_id', authenticate, ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:products_id', ProductController.getProductById)

routes.post('/carts/:user_id', authenticate, CartController.createCart)
routes.get('/carts/:user_id', authenticate, CartController.getUserCarts)
routes.get('/carts/:user_id/:cart_id', authenticate, CartController.getCart)

module.exports = routes
