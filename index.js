/**
 * Express server for a REST API.
 * @module rest-api
 */

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

/**
 * Array of posts.
 * @type {Array}
 */
const postList = [];

/**
 * The next available ID for a new post.
 * @type {number}
 */
var nextId = 0;

/**
 * Get all posts.
 * @name GET/posts
 */
app.get("/posts", (req, res) => {
  res.status(200).send({
    data: postList,
    message: null,
  });
});

/**
 * Get a specific post by ID.
 * @name GET/posts/:id
 */
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = postList.find((post) => post.id == id);

  if (!post) {
    res.status(404).send({
      data: null,
      message: "Post not found",
    });
  } else {
    res.status(200).send({
      data: post,
      message: null,
    });
  }
});

/**
 * Create a new post.
 * @name POST/posts
 */
app.post("/posts", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  if (!title || !content) {
    res.status(400).send({
      data: null,
      message: "Title or content is missing",
    });
  } else {
    const newPost = {
      id: nextId++,
      title: title,
      content: content,
    };

    postList.push(newPost);

    res.status(201).send({
      data: newPost,
      message: null,
    });
  }
});

/**
 * Update a post by ID.
 * @name PATCH/posts/:id
 */
app.patch("/posts/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;

  const post = postList.find((post) => post.id == id);

  if (!post) {
    res.status(404).send({
      data: null,
      message: "Post not found",
    });
  } else if (!title && !content) {
    res.status(400).send({
      data: null,
      message: "Title and content is missing",
    });
  } else {
    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    res.status(201).send({
      data: post,
      message: null,
    });
  }
});

/**
 * Delete a post by ID.
 * @name DELETE/posts/:id
 */
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = postList.find((post) => post.id == id);

  if (!post) {
    res.status(404).send({
      data: null,
      message: "Post not found",
    });
  } else {
    const index = postList.indexOf(post);
    postList.splice(index, 1);

    res.status(200).send({
      data: post,
      message: null,
    });
  }
});

/**
 * Start the server.
 */
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
