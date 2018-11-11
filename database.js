const pgp = require('pg-promise')();
var db = pgp('postgres://ozqwehggwyivsx:3ed71a3488c8e66c9507a970d068ae587a89d4b087ac9dcb454b037848f38b06@ec2-54-243-147-162.compute-1.amazonaws.com:5432/d13670itu2g6eo?ssl=true');
//CRUD product
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved all products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function getProductByID(req, res) {
    db.any(`select * from products where id = ${req.params.id}`)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function insertProduct(req, res) {
    db.any('insert into products(title, price, create_at, tag)' +
        'values(${title}, ${price}, ${create_at}, ${tag})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateProduct(req, res) {
    db.none('update products set title = ${title},price = ${price} , create_at = ${create_at} , tag = ${tag}  where id = ' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function deleteProduct(req, res) {
    db.none('delete from products where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//CRUD purchases
function getAllPurchase(req, res) {
    db.any(`select * from purchases `)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved all purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function getPurchaseByID(req, res) {
    db.any(`select * from purchases where id = ${req.params.id}`)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchases id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function insertPurchase(req, res) {
    db.any('insert into purchases(tag, buy_at, sale)' +
        'values(${tag}, ${buy_at}, ${sale})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function updatePurchase(req, res) {
    db.none('update purchases set tag = ${tag},buy_at = ${buy_at} , sale = ${sale} where id = ' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function deletePurchase(req, res) {
    db.none('delete from purchases where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
//CRUD users
function getAllUser(req, res) {
    db.any(`select * from users `)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved all users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function getAllUsersByID(req, res) {
    db.any(`select * from users where id = ${req.params.id}`)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved users id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function insertUsers(req, res) {
    db.any('insert into users(email, password, create_at)' +
        'values(${email}, ${password}, ${create_at})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function updateUsers(req, res) {
    db.none('update users set email = ${email},password = ${password} , create_at = ${create_at} where id = ' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
}
function deleteUsers(req, res) {
    db.none('delete from users where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//ส่งค่าไปหน้าServer
module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getAllPurchase,
    getPurchaseByID,
    insertPurchase,
    updatePurchase,
    deletePurchase,
    getAllUser,
    getAllUsersByID,
    insertUsers,
    updateUsers,
    deleteUsers
};