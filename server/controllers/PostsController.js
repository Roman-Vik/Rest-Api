import Post from "../scheme/Post.js";
import PostService from "../service/PostService.js";

function PostController() {
  this.create = async (req, res) => {
    //console.log(req.body);
    const { author, title, content, picture } = req.body;
    //res.status(200).send({author, title, content,})
    //res.status(200).send(req.body)
    try {
      const post = await PostService.create(req.body);
      console.log(post);
      res.json(post);
    } catch (error) {
      //читает ошибку throw new Error("ID не был указан") 
      res.status(500).json(error.message);
    }
  };
  this.allPosts = async (req, res) => {
    try {
      const posts = await PostService.allPosts();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  this.onePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await PostService.onePost(id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  this.updatePost = async (req, res) => {
    try {
      const updatedPost = await PostService.updatePost(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  this.dropPost = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id нет" });
      }
      const post = await PostService.dropPost(id)
      return res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
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
