const express = require('express');
const router = express.Router();
const { getAll } = require('../utilities/endPointHelpers');
router.get('/', async (req, res) => {
  try {
    let response = await getAll();
    console.log("response test");
    console.log(response);
    res.send(response)
  } catch (error) {
    res.status(444).send(error);
  }
})

module.exports = router;