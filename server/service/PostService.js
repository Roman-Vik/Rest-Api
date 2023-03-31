import Post from "../scheme/Post.js";

function PostService (){
    //логика с базой данных и созданию поста 
    this.create = async (post) => {
          const createdPost = await Post.create(post);
          return createdPost
      };
       //логика с базой данных и получить все посты
      this.allPosts = async (req, res) => {
          const posts = await Post.find();
          return posts
      };
      //логика с базой данных и получить посты по id
      this.onePost = async (id) => {
          if (!id) {
            throw new Error("ID не был указан")
          }
          const post = await Post.findById(id);
          return post
    
      };
      //логика с базой данных и обновить пост
      this.updatePost = async (post) => {
          if (!post._id) {
            throw new Error("ID не был указан") 
          }
          const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
            new: true,
          });
          return updatedPost
        
      };
      //логика с базой данных и удалить посты по id
      this.dropPost = async (id) => {
          if (!id) {
            throw new Error("ID не был указан")
          }
          const post = await Post.findByIdAndDelete(id);
          return post
      };
}

export default new PostService()