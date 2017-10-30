
var OfekQuery = function (query) {

    if(!(query.contains(" ")))
    {
        switch (query.charAt(0)) {
            case '.':
                this.element = document.getElementsByClassName(query.substr(1, query.length - 1));
                break;
            case '#':
                this.element = document.getElementById(query.substr(1, query.length - 1));
                break;
            default:
                this.element = document.getElementsByTagName(query);
        }
    }
    else
    {
        var tokens = [];
        var countForTokens = query.split(" ").length;
        for(var i=0; i<countForTokens; i++)
        {
            tokens[i] = query.split(" ",i);
        }

    }


    this.addClass = function (class_name) {
        if (this.element.count === 1) {
            this.element.classList.add(class_name);
        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                this.element[i].classList.add(class_name);
            }

        }

    }

    this.removeClass = function (class_name) {
        if (this.element.count === 1) {
            this.element.classList.remove(class_name);
        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                this.element[i].classList.remove(class_name);
            }

        }
    }

    this.each = function (fn) {
        if (this.element.count === 1) {
            this.element.fn;
        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                this.element[i].fn;
            }

        }
    }

    this.map = function (fn) {
        if (this.element.count === 1) {
           return this.element.fn;
        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                return this.element[i].fn;
            }

        }
    }

    // here should be some annoying function i have no idea what to do with them

    this.css = function (property, value) {
        if (this.element.count === 1) {
            this.element.setAttribute("style", property + ": " + value);

        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                this.element[i].setAttribute("style", property + ": " + value);
            }

        }
    }

    this.count = function () {
        if (this.element.count === 1) {
            return this.element.childElementCount;

        }
        else {
            for (var i = 0; i < this.element.count; i++) {
               return this.element[i].childElementCount;
            }

        }
    }

    this.appendChild = function (childElement) {
        if (this.element.count === 1) {
            this.element.appendChild(childElement);

        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                this.element[i].appendChild(childElement);
            }

        }
    }

    this.getAttribute = function (attributeName) {
        if (this.element.count === 1) {
           return this.element.getAttribute(attributeName);

        }
        else {
            for (var i = 0; i < this.element.count; i++) {
               return this.element[i].getAttribute(attributeName);
            }

        }
    }

    this.setAttribute = function (attributeName, attributeValue) {
        if (this.element.count === 1) {
             this.element.setAttribute(attributeName, attributeValue);

        }
        else {
            for (var i = 0; i < this.element.count; i++) {
                this.element[i].setAttribute(attributeName, attributeName);
            }

        }
    }

    this.get = function (index) {
        if (this.element.count === 1) {
            return this.element;
        }
        else
        {
            return this.element[index];
        }
    }


}
function $(name){
    return new OfekQuery(name);
}








