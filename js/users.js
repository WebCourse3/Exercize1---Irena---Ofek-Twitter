//some nice functions
//some some
var users = [
    {"username":"Marty McFly","status":"follow"},
    {"username":"Janis Joplin","status":"follow"},
    {"username":"Albert Eintein","status":"follow"},
    {"username":"Gengis Khan","status":"follow"},
    {"username":"Dracula","status":"unfollow"},
    {"username":"Forest Gump","status":"follow"},
    {"username":"Caligula","status":"follow"},
    {"username":"Winnie Pooh","status":"follow"},
    {"username":"Obama","status":"follow"},
    {"username":"Henry the 8th","status":"unfollow"}
];

function ready() {
    users.forEach(FollowersCreation);
}

window.onload = ready;

function FollowersCreation(someFollowFellow) {
    var bigDiv = document.getElementById("bigDiv");

    var firstDiv = createDiv("col-md-2 pull-left");

    var secondDiv = createDiv("panel panel-default");

    var thirdDiv = createDiv("panel-body text-center");

    var avatarPic = document.createElement("img");
    avatarPic.setAttribute("src","img/useravatar.png");

    var button = createFollowOrUnfollowButton(someFollowFellow);
    button.onclick = checkTheFellow;
    button.setAttribute("id", someFollowFellow.username.toString().replace(/\s/g,''));
    var label = document.createElement("label");
    label.innerHTML = someFollowFellow.username.toString();

    thirdDiv.appendChild(avatarPic);
    thirdDiv.appendChild(button);
    thirdDiv.appendChild(label);

    secondDiv.appendChild(thirdDiv);

    firstDiv.appendChild(secondDiv);

    bigDiv.appendChild(firstDiv);

    if(someFollowFellow.status.toString() === "unfollow")
    {
        followeeCreation(someFollowFellow);
    }
}

function createDiv(divClass)
{
    var div = document.createElement("div");
    div.setAttribute(divClass);
}

function createFollowOrUnfollowButton(someFollowFellow) {
    var btn = document.createElement("button");
    var text = document.createTextNode(someFollowFellow.status.toString());
    if(someFollowFellow.status.toString() === "follow")
    {
        btn.setAttribute("class","btn btn-default btn-primary rowBetween");

    }
    else {
        btn.setAttribute("class","btn btn-default btn-danger rowBetween");
    }
    btn.setAttribute("name", someFollowFellow.username.toString());

    btn.appendChild(text);

    return btn;
}

function followeeCreation(someFollowFellow) {
    var followees = document.getElementById("followees");


    var secondDiv = createDiv("panel panel-default "  + someFollowFellow.username.toString().replace(/\s/g,''));

    var thirdDiv = createDiv("panel-body text-center");

    var avatarPic = document.createElement("img");
    avatarPic.setAttribute("src","img/useravatar.png");

    var button = createFollowOrUnfollowButton(someFollowFellow);
    button.onclick = checkTheFellow;
    var label = document.createElement("label");
    label.innerHTML = someFollowFellow.username.toString();

    thirdDiv.appendChild(avatarPic);
    thirdDiv.appendChild(button);
    thirdDiv.appendChild(label);

    secondDiv.appendChild(thirdDiv);

    followees.appendChild(secondDiv);
}

function foloweeDelete(someFollowFellow) {
    var followees = document.getElementById("followees");
    var deleteTheFellow = document.getElementsByClassName(someFollowFellow.username.toString().replace(/\s/g,''));
    followees.removeChild(deleteTheFellow[0]);
    var buttonToChange = document.getElementById(someFollowFellow.username.toString().replace(/\s/g,''));
    buttonToChange.innerHTML = "follow";
    buttonToChange.setAttribute("class","btn btn-default btn-primary rowBetween");

}


function checkTheFellow() {
    var someBtn = this;
    if (someBtn.innerHTML === "follow")
    {
        someBtn.setAttribute("class","btn btn-default btn-danger rowBetween");
        someBtn.innerHTML = "unfollow";
        var someFollowFellow = {"username":this.name,"status":"unfollow"};
        followeeCreation(someFollowFellow);
    }
    else
    {
        someBtn.setAttribute("class","btn btn-default btn-primary rowBetween");
        someBtn.innerHTML = "follow";
       var someFollowFellow = {"username":this.name,"status":"follow"};
       foloweeDelete(someFollowFellow);
    }
}

function filter() {
    var search = document.getElementById("searchField");
    var filter = search.value.toUpperCase();
    var theBigConteiner = document.getElementById("bigDiv");
    var userDiv = theBigConteiner.getElementsByClassName("panel-body text-center");
    var count = theBigConteiner.childElementCount;
    for ( i=0; i<count; i++) {
        var usernameDiv = userDiv[i].getElementsByTagName("button")[0].name;
        if (usernameDiv.toUpperCase().indexOf(filter) > -1 )
        {
            userDiv[i].parentNode.parentNode.style.display = "";
        }
        else
        {
            userDiv[i].parentNode.parentNode.style.display = "none";
        }
    }
}
