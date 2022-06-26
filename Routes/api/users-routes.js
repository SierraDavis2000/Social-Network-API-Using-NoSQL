const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/users-controllers');

// api users
router.route('/').get(getAllUsers).post(addUser);

// api user by :id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// api user:id/friends/friendId
router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;