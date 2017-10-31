function $(query){
    return new ofekQuery(query);

}

var ofekQuery = function(query){
    this.items = [] ;

    this.addClass = function (class_name) {
        for(var i = 0 ;i< this.items.length;i++){
            this.items[i].classList.add(class_name);
        }
    };

    this.removeClass = function (class_name) {
        for(var i = 1 ;i< this.items.length;i++){
            this.items[i].classList.remove(class_name);
        }
    };

    this.each = function(func_name){
        for(var i = 0;i<this.items.length;i++){
            func_name(this.items[i]);
        }
    };

    var someBlackBox = query.split(' ');
    this.items = firstCheck(someBlackBox[0]);

    for(var i=1;i<someBlackBox.length;i++){
        this.items = CheckResults(someBlackBox[i],this.items);
    }
}

function CheckResults(operator,results) {
    operator = operator.toUpperCase();
    results = Array.prototype.slice.call(results);

    if(operator.charAt(0) == '.') {
        return FindByClassName(results,operator);
    }
    else
    {
        return FindByTag(results,operator);
    }
}

function FindByTag(results,operator) {
    var tmp = [];
    tmp =  Array.prototype.slice.call(tmp);
    for(var j = 0 ;j<results.length;j++)
    {
        if(results[j].childNodes.length>0)
        {
            for(var i=0;i<results[j].childNodes.length;i++){
                if(results[j].childNodes[i].tagName == operator)
                    tmp.push(results[j].childNodes[i]);
            }
        }
        else if(results[j].tagName == operator){
            tmp.push(results[j]);
        }
    }
    return tmp;
}

function FindByClassName(results,operator) {
    return results.filter(function (result) {
        return result.classList.contains(operator.substring(1,result.length));
    });
}

function firstCheck(operator) {

    if(operator.charAt(0)=='#'){
        return getByID(operator);
    }
    else if(operator.charAt(0)=='.'){
        return getByClass(operator);
    }
    else {
        return getByTag(operator);
    }
}

function getByID(element) {
    var list = [];
    list = Array.prototype.slice.call(list);
    list[0] = document.getElementById(element.substring(1,element.length));
    return list;
}

function getByTag(element) {
    return document.getElementsByTagName(element);
}

function getByClass(element) {
    return document.getElementsByClassName(element.substring(1,element.length));
}
