// UI Vars 
const postDiv2 = document.getElementById('thePosts');



//load multiple posts function 
function loadPosts() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'asset/jsonData/posts.json',true);

    xhr.onload = function() {
        if(this.status === 200) {
            const posts = JSON.parse(this.responseText);
            let output = '';
            posts.forEach(post => {
                output += `
                <div class="item">
                    <div class="img"><img src = "${post.image}" style="width:476px;border-radius:50px;"></div>
                    <div class="content" style="margin:10px;font-size:1.1rem;flex:1">
                        <a class="header" href="#" id="bTitle">${post.postTitle}</a>
                        <div class="meta">
                            <span id="bDate">${post.date}</span>
                            <span>By: <a href="#" id="bAuthor">${post.name}</a></span>
                        </div>
                        <div class="description"><p id="bDesc">${post.postText}</p></div>
                        <div class="extra"><a class="ui floated basic violet button" href="#">Read More</a></div>
                    </div>
                </div> 
                `;   
            });

            postDiv2.innerHTML = output;
        }
    };

    xhr.send();

}

loadPosts()