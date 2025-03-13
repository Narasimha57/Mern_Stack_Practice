import express from "express"
const router =express.Router()

router.get('/all', (req, res) =>{
    res.send("All Teachers")
});
router.post('/create', (req, res) =>{
    res.send("Create the New Teachers")
})
router.put('/update', (req, res) =>{
    res.send("Update the Teachers")
})
router.delete('/delete', (req, res) =>{
    res.send("Delete the Teachers")
})

export default router;