let loguser = document.getElementById("loguser");
let logmail = document.getElementById("loguser");
let logpassword = document.getElementById("logpassword");

let signuser = document.getElementById("signuser");
let signmail = document.getElementById("signmail");

let blogsave = document.getElementById("blogsave");
let blogcancel = document.getElementById("blogcancel");
let createBlog = document.getElementById("createBlog");

let newBlogs = document.getElementById("newBlogs");
let blogImage = document.getElementById("blogImage");

blogsave.onclick = function() {
    let userEnterBlog = createBlog.value;
    localStorage.setItem("userEnterBlog", userEnterBlog);

    let storedUserInputValue = localStorage.getItem("userEnterBlog");

    if (storedUserInputValue === null) {
        pass
      }
      else {
        let blogCard = document.createElement('div');
        blogCard.style.backgroundColor = "#e6e6e6";
        blogCard.style.margin = "32px";
        blogCard.style.width = "50vw";

        let blogImageE1 = document.createElement('img');
        blogImageE1.src = blogImage.value;
        blogImageE1.classList.add('blog-image');
        blogCard.appendChild(blogImageE1);
        
        let blogCardHeading = document.createElement('p');
        blogCardHeading.textContent = createBlog.value;
        blogCardHeading.classList.add('blog-card-heading');
        blogCard.appendChild(blogCardHeading);

        let breakein = document.createElement('br');
        blogCard.appendChild(breakein);

        

        newBlogs.appendChild(blogCard);

        createBlog.value = "";
      }

};



