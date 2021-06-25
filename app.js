const { json } = require('express');
const express = require('express');
const app = express();
const db = require('./connection');
const postModel = require('./postModel');
//app.use(express.urlencoded({extended: true}));
app.use(express.json());

// crud applications

app.post('/', async(req, res) => {
  const {name, email, password, } = req.body;

  try {
    const newPost = await postModel.create({name, email, password});
    res.json(newPost)
  } catch (erroe) {
    res.status(500).send(error)
  }
});

app.get('/', async (req, res) => {
  try {
    const posts = await postModel.find();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error)
  }
});

  app.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const post = await postModel.findById(id);
      res.json(post);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // put is to modify the content
  app.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body;
    try {
      const post = await postModel.findByIdAndUpdate(id, {name, email, password});
      res.json(post);
    } catch (error) {
      res.status(500).send(error)
    }
  });

    // delete is to remove the content
    app.delete('/:id', async (req, res) => {
      const {id} = req.params;     
      try {
        const post = await postModel.findById(id);
        await post.remove();
        res.json('Deleted successfully')
      } catch (error) {
        res.status(500).send(error)
      }
    });
 
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log('Server run at port ${PORT}'));



 // app.listen(3001, () => {
 //   console.log(`app is listening at port:3001`)

//  })