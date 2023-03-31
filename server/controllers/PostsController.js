import Post from "../scheme/Post.js";

function PostController() {
  this.create = async (req, res) => {
    //console.log(req.body);
    const { author, title, content, picture } = req.body;
    //res.status(200).send({author, title, content,})
    //res.status(200).send(req.body)
    try {
      const post = await Post.create({ author, title, content, picture });
      console.log(post);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  this.allPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      return res.json(posts);

      res.status(200).send("GET => Получить данные");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  this.onePost = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id нет" });
      }
      const post = await Post.findById(id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  this.updatePost = async (req, res) => {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "id нет" });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  this.dropPost = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id нет" });
      }
      const post = await Post.findByIdAndDelete(id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

export default new PostController();

// import Post from "../scheme/Post.js";
// class PostController {
//   async create(req, res) {
//     //console.log(req.body);
//     const { author, title, content, picture } = req.body;
//     //res.status(200).send({author, title, content,})
//     //res.status(200).send(req.body)
//     try {
//       const post = await Post.create({ author, title, content, picture });
//       console.log(post);
//       res.json(post);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
//   async allPosts(req, res) {
//     res.status(200).send("GET => Получить данные");
//   }
// }

// export default new PostController();
