exports.routes = {
  
  get: [
    { path: "/users", action: "usersList" },  
    { path: "/comments/:userName/:title", action: "commentsView" },  
    { path: "/post/:userName/:title", action: "postView" },  
    { path: "/posts/:userName/", action: "postsList" },  
  ],

  post: [
    { path: "/users", action: "userAdd" }, 
    { path: "/comments/:userName/:title", action: "commentAdd" },  
    { path: "/posts/:userName/", action: "postAdd" },  
  ],

  put: [
    { path: "/post/:userName/:title", action: "postEdit" },  
  ],

  delete: [
    { path: "/user/:userName", action: "userDelete" }, 
    { path: "/comment/:userName/:title/:commentId", action: "commentDelete" },
    { path: "/post/:userName/:title", action: "postDelete" },  
  ]

};
