// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const spinner = document.querySelector('#spinner');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
  
    load_fromPlaceHolder_new();
    //loadDataNew();
});
async function delaySpinner() {
    console.log("Code Here")
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            alert("success")
        },2000)
    });
}


//load post from fake api function 
function load_fromPlaceHolder() {


}
//async await
async function load_fromPlaceHolder_new() {
    await delaySpinner().
    then (fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function(response){return response.json();})
            .then(function(posts) {
                let output = ""
                posts.forEach(function(post) {
                    output += `
                    <div class="item post">
                        <div class="img"><img src = "https://picsum.photos/0/?random=1" style="width:476px;border-radius:50px;"></div>
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
            .finally(function(){spinner.style.display="none"}))
        
        
    



}

function loadDataNew() {


}