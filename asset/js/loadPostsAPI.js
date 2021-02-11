// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    load_fromPlaceHolder_new();
    //loadDataNew();
});


//load post from fake api function 
function load_fromPlaceHolder() {


}
//async await
function load_fromPlaceHolder_new() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){return response.json();})
    .then(function(posts) {
        let output = ""
        posts.forEach(function(post) {
            output += `
            <div class="item">
                <div class="img"><img src = "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" style="width:476px;border-radius:50px;"></div>
                <div class="content" style="margin:10px;font-size:1.1rem;flex:1">
                    <a class="header" href="#" id="bTitle">${post.title}</a>
                    <div class="description"><p id="bDesc">${post.body}</p></div>
                    <div class="extra"><a class="ui floated basic violet button" href="#">Read More</a></div>
                </div>
            </div> 
            `;
        })
        postDiv3.innerHTML = output;
    }).catch(function(error){console.log(error)})


}

function loadDataNew() {


}