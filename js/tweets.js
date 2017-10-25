var alltweets = [
    {"name":"James Bond", "tweet": "Blabla bla"},
    {"name":"James Bond", "tweet": "Bond, James Bond"},
    {"name":"Albert Einstein", "tweet": "E=mc^2"},
    {"name":"Bill Gates", "tweet": "I think 64 bytes should be enough for everyone"},
    {"name":"Frodo", "tweet": "My precious"}
];

function ready() {
    alltweets.forEach(newTweet);
}

window.onload = ready;

function getTweet() {
    var tweetText = document.getElementById("tweetTextBox").value;
    var tweetBlock = {"name":"irena" + " says:","tweet":tweetText};
    newTweet(tweetBlock);
    alltweets.push(tweetBlock);
}

function newTweet(tweetBlock) {
    var bigDiv = document.getElementById("bigTweet");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","col-xs-12 rowBetween");
    var avatarPic = document.createElement("img");
    avatarPic.setAttribute("src","img/useravatar.png");
    avatarPic.setAttribute("class","pull-left");
    var span = document.createElement("span");
    var b = document.createElement("b");
    b.innerHTML = tweetBlock.name.toString();
    var br = document.createElement("br");
    var spanNorm = document.createElement("span");
    spanNorm.innerHTML = tweetBlock.tweet.toString();
    newDiv.appendChild(avatarPic);
    span.appendChild(b);
    newDiv.appendChild(span);
    newDiv.appendChild(br);
    newDiv.appendChild(spanNorm);
    bigDiv.appendChild(newDiv);
}


