const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughts-controllers");


router.route("/").get(getAllThoughts).post(addThought);


router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);


router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;