import express from "express"
const router =express.Router()

router.get('/all', (req, res) =>{
    res.send("All students")
});
router.post('/create', (req, res) =>{
    res.send("Create the New students")
})
router.put('/update', (req, res) =>{
    res.send("Update the students")
})
router.delete('/delete', (req, res) =>{
    res.send("Delete the students")
})

export default router;