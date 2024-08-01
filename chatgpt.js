// Sample blog post data
const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2023-07-01",
    },
    {
      id: 2,
      title: "Second Blog Post",
      author: "Jane Smith",
      content: "Nullam eget metus at nisi malesuada aliquam.",
      date: "2023-07-05",
    },
  ];
  
  // Function to display blog posts
  function displayBlogPosts() {
    const blogContainer = document.getElementById("blog-container");
  
    // Clear existing content
    blogContainer.innerHTML = "";
  
    // Loop through blogPosts array and create HTML elements
    for (let i = 0; i < blogPosts.length; i++) {
      const post = blogPosts[i];
  
      // Create HTML elements
      const postDiv = document.createElement("div");
      postDiv.classList.add("blog-post");
  
      const titleHeading = document.createElement("h2");
      titleHeading.textContent = post.title;
  
      const authorPara = document.createElement("p");
      authorPara.innerHTML = `<strong>Author:</strong> ${post.author}`;
  
      const contentPara = document.createElement("p");
      contentPara.textContent = post.content;
  
      const datePara = document.createElement("p");
      datePara.innerHTML = `<strong>Date:</strong> ${post.date}`;
  
      // Append elements to the blogContainer
      postDiv.appendChild(titleHeading);
      postDiv.appendChild(authorPara);
      postDiv.appendChild(contentPara);
      postDiv.appendChild(datePara);
  
      blogContainer.appendChild(postDiv);
    }
  }
  
  // Call the displayBlogPosts function to show initial blog posts
  displayBlogPosts();
  