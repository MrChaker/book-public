// AUTO-GENERATED FILE --- DO NOT EDIT ---
// START 1.js

const sin = Math.sin;
const cos = Math.cos;
const tau = 2 * Math.PI;
const eta = Math.PI / 2;
const min = Math.min;
const max = Math.max;
const abs = Math.abs;
const ceil = Math.ceil;
const floor = Math.floor;
const sqrt = Math.sqrt;
const atan2 = Math.atan2;


function assert(s) {
    if (s === true) { return; }
    throw new Error("Assertion Error");
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
function mod(m, n) {
    to_return = ((m % n) + n) % n;
    assert(to_return >= 0);
    return to_return;
}

function cos_deg(a) {
    a = mod(a, 360);
    if (a === 0) { return 1; }
    if (a === 90) { return 0; }
    if (a === 180) { return -1; }
    if (a === 270) { return 0; }
    return cos(a * eta / 90);
}

function sin_deg(a) {
    a = mod(a, 360)
    if (a === 0) { return 0; }
    if (a === 90) { return 1; }
    if (a === 180) { return 0; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (a === 270) { return -1; }
    return sin(a * eta / 90);
}

if (!("path" in Event.prototype)) {
    Object.defineProperty(Event.prototype, "path", {
        get: function () {
            var path = [];
            var currentElem = this.target;
            while (currentElem) {
                path.push(currentElem);
                currentElem = currentElem.parentElement;
            }
            if (path.indexOf(window) === -1 && path.indexOf(document) === -1)
                path.push(document);
            if (path.indexOf(window) === -1)
                path.push(window);
            return path;
        }
    });
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}

function gcs(thing) {
    return window.getComputedStyle(thing);
}

function sum(a) {
    assert(a instanceof Array)
    return a.reduce((a,b) => a+b, 0)
}

function determine_NS_for_tag(tag, NS) {
    if (['svg', 'g', 'path', 'rect', 'circle', 'ellipse', 'use', 'text', 'textPath', 'defs', 'tspan', 'line', 'polyline', 'polygon'].includes(tag)) {
        assert(NS !== false);
        return true;
    } else if (['p', 'div', 'span', 'body', 'ul', 'li', 'table', 'tr', 'td', 'col', 'textarea'].includes(tag)) {
        assert(NS !== true);
        return false;
    } else if (typeof NS !== "boolean") {
        console.log("NS missing in determine_NS_for_tag; tag:", tag);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(false);
    }
    return NS;
}

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

String.prototype.isWhiteSpace = function() { return (/^[\s\n]*$/.test(this)) }

Element.prototype.fireA = function (etype) {
    if (this.fireEvent) {
        this.fireEvent('on' + etype);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        this.dispatchEvent(evObj);
    }
};

Element.prototype.setAttributes = function (attributes, NS) {
    NS = determine_NS_for_tag(this.tagName, NS);
    for (const key in attributes) {
        if (NS && ['href', 'xlink:href'].includes(key)) {
            this.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', attributes[key]);
        }
        if ((key === 'styles' || key === 'style') && typeof attributes[key] === 'object') {
            for (const p in attributes[key]) {
                this.style[p] = attributes[key][p];
            }
        } else if (key === 'html') {
            assert(false);
        } else {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            this.setAttribute(key, attributes[key]);
        }
    }
};

function newElement(tag, attributes, NS) {
    NS = determine_NS_for_tag(tag, NS);
    let node;
    if (NS) { node = document.createElementNS('http://www.w3.org/2000/svg', tag); }
    else { node = document.createElement(tag); }
    if (typeof attributes !== "undefined") { node.setAttributes(attributes, NS); }
    return node;
}

document.getExistingElementById = function(name) {
    let to_return = document.getElementById(name);
    assert(to_return !== null);
    return to_return;
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
Element.prototype.getElementById = function (name) {
    if (this.getAttribute('id') == name) { return this; }
    for (let i = 0; i < this.children.length; i++) {
        let result = this.children[i].getElementById(name);
        if (result !== null) {
            return result;
        }
    }
    return null;
};

Element.prototype.getNextSiblingsByClassNameUntil = function (class1, class2) {
    let found = [];
    let seen_ourselves = false;
    for (const c of this.parentNode.children) {
        if (seen_ourselves && c.classList.contains(class1)) {
            found.push(c);
        }
        if (c.classList.contains(class2)) {
            if (c === this) { seen_ourselves = true; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            else { break; }
        }
    }
    return found;
};

Element.prototype.mostRecentSiblingWithClassName = function (classname) {
    let parent = this.parentNode;
    last_found = null;
    for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i] === this) { break; }
        if (parent.children[i].classList.contains(classname)) { last_found = parent.children[i]; }
    }
    return last_found;
};

Element.prototype.encloseChildrenIn = function (tag) {
    let newguy = newElement(tag);
    let to_remove = [];
    for (const c of this.children) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        to_remove.push(c);
    }
    for (const c of to_remove) {
        c.remove();
        newguy.appendChild(c);
    }
    this.appendChild(newguy);
    return newguy;
};

Element.prototype.encloseSelectedChildrenIn = function (tag, avoidTag) {
    let newguy = newElement(tag);
    let to_remove = [];
    for (const c of this.children) {
        if (c.tagName !== avoidTag) {
            to_remove.push(c);
        }
    }
    for (const c of to_remove) {
        c.remove();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        newguy.appendChild(c);
    }
    this.prependChild(newguy);
    return newguy;
};

Element.prototype.encloseIn = function (tag) {
    let newguy = newElement(tag);
    this.parentNode.replaceChild(newguy, this);
    newguy.appendChild(this);
    return newguy;
};

Element.prototype.isOrHasNonVisibleAncestor = function () {
    let a = this;
    do {
        let z = gcs(a);
        if (z.visibility === "hidden" || z.display === "none") { return true; }
        a = a.parentNode;
    } while (a instanceof Element);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    return false;
};

Element.prototype.getAncestorByClassName = function (name) {
    // returns earliest ancestor a such that a.classList.contains(name)
    let a = this.parentNode;
    do {
        if (a.classList.contains(name)) { return a; }
        a = a.parentNode;
    } while (a instanceof Element);
    return null;
};

Element.prototype.getExistingAncestorByClassName = function (name) {
    const to_return = this.getAncestorByClassName(name);
    assert(to_return !== null);
    return to_return;
}

Element.prototype.getChildrenByAttribute = function (attribute_name) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let to_return = [];
    for (const c of this.children) { if (c.hasAttribute(attribute_name)) { to_return.push(c) } };
    return to_return;
}

DOMTokenList.prototype.containsExactlyOneOf = function (name1, name2) {
    return (this.contains(name1) !== this.contains(name2));
}

DOMTokenList.prototype.containsOne = function (array) {
    return array.some(name => this.contains(name));
}

Element.prototype.getSubsequentElementByTagName = function (name) {
    let a = this;
    while (true) {
        while (a instanceof Element || a instanceof Text) {
            if (a.nextSibling !== null) {
                a = a.nextSibling;
                if (a instanceof Element) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                    break;
                } else if (a instanceof Text) {
                    continue;
                } else {
                    assert(false);
                }
            }
            a = a.parentNode;
        }
        if (a instanceof Element) {
            found = a.getElementByTagName(name);
            if (found !== null) {
                return found;
            }
        } else
            if (a instanceof Text) {
                assert(false);
            } else {
                console.log("breaking b/c a no longer instance of Element or Text");
                break;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            }
    }
    return null;
};

Element.prototype.getAncestorByTagName = function (name) {
    // returns earliest ancestor a such that a.classList.contains(name)
    name = name.toUpperCase();
    let a = this.parentNode;
    do {
        if (a.tagName.toUpperCase() === name) { break; }
        a = a.parentNode;
    } while (a !== null);
    return a;
};

Element.prototype.getUniqueElementByClassName = function (name) {
    let all_results = this.getElementsByClassName(name)
    assert(all_results.length === 1)
    return all_results[0]
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}

Element.prototype.hasExactlyOneOfClasses = function (array) {
    let sum = 0
    for (const name of array) { if (this.classList.contains(name)) { sum += 1 } }
    return (sum === 1)
}

Element.prototype.hasOneOfClasses = function (array) {
    let sum = 0
    for (const name of array) { if (this.classList.contains(name)) { sum += 1 } }
    return (sum > 0)
}

Element.prototype.hasExactlyOneOfAttributes = function (array) {
    let sum = 0
    for (const name of array) { if (this.hasAttribute(name)) { sum += 1 }}
    return (sum === 1)
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
Element.prototype.parseFloatAttributeWithDefault = function (name, default_value) {
    if (this.hasAttribute(name)) { return parseFloat(this.getAttribute(name)); }
    return default_value;
}

Element.prototype.parseIntAttribute = function (name) {
    if (this.hasAttribute(name)) { return parseInt(this.getAttribute(name)); }
    return null;
}

Node.prototype.isNonCommentTextNode = function () {
    return (this.nodeType === Node.TEXT_NODE && !this.textContent.isWhiteSpace())
}

Node.prototype.getElementsByClassNamesArrayVersion = function (array) {
    let to_return = [];
    if (this.classList !== undefined) { if (array.some(x => this.classList.contains(x))) { to_return.push(this); } }
    for (const c of this.childNodes) { to_return.push(...c.getElementsByClassNamesArrayVersion(array)); }
    return to_return;
};
// AUTO-GENERATED FILE --- DO NOT EDIT ---

Node.prototype.getElementsByClassNames = function (name1, name2) {
    if (name2 === undefined) {
        assert(Array.isArray(name1));
        return this.getElementsByClassNamesArrayVersion(name1)
    } else {
        let to_return = [];
        if (this.classList !== undefined) { if (this.classList.contains(name1) || this.classList.contains(name2)) { to_return.push(this); } }
        for (const c of this.childNodes) { to_return.push(...c.getElementsByClassNames(name1, name2)); }
        return to_return;
    }
};

Node.prototype.getElementByClassNames = function (names) {
    if (this.classList === undefined) { return null; }
    for (const name of names) { if (this.classList.contains(name)) { return this; } }
    for (const c of this.childNodes) {
        let z = c.getElementByClassNames(names);
        if (z !== null) { return z; }
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    return null;
};

Node.prototype.getExistingElementByClassNames = function (names) {
    let to_return = this.getElementByClassNames(names);
    assert(to_return !== null);
    return to_return;
}

Node.prototype.getElementByAttributeNames = function (name1, name2, depth) {
    let tabs = "";
    for (let i = 0; i < depth; i++) { tabs += "+"; }
    if (this.hasAttribute !== undefined) {
        if (this.hasAttribute(name1) ||
            this.hasAttribute(name2)) {
            return this;
        }
    }
    for (const c of this.childNodes) {
        let z = c.getElementByAttributeNames(name1, name2, depth + 1);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (z !== null) { return z; }
    }
    return null;
};

Node.prototype.getElementByAttributeName = function (name) {
    if (this.hasAttribute !== undefined &&
        this.hasAttribute(name)) {
        return this;
    }
    for (const c of this.childNodes) {
        let z = c.getElementByAttributeName(name);
        if (z !== null) { return z; }
    }
    return null;
};

Node.prototype.getElementsByAttributeName = function (name) {
    let to_return = []
    if (this.hasAttribute !== undefined && this.hasAttribute(name)) { to_return.push(this) }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    for (const c of this.children) { to_return.push(...c.getElementsByAttributeName(name)) }
    return to_return;
};

Node.prototype.getElementByHrefValue = function (value) {
    if (this.getAttribute('xlink:href') === value) { return this; }
    if (this.getAttribute('href') === value) { return this; }
    for (const c of this.children) {
        found = c.getElementByHrefValue(value);
        if (found !== null) { return found; }
    }
    return null;
};

function isStringAndEndsWith(thing, suffix) {
    if (typeof thing !== "string") { return false; }
    return thing.endsWith(suffix);
}

Node.prototype.getElementByHrefSuffix = function (value) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (isStringAndEndsWith(this.getAttribute('xlink:href'), value)) { return this; }
    if (isStringAndEndsWith(this.getAttribute('href'), value)) { return this; }
    for (const c of this.children) {
        found = c.getElementByHrefSuffix(value);
        if (found !== null) { return found; }
    }
    return null;
};

Node.prototype.getElementByClassName = function (name) {
    if (this.classList !== undefined && this.classList.contains(name)) { return this; }
    if (this.children !== undefined) {
        for (const c of this.children) {
            let found = c.getElementByClassName(name);
            if (found !== null) { return found; }
        }
    }
    return null;
};

// AUTO-GENERATED FILE --- DO NOT EDIT ---
Node.prototype.getExistingElementByClassName = function(name) {
    const to_return = this.getElementByClassName(name);
    assert(to_return !== null);
    return to_return;
};

Node.prototype.getElementByTagName = function (name) {
    if (this instanceof Text) { return null; }
    assert(this.children !== undefined);
    if (this.tagName === name) {
        return this;
    }
    for (const c of this.children) {
        found = c.getElementByTagName(name);
        if (found !== null) { return found; }
    }
    return null;
};

Node.prototype.insertAfter = function (newNode, referenceNode) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    return this.insertBefore(newNode, referenceNode.nextSibling);
};

Node.prototype.ownIndex = function () {
    assert(this.parentNode !== null);
    let children = this.parentNode.childNodes;
    let index = -1;
    for (let i = 0; i < children.length; i++) {
        if (children[i] === this) {
            assert(index === -1);
            index = i;
        }
    }
    assert(0 <= index && index < children.length);
    assert(this.parentNode.childNodes[index] === this);
    return index;
};

Node.prototype.detach = function () {
    this.parentNode.removeChild(this);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}

Node.prototype.removeAllChildren = function () {
    while (this.lastChild) { this.removeChild(this.lastChild); }
};

Node.prototype.removeLastElementChild = function () {
    assert(this.children.length >= 1);
    this.removeChild(this.lastElementChild);
};

Node.prototype.removeChildrenSlice = function (start_index, end_index) {
    let children = this.childNodes;
    assert(0 <= start_index && start_index < end_index && end_index <= children.length);
    let num_to_remove = end_index - start_index;
    let removed = [];
    for (let i = 0; i < num_to_remove; i++) {
        removed.push(this.removeChild(children[start_index]));
    }
    return removed;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
};

Node.prototype.appendAll = function (list) {
    assert(list instanceof Array);
    for (const l of list) {
        this.appendChild(l);
    }
};

Node.prototype.strictSwapClasses = function (c1, c2) {
    if (!this.classList.contains(c1)) { return; }
    this.classList.remove(c1);
    this.classList.add(c2);
};

Node.prototype.nonStrictSwapClasses = function (c1, c2) {
    this.classList.remove(c1);
    this.classList.add(c2);
};

// AUTO-GENERATED FILE --- DO NOT EDIT ---
Node.prototype.strictSwapOneOfClasses = function (array, c2) {
    if (!this.classList.containsOne(array)) { return }
    array.forEach(name => this.classList.remove(name));
    this.classList.add(c2);
};

Node.prototype.hasAncestor = function (guy) {
    let ancestor = this.parentNode;
    while (ancestor) {
        if (ancestor === guy) { return true; }
        ancestor = ancestor.parentNode;
    }
    return false;
};

Node.prototype.insertChildAtIndex = function (child, index) {
    if (!index && index != 0) {
        assert(false);
    }
    if (index >= this.childNodes.length) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(index <= this.childNodes.length);
        this.appendChild(child);
    } else {
        this.insertBefore(child, this.children[index]);
    }
};

Node.prototype.prependChild = function (child) {
    this.insertChildAtIndex(child, 0);
};

Array.prototype.none = function(test) { !this.some(test) }
Array.prototype.insert = function (index, item) { this.splice(index, 0, item); };
Array.prototype.removeElementAtIndex = function (index) { this.splice(index, 1); };
Array.prototype.get = function(index, default_value) { return (0 <= index && index < this.length) ? this[index] : default_value; }
Array.prototype.find = function(test) { for (const a of this) { if (test(a)) { return a }}; return null }
Array.prototype.sum = function() { return this.reduce((a, b) => a + b, 0) }
Set.prototype.find = function(test) { for (const a of this) { if (test(a)) { return a }}; return null }
// Array.prototype.fetch = function(test) { for (let i = 0; i < this.length; i++) { if (test(this[i])) { return this[i]; } } return null; }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
function transferChildren(from, to) {
    for (var i = 0; i < from.children.length;) {
        to.appendChild(from.children[i]);
    }
}

function transferChildrenPrepended(from, to) {
    for (var i = from.children.length - 1; i >= 0; i--) {
        to.prependChild(from.children[i]);
    }
}

function appendCopiedChildren(from, to) {
    for (var i = 0; i < from.children.length; i++) {
        to.appendChild(from.children[i].cloneNode(true));
    }
}

function findIdInSubtree(root, name) {
    if (root.getAttribute('id') === name) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        return root;
    }
    for (var i = 0; i < root.children.length; i++) {
        result = findIdInSubtree(root.children[i], name);
        if (result !== null) {
            return result;
        }
    }
    return null;
}

function create_div_for_siblings(sibs) {
    assert(sibs instanceof Array);
    assert(sibs.length > 0);
    for (let index = 0; index + 1 < sibs.length; index++) {
        assert(sibs[index].nextElementSibling === sibs[index + 1]);
    }
    assert(sibs[0] instanceof Node);
    let first_index = sibs[0].ownIndex();
    let parent = sibs[0].parentNode;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    assert(parent !== null);
    let last_index = sibs[sibs.length - 1].ownIndex();
    let removed = parent.removeChildrenSlice(first_index, last_index + 1);
    let new_div = document.createElement('div');
    parent.insertChildAtIndex(new_div, first_index);
    new_div.appendAll(removed);
    return new_div;
}

function whitespaceSplit(str) {
    return str.match(/\S+/g) || [];
}

function isInt(thing) {
    return (typeof thing === 'number' && (thing % 1) === 0);
}

function isNotAutoOrEmpty(thing) {
    return !(thing === 'auto' || thing === '');
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

function isAutoOrEmpty(thing) {
    return (thing === 'auto' || thing === '');
}

function isAutoOrEmptyOrUndefined(thing) {
    return (thing === 'auto' || thing === '' || thing === undefined);
}

var textFile = null;

function makeTextFile(text) {
    var data = new Blob([text], { type: 'text/plain' });
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
function save_2_computer(filename, contents) {
    var link = document.createElement('a');
    link.setAttribute('download', filename);
    link.href = makeTextFile(contents);
    document.body.appendChild(link);
    link.dispatchEvent(new MouseEvent('click'));
    document.body.removeChild(link);
}

function are_equal(a, b) {
    assert(typeof a === typeof b);
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
    }
    return true;
}

function randInt(from, to) {
    return from + Math.floor(Math.random() * (to + 1 - from));
}

function intToRgbHex(val) {
    assert(0 <= val && val <= 255);
    var hex = Number(val).toString(16);
    if (hex.length < 2) { hex = "0" + hex; }
    return hex;
};

function rgb(v1, v2, v3, v4) {
    let alpha = (v4) ? intToRgbHex(v4) : '';
    return '#' + intToRgbHex(v1) + intToRgbHex(v2) + intToRgbHex(v3) + alpha;
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

function randColor() {
    return '#' + intToRgbHex(randInt(150, 255)) + intToRgbHex(randInt(150, 255)) + intToRgbHex(randInt(150, 255))
}

function textarea_has_focus() {
    const mister = document.activeElement;
    return (mister !== null && (
        mister.tagName.toLowerCase() === 'textarea' ||
        mister.getAttribute('contenteditable') === 'true'
    ));
}

class Point {
    constructor(x, y) {
        assert(Number.isFinite(x))
        assert(Number.isFinite(y))
        this.x = x;
        this.y = y;
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    norm() {
        if (this.x === 0) { return abs(this.y) }
        if (this.y === 0) { return abs(this.x) }
        return sqrt((this.x * this.x) + (this.y * this.y));
    }
    norm_squared() { return (this.x * this.x) + (this.y * this.y) }
    d2f() { return ' ' + this.x + ',' + this.y; }
    scaledBy(s) { return new Point(this.x * s, this.y * s); }
    times(s) { return new Point(this.x * s, this.y * s); }
    is_close_to(other) { return (abs(this.x - other.x) < 0.0001 && abs(this.y - other.y) < 0.0001); }
    distance_to(other) { var X = this.x - other.x; var Y = this.y - other.y; return sqrt(X*X + Y*Y); }
    arg_in_degrees() {
        if (this.x === 0 && this.y > 0) { return 90; }
        if (this.x === 0 && this.y < 0) { return -90; }
        if (this.y === 0 && this.x > 0) { return 0; }
        if (this.y === 0 && this.x < 0) { return 180; }
        if (this.x === this.y && this.x > 0) { return 45; }
        if (this.x === this.y && this.x < 0) { return -135; }
        if (this.x === -this.y && this.x > 0) { return -45; }
        if (this.x === -this.y && this.x < 0) { return 135; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        return atan2(this.y, this.x) * 90 / eta;
    }
    arg_in_degrees_360() {
        var d = this.arg_in_degrees();
        return (d + 360) % 360;
    }
    arg_in_radians() { return atan2(this.y, this.x) }
    plus(other) { return new Point(this.x + other.x, this.y + other.y); }
    minus(other) {
        assert(other instanceof Point)
        return new Point(this.x - other.x, this.y - other.y);
    }
    normalized() { let n = this.norm(); assert(n > 0.01); return new Point(this.x / n, this.y / n); }
    rotated(q) {
        let p1 = new Point( cos_deg(q), sin_deg(q)).times(this.x);
        let p2 = new Point(-sin_deg(q), cos_deg(q)).times(this.y);
        return p1.plus(p2);
    }
    equals(q) { return (this.x === q.x && this.y === q.y); }
    dot(other) { return (other.x * this.x + other.y * this.y); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    projected_onto(other) { return other.times(this.dot(other)/other.norm_squared()); }
    projection_onto_line_through(a, b) {
        let this_moved = this.minus(a);
        let b_moved = b.minus(a);
        return a.plus(this_moved.projected_onto(b_moved));
    }
    is_nonzero() { return (this.x !== 0 || this.y !== 0); }
}

class BoundingBox {
    constructor(x1, x2, y1, y2) {
        if (x1 instanceof Point) {
            assert(x2 === undefined)
            assert(y1 === undefined)
            assert(y2 === undefined)
            let pt = x1
            x1 = x2 = pt.x 
            y1 = y2 = pt.y
        }
        this.x1 = x1
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        this.x2 = x2 
        this.y1 = y1
        this.y2 = y2
        assert(this.x1 <= this.x2)
        assert(this.y1 <= this.y2)
    }
    enlarge_to_accomodate(x, y) {
        if (x instanceof Point) {
            assert(y === undefined)
            let pt = x 
            x = pt.x 
            y = pt.y
        }
        this.x1 = min(x, this.x1)
        this.x2 = max(x, this.x2)
        this.y1 = min(y, this.y1)
        this.y2 = max(y, this.y2)
    }
    random_point() {
        return new Point(
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            this.x1 + Math.random() * (this.x2 - this.x1),
            this.y1 + Math.random() * (this.y2 - this.y1),
        )
    }
    area() { return (this.x2 - this.x1) * (this.y2 - this.y1) }
    contains(x, y) {
        if (x instanceof Point) {
            assert(y === undefined)
            let pt = x 
            x = pt.x 
            y = pt.y
        }
        return (x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2)
    }
}

function polarPoint(r, degs) {
    degs = mod(degs, 360)
    if (degs === 0) { return new Point(r, 0) }
    if (degs === 90) { return new Point(0, r) }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (degs === 180) { return new Point(-r, 0) }
    if (degs === 270) { return new Point(0, -r) }
    return new Point(r * cos_deg(degs), r * sin_deg(degs))
}

class TwoTwoMatrix {
    constructor(a, b, c, d) {
        if (a instanceof Point && b instanceof Point) {
            assert(c === undefined && d === undefined);
            this.a = a.x
            this.b = a.y
            this.c = b.x
            this.d = b.y
        } else {
            assert(typeof(a) === "number")
            assert(typeof(b) === "number")
            assert(typeof(c) === "number")
            assert(typeof(d) === "number")
            this.a = a
            this.b = b
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            this.c = c
            this.d = d
        }
    }

    det() { return this.a * this.d - this.b * this.c; }

    inverse() {
        const det = this.det();
        assert(abs(det) > 0.1);
        return new TwoTwoMatrix(
            this.d / det,
            -this.b / det,
            -this.c / det,
            this.a / det,
        )
    }

    right_multiply_by_other(other) {
        assert(other instanceof TwoTwoMatrix);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        return new TwoTwoMatrix(
            this.a * other.a + this.c * other.b,
            this.b * other.a + this.d * other.b,
            this.a * other.c + this.c * other.d,
            this.b * other.c + this.d * other.d,
        )
    }

    right_multiply_by_point(point) {
        assert(point instanceof Point);
        return new Point(
            this.a * point.x + this.c * point.y,
            this.b * point.x + this.d * point.y,
        )
    }

    log() {
        console.log("[", a, c);
        console.log(" ", b, d, "]");
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}

function addPoints(p1, p2) { return p1.plus(p2) }

function addThreePoints(p1, p2, p3) {
    return p1.plus(p2).plus(p3)
}

function mulConstPoint(c, p) {
    return new Point(c * p.x, c * p.y);
}

// END 1.js
// START 2.js

function recenter_top() {
    let total_width = document.body.scrollWidth;
    let inner_width = window.innerWidth;
    window.scrollTo((total_width - inner_width) / 2, 0);
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

window.addEventListener(
    'load', 
    () => {
        setTimeout(
            () => {
                if (document.compatMode !== 'CSS1Compat') { console.log("document.compatMode !== CSS1Compat:", document.compatMode); }
                setTimeout(recenter_top, 0);
            },
            20
        )
    }
);

// END 2.js
// START 3.js

let minimum_margin = 1500;
let margin = minimum_margin;
let column = 456;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
let totalwidth = column + 2 * margin; // 'dis better be right...
let ordinary_bottom_margin = 40;
let bottom_margin_when_unfinished = 1000;
let solution_porthole_shade_height = 25; // from css_can_edit.css... should that have been cleaned up?
let permanent_bottom_padding_of_solution_portholes = 26;
let porthole = document.getElementByClassName('porthole');
let slider_transition_value = 'left 1s';
let header_height = 75;
let footer_height = 80;
let out_of_sight_margin = 50;
let header_out_of_sight_height = out_of_sight_margin + header_height;
let footer_out_of_sight_height = out_of_sight_margin + footer_height;
let header_transition = 'top 1s ease 0s';
let window_innerHeight = window.innerHeight; // beecuz causes reflow,
let window_innerWidth = window.innerWidth;   // apparently...
let attic_scroll_time_budget = 500;
let things_with_background_color = document.getElementsByClassName('background_color');
let things_with_background_fill = document.getElementsByClassName('background_fill');
let header_scroll_time_budget = 1300;
let sliders = Array.from(document.getElementsByClassName('slider'));
// AUTO-GENERATED FILE --- DO NOT EDIT ---
let toc = document.getElementById('toc')
let current_slider = (toc) ? toc : ((sliders.length > 0) ? sliders[0] : null);
let working_card_textarea_lineheight = null;
let working_card_textarea_char_width = null;
let working_card_textarea_vertical_padding = null;
let working_card_textarea_num_cols_effective_value = null;
let working_flashcard_transition_value_out = '0.6s ease-in';
let super_duper_color = '#1f406010';
let exercise_happy_popup_mode = false;
let previously_shown_exercise_popup = null;
let popup_happy_mode_timeout_ticket_number = 0;
let flashcard_buttons = (document.getElementById('peek_button') === null) ? [] : [
    disable_warnings_button,
    peek_button,
    escape_button,
    trash_button,
    onward_button
];
let error_warnings_disabled_by_default = false;
let disable_warnings_button_enabled_angle = -20;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
let disable_warnings_button_disabled_angle = 55;
let flashcard_width = 700;
let flashcard_height = 500;
let presumptive_flashcard_scaling_factor = 0.8;
let working_card_scaled_width = flashcard_width * presumptive_flashcard_scaling_factor;
let working_card_scaled_height = flashcard_height * presumptive_flashcard_scaling_factor;

let abril_fatface_letter_height = 72;
let tomorrow_letter_height = 73.7;

for (let i = 0; i < sliders.length; i++) {
    sliders[i].prev = (i > 0) ? sliders[i - 1] : null;
    sliders[i].next = (i + 1 < sliders.length) ? sliders[i + 1] : null;
}

let incoming_slider = null;
let outgoing_sliders = new Set([]);
let try_to_clear_foreground_objects_timer = null;

let droppers_to_hide = new Set([]);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
let try_to_make_droppers_hidden_timer = null;

let attic_height = parseFloat(gcs(attic_background).height); // js_utilities.js comes first!
let attic_scroll_ticket_no = 0;
let attic_status = 'out';

let quick_to_element_scroll_ticket_no = 0;
let focus_indicators = []
let my_active_element = null;

let peek_duration_dial_default_position = 0
let num_peeks_per_char_dial_default_position = 0
let max_error_warnings_dial_default_position = 0

let is_mobile_devie = (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
);

console.log("is_mobile_device:", is_mobile_devie);

const taz = document.getElementById('tutorial_alpha_zone')

function stop_propagation(event) { event.stopPropagation() }

function reset_header_height() {
    header_height = header.clientHeight;
    footer_height = footer.clientHeight;
    if (header_height !== 75) { console.log("warning (zoom?): header_height =", header_height)}
    if (footer_height !== 80) { console.log("warning (zoom?): footer_height =", footer_height)}
}

(() => {
    header.is_truly_fucking_home = (() => {
        return (header.is_anchored_at_home() && header.style.top === '0px' && gcs(header).top === '0px');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    });

    header.is_anchored_at_home = (() => {
        return (header_spring_loader.style.top === '0px');
    });

    header.bring_home = (() => {
        header.style.transition = '0s';
        header.style.top = '0px';
        header_spring_loader.style.top = '0px';
    });

    header.try_to_bring_home = (() => {
        if (header.getBoundingClientRect().bottom <= 0 && header.spring_loaded_top >= 0) { header.bring_home(); }
    });

    header.move_spring_loader_up_by = ((dY) => {
        let z = parseFloat(header_spring_loader.style.top);
        header_spring_loader.style.top = max(0, z - dY) + 'px';
        header.try_to_bring_home();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    });

    footer.is_anchored_at_home = (() => {
        return (footer.style.bottom === '0px' && footer_spring_loader.style.bottom === '0px');
    });

    footer.bring_home = (() => {
        footer.style.transition = '0px';
        footer.style.bottom = '0px';
        footer_spring_loader.style.bottom = '0px';
        assert(footer.is_anchored_at_home())
    });

    footer.try_to_bring_home = (() => {
        if (footer.getBoundingClientRect().top >= window_innerHeight && footer.spring_loaded_bottom >= 0) {
            footer.bring_home(); 
        }
    });
    
    footer.move_spring_loader_down_by = ((dY) => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let z = parseFloat(footer_spring_loader.style.bottom);
        footer_spring_loader.style.bottom = max(0, z - dY) + 'px';
        footer.try_to_bring_home();
    });

    post_header.__collapse = (() => {
        post_header.style.visibility = 'hidden';
        post_header.style.height = '0px';
        post_header.style.paddingBottom = '0px';
        // Chrome bug caused by floats that prevents attic from properly closing:
        if (toc) {
            float_right_1.style.display = 'none'
            float_right_2.style.display = 'none'
        }
    });

    post_header.__uncollapse = (() => {
        post_header.style.height = 'auto';
        post_header.style.visibility = 'inherit';
        // see note in __post_header.__collapse
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (toc) {
            float_right_1.style.display = ''
            float_right_2.style.display = ''
        }
    });

    post_header.automator = ((make_it_slow) => {
        post_header.style.transition = '';
        if (attic_status === 'exclusive in') {
            post_header.__collapse();
        } else {
            post_header.__uncollapse();
            if (current_slider === null) {
                post_header.style.paddingBottom = window_innerHeight - header_height + 'px';
            } else {
                if (make_it_slow) { post_header.style.transition = '1s'; }
                post_header.style.paddingBottom = current_slider.padding_bottom_for_post_header() + 'px';
            }
            post_header.style.paddingTop = ''
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    });

    post_header.resize_handler = ((event) => {
        if (!footer.is_anchored_at_home()) {
            let b = window_innerHeight - footer_spring_loader.getBoundingClientRect().bottom;
            let z = b - footer_spring_loader.how_much_above_viewport_bottom;
            if (z > 0) { 
                footer.move_spring_loader_down_by(z);
            }
        }
        if (!header.is_anchored_at_home()) {
            let t = header_spring_loader.getBoundingClientRect().top;
            let z = t - header_spring_loader.how_much_below_viewport_top;
            if (z > 0) { header.move_spring_loader_up_by(z); }
        }
    });
})();

try {
    new ResizeObserver(post_header.resize_handler).observe(post_header);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
} catch {
    console.log("(Are you running a version of Safari that's < 13.1?)");
}

let last_post_header_onclick_timeStamp = 0
let last_post_header_mousedown_timeStamp = 0
let last_post_header_mousedown_wants_to_cancel_next_click = false
let last_post_header_click_scrolled = false

post_header.onmousedown = (event => {
    last_post_header_mousedown_timeStamp = event.timeStamp
    if (window.getSelection().isCollapsed === false) {
        last_post_header_mousedown_wants_to_cancel_next_click = true
    } else {
        last_post_header_mousedown_wants_to_cancel_next_click = false
    }
})
post_header.onmouseup = (event => {
    if (window.getSelection().isCollapsed === false) {
        // console.log('mouseup SEES SELECTION')
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    } else {
        // console.log('mouseup does not see selection')
    }
})
post_header.onclick = (event => {
    assert(!gone_dark);

    let time_dif = (event.timeStamp > last_post_header_onclick_timeStamp) ? event.timeStamp - last_post_header_onclick_timeStamp : 100000;
    last_post_header_onclick_timeStamp = event.timeStamp

    let dbclick_threshold = 300
    let deselect_all_threshold = 650
    // console.log('time_dif:', time_dif)

    let sY = event.pageY - event.y;
    let TL = new Point(margin, sY + window_innerHeight / 3);
    let TR = new Point(margin + column, sY + window_innerHeight / 3);
    let BL = new Point(margin, sY + 2 * window_innerHeight / 3);
    let BR = new Point(margin + column, sY + 2 * window_innerHeight / 3);
    let x = event.pageX;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let y = event.pageY;

    if (time_dif < deselect_all_threshold && (x <= TL.x || x >= TR.x || last_post_header_click_scrolled)) {
        window.getSelection().removeAllRanges()
        assert(window.getSelection().isCollapsed === true)
        last_post_header_mousedown_wants_to_cancel_next_click = false
    }
    last_post_header_click_scrolled = false

    if (last_post_header_mousedown_wants_to_cancel_next_click) {
        // console.log('onclick canceled because of mousedown')
        last_post_header_mousedown_wants_to_cancel_next_click = false
        return
    } else {
        last_post_header_mousedown_wants_to_cancel_next_click = false
    }

    if (window.getSelection().isCollapsed === false) { return }

    if (my_active_element !== null) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let r = my_active_element.focus_indicator.getBoundingClientRect();
        if (r.bottom > 10 && r.top < window_innerHeight - 10 &&
            r.right > 10 && r.left < window_innerWidth) {
            focusout_element(my_active_element)
            event.stopPropagation()
            return
        }
    }

    if (x - y >= TL.x - TL.y && y <= TL.y && x + y <= TR.x + TR.y) {
        event.preventDefault()
        window.getSelection().removeAllRanges()
        if (window.scrollY > 0) { last_post_header_click_scrolled = true }
        if (time_dif > dbclick_threshold) { 
            page_up_scroll()
        } else {
            home_scroll(true)
        }
    } else if (x + y >= BL.x + BL.y && y >= BL.y && x - y <= BR.x - BR.y) {
        event.preventDefault()
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        window.getSelection().removeAllRanges()
        if (window.scrollY + window_innerHeight < document.body.scrollHeight) { last_post_header_click_scrolled = true }
        if (time_dif > dbclick_threshold) {
            page_down_scroll()
        } else {
            end_scroll()
        }
    } else if (x <= margin) {
        event.preventDefault()
        // window.getSelection().removeAllRanges()
        lr_arrow(-1)
    } else if (x >= margin + column) {
        event.preventDefault()
        // window.getSelection().removeAllRanges()
        lr_arrow(1)
    }
})


function get_second_stylesheet_rule(selector) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let rules = document.styleSheets[2].rules;
    for (const rule of rules) { if (rule.selectorText === selector) { return rule; } }
    return null;
}


function reset_totalwidth() {
    let rules = document.styleSheets[2].rules;
    function setRule(rules, selector, which, value) {
        value = value + 'px';
        for (const rule of rules) {
            if (rule.selectorText === selector) {
                if (which === 'width') {
                    rule.style.width = value;
                } else if (which === 'margin-left') {
                    rule.style.marginLeft = value;
                } else if (which === 'left') {
                    rule.style.left = value;
                } else {
                    assert(false);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                }
            }
        }
    }
    if (window_innerWidth > totalwidth) {
        margin = (window_innerWidth - column) / 2;
        totalwidth = window_innerWidth;
    } else if (margin > minimum_margin) {
        margin = max((window_innerWidth - column) / 2, minimum_margin);
        totalwidth = 2 * margin + column;
    }
    setRule(rules, "body", "width", totalwidth);
    setRule(rules, "p", "margin-left", margin);
    setRule(rules, ".column", "margin-left", margin);
    setRule(rules, ".porthole", "width", totalwidth);
    setRule(rules, ".slider", "width", totalwidth);
    setRule(rules, ".fullwidth", "width", totalwidth);
    setRule(rules, ".footer", "width", totalwidth);
    setRule(rules, "#attic_background", "width", totalwidth);
    setRule(rules, "#post_footer_padding", "width", totalwidth);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    setRule(rules, "#glossary_table", "margin-left", margin - 150);
    // the following values are (should be) synchronized with css_cant_edit.sass, and could probably be read therefrom (hum)
    // setRule(rules, "#keyboard_shortcuts_1_indie_svg", "left", margin - 180 + 30);
    // setRule(rules, "#keyboard_shortcuts_3_indie_svg", "left", margin - 170 + 30);
    // setRule(rules, "#click_map_svg", "left", margin + 300 + 30);
    // setRule(rules, "#content_indie_svg", "left", margin + 180);
    setRule(rules, "#contact_indie_svg", "left", margin + 77);
    setRule(rules, "#todo_list_1", "left", margin + 132.5);
    // setRule(rules, "#red_square", "left", margin - 180 + 30)
    if (gone_dark) {
        flashcard_buttons_svg.style.left = center_left_for_flashcard_buttons() + 'px';
        if (super_duper.current_card) { super_duper.current_card.style.left = center_left_for_working_cards() + 'px' }
        tutorial.x_recenter()
    }
}


let post_header_automator_has_run = false;


// AUTO-GENERATED FILE --- DO NOT EDIT ---
window.addEventListener('DOMContentLoaded', function () {
    window_innerHeight = window.innerHeight
    window_innerWidth = window.innerWidth
    reset_header_height()
    initialize_slider_part1(current_slider)
    reset_totalwidth()
    setTimeout(() => {
        initialize_focus_indicators()
        initialize_navigation_arrows()
        initialize_toc()
        header_title.onclick = ((event) => { event.stopPropagation(); goto_toc() })
        initialize_attic()
        initialize_basement()
        initialize_flashcard_buttons()
        for (const s of sliders) { initialize_slider_part1(s) }
        post_header.automator()
        post_header_automator_has_run = true
        if (header.style.visibility === 'inherit') { footer.style.visibility = 'inherit'; basement.style.visibility = 'inherit'; }
        reset_arrow_styles()
    }, 300);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    setTimeout(() => { sliders.forEach(s => initialize_slider_part2(s)) }, 600);
    setTimeout(() => { initialize_super_duper(); }, 1000);
    setTimeout(() => { reprocess_mathjax_in(document) }, 4000);
});

function reprocess_mathjax_in(element) {
    element.getElementsByAttributeName('reprocess_mathjax').forEach(x => MathJax.Hub.Queue(["Reprocess", MathJax.Hub, x]))
}

window.addEventListener('load', function () {
    window_innerHeight = window.innerHeight;
    window_innerWidth = window.innerWidth;
    setTimeout(() => {
        header.style.visibility = 'inherit';
        if (current_slider) { current_slider.style.visibility = 'inherit'; }
        if (post_header_automator_has_run) { footer.style.visibility = 'inherit'; basement.style.visibility = 'inherit'; }
    }, 100);
});

function initialize_problem_set_slider(slider) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    slider.exercises_separator = slider.getElementByClassName('a_exercises_separator');
    slider.exercise_map = slider.getElementByClassName('exercise_map');
    slider.exercise_divs = Array.from(slider.getElementsByClassName('exercise_div'));
    assert((slider.exercise_map === null) === (slider.exercise_divs.length === 0));
    if (slider.exercise_map === null) { return; }
    initialize_exercise_map(slider.exercise_map, slider);
    slider.exercise_divs.forEach(e => initialize_exercise_div(e, slider));
    slider.get_exercise_div_with_name = name => {
        for (const e of slider.exercise_divs) { if (e.getAttribute('name') === name) { return e; } }
        return null;
    };
    slider.e_parent = null;
    slider.e_depth = 0;
    slider.e_children = [];
    var index = 0;
    slider.exercise_divs.forEach(e => {
        index++;
        // set parent
        assert(e.e_parent === undefined);
        if (e.hasAttribute('dep-on')) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            let parent_id = e.getAttribute('dep-on');
            e.e_parent = slider.get_exercise_div_with_name(parent_id);
            assert(e.e_parent !== null);
        } else {
            for (var i = index - 1; i >= 0; i--) {
                let mr = slider.exercise_divs[i];
                if (mr.hasAttribute('dep-on')) { e.e_parent = mr.e_parent; break; }
            }
            assert((i < 0) === (e.e_parent === undefined));
            if (e.e_parent === undefined) { e.e_parent = slider; }
        }
        assert(e.e_parent !== undefined);
        // register with parent
        e.e_parent.e_children.push(e);
        // set depth
        e.e_depth = e.e_parent.e_depth + 1;
        // get ready for children
        e.e_children = [];
    })
    slider.exercise_divs.forEach(e => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        var z = [];
        var a = e.e_parent;
        while (a.e_parent !== null) {
            for (const c of a.e_children) { z.push(c); }
            a = a.e_parent;
        }
        e.everything_that_must_be_unlocked_to_unlock_me_including_me = z.sort((a, b) => a.e_number - b.e_number);
    });
    slider.last_visible_exercise_div = (() => {
        for (i = slider.exercise_divs.length - 1; i >= 0; i--) { if (slider.exercise_divs[i].style.display === 'block') { return slider.exercise_divs[i]; } }
        return null;
    });
    slider.reset_finished = (() => {
        let old_finished = slider.finished;
        let num_e_divs = slider.exercise_divs.length;
        slider.finished = (num_e_divs >= 1 && slider.exercise_divs[num_e_divs - 1].is_locked()) ? false : true;            
        post_header.automator(old_finished !== slider.finished);
    });
    slider.reset_finished();
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

function initialized_minified_flashcard(f) {
    f.setAttribute('minified-transform', f.style.transform);
    f.minified = true;

    f.mouse_in = false;
    f.mouse_in_minipath = false;
    f.has_checkbox = false;

    if (f.has_checkbox) {
        f.mouse_in_checkbox = false;
        f.checkbox = f.getElementByClassName('an_fc_checkbox');
        f.checkbox.flashcard = f;
        f.checkbox_svg = f.checkbox.parentNode;
        f.checkbox_svg.setAttribute('minified-transform', f.checkbox_svg.style.transform);
        f.checkbox_svg.mouse_in = false;
        initialize_checkbox(f.checkbox);
        f.checkbox_svg.onmouseenter = (() => { f.mouse_in_checkbox = true; });
        f.checkbox_svg.onmouseleave = (() => { f.mouse_in_checkbox = false; });
        if (f.table.flashcards.length > 1) { f.checkbox.set_status_to('inactive checked'); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        else { f.checkbox.set_status_to('disabled inactive'); }
    } else {
        f.mouse_in_checkbox = false;
    }
    f.onmouseenter = ((event) => {
        f.mouse_in = true;
        setTimeout(f.action_on_hover, 100);
    });
    f.minify = (() => {
        f.minified = true;
        f.style.transform = f.getAttribute('minified-transform');
        f.classList.remove('table_flashcard_popup_border');
        f.classList.add('table_flashcard_minified_border');
        setTimeout(f.resetZIndexTo3, 350);

        if (f.has_checkbox) {
            f.checkbox_svg.style.transform = f.checkbox_svg.getAttribute('minified-transform');
        }
    });
    f.onmouseleave = ((event) => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        f.mouse_in = false;
        f.minify();
    });
    f.action_on_hover = (() => {
        if (f.mouse_in === false) { return; }
        if (f.mouse_in_checkbox === true) { setTimeout(f.action_on_hover, 200); return; }
        f.style.zIndex = 4;
        f.minified = false;
        f.style.transform = f.getAttribute('popup-transform');
        f.classList.remove('table_flashcard_minified_border');
        f.classList.add('table_flashcard_popup_border');
        f.style.outline = '2.3px solid #fdfdfd';
        if (f.has_checkbox) { f.checkbox_svg.style.transform = f.checkbox_svg.getAttribute('popup-transform'); }
    });
    f.resetZIndexTo3 = (() => {
        if (f.minified) {
            f.style.zIndex = 3; // 3 was chosen higher than 2 (the header) was chosen higher than 1 (the footer)
        }
    });
    f.minipath = f.getElementByClassName('a_minipath');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    f.minipath.onmouseenter = (() => { f.mouse_in_minipath = true; });
    f.minipath.onmouseleave = (() => {
        f.mouse_in_minipath = false;
        setTimeout(() => { if (f.mouse_in_minipath === false && f.mouse_in_checkbox === false) { f.minify(); } }, 10);
    });
    f.onclick = (() => { smuthe_recenter(document.body.scrollHeight - window_innerHeight) })
}


function initialize_flashcard_table(table) {
    table.flashcards = table.getNextSiblingsByClassNameUntil('table_flashcard_frontpanel', 'flashcard_table');
    table.selected = false;
    table.title = table.getElementByClassName('flashcard_table_title');
    table.inner_frame = table.getElementByClassName('attic_frame_inner');
    table.click_area = table.focus_indicator.event_source
    assert(table.click_area !== null)
    table.cobweb = table.getElementByClassName('cobweb');
    table.dark_selection_rect = table.getElementByClassName('selection_indicator_rect_dark_mode');
    table.frames = Array.from(table.getElementsByClassName('attic_frame_stroke'));

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    table.select = (() => {
        table.cobweb.style.visibility = 'inherit';
        table.selected = true;
    });

    table.deselect = (() => {
        table.cobweb.style.visibility = 'hidden';
        table.selected = false;
    });

    table.go_dark = (() => {
        for (const f of table.frames) { f.strictSwapClasses('attic_frame_stroke', 'attic_frame_stroke_dark'); }
        table.title.classList.add('dark_font_fill');
    });

    table.go_light = (() => {
        for (const f of table.frames) { f.strictSwapClasses('attic_frame_stroke_dark', 'attic_frame_stroke'); }
        table.title.classList.remove('dark_font_fill');
    });

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    table.click_area.onclick = (() => {
        if (table.selected) { table.deselect() } else { table.select() }
        // let num_selected = table.slider.tables.filter(x => x.selected).length
        // if (num_selected == 0) { table.select() }
    });

    for (const f of table.flashcards) {
        f.table = table;
        f.slider = table.slider;
        initialized_minified_flashcard(f);
    }
}


function initialize_mode_selector(ms) {
    let angle = 46;
    ms.background_click_areas = Array.from(ms.getElementsByClassName('alpha'));
    ms.textfields = Array.from(ms.getElementsByClassName('mode_selector_text'));
    ms.backgrounds = Array.from(ms.getElementsByClassName('engraving'));
    ms.backgrounds.pop(); // there goes the dividing slash...
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    ms.backgrounds.pop(); // there goes the arrow...
    // console.log(ms.backgrounds.length);
    assert(ms.backgrounds.length === 2);
    assert(ms.textfields.length === 2);
    assert(ms.background_click_areas.length === 2);
    ms.arrow = ms.getElementByClassName('mode_selector_group');
    ms.arrow.current_angle = -angle;
    ms.arrow.style.transition = '0.3s';
    ms.arrow.reset_transform = (() => {
        ms.arrow.setAttribute('transform', 'rotate(' + ms.arrow.current_angle + ')');
        setTimeout(() => {
            let i = (ms.arrow.current_angle > 0) ? 1 : 0;
            ms.textfields[i].classList.remove('mode_selector_text_inactive_fill');
            ms.textfields[i].classList.add('mode_selector_text_active_fill');
            ms.textfields[1 - i].classList.remove('mode_selector_text_active_fill');
            ms.textfields[1 - i].classList.add('mode_selector_text_inactive_fill');
            ms.backgrounds[i].classList.remove('dial_screen_inactive_fill');
            ms.backgrounds[i].classList.add('dial_screen_active_fill');
            ms.backgrounds[1 - i].classList.remove('dial_screen_active_fill');
            ms.backgrounds[1 - i].classList.add('dial_screen_inactive_fill');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }, 150);
    });
    ms.arrow.reset_transform();
    ms.arrow.getElementByClassName('mode_selector_knob').onclick = (() => {
        ms.arrow.current_angle *= -1;
        ms.arrow.reset_transform();
    });
    ms.background_click_areas[0].onclick = (() => {
        ms.arrow.current_angle = -angle;
        ms.arrow.reset_transform();
    });
    ms.background_click_areas[1].onclick = (() => {
        ms.arrow.current_angle = angle;
        ms.arrow.reset_transform();
    });
    ms.go_dark = (() => {
        for (let i = 0; i < 2; i++) {
            ms.textfields[i].strictSwapClasses('mode_selector_text_active_fill', 'mode_selector_text_active_fill_dark');
        }
    });
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    ms.go_light = (() => {
        for (let i = 0; i < 2; i++) {
            ms.textfields[i].strictSwapClasses('mode_selector_text_active_fill_dark', 'mode_selector_text_active_fill');
        }
    });
}


function initialize_start_button(button) {
    button.slider = button.getAncestorByClassName('slider');
    button.circle = button.getElementByClassName('start_button_stroke');
    button.circle.onclick = ((event) => { event.stopPropagation(); if (current_slider === button.slider && !gone_dark) { go_dark(); }});
    button.go_dark = (() => { button.circle.strictSwapClasses('start_button_fill', 'start_button_fill_dark'); });
    button.go_light = (() => { button.circle.strictSwapClasses('start_button_fill_dark', 'start_button_fill'); });
    assert(button.focus_indicator.event_source === button.circle)
}


function initialize_tutorial_button(button) {
    button.slider = button.getAncestorByClassName('slider');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    button.circle = button.getElementByClassName('start_button_stroke');
    button.circle.onclick = ((event) => { event.stopPropagation(); if (current_slider === button.slider && !gone_dark) { go_tutorial(); }});
    button.go_dark = (() => { button.circle.strictSwapClasses('tutorial_button_fill', 'tutorial_button_fill_dark'); });
    button.go_light = (() => { button.circle.strictSwapClasses('tutorial_button_fill_dark', 'tutorial_button_fill'); });
}


function initialize_working_cards_of_slider(slider) {
    if (slider.tables === undefined) { return }
    let super_div = super_duper.getElementByClassName('working_flashcards_' + slider.ch_number);
    if (slider.tables.length > 0) {
        slider.all_working_cards = []
        for (let i = 0; i < slider.tables.length; i++)  {
            slider.tables[i].working_cards = Array.from(super_div.getElementByClassName('working_cards_of_table_' + i).children);
            slider.all_working_cards.push(...slider.tables[i].working_cards)
        }
    } else {
        slider.all_working_cards = (super_div === null) ? [] : Array.from(super_div.children);
    }
    for (const card of slider.all_working_cards) { initialize_working_card(card); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}


function initialize_super_duper() {
    super_duper.ticket_number = 0
    super_duper.increment_ticket_number = (() => { super_duper.ticket_number += 1; return super_duper.ticket_number })
    for (const s of sliders) { initialize_working_cards_of_slider(s) }
    super_duper.dequeue_current_card = (already_recentered => {
        super_duper.current_card.youre_up(already_recentered)
        peek_button.reset_annotation_for_current_card()
        disable_warnings_button.reset_annotation_for_current_card()
        trash_button.reset_annotation_for_current_card()
    })
    super_duper.try_to_dequeue = ((count, already_recentered) => {
        if (count === undefined) { count = 0 }
        if (!gone_dark) { return }
        if (super_duper.current_card !== null) { return }
        if (super_duper.queue.length > 0) {
            super_duper.current_card = super_duper.queue.shift()
            super_duper.dequeue_current_card(already_recentered)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            return
        }
        if (super_duper.current_cards.every(x => x.is_trashed)) { escape_button_click() }
        if (count < 10) { setTimeout(() => { super_duper.try_to_dequeue(count + 1, already_recentered) }, 400) }
    })
    super_duper.current_card = null
    super_duper.onclick = ((event) => {
        event.stopPropagation()
        if (super_duper.current_card) {
            // assuming we lost the caret (didn't we? unless we do event.preventDefault()...) ps: I tested this don't think it works...
            let ta = super_duper.current_card.textarea_div.student_textarea
            if (!ta.hasAttribute('disabled')) { ta.focus_indicator.enable() }
            let c_top = super_duper.flashcard_session_card_top  // wrt document
            let c_left = center_left_for_working_cards()  // wrt document
            let c_width = working_card_scaled_width
            let c_height = working_card_scaled_height
            let dx = event.layerX - c_left
            let dy = event.layerY - c_top
            let margin_height = max(0, (window_innerHeight - c_height) / 2)
            if (dx > c_width) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                if (dy < 0 && super_duper.current_card) {
                    if (!super_duper.current_card.answer_submitted) {
                        onward_button.submit_answer()
                    } else if (
                        super_duper.current_card.notes !== null &&
                        super_duper.current_card.notes.visibility !== 'inherit'
                    ) {
                        super_duper.current_card.display_notes()
                    }            
                }
                else if (dy < c_height + margin_height * 0.5) { onward_button.move_to_next_card(); }
                else { trash_button.onclick(); }
            }
            else if (dx >= 0) {
                if (dy >= c_height) { peek_button_click() }
            }
        }
        
    })
    super_duper.flashcard_session_top_has_been_reset = (() => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (super_duper.queue) { super_duper.queue.forEach(card => { card.style.top = super_duper.flashcard_session_card_top + 'px'}) }
        if (super_duper.current_card) { super_duper.current_card.style.top = super_duper.flashcard_session_card_top + 'px' }
        if (tutorial.style.visibility === 'inherit') { tutorial.reset_top(super_duper.min_sY) }
        if (flashcard_buttons_svg.style.visibility === 'inherit') { flashcard_buttons_svg.style.top = super_duper.flashcard_session_card_top + flashcard_buttons_svg.offset_from_flashcard_session_top + 'px'; }
    })
    super_duper.max_sY = (() => {
        assert(super_duper.current_card !== null)
        let protrusion = super_duper.current_card.protrusion_from_bottom_edge_scaled()
        let protrusion_past_comfort = max(0, protrusion - 0.5 * super_duper.card_bottom_to_viewport_bottom)
        return super_duper.min_sY + protrusion_past_comfort
    })
}


function initialize_flashcard_set_slider(slider) {
    slider.tables = Array.from(slider.getElementsByClassName('flashcard_table'));
    slider.selected_tables = (() => { return slider.tables.filter(table => table.selected) });
    slider.select_all_tables = (() => { for (const table of slider.tables) { table.select() }})
    slider.dial_texts = Array.from(slider.getElementsByClassName('dial_screen_text'));
    slider.peeks_per_char_dial = slider.getElementByClassName('peeks_per_char_dial');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    slider.peek_duration_dial = slider.getElementByClassName('peek_duration_dial');
    slider.max_error_warnings_dial = slider.getElementByClassName('max_error_warnings_dial');
    slider.emulogic_display = slider.getElementByClassName('emulogic_text');
    slider.mode_selector = slider.getElementByClassName('a_mode_selector');
    slider.start_button = slider.getElementByClassName('a_start_button');
    slider.tutorial_button = slider.getElementByClassName('a_tutorial_button');
    slider.medium_flashcards = Array.from(slider.getElementsByClassName('a_medium_flashcard_container'))
    slider.char_count_bubbles = Array.from(slider.getElementsByClassName('char_count_bubble_color'))
    slider.bonus_bubbles = Array.from(slider.getElementsByClassName('bonus_bubble_color'))
    slider.separators = Array.from(slider.getElementsByClassName('separator'))
    slider.working_cards_in_selected_tables = (() => {
        let to_return = []
        for (const table of slider.selected_tables()) { to_return.push(...table.working_cards) }
        return to_return
    })
    for (const t of slider.tables) {
        t.slider = slider;
        initialize_flashcard_table(t);
        assert(slider.tables.includes(t));
        t.flashcards.forEach(f => assert(slider.tables.includes(f.table)));
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    }
    slider.go_dark = (() => {
        slider.tables.forEach(t => t.go_dark())
        slider.dial_texts.forEach(t => t.strictSwapClasses('dial_active_text', 'dial_active_text_dark'))
        if (slider.start_button) {
            slider.start_button.go_dark()
            slider.tutorial_button.go_dark()
            slider.mode_selector.go_dark()
        } else {
            assert(slider.type !== 'flashcard set')
        }
        slider.char_count_bubbles.forEach(b => b.strictSwapClasses('char_count_bubble_color', 'char_count_bubble_color_dark'))
        slider.bonus_bubbles.forEach(b => b.strictSwapClasses('bonus_bubble_color', 'bonus_bubble_color_dark'))
        slider.separators.forEach(s => s.strictSwapClasses('separator', 'separator_dark'))
    });
    slider.go_light = (() => {
        slider.tables.forEach(t => t.go_light())
        slider.dial_texts.forEach(t => t.strictSwapClasses('dial_active_text_dark', 'dial_active_text'))
        if (slider.start_button) {
            slider.start_button.go_light();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            slider.tutorial_button.go_light();
            slider.mode_selector.go_light();
        } else {
            assert(slider.type !== 'flashcard set')
        }
        slider.char_count_bubbles.forEach(b => b.strictSwapClasses('char_count_bubble_color_dark', 'char_count_bubble_color'))
        slider.bonus_bubbles.forEach(b => b.strictSwapClasses('bonus_bubble_color_dark', 'bonus_bubble_color'))
        slider.separators.forEach(s => s.strictSwapClasses('separator_dark', 'separator'))
    });
    if (slider.peeks_per_char_dial) {
        initialize_num_peeks_per_char(slider.peeks_per_char_dial);
        initialize_peek_duration_dial(slider.peek_duration_dial);
        initialize_max_error_warnings_dial(slider.max_error_warnings_dial);
        initialize_mode_selector(slider.mode_selector);
        initialize_start_button(slider.start_button);
        initialize_tutorial_button(slider.tutorial_button);
    } else {
        assert(slider.type !== 'flashcard set')
    }
    slider.flashcards_separator = slider.getElementByClassName('a_flashcards_separator')
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    slider.suggested_sY_for_flashcard_session = (() => {
        if (slider.tables.length > 0) {
            let rect = slider.tables[0].getElementByClassName('flashcard_table_title').getBoundingClientRect()
            return window.scrollY + rect.bottom - 10
        } else {
            let rect = slider.flashcards_separator.getBoundingClientRect()
            return window.scrollY + rect.top - 20
        }
    })
    slider.medium_flashcards.forEach(f  => f.onclick = (() => { smuthe_recenter(document.body.scrollHeight - window_innerHeight) }))
}


function initialize_toc() {
    if (toc === null) { return }
    let toc_ps = Array.from(toc.getElementsByClassName('toc_p'))
    let bootcamp_toc_ps = Array.from(toc.getElementsByClassName('toc_p_bootcamp'))
    for (const a of [toc_ps, bootcamp_toc_ps]) { a.forEach(p => {
        p.onclick = ((event) => {
            event.stopPropagation()
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            toc_goto(event)
        })
    })}
}


function initialize_slider_part2(slider) {
    assert(slider.classList.contains('slider'));
    slider.style.display = 'block';
    initialize_problem_set_slider(slider);
    initialize_flashcard_set_slider(slider);
}


function initialize_slider_part1(slider) {
    assert(slider.classList.contains('slider'));
    if (slider.initialized_part1) { return; }
    slider.initialized_part1 = true;

    let w = sliders.indexOf(slider);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let z = sliders.indexOf(current_slider);

    // position, visibility
    if (w < z) {
        slider.style.left = (-totalwidth) + 'px';
        slider.style.top = '0px';
    } else if (w > z) {
        slider.style.left = totalwidth + 'px';
        slider.style.top = '0px';
    } else {
        assert(slider === current_slider);
        slider.style.position = 'relative';
        slider.style.left = '0px';
        slider.style.top = '0px';
        slider.style.display = 'block';
    }

    // stored_rect_top
    slider.stored_rect_top = header_height;

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    // type, .finished
    if (slider.classList.contains('ch')) {
        slider.type = 'chapter';
    } else if (slider.classList.contains('ex')) {
        slider.type = 'problem set';
        slider.finished = false;
    } else if (slider.classList.contains('fc')) {
        slider.type = 'flashcard set';
    } else if (slider.classList.contains('index')) {
        slider.type = 'index';
    } else if (slider.classList.contains('diegos')) {
        slider.type = 'diegos';
    } else if (slider.classList.contains('toc')) {
        slider.type = 'toc';
    } else {
        assert(false);
    }

    slider.is_flashcard_slider = (() => (slider.type === 'flashcard set'));
    slider.is_problem_slider = (() => (slider.type === 'problem set'));
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    slider.is_chapter_slider = (() => (slider.type === 'chapter'));

    // name
    slider.chapter_title = slider.getElementByClassName('chapter_title');

    if (slider.chapter_title !== null) {
        let inner = slider.chapter_title.innerText.trim();
        if (inner === "") { inner = slider.chapter_title.textContent.trim(); }
        if (inner.startsWith('Table')) {
            slider.ch_number = undefined;
            slider.name = slider.type;
        } else if (inner.startsWith('Index')) {
            slider.ch_number = 0;
            slider.name = ((slider.type.startsWith('f')) ? 'index ' : 'ze ') + slider.type;
        } else if (inner.startsWith('Chapter')) {
            slider.ch_number = parseInt(inner.split(' ')[1])
            slider.name = 'ch' + slider.ch_number + ' ' + slider.type
        } else if (inner.startsWith('Bootcamp')) {
            slider.ch_number = -parseInt(inner.split(' ')[1])
            slider.name = 'ch' + slider.ch_number + ' ' + slider.type
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        } else {
            slider.name = 'unprocessed ' + inner;
        }
    } else {
        slider.name = slider.type + " (no chapter_title)";
    }

    // transition (to allow us to assert stuff later)
    slider.style.transition = slider_transition_value;

    // various height functions...
    slider.bottom_margin = (() => {
        if (slider.type === 'problem set') {
            let desired_final_margin = (slider.finished) ? ordinary_bottom_margin : bottom_margin_when_unfinished;
            return desired_final_margin - permanent_bottom_padding_of_solution_portholes
        } else {
            return ordinary_bottom_margin
        }
    });

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    slider.padding_bottom_for_post_header = (() => { 
        return max(slider.bottom_margin() + footer_height, window_innerHeight - header_height - slider.clientHeight)
    });

    slider.future_height_with_footer = (() => {
        return max(slider.clientHeight + slider.bottom_margin() + footer_height, window_innerHeight - header_height);
    });

    slider.set_to_target = (() => {
        slider.style.left = slider.target_left + 'px';
        slider.style.top = slider.target_top + 'px';
    });

    slider.is_in_flow = (() => true);

    slider.next_in_flow = (() => {
        let s = slider.next;
        while (s !== null) {
            if (s.is_in_flow()) { return s; }
            s = s.next;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
        return null;
    });

    slider.prev_in_flow = (() => {
        let t = slider.prev;
        while (t !== null) {
            if (t.is_in_flow()) { return t; }
            t = t.prev;
        }
        return null;
    });

    slider.intervening_sliders = ((until) => {
        let intervening = [];
        let s = slider.next;
        while (s !== until) {
            assert(s !== null);
            if (s === until) { break; }
            intervening.push(s);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            s = s.next;
        }
        return intervening;
    });

    slider.is_before = ((hello) => {
        let s = slider.next;
        while (s !== null) {
            if (s === hello) { return true; }
            s = s.next;
        }
        return false;
    });

    slider.is_after = ((hello) => {
        let s = slider.prev;
        while (s !== null) {
            if (s === hello) { return true; }
            s = s.prev;
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        return false;
    });
}


function internal_foreground_scroll_request(dX, dY, window_maybe_already_scrolled, scroll_to_bitter_end) {
    // if event !== null and !event.defaultPrevented then alas the browser will presumably
    // have scrolled the foreground though we didn't want it to (preventDefault() has failed,
    // as it fails with batches of wheel elements); so in that case let's not scroll the
    // window :/ (the bad thing is that the browser may have scrolled by an innapropriate dY)
    if (!window_maybe_already_scrolled) {
        window.scrollBy(dX, dY + ((scroll_to_bitter_end) ? 2 : 0)); // nb: there's no evidence so far this scroll_to_bitter_end thing makes any difference
    }

    if (!header.is_anchored_at_home()) {
        (dY < 0) ? header.move_spring_loader_up_by(-dY) : header.try_to_bring_home();
    }

    if (!footer.is_anchored_at_home()) {
        (dY > 0) ? footer.move_spring_loader_down_by(dY) : footer.try_to_bring_home();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    }

    if (attic_status === 'in' && window.scrollY >= attic.current_height()) { attic_insta_leave(); }
}


function external_foreground_scroll_request(eX, eY, timestamp, event) {
    let sY, sX, tY, tX, zH, zW, nY, nX, dY, dX;
    let scroll_to_bitter_end;

    // console.log('yeah so...');
    function compute_dX() {
        sX = window.scrollX;
        zW = totalwidth - window_innerWidth;
        nX = min(max(sX + tX, 0), zW);
        dX = nX - sX;
        if (gone_dark && super_duper.current_card) {
            let min_sX = margin - 350
            let max_sX = margin + column + 350 - window_innerWidth
            if (min_sX >= max_sX) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                dX = 0
            } else {
                console.log('min_sX, max_sX:', min_sX, max_sX);
                nX = min(max(sX + tX, min_sX), max_sX)
                dX = nX - sX
            }
        }
    }

    function compute_dY() {
        sY = window.scrollY;
        zH = max(0, document.body.scrollHeight - window_innerHeight);
        nY = min(max(sY + tY, 0), zH);

        if (gone_dark && super_duper.current_card) {
            let clamped_Y = min(max(nY, super_duper.min_sY), super_duper.max_sY())
            if (clamped_Y < nY && tY > 0) { nY = clamped_Y }
            if (clamped_Y > nY && tY < 0) { nY = clamped_Y }
        }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
        dY = nY - sY;
        scroll_to_bitter_end = (sY + tY >= zH);

        if (attic_status === 'entering') {
            dY = min(dY, 0);
        } else if (attic_status === 'leaving') {
            dY = max(dY, 0);
        } else if (basement.style.height !== '0px' && !gone_dark && dY > 0) {
            let margin = max(0, basement.getBoundingClientRect().top - window_innerHeight)
            dY = min(dY, margin)
        }
    }

    function do_it(inner_timestamp) {
        compute_dX();
        compute_dY();
        internal_foreground_scroll_request(dX, dY, event !== null && !event.defaultPrevented, scroll_to_bitter_end);
    }

    tX = parseInt(eX);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    tY = parseInt(eY);

    if (timestamp) {
        do_it(timestamp);
        return dY;
    } else {
        window.requestAnimationFrame(do_it);
        return null;
    }
}

function we_appear_to_be_centered() {
    let dif = abs(window.scrollX - (totalwidth - window_innerWidth) / 2)
    return (dif <= 300)
}

window.addEventListener('resize', (event) => {
    // check if we should recenter
    let was_centered_before_resize = we_appear_to_be_centered();
    let old_window_innerHeight = window_innerHeight;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    window_innerHeight = window.innerHeight;
    window_innerWidth = window.innerWidth;
    if (attic_status === 'exclusive in' && window_innerHeight > post_header.getBoundingClientRect().y) { attic_status = 'in'; }
    post_header.automator();
    if (gone_dark) {
        if (super_duper.current_card) { 
            let card = super_duper.current_card;
            if (gcs(card).left === card.style.left) { super_duper.current_card.style.transition = '0s'; }
        }
        if (gcs(flashcard_buttons_svg).left === flashcard_buttons_svg.style.left) {
            flashcard_buttons_svg.style.transition = '0s';
        } 
        go_dark_set_min_sY()
        super_duper.flashcard_session_top_has_been_reset()
        smuthe_recenter(super_duper.min_sY)
    } else if (was_centered_before_resize) {
        // TAKE THIS OUT IN PRODUCTION MODE:
        smuthe_recenter(super_duper.min_sY)
    }
    reset_totalwidth()
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (window_innerHeight > old_window_innerHeight) {
        let dif = window_innerHeight - old_window_innerHeight;
        // throw some spaghetti at the wall (this stuff is not exact/correct b/c well, whatever) (it's complicated)
        if (!footer.is_anchored_at_home()) { footer.move_spring_loader_down_by(dif); }
        if (!header.is_anchored_at_home() && window.scrollY + window_innerHeight + 1 >= document.body.scrollHeight) { header.move_spring_loader_up_by(dif) }
    }
});

window.addEventListener('mouseup', (event) => {
    if (taz && taz.mousedown_pt) { taz.mousedown_pt = null; }
});

window.addEventListener('mousemove', (event) => {
    if (!gone_dark || tutorial.style.visibility === 'hidden') { return }
    tutorial_pointer_hider.style.pointerEvents = 'none'
    if (taz && taz.mousedown_pt) { taz.onmousemove(event); }
})

window.addEventListener(
    'wheel',
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    e => {
        if (attic.exclusive_status() && header.is_anchored_at_home() && footer.is_anchored_at_home() && !gone_dark) { return; }
        e.preventDefault();
        external_foreground_scroll_request(e.deltaX, e.deltaY, null, e);
    },
    { passive: false }
);


function deactivate_navigation_arrow(el) {
    el.stroke_group.nonStrictSwapClasses('active_navigation_arrow', 'inactive_navigation_arrow')
    el.focus_indicator.disable();
}


function activate_navigation_arrow(el) {
    el.stroke_group.nonStrictSwapClasses('inactive_navigation_arrow', 'active_navigation_arrow')
    el.focus_indicator.enable();
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---

function initialize_navigation_arrows() {
    let navigation_arrows = [
        header_up_arrow,
        header_left_arrow,
        header_right_arrow,
        footer_up_arrow,
    ]
    navigation_arrows.forEach(a => {
        a.stroke_group = a.getExistingElementByClassName('navigation_arrow_stroke_group')
        // a.alpha = a.getExistingElementByClassName('alpha_pointer')
        a.alpha = a.stroke_group
    })
    header_up_arrow.alpha.onclick = ((event) => {
        event.stopPropagation()
        attic_scroll('toggle')
    })
    header_left_arrow.alpha.onclick = ((event) => {
        event.stopPropagation()
        lr_arrow(-1)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    })
    header_right_arrow.alpha.onclick = ((event) => {
        event.stopPropagation()
        lr_arrow(1)
    })
    footer_up_arrow.alpha.onclick = ((event) => {
        event.stopPropagation()
        home_scroll()
    })
    // activate_navigation_arrow(header_up_arrow)
    // activate_navigation_arrow(footer_up_arrow)
}


function reset_arrow_styles() {
    if (current_slider === undefined || current_slider.prev_in_flow() === null || attic_status === 'entering' || attic_status === 'exclusive in') {
        deactivate_navigation_arrow(header_left_arrow);
    } else {
        activate_navigation_arrow(header_left_arrow);
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---

    if (current_slider === undefined || current_slider.next_in_flow() === null || attic_status === 'entering' || attic_status === 'exclusive in') {
        deactivate_navigation_arrow(header_right_arrow);
    } else {
        activate_navigation_arrow(header_right_arrow);
    }
}


function try_to_make_droppers_hidden() {
    let to_drop = [];
    droppers_to_hide.forEach(d => {
        if (parseFloat(gcs(d.solution_porthole).height) <= 27) { // had to put <= 27 instead of === '26px' b/c value was sometimes 25.996 or whatever
            d.style.visibility = 'hidden';
            to_drop.push(d);
        }
    })
    to_drop.forEach(d => droppers_to_hide.delete(d))
    if (droppers_to_hide.size === 0) {
        clearInterval(try_to_make_droppers_hidden_timer);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        try_to_make_droppers_hidden_timer = null;
    }
}


function try_to_clear_foreground_objects() {
    for (const outgoing_slider of outgoing_sliders) {
        if (gcs(outgoing_slider).left === outgoing_slider.style.left) {
            outgoing_slider.style.visibility = 'hidden';
            outgoing_sliders.delete(outgoing_slider);
        }
    }

    if (outgoing_sliders.size === 0) {
        clearInterval(try_to_clear_foreground_objects_timer);
        try_to_clear_foreground_objects_timer = null;
    }

    else if (try_to_clear_foreground_objects_timer === null) {
        try_to_clear_foreground_objects_timer = setInterval(try_to_clear_foreground_objects, 350);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    }
}


function ease_in_out_quadratic(t) {
    return t < .5 ? 2 * t * t : (t < 1 ? -1 + (4 - 2 * t) * t : 1);
}


function ease_in_sine(t) {
    return 0.5 + 0.5 * Math.sin(eta * (2 * t - 1));
}


function home_scroll(slow) {
    if (attic_status === 'out' && window.scrollY === 0) {
        attic_scroll('toggle');
    } else {
        quick_to_element_scroll(attic.current_height());
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}


function end_scroll() {
    let sY = window.scrollY;
    let difY = basement.getBoundingClientRect().top - window_innerHeight;
    quick_to_element_scroll(sY + difY);
}


function initialize_attic() {
    attic.current_height = (() => parseFloat(attic.style.height));
    attic.not_leave_entering = (() => (attic_status !== 'entering' && attic_status !== 'leaving'));
    attic.exclusive_status = (() => (attic_status === 'exclusive in' || attic_status === 'out'));
}

function initialize_basement() {
    basement.current_height = (() => parseFloat(basement.style.height));
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
function attic_insta_leave() {
    attic_status = 'leaving';
    attic_scroll_ticket_no++;
    let ticket_no = attic_scroll_ticket_no;
    let trsf = header_up_arrow_rotator.getAttribute('transform');
    let arrow_starting_angle = parseFloat(trsf.slice(7, -1));
    let arrow_ending_angle = -90;
    let start_time = null;
    let time_budget = attic_scroll_time_budget * 0.6;

    window.requestAnimationFrame(attic_step);

    function attic_step(timestamp) {
        if (ticket_no !== attic_scroll_ticket_no) {
            console.log("attic_insta_leave returning because ticket_no changed");
            return;
        }

        assert(attic_status === 'leaving');

// AUTO-GENERATED FILE --- DO NOT EDIT ---
        function finalize_out_status() {
            attic_status = 'out';

            header_up_arrow_rotator.setAttribute('transform', `rotate(${arrow_ending_angle})`);
            window.scrollBy(0, -attic_height);
            attic.style.height = '0px';
            attic.style.visibility = 'hidden';
        }

        if (start_time === null) {
            start_time = timestamp - 20;
        }

        let time_elapsed = timestamp - start_time;
        let sY = window.scrollY;
        assert(sY >= attic_height);

        if (time_elapsed >= time_budget + 50) {
            finalize_out_status();
            return;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }

        let t = time_elapsed / time_budget;
        let T = min(1, t);
        let new_arrow_angle = arrow_starting_angle * (1 - T) + arrow_ending_angle * T; // why do I use linear? who knows

        header_up_arrow_rotator.setAttribute('transform', `rotate(${new_arrow_angle})`);

        window.requestAnimationFrame(attic_step);
    }

}

function attic_scroll(command) {
    if (gone_dark) { return; }
    attic_scroll_ticket_no++;
    const ticket_no = attic_scroll_ticket_no;
    const time_budget = attic_scroll_time_budget;
    const trsf = header_up_arrow_rotator.getAttribute('transform');
    const arrow_starting_angle = parseFloat(trsf.slice(7, -1));
// AUTO-GENERATED FILE --- DO NOT EDIT ---

    if (command === 'toggle') {
        if (attic_status === 'out') {
            attic_status = 'entering';
            attic.style.visibility = 'visible';
            const sY = window.scrollY;
            attic.style.height = attic_height + 'px';
            window.scroll({'top': sY + attic_height}); // this worked better than a relative scroll, in firefox
        } else if (attic_status === 'entering') {
            attic_status = 'leaving';
        } else if (attic_status === 'leaving') {
            attic_status = 'entering';
        } else if (attic_status === 'in' || attic_status === 'exclusive in') {
            attic_status = 'leaving';
            post_header.automator(); // i have honestly forgotten why
        } else {
            assert(false);
        }
    }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    const dest_sY = (attic_status === 'entering') ? max(0, attic_height + header_height - window.innerHeight) : attic_height;
    const arrow_ending_angle = (attic_status === 'entering') ? -270 : -90;

    if (attic_status === 'leaving') { footer.style.display = 'block'; }

    window.requestAnimationFrame(attic_step);

    reset_arrow_styles();

    let start_time = null;
    let old_f_value = 0;

    function attic_step(timestamp) {
        function finalize_in_status() {
            header_up_arrow_rotator.setAttribute('transform', `rotate(${arrow_ending_angle})`);
            // we might have timed out 'cuz slow browser etc, meaning that we should 'force' attic into exclusive in, if there's room,
            // even if we're not there geometrically yet:
            if (attic_height + header_height >= window_innerHeight) {
                attic_status = 'exclusive in';
                post_header.automator();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            } else {
                attic_status = 'in';
            }
        }

        function finalize_out_status() {
            attic_status = 'out';
            header_up_arrow_rotator.setAttribute('transform', `rotate(${arrow_ending_angle})`);
            window.scrollBy(0, -attic_height);
            attic.style.height = '0px';
            attic.style.visibility = 'hidden';
        }

        if (ticket_no !== attic_scroll_ticket_no) {
            console.log("scroll_in_or_out_of_attic 'in' returning because ticket_no changed");
            return;
        }

        assert(attic_status === 'entering' || attic_status === 'leaving');

// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const sY = window.scrollY;

        if (attic_status === 'entering' && sY <= dest_sY) {
            finalize_in_status();
            return;
        }

        if (attic_status === 'leaving' && sY >= dest_sY) {
            finalize_out_status();
            return;
        }

        if (start_time === null) { start_time = timestamp - 20; }

        const time_elapsed = timestamp - start_time;

        if (time_elapsed >= time_budget + 50) {
            if (attic_status == 'entering') {
                finalize_in_status();
                return;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            } else {
                if (sY < dest_sY) { internal_foreground_scroll_request(0, parseInt(dest_sY - sY), false); }
                finalize_out_status();
                return;
            }
            assert(false);
        }

        const t = time_elapsed / time_budget;
        const new_f_value = ease_in_sine(t);
        const new_sY = (old_f_value <= 0.998) ? (sY + (new_f_value - old_f_value) * (dest_sY - sY) / (1 - old_f_value)) : (dest_sY);

        internal_foreground_scroll_request(0, parseInt(new_sY - sY), false);

        const T = min(1, t);
        const new_arrow_angle = arrow_starting_angle * (1 - T) + arrow_ending_angle * T;
        header_up_arrow_rotator.setAttribute('transform', `rotate(${new_arrow_angle})`);
        old_f_value = new_f_value;
        window.requestAnimationFrame(attic_step);
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}

function goto_toc() {
    for (const s of sliders) {
        if (s.type === 'toc') {
            if (attic_status !== 'out' && attic_status !== 'leaving') { attic_scroll('toggle'); }
            change_sliders(s);
        }
    }
}

function toc_goto(event) {
    let title = event.composedPath()[0].textContent.trim();
    goto_by_title(title);
}

function goto_by_title(title) {
    for (const s of sliders) {
        let ct = s.getElementByClassName('chapter_title').textContent.trim();
        if (ct === title && s.is_in_flow()) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            change_sliders(s);
            break;
        }
    }
}

function lr_arrow(direction) {
    if (gone_dark) { return; }
    if (direction === 1) {
        var to_move_to = current_slider.next_in_flow();
    } else if (direction === -1) {
        var to_move_to = current_slider.prev_in_flow();
    } else {
        assert(false);
    }
    if (to_move_to !== null) { change_sliders(to_move_to); }
}

function change_sliders(to_move_to) {
    if (to_move_to === current_slider) { return; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (attic_status === 'exclusive in') { return; }

    let old_slider = current_slider;
    let skipped_over;

    if (to_move_to.is_before(current_slider)) {
        direction = -1;
        skipped_over = to_move_to.intervening_sliders(current_slider);
    } else if (to_move_to.is_after(current_slider)) {
        direction = 1;
        skipped_over = current_slider.intervening_sliders(to_move_to);
    } else {
        assert(false);
    }

    current_slider = to_move_to;

    // ok we've chosen who's who...
    incoming_slider = current_slider;
    outgoing_sliders.delete(incoming_slider);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    outgoing_sliders.add(old_slider);

    // moving skipped sliders around
    for (const slider of skipped_over) {
        slider.style.transition = '0s';
        slider.style.left = (-direction * totalwidth) + 'px';
    }

    // measuring (reflow)
    var sY = window.scrollY;
    let z = current_slider.getBoundingClientRect();
    let r = old_slider.getBoundingClientRect();
    let u = header.getBoundingClientRect();
    let v = footer.getBoundingClientRect();
    let fh = current_slider.future_height_with_footer();
    let dh = attic.current_height() + header_height + fh;

    // adjust current_slider.stored_rect_top
    current_slider.stored_rect_top = min(
        max((current_slider.style.visibility === 'hidden') ? current_slider.stored_rect_top : z.top, -(fh - window_innerHeight)),
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        attic.current_height() + header_height
    );

    // OK... finding new absolute coordinates of old_slider
    old_slider.target_left = (-direction * totalwidth);
    old_slider.stored_rect_top = r.top;

    if (sY < attic.current_height()) { old_slider.target_top = 0; }
    else { old_slider.target_top = old_slider.stored_rect_top - current_slider.stored_rect_top; }

    current_slider.target_top = 0; // always always
    current_slider.target_left = 0; // always always
    current_slider.style.visibility = 'inherit';

    // future_sY
    if (sY < attic.current_height()) {
        var future_sY = sY;
    } else {
        var future_sY = attic.current_height() + header_height + (-current_slider.stored_rect_top);
        // if (future_sY + window_innerHeight > dh) { future_sY = dh - window_innerHeight; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(future_sY + window_innerHeight <= dh + 0.1);
        if (future_sY < attic.current_height()) { future_sY = attic.current_height(); }
    }

    // measurements for header spring loader
    let future_post_header_how_much_below_viewport_top = attic.current_height() - future_sY;
    header_spring_loader.how_much_below_viewport_top = max(-header_out_of_sight_height, future_post_header_how_much_below_viewport_top);

    // measurements for header
    let current_header_how_much_below_viewport_top = u.top;
    header.spring_loaded_top = max(-header_out_of_sight_height, current_header_how_much_below_viewport_top - header_spring_loader.how_much_below_viewport_top);

    // but maybe really we shouldn't be touching the header, or else sending it home?
    let dont_touch_header = false;
    let dont_touch_header_spring_loader = false;

    if (u.top <= -header_height && 
        future_post_header_how_much_below_viewport_top <= -header_height) {
        header.bring_home();
        dont_touch_header = true;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        dont_touch_header_spring_loader = true;
    } else if (Math.abs(parseFloat(gcs(header).top) - header.spring_loaded_top) < 0.5 && header.style.top === '0px' && header.style.transition === 'top 1s ease 0s') {
        dont_touch_header = true;
    }

    // measurements for footer_spring_loader
    let future_slider_end_how_much_above_viewport_bottom = future_sY + window_innerHeight - dh; // from bottom of viewport (negative = out of sight)
    footer_spring_loader.how_much_above_viewport_bottom = max(-footer_out_of_sight_height, future_slider_end_how_much_above_viewport_bottom); // from bottom of viewport (negative = out of sight)

    // measurements for footer
    let current_footer_how_much_above_viewport_bottom = window_innerHeight - v.bottom; // note that v.bottom is actually distance from top of viewport downwards
    footer.spring_loaded_bottom = max(-footer_out_of_sight_height, current_footer_how_much_above_viewport_bottom - footer_spring_loader.how_much_above_viewport_bottom);

    // but maybe really we shouldn't be touching the footer, or else sending it home?
    let dont_touch_footer = false;
    let dont_touch_footer_spring_loader = false;

    if (current_footer_how_much_above_viewport_bottom <= -footer_height && future_slider_end_how_much_above_viewport_bottom <= -footer_height) {
        footer.bring_home();
        dont_touch_footer = true;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        dont_touch_footer_spring_loader = true;
    } else if (
        Math.abs(parseFloat(gcs(footer).bottom) - footer.spring_loaded_bottom) < 1 && 
        footer.style.bottom === '0px' && 
        footer.style.transition === 'bottom 1s ease 0s') {
        dont_touch_footer = true;
    }

    // load header + spring
    if (!dont_touch_header) {
        header.style.transition = '0s';
        header.style.top = header.spring_loaded_top + 'px';
    }

    if (!dont_touch_header_spring_loader) {
        header_spring_loader.style.top = (-future_post_header_how_much_below_viewport_top) + header_spring_loader.how_much_below_viewport_top + 'px';
    }

    // load footer + spring
    if (!dont_touch_footer) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        footer.style.transition = '0s';
        footer.style.bottom = footer.spring_loaded_bottom + 'px';
    }

    if (!dont_touch_footer_spring_loader) {
        footer_spring_loader.style.bottom = (-future_slider_end_how_much_above_viewport_bottom) + footer_spring_loader.how_much_above_viewport_bottom + 'px';
    }

    // redraw
    footer.getBoundingClientRect();

    // release header
    if (!dont_touch_header) {
        header.style.transition = header_transition;
        header.style.top = '0px';
    }

    // release footer
    if (!dont_touch_footer) {
        footer.style.transition = 'bottom 1s ease 0s';
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        footer.style.bottom = '0px';
    }

    post_header.automator();
    current_slider.style.transition = slider_transition_value;
    current_slider.style.position = 'relative';
    old_slider.style.position = 'absolute';

    window.scrollTo({ 'top': future_sY });
    window.scrollY;

    old_slider.set_to_target();
    incoming_slider.set_to_target();

    setTimeout(try_to_clear_foreground_objects, 700);
    reset_arrow_styles();
}

function initialize_exercise_map(exercise_map) {
    exercise_map.slider = exercise_map.getExistingAncestorByClassName('slider');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let incoming_links = Array.from(exercise_map.getElementsByClassName('number_card_link'));
    let mini_cards = Array.from(exercise_map.slider.getElementsByClassName('a_mini_number_card'));
    exercise_map.number_cards = Array.from(exercise_map.getElementsByClassName('a_number_card'));
    exercise_map.number_cards.reverse(); // remind me why?
    exercise_map.number_cards.forEach(c => initialize_number_card(c, incoming_links, mini_cards));
    mini_cards.forEach(c => initialize_number_card(c));
    exercise_map.number_cards.forEach(c => { if (c.is_unlocked()) { c.unlock() } });
}

function initialize_number_card(number_card, incoming_links, slider_mini_cards) {
    assert(number_card.classList.containsExactlyOneOf('a_number_card', 'a_mini_number_card'));
    number_card.number = parseInt(number_card.getAttribute('number'));
    number_card.is_mini = number_card.classList.contains('a_mini_number_card');
    if (number_card.is_mini) {
        assert(incoming_links === undefined);
        assert(slider_mini_cards === undefined);
        number_card.things_owned = [];
        number_card.mini_cards = [];
    } else {
        number_card.things_owned = incoming_links.filter(thing => (thing.parseIntAttribute('target') === number_card.number));
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        number_card.mini_cards = slider_mini_cards.filter(mini_card => mini_card.parseIntAttribute('number') === number_card.number);
    }
    number_card.incoming_links = number_card.things_owned;
    number_card.focus_indicator = number_card.getElementByClassNames(focus_classes);
    number_card.front = number_card.getExistingElementByClassNames(["number_card_locked_stroke", "number_card_unlocked_stroke"]);
    number_card.e_number = parseInt(number_card.getAttribute('number'));
    number_card.unlock = (() => {
        number_card.front.strictSwapClasses("number_card_locked_stroke", "number_card_unlocked_stroke");
        number_card.front.strictSwapClasses("number_card_locked_text", "number_card_unlocked_text");
        number_card.focus_indicator.enable();
        number_card.incoming_links.forEach(link => link.classList.replace("number_card_locked_stroke", "number_card_unlocked_stroke"));
        number_card.mini_cards.forEach(c => c.unlock());
    });
    assert(number_card.front.classList.containsExactlyOneOf('number_card_locked_stroke', 'number_card_unlocked_stroke'));
    number_card.is_locked = (() => number_card.front.classList.contains('number_card_locked_stroke'));
    number_card.is_unlocked = (() => number_card.front.classList.contains('number_card_unlocked_stroke'));
    if (number_card.is_locked()) { number_card.focus_indicator.disable(); }
    number_card.attach_to_exercise_div = (exercise_div => {
        number_card.exercise_div = exercise_div;
        number_card.slider = exercise_div.slider;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(number_card.is_mini || number_card.is_locked() === exercise_div.is_locked());
        number_card.mini_cards.forEach(c => c.attach_to_exercise_div(exercise_div));
        initialize_number_card_alpha(number_card);
    });
    number_card.focus_indicator.style.pointerEvents = 'none';
}

function initialize_number_card_alpha(number_card) {
    let alpha = number_card.front;
    alpha.number_card = number_card;
    alpha.exercise_div = number_card.exercise_div;
    alpha.exercise_statement = alpha.exercise_div.exercise_statement;
    alpha.slider = number_card.slider;
    alpha.onclick = ((event) => {
        event.stopPropagation();
        if (alpha.slider !== current_slider) { return; }
        if (number_card.is_locked()) { 
            if (!key_down_alt) { return; }
            for (const e of number_card.exercise_div.everything_that_must_be_unlocked_to_unlock_me_including_me) { e.unlock(); }
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (previously_shown_exercise_popup) { previously_shown_exercise_popup.alpha.remove_popup(); }
        let r = alpha.exercise_statement.getBoundingClientRect();
        quick_to_element_scroll(window.scrollY + r.y);
    })
    alpha.ticket_number = 0;
    alpha.mouse_in = false;
    alpha.popup = null;
    // alpha.popup_y_xtra = ((number_card.number % 2) ? -1 : randInt(3, 4)) + ((number_card.is_mini) ? -8 : 0);
    alpha.popup_y_xtra = (number_card.is_mini) ? -8 : 0;
    alpha.append_popup = (() => {
        if (alpha.popup) { return; }
        let enclosing_width = 560;

        const cloned_statement = alpha.exercise_statement.cloneNode(true);
        assert(cloned_statement.lastElementChild.classList.contains('solution_button_div'));
        cloned_statement.removeChild(cloned_statement.lastElementChild);
        cloned_statement.style.position = 'relative';
        cloned_statement.style.width = totalwidth + 'px';
        cloned_statement.style.top = -5 + 'px';
        cloned_statement.style.left = -margin + (enclosing_width - column) / 2 + 'px';
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        cloned_statement.getElementsByAttributeName('popup-width').forEach(z => { z.setAttribute('width', z.getAttribute('popup-width')) });
        cloned_statement.getElementsByAttributeName('popup-padding').forEach(z => { z.style.padding = z.getAttribute('popup-padding') });
        cloned_statement.getElementsByAttributeName('popup-margin').forEach(z => { z.style.margin = z.getAttribute('popup-margin') });
        
        let r = alpha.getBoundingClientRect()
        let r2 = alpha.slider.getBoundingClientRect()
        let sX = window.scrollX
        let alpha_cx = r.x + r.width * 0.5
        let alpha_cy = r.y + r.height * 0.5

        const front_path = newElement('path')
        front_path.style.fill = 'none'
        front_path.style.strokeWidth = 2.1
        front_path.style.stroke = 'black'

        const outline_path = newElement('path')
        outline_path.style.fill = 'none'
        outline_path.style.strokeWidth = 7
        outline_path.style.stroke = '#fdfdfd'
        
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const popup_mouseevent_path = newElement('path')
        popup_mouseevent_path.style.fill = 'none'
        popup_mouseevent_path.style.strokeWidth = outline_path.style.strokeWidth
        popup_mouseevent_path.style.stroke = '#ff050900'
        
        const back_path = newElement('path')
        back_path.style.fill = '#fae7e0'
        back_path.style.stroke = 'none'
        
        const svg_back = newElement('svg')
        svg_back.style.position = 'absolute'
        svg_back.style.overflow = 'inherit'
        svg_back.style.left = '0px'
        svg_back.style.top = '0px'
        
        const svg_front = svg_back.cloneNode()

        svg_back.appendChild(outline_path)
        svg_back.appendChild(back_path)
        svg_front.appendChild(front_path)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        svg_front.appendChild(popup_mouseevent_path)

        let path_type = 2
        
        const overall_container = newElement('div')
        overall_container.style.visibility = 'hidden'
        overall_container.style.overflow = 'inherit'
        overall_container.style.position = 'absolute'
        // overall_container.style.pointerEvents = 'none'
        overall_container.style.left = sX + alpha_cx - enclosing_width * 0.5 + 'px'
        // overall_container.style.top = alpha_cy - r2.y + 35 + 'px'
        overall_container.style.top = alpha_cy - r2.y + (path_type === 1 ? 35 : 42 + alpha.popup_y_xtra) + 'px'
        overall_container.style.width = enclosing_width + 'px'
        overall_container.style.transform = 'scale(0.75)'
        overall_container.style.transformOrigin = '50% 0%'
        overall_container.appendChild(svg_back)
        overall_container.appendChild(cloned_statement)
        overall_container.appendChild(svg_front)

        function first_style_outline(measured_height) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            let w = enclosing_width
            let hw = w * 0.5
            let pt = 4 // padding top
            let pb = 12 // padding bottom
            let h = measured_height + pt + pb
            let thw = 23 // triangle half width
            let th = thw + 2 // triangle height
            return `M 0,${-pt} ${hw - thw},${-pt} ${hw},${-pt-th} ${hw + thw},${-pt} ${w},${-pt} ${w},${h} 0,${h} z`
        }

        function second_style_outline(measured_height) {
            let mini_factor = (number_card.is_mini) ? 0.93 : 1
            let l = r = 7
            let t = 7
            let b = 7 + 7
            let d = 15 // cut-off corner size
            let a1 = 6 * mini_factor
            let a2 = 16 * mini_factor
            let t1 = 10 * mini_factor
            let t2 = 26 * mini_factor
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            let w = enclosing_width + l + r
            let hw = 0.5 * w
            let h = measured_height + t + b
            let x0 = -l
            let x1 = x0 + d
            let x2 = x0 + hw - a2 - a1
            let x3 = x0 + hw - a2
            let x4 = x0 + hw
            let x5 = x0 + hw + a2
            let x6 = x0 + hw + a2 + a1
            let x7 = x0 + w - d
            let x8 = x0 + w
            let ya = -t + t1
            let yb = -t - t2
            let y0 = -t
            let y1 = y0 + d
            let y2 = y0 + h - d
            let y3 = y0 + h
            return `M ${x0},${y1} ${x1},${y0} ${x2},${y0} ${x3},${ya} ${x4},${yb} ${x5},${ya} ${x6},${y0} ${x7},${y0} ${x8},${y1} ${x8},${y2} ${x7},${y3} ${x1},${y3} ${x0},${y2} z`
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        
        function recompute_svg_paths(measured_height) {
            let main_d = (path_type === 1) ? first_style_outline(measured_height) : second_style_outline(measured_height);
            front_path.setAttribute('d', main_d)
            back_path.setAttribute('d', main_d)
            outline_path.setAttribute('d', main_d)
            popup_mouseevent_path.setAttribute('d', main_d)
        }

        function make_our_popup_visible_and_destroy_last_popup() {
            let previous_last = previously_shown_exercise_popup;
            overall_container.style.visibility = 'inherit';
            previously_shown_exercise_popup = alpha.popup;
            if (previous_last) { previous_last.alpha.remove_popup(); }
        }

        let expected_height = cloned_statement.parseFloatAttributeWithDefault('popup-expected-height', 0);
        try {
            new ResizeObserver(() => {
                let z = parseFloat(gcs(overall_container).height)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                if (!Number.isNaN(z) && z >= expected_height * 0.9) {
                    recompute_svg_paths(z);
                    make_our_popup_visible_and_destroy_last_popup();
                }
            }).observe(overall_container);
        } catch {
            console.log("(Are you running a version of Safari that's < 13.1?)");
        }

        alpha.slider.appendChild(overall_container);
        alpha.popup = overall_container;
        alpha.popup.alpha = alpha;

        exercise_happy_popup_mode = true;

        popup_mouseevent_path.style.pointerEvents = 'all';
        popup_mouseevent_path.onmouseenter = (() => { 
            alpha.ticket_number++;
        })
        popup_mouseevent_path.onmouseleave = (() => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            alpha.ticket_number++;
            let ticket_no = alpha.ticket_number;
            if (alpha.popup) {
                setTimeout(() => {
                    if (alpha.ticket_number !== ticket_no) { return; }
                    alpha.remove_popup();
                }, 50)
            }
        })
    })
    alpha.putative_popup = (() => {
        alpha.ticket_number++
        ticket_number = alpha.ticket_number
        setTimeout(() => {
            if (ticket_number !== alpha.ticket_number) { return }
            alpha.append_popup();
        }, (exercise_happy_popup_mode) ? 0 : 900)
    })
    alpha.onmouseenter = (() => {
        if (alpha.slider !== current_slider || number_card.is_locked()) { return }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        alpha.mouse_in = true
        alpha.putative_popup()
    })
    alpha.focus_indicator.activation_callbacks.push(alpha.putative_popup)
    alpha.focus_indicator.deactivation_callbacks.push(() => { if (!alpha.mouse_in) { alpha.onmouseleave() } })
    alpha.remove_popup = (() => {
        if (alpha.popup === null) { return }
        alpha.popup.parentNode.removeChild(alpha.popup)
        if (previously_shown_exercise_popup === alpha.popup) { previously_shown_exercise_popup = null; }
        alpha.popup = null
        if (previously_shown_exercise_popup === null) { setTimeout(() => { if (previously_shown_exercise_popup === null) { exercise_happy_popup_mode = false }}, 500) }
    })
    alpha.onmouseleave = (() => {
        alpha.ticket_number++
        alpha.mouse_in = false
        // I think I introduced a slight delay for "visual feel" reasons
        let ticket_no = alpha.ticket_number
        if (alpha.popup) {
            setTimeout(() => {
                if (alpha.ticket_number !== ticket_no) { return }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                alpha.remove_popup()
            }, 50)
        }
    })
}

function initialize_exercise_div_solution_button(exercise_div) {
    exercise_div.solution_button = exercise_div.exercise_statement.getExistingElementByClassName('solution_button_svg')
    exercise_div.solution_button_rect = exercise_div.solution_button.getElementByClassNames(['active_solution_button_rect', 'inactive_solution_button_rect']);
    exercise_div.solution_button_lip = exercise_div.solution_button.getElementByClassNames(['active_solution_button_lip', 'inactive_solution_button_lip']);
    exercise_div.solution_button_hands = exercise_div.solution_button.getElementByClassNames(['active_solution_button_hands', 'inactive_solution_button_hands']);
    exercise_div.solution_button_rect.exercise_div = exercise_div;
    exercise_div.solution_button.exercise_div = exercise_div;
    exercise_div.give_solution_button_inactive_look = (() => {
        exercise_div.solution_button_rect.strictSwapClasses('active_solution_button_rect', 'inactive_solution_button_rect')
        exercise_div.solution_button_lip.strictSwapClasses('active_solution_button_lip', 'inactive_solution_button_lip')
        exercise_div.solution_button_hands.strictSwapClasses('active_solution_button_hands', 'inactive_solution_button_hands')
    })
    exercise_div.give_solution_button_active_look = (() => {
        exercise_div.solution_button_rect.strictSwapClasses('inactive_solution_button_rect', 'active_solution_button_rect')
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        exercise_div.solution_button_lip.strictSwapClasses('inactive_solution_button_lip', 'active_solution_button_lip')
        exercise_div.solution_button_hands.strictSwapClasses('inactive_solution_button_hands', 'active_solution_button_hands')
    })
    exercise_div.solution_button_rect.onmousedown = (event => {
        event.preventDefault()
    })
    exercise_div.solution_button_rect.onclick = (event => {
        event.stopPropagation();
        exercise_div.toggle_solution_showing();
    })
}

function initialize_exercise_div(exercise_div, parent_slider) {
    exercise_div.b = exercise_div.querySelector('b');
    exercise_div.slider = parent_slider;
    exercise_div.solution_showing = false;
    exercise_div.solution_already_shown = false;
    exercise_div.e_number = exercise_div.getAttribute('number');
    exercise_div.type = 'exercise_div';
    exercise_div.exercise_statement = exercise_div.getExistingElementByClassName('exercise_statement')
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    assert(exercise_div.exercise_statement !== null)
    initialize_exercise_div_solution_button(exercise_div)
    exercise_div.solution_porthole = exercise_div.getExistingElementByClassName('solution_porthole')
    exercise_div.dropper = exercise_div.solution_porthole.getExistingElementByClassName('dropper')
    exercise_div.solution_porthole_shade = exercise_div.solution_porthole.getExistingElementByClassName('solution_porthole_shade')
    assert(exercise_div.dropper.style.visibility === 'hidden');
    exercise_div.dropper.solution_porthole = exercise_div.solution_porthole;
    exercise_div.ping_solution_height = (must_work => {
        if (isAutoOrEmptyOrUndefined(exercise_div.putative_solution_height)) {
            exercise_div.putative_solution_height = exercise_div.dropper.getBoundingClientRect().height + 'px';
            if (isNotAutoOrEmpty(exercise_div.putative_solution_height)) {
                let val = parseFloat(exercise_div.putative_solution_height);
                let time = min(val / 2000, 1);
                exercise_div.solution_porthole.style.transition = time + 's';
                exercise_div.millisecond_solution_porthole_transition = time * 1000;
            } else if (must_work) {
                assert(false);
            }
        }
    });
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    exercise_div.mr_popper = exercise_div.getElementByClassName('a_popping_cloud');
    exercise_div.show_solution_porthole_shade = (() => {
        exercise_div.solution_porthole_shade.style.transition = '0s';
        exercise_div.solution_porthole_shade.style.height = solution_porthole_shade_height + 'px';
        if (exercise_div.mr_popper)
        {
            exercise_div.mr_popper.style.display = 'none';
            exercise_div.mr_popper.style.transform = 'scale(1,0)';
            setTimeout(() => {
                    if (exercise_div.solution_showing === true) { return; }
                    exercise_div.mr_popper.style.visibility = 'hidden';
                    exercise_div.mr_popper.style.display = 'block';
            }, 0);
        }
    });
    exercise_div.delayed_hide_solution_porthole_shade = (() => {
        assert(exercise_div.millisecond_solution_porthole_transition !== undefined);
        setTimeout(
            () => {
                if (exercise_div.solution_showing === false) { return; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                exercise_div.solution_porthole_shade.transition = '0.3s';
                exercise_div.solution_porthole_shade.style.height = '0px';
                exercise_div.dropper.style.overflow = 'visible';
                exercise_div.solution_porthole.style.overflow = 'visible';
                if (exercise_div.mr_popper)
                {
                    exercise_div.mr_popper.style.display = 'block';
                    exercise_div.mr_popper.style.visibility = 'visible';
                    exercise_div.mr_popper.style.transition = '0.5s';
                    exercise_div.mr_popper.style.transform = 'scale(1,1)';
                }
            }, 
            exercise_div.millisecond_solution_porthole_transition
        );
    });
    exercise_div.show_solution = (() => {
        exercise_div.solution_showing = true
        exercise_div.dropper.style.visibility = 'inherit'
        droppers_to_hide.delete(exercise_div.dropper)
        exercise_div.ping_solution_height(true)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        reprocess_mathjax_in(exercise_div.dropper)
        setTimeout(() => { reprocess_mathjax_in(exercise_div.dropper) }, 1000);
        exercise_div.solution_porthole.style.height = exercise_div.putative_solution_height
        exercise_div.give_solution_button_inactive_look()
        exercise_div.delayed_hide_solution_porthole_shade()
        if (exercise_div.solution_already_shown === false) {
            exercise_div.solution_already_shown = true
            for (const e of exercise_div.e_children) { e.unlock() }
        }
    });
    exercise_div.hide_solution = (() => {
        exercise_div.solution_showing = false
        exercise_div.show_solution_porthole_shade()
        exercise_div.solution_porthole.style.height = permanent_bottom_padding_of_solution_portholes + 'px'
        exercise_div.give_solution_button_active_look()
        droppers_to_hide.add(exercise_div.dropper)
        if (try_to_make_droppers_hidden_timer === null) { try_to_make_droppers_hidden_timer = setInterval(try_to_make_droppers_hidden, 800) }
        exercise_div.dropper.style.overflow = 'hidden';
        exercise_div.solution_porthole.style.overflow = 'hidden';
    });
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    exercise_div.unlock = (() => {
        assert(exercise_div.e_depth > 1);
        exercise_div.style.display = 'block';
        exercise_div.style.visibility = 'inherit';
        exercise_div.number_card.unlock();
        exercise_div.slider.reset_finished();
    });
    exercise_div.is_locked = (() => { return exercise_div.style.display !== 'block'; });
    exercise_div.is_unlocked = (() => { return exercise_div.style.display === 'block'; });
    exercise_div.toggle_solution_showing = (() => { ((exercise_div.solution_showing) ? exercise_div.hide_solution() : exercise_div.show_solution()); });
    exercise_div.number_card = parent_slider.exercise_map.querySelector(`[number="${exercise_div.e_number}"]`);
    if (exercise_div.number_card !== null) {
        assert(exercise_div.number_card.classList.contains('a_number_card'));
        exercise_div.number_card.attach_to_exercise_div(exercise_div);
    } else {
        console.log("missing node number", exercise_div.e_number, "in ch", parent_slider.id.slice(2));
    }
    exercise_div.b.style.cursor = "pointer";
    exercise_div.b.onclick = (event => {
        event.stopPropagation();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (window_innerHeight > 500) {
            let r = parent_slider.exercises_separator.getBoundingClientRect();
            quick_to_element_scroll(parseInt(window.scrollY + r.y - 20));
        } else {
            let r = parent_slider.exercise_map.getBoundingClientRect();
            quick_to_element_scroll(parseInt(window.scrollY + r.y - 5));
        }
    });
}

function initialize_checkbox(checkbox) {
    assert(checkbox.focus_indicator !== undefined);

    checkbox.unchecked_icon = checkbox.getElementByHrefSuffix('#unchecked_checkbox');
    checkbox.checked_icon = checkbox.getElementByHrefSuffix('#checked_checkbox');
    checkbox.disabled_checked_icon = checkbox.getElementByHrefSuffix('#disabled_checked_checkbox');
    checkbox.click_area = checkbox.getElementByClassName('alpha');

    if (checkbox.unchecked_icon === null) {
        console.log(checkbox)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(false)
    }

    assert(checkbox.unchecked_icon !== null);
    assert(checkbox.checked_icon !== null);
    assert(checkbox.disabled_checked_icon !== null);

    checkbox.set_status_to = (status => {
        checkbox.unchecked_icon.style.display = 'none';
        checkbox.checked_icon.style.display = 'none';
        checkbox.disabled_checked_icon.style.display = 'none';
        if (status === 'unchecked') { checkbox.unchecked_icon.style.display = 'block'; }
        else if (status === 'checked') { checkbox.checked_icon.style.display = 'block'; }
        else if (status === 'disabled checked') { checkbox.disabled_checked_icon.style.display = 'block'; }
        else {
            console.log("bad checkbox status:", status);
            assert(false);
        }
        checkbox.status = status;
        if (checkbox.is_disabled()) { checkbox.focus_indicator.disable(); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        else { checkbox.focus_indicator.enable(); }
    });

    checkbox.is_disabled = (() => { return checkbox.status.startsWith('disabled'); });
    checkbox.is_enabled = (() => { return !checkbox.is_disabled(); });
    checkbox.is_checked = (() => { return (checkbox.status === 'checked' || checkbox.status === 'disabled checked' || checkbox.status === 'disabled inactive'); });

    checkbox.toggle = (() => {
        if (checkbox.is_disabled()) { return false; }
        if (checkbox.is_checked()) {
            checkbox.set_status_to('unchecked');
            assert(!checkbox.is_checked());
        } else {
            checkbox.set_status_to('checked');
            assert(checkbox.is_checked());
        }
        return true;
    });

    checkbox.enable = (() => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (checkbox.status === 'disabled checked') { checkbox.set_status_to('checked'); }
        else if (checkbox.status === 'disabled inactive') { checkbox.set_status_to('inactive checked'); }
        assert(checkbox.is_enabled());
    });

    checkbox.disable = (() => {
        if (checkbox.status === 'disabled checked') {
            // do nothing
        } else if (checkbox.status === 'checked') { checkbox.set_status_to('disabled checked'); }
        else if (checkbox.status === 'inactive checked') { checkbox.set_status_to('disabled inactive'); }
        else {
            // will have to be changed when we have a 'disabled unchecked' status
            console.log('asked to disable', checkbox.status);
            assert(false);
        }
        assert(checkbox.is_disabled());
    });

    checkbox.set_status_to('unchecked');

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    checkbox.click_area.onclick = (() => {
        if (!checkbox.toggle()) { return; }
    });
}

function initialize_content_checkboxes() {
    bool2attr = (boolean => (boolean) ? 'checked' : 'unchecked')
}

function common_dial_initializations(dial) {
    dial.screen_text_elts = Array.from(dial.getElementsByClassName('dial_screen_text'));
    dial.screen_rect_elts = Array.from(dial.getElementsByClassName('a_dial_screen_rect'));
    dial.dot = dial.getElementByClassName('dial_dot');
    assert(dial.dot !== null);
    assert(dial.screen_text_elts.length === 4);
    assert(dial.screen_rect_elts.length === 4);
    dial.slider = dial.getAncestorByClassName('slider');
    dial.get_01_score = (() => { return dial.positions[dial.position].zo_score; });
    dial.get_min_01_score = (() => { return dial.positions[0].zo_score; });
    dial.get_nat_score = (() => { return dial.position; });
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    dial.reversed_motion = (() => {
        if (dial.motion === 'forward') { return 'backward'; }
        else if (dial.motion === 'backward') { return 'forward'; }
        else { assert(false); }
    });
    dial.activate_screen = (index => {
        assert(0 <= index && index < 4)
        for (let j = 0; j <= 3; j++) {
            dial.screen_text_elts[j].classList.remove('dial_active_text');
            dial.screen_rect_elts[j].classList.remove('dial_screen_active_fill');
            dial.screen_rect_elts[j].classList.add('dial_screen_inactive_fill');
        }
        dial.screen_text_elts[index].classList.add('dial_active_text');
        dial.screen_rect_elts[index].classList.remove('dial_screen_inactive_fill');
        dial.screen_rect_elts[index].classList.add('dial_screen_active_fill');
        dial.traveling_position = index
    })
    dial.ticket_number = 0
    dial.set_to = (new_position => {
        dial.ticket_number++
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let ticket_number = dial.ticket_number
        let old_position = dial.traveling_position
        assert(0 <= new_position && new_position < 4);
        assert(0 <= old_position && old_position < 4);
        let dif = abs(new_position - old_position);
        let sign = (new_position > old_position) ? 1 : -1
        let positions_and_delays = [];

        if (dif === 0) {
            positions_and_delays.push([new_position, 0])
        } else if (dif === 1 && min(old_position, new_position) === 1) {
            dial.dot.style.transition = '0.35s cubic-bezier(0.3, 0.2, 0.7, 1)'
            positions_and_delays.push([old_position + 1 * sign, 250])
        } else if (dif === 1) {
            dial.dot.style.transition = '0.2s cubic-bezier(0.5, 0, 0.5, 1)'
            positions_and_delays.push([old_position + 1 * sign, 170])
        } else if (dif === 2) {
            dial.dot.style.transition = '0.4s cubic-bezier(0.3, 0, 0.9, 1)';
            positions_and_delays.push([old_position + 1 * sign, 125])
            positions_and_delays.push([old_position + 2 * sign, 250])
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        } else if (dif === 3) {
            dial.dot.style.transition = '0.5s cubic-bezier(0.3, 0, 0.9, 1)';
            positions_and_delays.push([old_position + 1 * sign, 150])
            positions_and_delays.push([old_position + 2 * sign, 250])
            positions_and_delays.push([old_position + 3 * sign, 350])
        } else {
            assert(false)
        }

        dial.dot.setAttribute('transform', dial.positions[new_position].transform)
        dial.position = new_position
        // dial.reached_destination = (dif === 0)

        setTimeout(() => {
            if (ticket_number !== dial.ticket_number) { return }
            dial.activate_screen(positions_and_delays[0][0])
            if (dif > 1) {
                if (ticket_number !== dial.ticket_number) { return }
                setTimeout(() => {
                    if (ticket_number !== dial.ticket_number) { return }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                    dial.activate_screen(positions_and_delays[1][0])
                    if (dif > 2) {
                        if (ticket_number !== dial.ticket_number) { return }
                        setTimeout(() => {
                            if (ticket_number !== dial.ticket_number) { return }
                            dial.activate_screen(positions_and_delays[2][0])
                        }, positions_and_delays[2][1] - positions_and_delays[1][1])
                    }
                }, positions_and_delays[1][1] - positions_and_delays[0][1])
            }
        }, positions_and_delays[0][1])
    });

    dial.position = 0;
    dial.traveling_position = 0;
    dial.motion = 'forward';
    dial.set_to(dial.position);

    dial.transition_to_new_position = ((new_position) => {
        let transition = ''
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let dif = abs(dial.position - new_position);
        if (dif === 1) {
            transition = (min(new_position, dial.position) === 1) ? '0.35s cubic-bezier(0.3, 0.2, 0.7, 1)' : '0.2s';
        } else if (dif === 2) {
            transition = '0.4s cubic-bezier(0.3, 0, 0.9, 1)';
        } else {
            transition = '0.5s cubic-bezier(0.3, 0, 0.9, 1)';
        }
        dial.dot.style.transition = transition;
        dial.set_to(new_position);
    });

    let clickeable_zones = Array.from(dial.getElementsByClassName('pointer'));

    dial.click_area = clickeable_zones[0];

    dial.click_area.onclick = (event => {
        event.stopPropagation()
        if (dial.position == 0) { dial.motion = 'forward'; key_down_shift_cremated = true; }
        if (dial.position == 3) { dial.motion = 'backward'; key_down_shift_cremated = true; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        dial.momentary_motion = dial.motion;
        console.log('key_down_shift:', key_down_shift);
        if (key_down_shift &&
            !key_down_shift_cremated &&
            dial.position !== 0 && dial.position !== 3) {
            dial.momentary_motion = dial.reversed_motion();
        }
        let new_position = dial.position + ((dial.momentary_motion === 'forward') ? 1 : -1);
        dial.transition_to_new_position(new_position);
    });

    for (let i = 1; i <= 4; i++) {
        clickeable_zones[i].onclick = (event => { 
            event.stopPropagation();
            dial.transition_to_new_position(i - 1, true);
        });
    }

    // checking the 'supposed_label' fields
    for (let j = 0; j < dial.positions.length; j++) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const content = dial.screen_text_elts[j].textContent;
        if (content) {
            assert(dial.positions[j].supposed_label === content.trim());
        } else {
            assert(dial.positions[j].supposed_label === 'infinity');
        }
    }
}

function initialize_peek_duration_dial(dial) {
    dial.positions = [
        {
            transform: 'rotate(-180)',
            supposed_label: 'infinity',
            zo_score: 0.45
        },
        {
            transform: 'rotate(-135)',
            supposed_label: '2000ms',
            zo_score: 0.65
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        },
        {
            transform: 'rotate(-45)',
            supposed_label: '750ms',
            zo_score: 0.86
        },
        {
            transform: 'rotate(0)',
            supposed_label: '250ms',
            zo_score: 1
        }
    ];
    common_dial_initializations(dial);
    dial.ms_value = (() => {
        const supposed_label = dial.positions[dial.position].supposed_label;
        if (supposed_label === 'infinity') {
            return Infinity;
        } else if (supposed_label.endsWith('ms')) {
            return parseFloat(supposed_label.substring(0, supposed_label.length - 2));
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(false);
    });
    dial.string_value = (() => {
        const supposed_label = dial.positions[dial.position].supposed_label;
        if (supposed_label === 'infinity') {
            return '\u221ems';
        } else if (supposed_label.endsWith('ms')) {
            return supposed_label;
        }
        assert(false);
    });
    dial.set_to(peek_duration_dial_default_position)
}

function initialize_max_error_warnings_dial(dial) {
    dial.positions = [
        {
            transform: 'rotate(-180)',
            supposed_label: 'infinity',
            zo_score: 0.4
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        },
        {
            transform: 'rotate(-135)',
            supposed_label: '1/25',
            zo_score: 0.65
        },
        {
            transform: 'rotate(-45)',
            supposed_label: '1/75',
            zo_score: 0.8
        },
        {
            transform: 'rotate(0)',
            supposed_label: '1/200',
            zo_score: 1
        },
    ];
    common_dial_initializations(dial);
    dial.num_warnings_allowed_for_string = ((string) => {
        const supposed_label = dial.positions[dial.position].supposed_label;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (supposed_label === 'infinity') {
            return Infinity;
        } else if (supposed_label.startsWith('1/')) {
            const denominator = parseFloat(supposed_label.slice(2));
            assert(denominator === 25 || denominator === 75 || denominator === 200);
            return Math.ceil(string.length / denominator);
        }
        assert(false);
    });
    dial.set_to(max_error_warnings_dial_default_position)
}

function initialize_num_peeks_per_char(dial) {
    dial.positions = [
        {
            transform: 'rotate(-180)',
            supposed_label: 'infinity',
            zo_score: 0.2
        },
        {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            transform: 'rotate(-135)',
            supposed_label: '1/25',
            zo_score: 0.5
        },
        {
            transform: 'rotate(-45)',
            supposed_label: '1/75',
            zo_score: 0.75
        },
        {
            transform: 'rotate(0)',
            supposed_label: '1/200',
            zo_score: 1
        },
    ];
    common_dial_initializations(dial);
    dial.num_peeks_allowed_for_string = ((string) => {
        const supposed_label = dial.positions[dial.position].supposed_label;
        if (supposed_label === 'infinity') {
            return Infinity;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        } else if (supposed_label.startsWith('1/')) {
            const denominator = parseFloat(supposed_label.slice(2));
            assert(denominator === 25 || denominator === 75 || denominator === 200);
            return Math.ceil(string.length / denominator);
        }
        assert(false);
    });
    dial.set_to(num_peeks_per_char_dial_default_position)
}

let focus_classes = [
    'focus_alpha_fill', 
    'focus_blue_fill',
    'focus_blue_fill_dark',
    'disabled_focus_blue_fill',
    'disabled_focus_blue_fill_dark',

    'focus_alpha_color',
    'focus_blue_color',
    'focus_blue_color_dark',
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    'disabled_focus_blue_color',
    'disabled_focus_blue_color_dark',

    'focus_alpha_background_color',
    'focus_blue_background_color',
    'focus_blue_background_color_dark',
    'disabled_focus_blue_background_color',
    'disabled_focus_blue_background_color_dark',
]

let disabled_focus_classes = [
    'disabled_focus_blue_fill',
    'disabled_focus_blue_fill_dark',

    'disabled_focus_blue_color',
    'disabled_focus_blue_color_dark',

    'disabled_focus_blue_background_color',
    'disabled_focus_blue_background_color_dark',
]
// AUTO-GENERATED FILE --- DO NOT EDIT ---

let fill_focus_classes = [
    'focus_alpha_fill', 
    'focus_blue_fill',
    'focus_blue_fill_dark',
    'disabled_focus_blue_fill',
    'disabled_focus_blue_fill_dark',
]

let color_focus_classes = [
    'focus_alpha_color',
    'focus_blue_color',
    'focus_blue_color_dark',
    'disabled_focus_blue_color',
    'disabled_focus_blue_color_dark',
]

let background_color_focus_classes = [
    'focus_alpha_background_color',
    'focus_blue_background_color',
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    'focus_blue_background_color_dark',
    'disabled_focus_blue_background_color',
    'disabled_focus_blue_background_color_dark',
]


function initialize_focus_indicator(f) {
    assert(f.hasExactlyOneOfClasses(focus_classes))
    let focus_ref_id = f.getAttribute('focus-ref')
    f.focus_position_ref_elt = (focus_ref_id) ? document.getElementById(focus_ref_id) : f;
    if (f.focus_position_ref_elt === null) {
        console.log("missing focus-ref element with id", focus_ref_id)
        assert(false)
    }

    if (f.hasAttribute('focus-linkback')) {
        let ids = f.getAttribute('focus-linkback').split(" ").filter(x => x !== " ")
        for (const id of ids) {
            let el = document.getExistingElementById(id)
            assert(el.focus_indicator === undefined)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            el.focus_indicator = f
        }
    }

    f.type = (f.hasExactlyOneOfClasses(fill_focus_classes)) ? 'fill' : 'color';

    if (!f.hasExactlyOneOfAttributes([
        'focus-target',
        'focus-target-last-sibling',
        'focus-target-up-down',
        'focus-target-sibling-onclick',
        'focus-target-next-sibling',
        'focus-target-self',
        'focus-target-parent-down',
    ])) {
        console.log('this guy missing focus-target thingy:', f);
        assert(false)
    }

    if (f.hasAttribute('focus-target')) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let event_source_id = f.getAttribute('focus-target')
        f.event_source = document.getElementById(event_source_id)
        if (f.event_source === null) {
            console.log("missing focus-target element of id", event_source_id)
            assert(false)
        }
    }

    else if (f.hasAttribute('focus-target-last-sibling')) {
        f.event_source = f.parentNode.lastElementChild;
        assert(f.event_source !== f)
    }

    else if (f.hasAttribute('focus-target-up-down')) {
        let up_down_string = f.getAttribute('focus-target-up-down')
        let [up_class, down_class] = up_down_string.split(" ")
        if (down_class === undefined) {
            console.log('something went wrong with this f:', f);
            assert(false);
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(up_class.length > 0)
        assert(down_class.length > 0)
        let up_guy = f.getAncestorByClassName(up_class)
        f.event_source = up_guy.getUniqueElementByClassName(down_class)
        assert(up_guy.focus_indicator === undefined || up_guy.focus_indicator === f)
        up_guy.focus_indicator = f
    }

    else if (f.hasAttribute('focus-target-sibling-onclick')) {
        assert(false)
        let siblings = f.parentNode.getChildrenByAttribute('onclick')
        assert(siblings.length === 1)
        f.event_source = siblings[0]
    }

    else if (f.hasAttribute('focus-target-next-sibling')) {
        f.event_source = f.nextElementSibling
        assert(f.event_source !== null)
    }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    else if (f.hasAttribute('focus-target-self')) {
        f.event_source = f
    }

    else if (f.hasAttribute('focus-target-parent-down')) {
        down_class = f.getAttribute('focus-target-parent-down')
        let parent = f.parentNode
        f.event_source = parent.getUniqueElementByClassName(down_class)
        assert(parent.focus_indicator === undefined || parent.focus_indicator === f)
        parent.focus_indicator = f
    }

    else {
        assert(false)
    }

    assert(f.focus_indicator === undefined)
    f.focus_indicator = f
    assert(f.event_source !== null)
    if (f.event_source !== null) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (f.event_source.focus_indicator && f.event_source.focus_indicator !== f) {
            console.log('f:', f);
            console.log('f.event_source:', f.event_source);
            assert(false)
        }
        f.event_source.focus_indicator = f
    }
    f.slider = f.getAncestorByClassName('slider')
    f.__disabled = false;
    f.__activated = false;
    f.activation_callbacks = []
    f.deactivation_callbacks = []
    f.activate = (() => {
        if (my_active_element !== null) { my_active_element.deactivate(); }
        assert(!f.hasOneOfClasses(disabled_focus_classes))
        f.strictSwapClasses(['focus_alpha_fill'], 'focus_blue_fill')
        f.strictSwapClasses(['focus_alpha_color'], 'focus_blue_color')
        f.strictSwapClasses(['focus_alpha_background_color'], 'focus_blue_background_color')
        my_active_element = f
        f.__activated = true
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        f.activation_callbacks.forEach(x => x())
    });
    f.deactivate = (() => {
        if (my_active_element !== f) { return }
        f.strictSwapOneOfClasses([
            'focus_blue_fill',
            'focus_blue_fill_dark',
            'disabled_focus_blue_fill',
            'disabled_focus_blue_fill_deeper_blue',
            'disabled_focus_blue_fill_dark',
        ], 'focus_alpha_fill')
        f.strictSwapOneOfClasses([
            'focus_blue_color',
            'focus_blue_color_dark',
            'disabled_focus_blue_color',
            'disabled_focus_blue_color_dark',
        ], 'focus_alpha_color')
        f.strictSwapOneOfClasses([
            'focus_blue_background_color',
            'focus_blue_background_color_dark',
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            'disabled_focus_blue_background_color',
            'disabled_focus_blue_background_color_deeper_blue',
            'disabled_focus_blue_background_color_dark',
        ], 'focus_alpha_background_color')
        my_active_element = null
        f.__activated = false
        // console.log('about to call the deactivation callbacks!')
        f.deactivation_callbacks.forEach(x => x())
    });
    f.is_activated = (() => f.__activated)
    f.focus_go_dark = (() => {
        f.focus_indicator.strictSwapClasses('focus_blue_color', 'focus_blue_color_dark');
        f.focus_indicator.strictSwapClasses('disabled_focus_blue_color', 'disabled_focus_blue_color_dark');
        f.focus_indicator.strictSwapClasses('focus_blue_fill', 'focus_blue_fill_dark');
        f.focus_indicator.strictSwapClasses('disabled_focus_blue_fill', 'disabled_focus_blue_fill_dark');
    });
    f.focus_go_light = (() => {
        f.focus_indicator.strictSwapClasses('focus_blue_color_dark', 'focus_blue_color');
        f.focus_indicator.strictSwapClasses('disabled_focus_blue_color_dark', 'disabled_focus_blue_color');
        f.focus_indicator.strictSwapClasses('focus_blue_fill_dark', 'focus_blue_fill');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        f.focus_indicator.strictSwapClasses('disabled_focus_blue_fill_dark', 'disabled_focus_blue_fill');
    });
    f.disable = (() => {
        f.strictSwapClasses('focus_blue_fill', 'disabled_focus_blue_fill' + ((gone_dark) ? '_deeper_blue' : ''))
        f.strictSwapClasses('focus_blue_fill_dark', 'disabled_focus_blue_fill_dark')

        f.strictSwapClasses('focus_blue_color', 'disabled_focus_blue_color' + ((gone_dark) ? '_deeper_blue' : ''))
        f.strictSwapClasses('focus_blue_color_dark', 'disabled_focus_blue_color_dark')

        f.strictSwapClasses('focus_blue_background_color', 'disabled_focus_blue_background_color' + ((gone_dark) ? '_deeper_blue' : ''))
        f.strictSwapClasses('focus_blue_background_color_dark', 'disabled_focus_blue_background_color_dark')

        f.__disabled = true;
    });
    f.enable = (() => {
        f.strictSwapClasses('disabled_focus_blue_fill', 'focus_blue_fill')
        f.strictSwapClasses('disabled_focus_blue_fill_deeper_blue', 'focus_blue_fill')
        f.strictSwapClasses('disabled_focus_blue_fill_dark', 'focus_blue_fill_dark')
    
        f.strictSwapClasses('disabled_focus_blue_color', 'focus_blue_color')
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        f.strictSwapClasses('disabled_focus_blue_color_deeper_blue', 'focus_blue_color')
        f.strictSwapClasses('disabled_focus_blue_color_dark', 'focus_blue_color_dark')

        f.strictSwapClasses('disabled_focus_blue_background_color', 'focus_blue_background_color')
        f.strictSwapClasses('disabled_focus_blue_background_color_deeper_blue', 'focus_blue_background_color')
        f.strictSwapClasses('disabled_focus_blue_background_dark', 'focus_blue_background_color_dark')

        f.__disabled = false;
    });
    f.is_disabled = (() => { return f.__disabled; });
    f.is_inside_outgoing_slider = (() => { return outgoing_sliders.has(f.slider); });
    f.solution_porthole = f.getAncestorByClassName('solution_porthole');
    if (f.solution_porthole !== null) {
        f.exercise_div = f.getExistingAncestorByClassName('exercise_div');
        f.is_inside_closing_or_closed_solution_porthole = (() => { return (f.exercise_div.solution_showing === false)})
    } else {
        f.is_inside_closing_or_closed_solution_porthole = (() => { return false })
    }
    f.visibility_impaired = (() => { 
        return (
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            f.isOrHasNonVisibleAncestor() ||
            f.is_inside_outgoing_slider() ||
            f.is_inside_closing_or_closed_solution_porthole() ||
            (gone_dark && !f.hasAncestor(super_duper)) ||
            (!gone_dark && f.hasAncestor(super_duper))
        )
    })
    f.not_currently_focusable = (() => { return (f.is_disabled() || f.visibility_impaired()) })
    f.currently_focusable = (() => { return (!f.not_currently_focusable()) })
    f.not_good_for_next_focus = (() => f.not_currently_focusable() || f === my_active_element)
    f.good_for_next_focus = (() => f.currently_focusable() && f !== my_active_element)
    f.below_viewport_bottom = (() => { return (f.focus_position_ref_elt.getBoundingClientRect().top > window_innerHeight) })
    f.above_viewport_top = (() => { return (f.focus_position_ref_elt.getBoundingClientRect().bottom < 0) })
    f.scroll_ref_elt_into_view = (() => {
        let r = f.focus_position_ref_elt.getBoundingClientRect();
        let br = document.body.getBoundingClientRect();
        if (r.bottom > window.innerHeight - 10) { quick_to_element_scroll(parseInt(r.bottom + 30 - br.y - window.innerHeight)) } 
        else if (r.y < 10) { quick_to_element_scroll(parseInt(r.top - 30 - br.y)) }
    })
    f.as_focus_indicator = f
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}


function initialize_focus_indicators() {
    focus_indicators = Array.from(document.getElementsByClassNames(focus_classes));
    focus_indicators.forEach((f, i) => { f.focusable_index = i; initialize_focus_indicator(f); })
    // let i = 0;
    // for (const f of focus_indicators) {
    //     initialize_focus_indicator(f);
    //     f.focusable_index = i;
    //     i++;
    // }
}


function focus_element(el, scroll) {
    assert(!el.as_focus_indicator.is_disabled());
    assert(!el.visibility_impaired());
    el.activate();
    if (scroll || scroll === undefined) { el.scroll_ref_elt_into_view() }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}


function focusout_element(el) {
    el.as_focus_indicator.deactivate();
}


function focus_next_element() {
    if (focus_indicators.every(x => x.not_good_for_next_focus())) { return; }
    let look_towards_bottom = true
    let index = (my_active_element === null || my_active_element.visibility_impaired()) ? 0 : my_active_element.focusable_index;
    while (
        focus_indicators[index].not_good_for_next_focus() || 
        (look_towards_bottom && focus_indicators[index].above_viewport_top())
    ) {
        index = (index + 1) % focus_indicators.length;
        if (index === 0) { look_towards_bottom = false; }
    }
    focus_element(focus_indicators[index]);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}


function focus_prev_element() {
    if (focus_indicators.every(x => x.not_good_for_next_focus())) { return; }
    let look_towards_top = true;
    let index = (my_active_element === null || my_active_element.visibility_impaired()) ? focus_indicators.length - 1 : mod(my_active_element.focusable_index - 1, focus_indicators.length)
    while (
        focus_indicators[index].not_good_for_next_focus() ||
        (look_towards_top && focus_indicators[index].below_viewport_bottom())
    ) {
        index = mod(index - 1, focus_indicators.length)
        if (index === 0) { look_towards_top = false; }
    }
    focus_element(focus_indicators[index]);
}


function my_active_element_exists_and_is_currently_focusable() {
    return (
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        my_active_element !== null &&
        my_active_element.currently_focusable()
    )
}


function insert_new_focus_indicator_after(newguy, existing) {
    assert(newguy !== undefined);
    assert(newguy.hasExactlyOneOfClasses(focus_classes));
    assert(focus_indicators.indexOf(existing) !== -1);
    let original_length = focus_indicators.length
    let found = false
    for (let index = 0; index < focus_indicators.length; index++) {
        assert(index === focus_indicators[index].focusable_index)
        if (focus_indicators[index] === existing) {
            found = true
            focus_indicators.insert(index + 1, newguy)
            assert(focus_indicators.length === original_length + 1)
            for (let j = index + 1; j < focus_indicators.length; j++) {
                assert(focus_indicators[j].focusable_index === j - 1 || j === index + 1)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                focus_indicators[j].focusable_index = j
            }
            break
        }
    }
    assert(found)
}

function remove_focus_indicator(to_remove) {
    for (let index = 0; index++; index < focus_indicators.length) {
        assert(index === focus_indicators[index].focusable_index)
        if (focus_indicators[index] === existing) {
            focus_indicators.removeElementAtIndex(index)
            for (let j = index; j++; j < focus_indicators.length) {
                assert(focus_indicators[j].focusable_index === j + 1)
                focus_indicators[j].focusable_index = j
            }
            break
        }
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (my_active_element === to_remove) { my_active_element = null; }
}

let etree_navigator = {
    next_sibling: ((node) => {
        if (node.e_parent === null) { return null; }
        let index = node.e_parent.e_children.indexOf(node);
        if (index === node.e_parent.e_children.length - 1) { return null; }
        return node.e_parent.e_children[index + 1];
    }),

    prev_sibling: ((node) => {
        if (node.e_parent === null) { return null; }
        let index = node.e_parent.e_children.indexOf(node);
        if (index === 0) { return null; }
        return node.e_parent.e_children[index - 1];
    }),

    last_child: ((node) => {
        let num_children = node.e_children.length;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(num_children > 0);
        return node.e_children[num_children - 1];
    }),

    is_last_child: ((node) => {
        return (node.e_parent === null || node === this.last_child(node.e_parent));
    }),

    is_first_child: ((node) => {
        return (node.e_parent === null || node === node.e_parent.e_children[0]);
    }),

    backtrack_right: ((node) => {
        if (!this.is_last_child(node)) { return this.next_sibling(node); }
        else if (node.e_parent === null) { return null; }
        else { return this.backtrack_right(node.e_parent); }
    }),

    backtrack_left: ((node) => {
        if (!this.is_first_child(node)) { return this.prev_sibling(node); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        else if (node.e_parent === null) { return null; }
        else { return this.backtrack_left(node.e_parent); }
    }),

    forward_stopping_at_depth: ((node, d) => {
        while (node !== null && node.e_depth < d) {
            if (node.e_children.length > 0) { node = node.e_children[0]; }
            else { node = this.backtrack_right(node); }
        }
        assert(node === null || node.e_depth === d);
        return node;
    }),

    backward_stopping_at_depth: ((node, d) => {
        assert(node !== undefined);
        while (node !== null && node.e_depth < d) {
            if (node.e_children.length > 0) { node = node.e_children[node.e_children.length - 1]; }
            else { node = this.backtrack_left(node); }
        }
        assert(node === null || node.e_depth === d);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        return node;
    }),

    next_at_depth: ((node) => {
        let depth = node.e_depth;
        node = this.backtrack_right(node);
        return (node === null) ? null : this.forward_stopping_at_depth(node, depth);
    }),

    prev_at_depth: ((node) => {
        let depth = node.e_depth;
        node = this.backtrack_left(node);
        return (node === null) ? null : this.backward_stopping_at_depth(node, depth);
    }),

    next_bfs: ((node) => {
        let cousin = this.next_at_depth(node, d);
        return (cousin !== null) ? cousin : this.forward_stopping_at_depth(node.e_root, this.e_depth + 1);
    }),

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    nodes_at_depth: ((root, d) => {
        assert(root.e_parent === null);
        let to_return = [];
        let node = this.forward_stopping_at_depth(root, d);
        while (node !== null) {
            to_return.push(node);
            node = this.next_at_depth(node, d);
        }
        return to_return;
    }),

    check_health: ((node) => {
        if (node.e_parent === null) {
            assert(node.e_depth === 0);
            assert(node.e_children.length > 0);
            assert(node.e_number === 0);
        } else {
            assert(node.e_depth === node.e_parent.e_depth + 1);
            assert(node.e_parent.e_children.includes(node));
            assert(node.e_number > node.e_parent.e_number);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }

        for (let i = 0; i < node.e_children.length; i++) {
            for (let j = i + 1; j < node.e_children.length; j++) { assert(node.e_children[i] !== node.e_children[j]); }
            if (i > 0) { assert(node.e_children[i].e_number === node.e_children[i - 1].e_number + 1); }
            assert(node === node.e_children[i].e_parent);
            this.check_health(node.e_children[i]);
        }

        let next = this.next_bfs(node);
        if (next !== null) { assert(next.e_number === node.e_number + 1); }
        else { assert(node.e_children.length === 0); }
    }),

    subtree_contains: ((n1, n2) => {
        while (n2 != null) {
            if (n2 === n1) { return true; }
            n2 = n2.e_parent;
        }
        return false;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    }),

    join: ((n1, n2) => {
        while (n2.e_depth > n1.e_depth) { n2 = n2.e_parent; }
        while (n1.e_depth > n2.e_depth) { n1 = n1.e_parent; }
        while (n1 !== n2) {
            assert(n1.e_depth === n2.e_depth);
            n1 = n1.e_parent;
            n2 = n2.e_parent;
        }
        return n1;
    }),

    child_in_direction_of: ((n1, n2) => {
        if (n1 === n2) { return null; }
        assert(this.subtree_contains(n1, n2));
        while (n2.e_parent !== n1) { n2 = n2.e_parent; }
        assert(n2.e_parent === n1);
        return n2;
    }),
// AUTO-GENERATED FILE --- DO NOT EDIT ---

    printout: ((node) => {
        let ourstring = '';
        for (let i = 0; i < node.e_depth; i++) { ourstring += ' '; }
        if (node.e_depth === 0) { assert(this.e_parent === null); }
        else {
            assert(this.e_parent !== null);
            console.log(
                ourstring,
                this.tagName,
                this.className,
                '[' + node.e_number + '; depth ' + node.e_depth + ']'
            );
        }
        for (const c of node.e_children) { c.printout(); }
    })
};

function page_up_scroll() {
    let nY = window.scrollY - window_innerHeight + 30;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (gone_dark && super_duper.current_card) {
        let clamped_Y = min(max(nY, super_duper.min_sY), super_duper.max_sY())
        nY = max(clamped_Y, nY)
    }
    quick_to_element_scroll(nY)
}

function page_down_scroll() {
    let nY = window.scrollY + window_innerHeight - 30;
    if (gone_dark && super_duper.current_card) {
        let clamped_Y = min(max(nY, super_duper.min_sY), super_duper.max_sY())
        nY = min(clamped_Y, nY)
    }
    quick_to_element_scroll(nY)
}

let quick_to_element_scroll_happening = false
let quick_to_element_scroll_dest_sY = null

function quick_to_element_scroll(dest_sY, optional_destX, optional_time_budget) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    dest_sY = parseInt(dest_sY); // why should I make each caller round their numbers? (also I forgot why I need this to be an integer, but that's another matter)

    let ticket_no = ++quick_to_element_scroll_ticket_no;
    let ticket_slider = current_slider;
    let start_time = null;
    let old_f_value = 0;
    let time_budget = null;
    let dest_sX = null;
    quick_to_element_scroll_dest_sY = dest_sY;
    quick_to_element_scroll_happening = true;
    
    window.requestAnimationFrame(quick_to_element_scroll_step);
    function quick_to_element_scroll_step(timestamp) {
        if (ticket_no != quick_to_element_scroll_ticket_no) {
            return;
        }
        if (ticket_slider != current_slider) {
            quick_to_element_scroll_happening = false;
            quick_to_element_scroll_dest_sY = null;
            return;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
        assert(timestamp !== 0);
        let sY = window.scrollY;
        let sX = window.scrollX;
        if (start_time === null) {
            start_time = timestamp - 16;
            time_budget = min(200, abs(sY - dest_sY) / 2);
            if (optional_time_budget !== undefined) { time_budget = optional_time_budget; }
            dest_sX = (optional_destX !== undefined && optional_destX !== null) ? optional_destX : sX;
        }
        let time_elapsed = timestamp - start_time;
        if (time_elapsed >= time_budget + 50) {
            if (sY !== dest_sY || sX !== dest_sX) {
                let y_dif = abs(sY - dest_sY)
                if (y_dif > 1) {
                    let qualifier = (y_dif > 0) ? 'unsuccessful' : 'close';
                    console.log(qualifier, 'quick_to_element_scroll in y:', dest_sY - sY);
                }
                let x_dif = abs(sX - dest_sX)
                if (x_dif > 1) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                    let qualifier = (x_dif > 0) ? 'unsuccessful' : 'close';
                    console.log(qualifier, 'quick_to_element_scroll in x:', dest_sX - sX);
                }
                // nb: i found that when screen is zoomed, sY was not always integer
                internal_foreground_scroll_request(parseInt(dest_sX - sX), parseInt(dest_sY - sY), false);
            }
            quick_to_element_scroll_happening = false;
            quick_to_element_scroll_dest_sY = null;
            return;
        }
        let new_f_value = ease_in_out_quadratic(time_elapsed / time_budget);
        assert(old_f_value <= new_f_value && new_f_value <= 1);
        if (old_f_value <= 0.998) {
            let pct = (new_f_value - old_f_value) / (1 - old_f_value);
            var dY = parseInt((dest_sY - sY) * pct);
            var dX = parseInt((dest_sX - sX) * pct);
        } else {
            var dX = dest_sX - sX;
            var dY = dest_sY - sY;
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        internal_foreground_scroll_request(dX, dY, false);
        old_f_value = new_f_value;
        window.requestAnimationFrame(quick_to_element_scroll_step);
    }
}


let KEYCODE_LEFT_ARROW = 37;
let KEYCODE_UP_ARROW = 38;
let KEYCODE_RIGHT_ARROW = 39;
let KEYCODE_DOWN_ARROW = 40;
let KEYCODE_ALT = 18;
let KEYCODE_META = 91;
let KEYCODE_CTRL = 17;
let KEYCODE_TAB = 9;
let KEYCODE_SHIFT = 16;
let KEYCODE_ESCAPE = 27;
let KEYCODE_RETURN = 13;
let KEYCODE_R = 82;
let KEYCODE_Y = 89;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
let KEYCODE_PAGE_UP = 33;
let KEYCODE_PAGE_DOWN = 34;

let keyboard_scrollspeed_initial_value = 10;
let keyboard_scrollspeed_current = 10;
let keyboard_scrollspeed_max_value = 22;
let keyboard_scroll_last_timestamp = null;
let keyboard_scroll_ongoing = false;

let key_down_up_arrow = false;
let key_down_down_arrow = false;
let key_down_right_arrow = false;
let key_down_left_arrow = false;
let key_down_alt = false;
let key_down_meta = false;
let key_down_ctrl = false;
let key_down_shift = false;

let key_down_shift_cremated = false;

// AUTO-GENERATED FILE --- DO NOT EDIT ---
let prevent_repeat_on_down_arrow = false;
let prevent_repeat_on_up_arrow = false;


function keyboard_oneframe_scroll(timestamp, is_start) {
    // assert(false)
    let direction = (+key_down_down_arrow) - (+key_down_up_arrow);

    if (keyboard_scroll_ongoing) {
        var timestamp_delta = timestamp - keyboard_scroll_last_timestamp;
    } else {
        var timestamp_delta = 17;
    }

    keyboard_scroll_last_timestamp = timestamp;
    let num_frames = (timestamp_delta / 16.66);

    if (attic_status === 'entering' && direction === 1) {
        attic_scroll('toggle');
    } else if (attic_status === 'leaving' && direction === -1) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        attic_scroll('toggle');
    } else {
        let delta_y = parseInt(
            num_frames * direction * (keyboard_scrollspeed_current + (+key_down_alt) * 20 + (+key_down_meta) * 450));
        let dY = external_foreground_scroll_request(0, delta_y, timestamp, null);

        if (dY < delta_y - 1 && delta_y > 0) {
            key_down_down_arrow = false;
            prevent_repeat_on_down_arrow = true;
            key_down_meta = false;
            if (!keyboard_scroll_ongoing && attic_status === 'exclusive in') { attic_scroll('toggle'); }
        }

        if (dY > delta_y + 1 && delta_y < 0 && header.is_truly_fucking_home()) {
            key_down_up_arrow = false;
            prevent_repeat_on_up_arrow = true;
            key_down_meta = false;
            if (!keyboard_scroll_ongoing && attic_status === 'out') { attic_scroll('toggle'); }
        }
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---

    if (keyboard_scrollspeed_current < keyboard_scrollspeed_max_value) {
        keyboard_scrollspeed_current += 0.3;
    }

    if (key_down_up_arrow || key_down_down_arrow) {
        keyboard_scroll_ongoing = true;
        window.requestAnimationFrame(keyboard_oneframe_scroll);
    } else {
        keyboard_scroll_ongoing = false;
        keyboard_scrollspeed_current = keyboard_scrollspeed_initial_value;
    }
}


document.addEventListener('keyup', function (evt) {
    evt = evt || window.event;
    key_down_meta = evt.metaKey;
    key_down_alt = evt.altKey;
    key_down_shift = evt.shiftKey;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    key_down_ctrl = evt.ctrlKey;
    if (evt.keyCode === KEYCODE_DOWN_ARROW) {
        key_down_down_arrow = false;
        prevent_repeat_on_down_arrow = false;
        prevent_repeat_on_up_arrow = false;
    } else if (evt.keyCode === KEYCODE_UP_ARROW) {
        key_down_up_arrow = false;
        prevent_repeat_on_up_arrow = false;
        prevent_repeat_on_down_arrow = false;
    } else if (evt.keyCode === KEYCODE_LEFT_ARROW) {
        key_down_left_arrow = false;
    } else if (evt.keyCode === KEYCODE_RIGHT_ARROW) {
        key_down_right_arrow = false;
    } else if (evt.keyCode === KEYCODE_ALT) {
        assert(key_down_alt === false);
    } else if (evt.keyCode === KEYCODE_META) {
        assert(key_down_meta === false);
        key_down_up_arrow = false;
        prevent_repeat_on_up_arrow = false;
        key_down_down_arrow = false;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        prevent_repeat_on_down_arrow = false;
    } else if (evt.keyCode === KEYCODE_SHIFT) {
        assert(key_down_shift === false)
        key_down_shift_cremated = false;
    } else if (evt.keyCode === KEYCODE_TAB) {
        //
    } else if (evt.keyCode === KEYCODE_ESCAPE) {
        if (my_active_element !== null && (!gone_dark || my_active_element.hasAncestor(super_duper))) {
            focusout_element(my_active_element);
            assert(my_active_element === null);
            evt.stopPropagation();
        } else if (gone_dark) {
            evt.stopPropagation();
            if (tutorial.state === 'incoming') {
                setTimeout(() => { tutorial_frame.start_retreat(false) }, 180)
            } else {
                go_light();
            }
        }
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
});


document.addEventListener(
    'keydown',
    evt =>
    {
        key_down_meta = evt.metaKey
        key_down_alt = evt.altKey
        key_down_shift = evt.shiftKey
        key_down_ctrl = evt.ctrlKey

        if (evt.keyCode === KEYCODE_ALT) { assert(key_down_alt === true) }

        else if (evt.keyCode === KEYCODE_META) { assert(key_down_meta === true) }

        else if (evt.keyCode === KEYCODE_CTRL) { assert(key_down_ctrl) }

        else if (evt.keyCode === KEYCODE_SHIFT) { assert(key_down_shift) }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
        else if (evt.keyCode === KEYCODE_R) { 
            if (textarea_has_focus()) { return; }
            if (key_down_meta || key_down_ctrl || key_down_alt) { return; }
            evt.preventDefault();
            smuthe_recenter();
        }

        else if (evt.keyCode === KEYCODE_LEFT_ARROW) {
            let prev_down = key_down_left_arrow;
            key_down_left_arrow = true;
            if (textarea_has_focus()) { return; }
            if (key_down_meta || key_down_ctrl) { return }
            evt.preventDefault();
            if (prev_down) { return }
            (key_down_shift) ? window.scrollBy({left: -500, behavior : 'smooth'}) : lr_arrow(-1)
        }

        else if (evt.keyCode === KEYCODE_RIGHT_ARROW) {
            let prev_down = key_down_right_arrow;
            key_down_right_arrow = true;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            if (textarea_has_focus()) { return; }
            if (key_down_meta || key_down_ctrl) { return }
            evt.preventDefault();
            if (prev_down) { return }
            (key_down_shift) ? window.scrollBy({left: 500, behavior: 'smooth'}) : lr_arrow(1)
        }    
        
        else if (evt.keyCode === KEYCODE_UP_ARROW) {
            key_down_up_arrow = true;
            if (textarea_has_focus()) { return; }
            evt.preventDefault();
            prevent_repeat_on_down_arrow = false;
            if (prevent_repeat_on_up_arrow) { return; }
            if (!keyboard_scroll_ongoing) { window.requestAnimationFrame(keyboard_oneframe_scroll); }
        }
        
        else if (evt.keyCode === KEYCODE_DOWN_ARROW) {
            key_down_down_arrow = true;
            if (textarea_has_focus()) { return; }
            evt.preventDefault();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            prevent_repeat_on_up_arrow = false;
            if (prevent_repeat_on_down_arrow) { return; }
            if (!keyboard_scroll_ongoing) { window.requestAnimationFrame(keyboard_oneframe_scroll); }
        }
        
        else if (evt.keyCode === KEYCODE_PAGE_UP) {
            evt.preventDefault();
            page_up_scroll();
        }

        else if (evt.keyCode === KEYCODE_PAGE_DOWN) {
            evt.preventDefault();
            page_down_scroll();
        }

        else if (evt.keyCode === KEYCODE_TAB) {
            if (key_down_ctrl || key_down_meta) { return; }
            evt.preventDefault();
            (key_down_shift) ? focus_prev_element() : focus_next_element();
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---

        else if (evt.keyCode === KEYCODE_SHIFT) {
            assert(key_down_shift === true)
            key_down_shift_cremated = false;
        }

        else if (evt.keyCode === KEYCODE_RETURN) {
            if (my_active_element_exists_and_is_currently_focusable()) {
                let a = my_active_element.event_source;
                if (a.pseudo_onclick !== undefined) {
                    a.pseudo_onclick()
                    evt.preventDefault()
                } else if (a !== null && (a.hasAttribute('onclick') || (a.onclick !== undefined && a.onclick !== null))) {
                    a.fireA('click');
                    evt.preventDefault()
                } else {
                    console.log("my_active_element:", my_active_element);
                    console.log("the event source:", a);
                    console.log("a.onclick:", a.onclick)
                    assert(false);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                }
            } else if (gone_dark && super_duper.current_card.answer_submitted) {
                onward_button_left_hand_rect.onclick()
                evt.preventDefault()
            } else if (gone_dark && super_duper.current_card.virgin_textarea && false) {
                trash_button.onclick()
                evt.preventDefault()
            } else if (
                !gone_dark && 
                my_active_element === null &&
                current_slider.is_flashcard_slider() &&
                super_duper.ticket_number !== undefined) {
                go_dark()
            }
        }
    }
);


let gone_dark = false;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
let initialized_tutorial = false;


function smuthe_recenter(height, optional_time) {
    if (optional_time === undefined) { optional_time = 550; }
    if (height === undefined) { height = window.scrollY; }
    let dest_sY = parseInt(height);
    let dest_sX = parseInt((totalwidth - window_innerWidth) / 2);
    quick_to_element_scroll(dest_sY, dest_sX, optional_time);
}


let textarea_num_cols_instantiation_value = 61;


function tokenize_textarea_string_without_row_col_fields(string) {
    let num_cols = working_card_textarea_num_cols_effective_value;
    let current_word = '';
    let word_mode = null;
    let tokens = [];
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        function char_mode_of(c) {
            if (c === '-') { return 'DASH'; }
            if (c === ' ') { return 'SPACE'; }
            if (c === '\n') { return 'NEWLINE'; }
            return 'ALPHANUMERIC';
        }

        function is_multi_char_word_mode(mode) { return (mode === 'ALPHANUMERIC' || mode === 'SPACE'); }

        function add_current_word() {
            assert(current_word.length > 0 && word_mode !== null);
            assert(current_word.length === 1 || is_multi_char_word_mode(word_mode));
            current_word_object = new String(current_word);
            current_word_object.mode = word_mode;
            tokens.push(current_word_object);
            current_word = '';
            word_mode = null;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }

        function is_continuation_of_word() { return (char_mode === word_mode && is_multi_char_word_mode(word_mode)); }

        function is_already_full_row_of_alphanumeric() {
            if (current_word.length === num_cols && char_mode === word_mode && char_mode !== 'SPACES') {
                assert(word_mode === 'ALPHANUMERIC');
                return true;
            }
            return false;
        }

        char_mode = char_mode_of(char);
        if (is_continuation_of_word() && !is_already_full_row_of_alphanumeric()) {
            current_word += char;
            assert(current_word.length <= num_cols);
        } else {
            if (current_word.length > 0) { add_current_word(); }
            assert(current_word === '' && word_mode === null);
            current_word = char;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            word_mode = char_mode;
        }
    }

    if (current_word.length > 0) { add_current_word(); }

    assert(tokens.map(x => x.length).sum() === string.length);

    return tokens;
}

function add_row_col_fields_to_textarea_string_tokens(tokens) {
    let num_cols = working_card_textarea_num_cols_effective_value;
    let next_row = 0;
    let next_col = 0;

    for (const word of tokens) {
        assert(word.length > 0);

        function do_newline() {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            next_col = 0;
            next_row += 1;
        }

        function advance() {
            next_col += word.length;
        }

        if (next_col + word.length > num_cols && word.mode !== 'SPACE' && word.mode !== 'NEWLINE') {
            do_newline();
        }

        word.row = next_row;
        word.col = next_col;

        if (word.mode === 'NEWLINE') {
            do_newline();
        } else {
            advance();
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    }
}

function tokenize_textarea_string(string) {
    let tokens = tokenize_textarea_string_without_row_col_fields(string);
    add_row_col_fields_to_textarea_string_tokens(tokens);
    return tokens;
}

function textarea_string_last_text_point(string) {
    let tokens = tokenize_textarea_string(string);
    if (tokens.length === 0) {
        assert(string === '');
        return TextPoint(0, 0);
    }
    let ze_last_word = tokens[tokens.length - 1];
    let row = ze_last_word.row;
    let col = ze_last_word.col + ze_last_word.length;
    return new TextPoint(row, col);
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

class TextPoint {
    constructor(row, col) {
        assert(row !== undefined && col !== undefined);
        assert(row >= 0);
        assert(col >= 0);
        this.row = row;
        this.col = col;
    }
}

class SingleLineTextRegion {
    constructor(tp1, tp2) {
        assert(tp1.row === tp2.row);
        assert(tp1.col < tp2.col);
        this.start = tp1;
        this.end = tp2;
        this.row = tp1.row;
    }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    length() { return this.end.col - this.start.col; }

    extend_to(pt) {
        assert(pt.row === this.row);
        assert(pt.col > this.end.col);
        this.end = new TextPoint(pt.row, pt.col);
    }
}

function regions_after(string, index) {
    function word_start(word) { return new TextPoint(word.row, word.col); }
    function word_end(word) { return new TextPoint(word.row, word.col + word.length); }
    function word_2_region(word) { return new SingleLineTextRegion(word_start(word), word_end(word)); }
    function extend_region_by(region, word) { region.extend_to(word_end(word)); }

    assert(0 <= index && index < string.length);
    let tokens = tokenize_textarea_string(string);
    let regions = [];
    let i = 0;

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    for (const word of tokens) {
        if (index < i) {
            if (word.col === 0) {
                regions.push(word_2_region(word));
            } else {
                assert(regions.length > 0);
                extend_region_by(regions[regions.length - 1], word);
            }
        } else if (index < i + word.length) {
            assert(regions.length === 0);
            let start = new TextPoint(word.row, word.col + index - i);
            regions.push(new SingleLineTextRegion(start, word_end(word)));
        } else {
            assert(index >= i + word.length);
        }

        i += word.length;
    }

    return regions;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
}

function text_point_row_column(string, index) {
    assert(0 <= index && index <= string.length);
    let tokens = tokenize_textarea_string(string);
    let i = 0;
    let found = false;
    let answer_row = null
    let answer_col = null
    for (const word of tokens) {
        if (index < i + word.length) {
            answer_row = word.row;
            answer_col = word.col + index - i;
            found = true;
            console.log('mid')
            break;
        }
        i += word.length;
    }
    if (!found && i == index) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (tokens.length > 0) {
            let last_word = tokens[tokens.length - 1]
            answer_row = last_word.row
            answer_col = last_word.col + last_word.length
        } else {
            assert(string == '')
            answer_row = 0
            answer_col = 0
        }
        found = true
    }
    assert(found);
    return new TextPoint(answer_row, answer_col);
}

function peek_button_click() {
    // if (basement.style.height === '0px') { basement.style.height = '2000px'; }
    if (!gone_dark) { return; }
    if (peek_button.inactivity_screen.style.display === 'block') { return; }
    const card = super_duper.current_card;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (card.answer_submitted) { return; } // actually that ain't supposed to happen, right?
    const ms_value = current_slider.peek_duration_dial.ms_value();
    const prof_div = card.textarea_div.prof_div;
    const official_ta = prof_div.textarea;
    const allowed = card.num_peeks_allowed;
    const taken = card.num_peeks_taken;

    if (prof_div.showing) {
        card.textarea_div.hide_answer()
        return;
    }

    if (taken >= allowed) { return; }
    peek_button.reset_annotation_for_current_card();

    // get ready for the peek
    card.textarea_div.student_textarea.freeze();
    card.textarea_div.focus_indicator.enable();

    // redraw
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    window.scrollY;
    card.num_peeks_taken += 1;
    peek_button.reset_annotation_for_current_card();

    card.textarea_div.show_answer();
    official_ta.peek_ticket_no = card.num_peeks_taken;

    if (ms_value < Infinity) {
        assert(ms_value <= 2000);
        setTimeout(() => {
            assert(official_ta.peek_ticket_no === card.num_peeks_taken);
            if (!gone_dark) { return; }
            if (card !== super_duper.current_card) { return; }
            card.textarea_div.hide_answer();
        }, ms_value + ((ms_value < 750) ? 300 : 500));
    }
}

function escape_button_click() {
    if (!gone_dark) { return; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    go_light();
}

function flashcard_textarea_factory() {
    const ta = newElement('textarea', { 'class': 'flashcard_textarea' });
    ta.style.visibility = 'hidden';
    ta.setAttribute('rows', 1);
    ta.setAttribute('cols', textarea_num_cols_instantiation_value);
    ta.setAttribute('spellcheck', 'false');
    return ta;
}

function flashcard_student_textarea_factory() {
    const ta = flashcard_textarea_factory();
    ta.classList.add('flashcard_student_textarea');
    ta.style.textAlign = 'center';
    ta.freeze = (() => { ta.setAttribute('disabled', true); });
    ta.onfocusout = (() => { /* this didn't work... */ })
    ta.onfocus = (() => {
        if (!ta.focus_indicator) { return }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        ta.focus_indicator.disable()
    })
    ta.onclick = (event => event.stopPropagation())
    ta.un_freeze = ((in_background) => {
        ta.removeAttribute('disabled');
        if (!in_background) { ta.focus({ preventScroll: true }); }
        if (ta.focus_indicator) { ta.focus_indicator.disable(); }
    });
    ta.onpaste = (event => event.preventDefault())
    return ta;
}

function question_flashcard_textarea_div_factory(card) {
    const textarea_div = newElement('div', { 'class': 'flashcard_textarea_div' });
    const child0 = newElement('div', { 'class': 'flashcard_focus_indicator_div' })
    const child1 = newElement('div', { 'class': 'flashcard_textarea_student_div' });
    const child2 = newElement('div', { 'class': 'flashcard_textarea_prof_div' });

    assert(card.textarea_div === null)

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    textarea_div.card = card
    const child01 = newElement('div', { 
        'class': 'focus_alpha_background_color',
        'style': 'position:absolute;',
        'focus-target-up-down': 'flashcard_textarea_div flashcard_student_textarea'
    })
    child0.appendChild(child01)

    textarea_div.appendChild(child0)
    textarea_div.appendChild(child2)
    textarea_div.appendChild(child1)
    textarea_div.student_div = child1
    textarea_div.prof_div = child2
    
    const child11 = newElement('div', { 'class': 'error_div flashcard_textarea_color' });
    const child12 = flashcard_student_textarea_factory();
    const child13 = newElement('div', { 'class': 'student_textarea_screen', 'style': 'pointer-events:none' });

    textarea_div.back_to_work = (() => {
        if (textarea_div.answer_submitted) { return }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (textarea_div.prof_div.showing) { textarea_div.prof_div.showtime_over() }
        textarea_div.student_textarea.un_freeze()
    })

    child12.pseudo_onclick = (() => { textarea_div.back_to_work() })
    
    child12.error_div = child11
    child12.focus_indicator = child01
    textarea_div.focus_indicator = child01
    textarea_div.error_div = child11
    textarea_div.student_textarea = child12
    textarea_div.student_textarea_screen = child13
    textarea_div.student_textarea.textarea_div = textarea_div
    textarea_div.student_textarea.card = card

    child1.appendChild(child11)
    child1.appendChild(child12)
    child1.appendChild(child13)

    const child21 = flashcard_textarea_factory();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    child21.classList.add('flashcard_textarea_color', 'flashcard_button_green', 'flashcard_prof_textarea')
    child21.value = card.solution_string
    
    const child22 = newElement('div', { 'class': 'textarea_copy_paste_guard' })
    child22.onclick = (() => { textarea_div.back_to_work() })

    child2.textarea = child21
    child2.showing = false

    textarea_div.reset_measurements = (() => {
        let width = parseFloat(gcs(textarea_div.student_textarea).width)
        let height = textarea_div.student_textarea.scrollHeight
        textarea_div.error_div.style.width = width + 'px'
        textarea_div.error_div.style.height = height + 'px'
        textarea_div.student_textarea_screen.style.width = width + 'px'
        textarea_div.student_textarea_screen.style.height = height + 'px'
        // note: child1 = textarea_div.student_div
        //       child21 = textarea_div.prof_div.textarea
        child1.style.height = height + 'px'
        child1.measurements = {'scrollHeight': height}
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        child21.measurements = measurements_for_textarea_with_value(child21.value);
        child21.setAttribute('rows', child21.measurements['rows']);
        child22.style.width = child21.measurements['width'] + 'px';
        child3.style.width = child21.measurements['width'] + 'px';
        child22.style.height = child21.measurements['scrollHeight'] + 'px'
        child2.style.top = height - 1 + 'px'
        textarea_div.focus_indicator.style.top = '-8px'
        textarea_div.focus_indicator.style.height = 16 + height + 'px'
        textarea_div.focus_indicator.style.width = 1 + 16 + 60 + width + 'px' // 60 = 2 * padding, which is not included cuz box model or sth
    })

    new ResizeObserver(() => {
        if (!gone_dark) { return; }
        initialize_working_card_metrics();
        textarea_div.reset_measurements();
        errorWarn();
    }).observe(child12);

    child21.try_to_disappear = (() => {
        if (child3.style.height !== '0px') { return; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (gcs(child3).height === '0px') {
            child21.style.visibility = 'hidden';
        } else {
            setTimeout(child21.try_to_disappear, 500);
        }
    });

    child2.showtime = ((delay, duration) => {
        child2.showing = true
        child21.style.visibility = 'inherit'
        child3.style.transition = (duration === undefined) ? 'height 0.5s' : 'height ' + duration;
        if (delay || delay === 0) {
            setTimeout(() => {
                if (child2.showing === false) { return; }
                textarea_div.reset_measurements()
                child3.style.height = child21.measurements['scrollHeight'] + 'px';
            }, delay)
        } else {
            textarea_div.reset_measurements()
            child3.style.height = child21.measurements['scrollHeight'] + 'px';
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
        child13.style.pointerEvents = ''
        let [card_top, card_bottom, student_top, student_bottom, prof_bottom, notes_bottom] = card.various_bottoms()
        let future_bottom = max(card_bottom, prof_bottom, notes_bottom)
        if (future_bottom > window_innerHeight - 20) {
            let would_like_to_scroll_down_at_least = future_bottom - window_innerHeight + 20 
            let should_not_scroll_down_more_than = student_bottom - 20 
            let scroll = min(should_not_scroll_down_more_than, would_like_to_scroll_down_at_least)
            quick_to_element_scroll(window.scrollY + scroll, window.scrollX, 500)
        }
    });

    child2.showtime_over = (immediate => {
        child2.showing = false
        if (immediate) {
            child3.style.transition = '0s';
            child3.style.height = '0px'
            child21.style.visibility = 'hidden';
        } else {
            child3.style.transition = 'height 0.7s';
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            child3.style.height = '0px'
            setTimeout(child21.try_to_disappear, 1000)
        }
        child13.style.pointerEvents = 'none'
    })

    const child3 = newElement('div', { 'class': 'flashcard_textarea_prof_div_dropper' })
    child3.style.height = '0px'
    child3.style.backgroundColor = '#ffffff01'

    child2.appendChild(child3)
    child3.appendChild(child21)
    child3.appendChild(child22)

    assert(child01.hasExactlyOneOfClasses(focus_classes))
    assert(child01.hasAttribute('focus-target-up-down'))
    insert_new_focus_indicator_after(child01, trash_button.focus_indicator)
    assert(focus_indicators.indexOf(child01) !== -1)
    initialize_focus_indicator(child01)

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    child01.is_disabled = (() => {
        let to_return = (
            card !== super_duper.current_card ||
            card.answer_submitted ||
            textarea_has_focus(child12)
        )
        return to_return
    })

    textarea_div.reset_measurements()

    initialize_textarea_div(textarea_div)
    return textarea_div
}

function initialize_textarea_div(textarea_div) {
    textarea_div.text_point_to_top_left = (pt => {
        return [
            21 + pt.row * working_card_textarea_lineheight,
            29.8 + pt.col * working_card_textarea_char_width,
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        ]
    })
    textarea_div.text_point_paint = ((pt, length) => {
        assert(length > 0);
        let end_col = min(working_card_textarea_num_cols_effective_value, pt.col + length);
        let adjusted_length = end_col - pt.col;
        if (adjusted_length === 0) { return; }
        assert(adjusted_length > 0);
        let zone = newElement('div', {'class': 'error'});
        let [t, l] = textarea_div.text_point_to_top_left(pt)
        zone.style.top = t + 'px';
        zone.style.left = l + 'px';
        zone.style.height = working_card_textarea_lineheight + 1 + 'px';
        zone.style.width = (adjusted_length * working_card_textarea_char_width) + 1.4 + 'px';
        textarea_div.error_div.appendChild(zone);
    });
    textarea_div.baseline_coordinates_of_text_point = (pt => {
        let x = 30 + pt.col * working_card_textarea_char_width;
        let y = 21 + pt.row * working_card_textarea_lineheight + 0.67 * working_card_textarea_lineheight;
        return new Point(x, y);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    });
    textarea_div.paint_region = ((region) => {
        assert(region instanceof SingleLineTextRegion);
        textarea_div.text_point_paint(region.start, region.length());
    });
    textarea_div.clear_paint = (() => {
        textarea_div.error_div.removeAllChildren();
    });
    textarea_div.paragraph_tail_paint = ((i, j) => { });

    textarea_div.amount_of_white_above = (() => {
        return parseFloat(textarea_div.style.top) - textarea_div.q_height + (-textarea_div.negative_marginTop)
        // return parseFloat(textarea_div.style.marginTop) + (-textarea_div.negative_marginTop)
    })

    textarea_div.clamp_white_above_down_to = ((amt) => {
        let current = textarea_div.amount_of_white_above()
        // textarea_div.style.transition = 'margin-top 0.7s';
        if (current > amt) {
            textarea_div.style.top = parseFloat(textarea_div.style.top) + amt - current + 'px'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            // let dif = current - amt
            // let marginTop = parseFloat(textarea_div.style.marginTop)
            // textarea_div.style.marginTop = marginTop - dif + 'px'
        }
    })

    textarea_div.prof_textarea_if_showing = (() => {
        return (textarea_div.prof_div.showing) ? textarea_div.prof_div.textarea : null;
    })

    textarea_div.bottom_edge_from_card_top = (() => {
        const ans = textarea_div.prof_textarea_if_showing()
        const h1 = textarea_div.student_textarea.getBoundingClientRect().height / textarea_div.card.card_scale
        const h2 = (ans === null) ? 0 : ans.getBoundingClientRect().height / textarea_div.card.card_scale
        // const margin = parseFloat(textarea_div.style.marginTop)
        // const start = textarea_div.q_height
        // return start + margin + h1 + h2
        return parseFloat(textarea_div.style.top) + h1 + h2
    })

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    textarea_div.distance_to_bottom_edge = (() => {
        return flashcard_height - textarea_div.bottom_edge_from_card_top()
    })

    textarea_div.rows_and_heights = (() => {
        const rows1 = parseInt(textarea_div.student_textarea.getAttribute('rows'));
        let ans = textarea_div.prof_textarea_if_showing();
        const rows2 = (ans === null) ? 0 : parseInt(ans.getAttribute('rows')) + 1;
        const h1 = textarea_div.student_textarea.getBoundingClientRect().height / textarea_div.card.card_scale;
        const h2 = (ans === null) ? 0 : ans.getBoundingClientRect().height / textarea_div.card.card_scale;
        return [rows1, rows2, h1, h2]
    })
    
    // this whole thing is kind of a hack but seems to work for now (?)
    textarea_div.reset_top = (slow => {
        textarea_div.style.transition = (slow) ? '1s' : '0s';
        let row_expansion = 16;
        let [rows1, rows2, h1, h2] = textarea_div.rows_and_heights()
        const old_top = parseFloat(textarea_div.style.top)
        // const max_rows_gone_up = max(0, Math.floor(textarea_div.raw_marginTop / row_expansion) - 2);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const max_rows_gone_up = max(0, Math.floor(textarea_div.initial_marginTop / row_expansion) - 2);
        const rows_gone_up = min(rows1 + rows2 - 1, max_rows_gone_up);
        assert(rows_gone_up >= 0)
        const first_approx_new_top = textarea_div.initial_top - row_expansion * rows_gone_up;
        const card_top_to_would_be_new_bottom = first_approx_new_top + h1 + h2;
        const new_protrusion = card_top_to_would_be_new_bottom - flashcard_height;
        if (new_protrusion >= -2 && new_protrusion < 30) {
            const max_add = max(0, old_top - first_approx_new_top)
            const should_add = 30 - new_protrusion;
            assert(max_add >= 0)
            assert(should_add > 0)
            var will_add = min(max_add, should_add);
        } else {
            var will_add = 0;
        }
        textarea_div.style.top = first_approx_new_top + will_add + 'px';
    });

    textarea_div.show_answer = ((delay, duration) => { textarea_div.prof_div.showtime(delay, duration) });

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    textarea_div.hide_answer = (immediate => {
        textarea_div.prof_div.showtime_over(immediate)
        textarea_div.student_textarea.un_freeze(immediate)
        let [card_top, card_bottom, student_top, student_bottom, prof_bottom, notes_bottom] = textarea_div.card.various_bottoms()
        let sY = window.scrollY
        let would_be_difY = sY - super_duper.min_sY
        let would_be_student_bottom = student_bottom + would_be_difY 
        let truncate_scroll_by = max(0, would_be_student_bottom - window_innerHeight + 20)
        smuthe_recenter(super_duper.min_sY + truncate_scroll_by)
    });
}

let tad = null

function center_left_for_working_cards() { return margin + (column - working_card_scaled_width) * 0.5; }
function center_left_for_flashcard_buttons() { return margin - 320; }

function initialize_working_card(card) {
    if (working_card_textarea_lineheight === null) { initialize_working_card_metrics(); }
    card.style.transition = '0s';
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    card.style.left = totalwidth + 10 + 'px';
    card.ticket_number = 0;
    card.queue = (() => {
        assert(card.status !== 'current_card');
        card.ticket_number++;
        card.style.visibility = 'hidden';
        card.remove_textarea()
        if (!gone_dark) { return }
        if (card.is_trashed) {
            card.status = 'in_trash';
            return;
        }
        assert(!super_duper.queue.includes(card))
        super_duper.queue.push(card)
        card.status = 'in_queue'
        card.style.transition = '0s'
        card.style.top = super_duper.flashcard_session_card_top + 'px'
        card.style.left = totalwidth + 10 + 'px'
        card.lower_jaw.style.transition = '0s';
        card.lower_jaw.style.left = '0px';
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        card.lower_jaw.style.height = flashcard_height - parseFloat(card.frontpanel.style.height) + 'px'
        if (card.notes) {
            card.notes.style.transition = '0s';
            card.notes.style.visibility = 'hidden';
            card.notes.style.left = (-center_left_for_working_cards()) + totalwidth + 600 + 'px'; // because notes are positioned relative to the mother card
        }
        if (card.textarea_div === null) {
            card.append_textarea()
        } else {
            let t_d = card.textarea_div
            t_d.student_textarea.textContent = ""
            t_d.student_textarea.style.textAlign = 'center';
            t_d.student_textarea.setAttribute('rows', 1);
            t_d.hide_answer(true);
        }
        card.getBoundingClientRect()
    })
    card.youre_up = (already_recentered => {
        assert(!super_duper.queue.includes(card))
        card.style.transition = 'left 0.7s ease-out'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        card.status = 'current_card'
        card.style.visibility = 'inherit'
        card.lower_jaw.style.visibility = 'inherit'
        card.lower_jaw.style.left = '0px'; // don't understand why but this is necessary
        card.style.left = center_left_for_working_cards() + 'px'
        card.num_peeks_allowed = current_slider.peeks_per_char_dial.num_peeks_allowed_for_string(card.solution_string)
        card.num_peeks_taken = 0
        card.num_warnings_allowed = current_slider.max_error_warnings_dial.num_warnings_allowed_for_string(card.solution_string)
        card.num_warnings_issued = 0
        card.answer_submitted = false
        if (card.notes) {
            card.lower_jaw.style.transition = 'left 0.7s ease-in'
            card.notes.style.visibility = 'hidden'
            card.notes.style.transition = 'left 0.7s ease-out'
        }
        if (!already_recentered) { smuthe_recenter(super_duper.min_sY) }
        card.textarea_div.student_textarea.focus({ preventScroll: true })
    })
    card.notes = card.getElementByClassName('flashcard_notes')
    card.lower_jaw = card.getElementByClassName('working_flashcard_lower_jaw')
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    assert(card.lower_jaw !== null)
    card.display_notes = (() => {
        if (card.notes === null || !card.answer_submitted) { return; }
        card.textarea_div.style.transition = '0.7s'
        card.textarea_div.clamp_white_above_down_to(60)
        const notes_top = card.textarea_div.bottom_edge_from_card_top() - 20
        // card.notes.style.top = notes_top + 'px' // * //
        card.notes.style.visibility = 'inherit'
        // card.notes.style.left = '-2px'
        card.notes.style.left = '0px'
        card.lower_jaw.style.left = -(totalwidth / 2) - 500 + 'px'
        setTimeout(() => { card.try_to_hide_lower_jaw() }, 800)
        mar = 20
        if (notes_top >= flashcard_height - mar) {
            let added = notes_top - flashcard_height + mar
            card.notes.style.paddingTop = added + 'px'
            // card.notes.style.top = notes_top - added + 'px' // * //
            card.frontpanel.style.height = flashcard_height - mar + 'px'
            // card.lower_jaw.style.top = card.frontpanel.style.height // * //
            card.lower_jaw.style.height = mar + 'px'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        } else {
            card.frontpanel.style.height = notes_top + 'px'
            // card.lower_jaw.style.top =  card.frontpanel.style.height // * //
            card.lower_jaw.style.height = flashcard_height - notes_top + 'px'
            card.notes.style.paddingTop = '0px'
        }
    })
    card.try_to_hide_lower_jaw = ((ticket_number) => {
        if (ticket_number === undefined) {
            card.ticket_number++
            ticket_number = card.ticket_number
        } else {
            if (card.ticket_number !== ticket_number) { return }
        }
        if (card.lower_jaw.style.left == gcs(card.lower_jaw).left) {
            card.lower_jaw.style.visibility = 'hidden'
        } else {
            setTimeout(() => { card.try_to_hide_lower_jaw(ticket_number) }, 400)
        }
    })
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    card.stop_being_current_card = (() => {
        if (card === super_duper.current_card) { super_duper.current_card = null; }
        if (card.textarea_div && card.textarea_div.student_textarea) { card.textarea_div.student_textarea.freeze(); }
    })
    card.leave_stage = (() => {
        if (card.is_trashed) { card.leave_stage_bottom() }
        else { card.leave_stage_top() }
    })
    card.leave_stage_top = (() => {
        card.stop_being_current_card()
        card.status = 'leaving_stage_top'
        card.ticket_number++
        let protrusion = card.protrusion_from_bottom_edge_scaled();
        assert(protrusion >= 0)
        card.style.transition = 'top ' + (0.7 + (protrusion * 0.2 / 1000)) + 's';
        window.scrollY
        card.style.top = super_duper.min_sY - 1000 - protrusion + 'px'
        setTimeout(() => card.try_to_hide_top(card.ticket_number, protrusion), 900)
    })
    card.leave_stage_bottom = (() => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        card.stop_being_current_card()
        card.status = 'leaving_stage_bottom'
        card.ticket_number++
        const now_left = parseFloat(gcs(card).left)
        const dif = now_left - parseFloat(card.style.left);
        if (dif > 100) {
            setTimeout(card.leave_stage_bottom, min(150, dif * 2))
        } else {
            card.style.left = now_left + 'px'
            card.style.transition = 'top 0.8s'
            card.style.top = window.scrollY + window_innerHeight + 400 + 'px'
            card.try_to_hide_bottom(card.ticket_number)
        }
    })
    card.leave_stage_right = (() => {
        card.stop_being_current_card()
        card.status = 'leaving_stage_right'
        card.ticket_number++
        card.style.transition = working_flashcard_transition_value_out
        card.style.left = totalwidth + 130 + 'px'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        card.try_to_hide_right(card.ticket_number)
    })
    card.try_to_hide_right = ((ticket_number, totaltime) => {
        if (card.ticket_number !== ticket_number) { return }
        if (totaltime === undefined) { totaltime = 0; }
        let r = card.getBoundingClientRect()
        let sX = window.scrollX
        if (sX + r.left > totalwidth + 20) {
            card.queue()
        } else {
            if (totaltime > 1000 && gcs(card).left === card.style.left) { card.style.left = parseFloat(card.style.left) + 500 + 'px'; }
            setTimeout(() => { card.try_to_hide_right(ticket_number, totaltime + 400) }, 400)
        }
    })
    card.try_to_hide_bottom = (ticket_number => {
        if (card.ticket_number !== ticket_number) { return }
        let r = card.getBoundingClientRect()
        if (r.top > window_innerHeight) {
            card.queue()
        } else {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            if (gcs(card).top === card.style.top) { card.style.top = parseFloat(card.style.top) + 1000 + 'px'; }
            setTimeout(() => { card.try_to_hide_bottom(ticket_number) }, 400)
        }
    })
    card.try_to_hide_top = ((ticket_number, protrusion) => {
        if (card.ticket_number !== ticket_number) { return; }
        let r = card.getBoundingClientRect();
        if (r.bottom + protrusion < 0 || gcs(card).top === card.style.top) {
            card.queue()
        } else {
            // if (gcs(card).top === card.style.top) { card.style.top = parseFloat(card.style.top) - 500 + 'px'; }
            setTimeout(() => { card.try_to_hide_top(ticket_number, protrusion); }, 300);
        }
    });
    card.textarea_div = null;
    card.frontpanel = card.getElementByClassName('working_flashcard_frontpanel');
    assert(card.frontpanel !== null)
    card.padded_container = card.getElementByClassName('padded_flashcard_container');
    card.card_scale = presumptive_flashcard_scaling_factor;
    card.append_textarea = (() => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        card.remove_textarea();
        const textarea_div = question_flashcard_textarea_div_factory(card);
        tad = textarea_div
        const frontpanel = card.frontpanel;
        const question = frontpanel.getElementByClassName('q');
        const last_child = question.children[question.children.length - 1];
        const last_child_ends_with_math_display = (
            last_child.lastElementChild && 
            !last_child.lastChild.isNonCommentTextNode() && (
                last_child.lastElementChild.classList.contains('†') || 
                last_child.lastElementChild.classList.contains('MathJax_SVG_Display') ||
                last_child.lastElementChild.tagName === 'SCRIPT'    
            )
        );
        const fudge_term = last_child_ends_with_math_display ? 3 : 0;
        const card_scale_approx = frontpanel.getBoundingClientRect().height / parseFloat(gcs(frontpanel).height);
        if (abs(card_scale_approx - card.card_scale) > 0.08) {
            console.log("suspiciously large difference between card_scale_approx and card_scale:", card_scale_approx, card_scale);
            assert(false);
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---

        textarea_div.q_height = question.getBoundingClientRect().height / card.card_scale;
        textarea_div.negative_marginTop = last_child_ends_with_math_display ? -40 : (
            (last_child.tagName === 'P') ? -12 : 0
        );

        // const reddish = newElement('div', {'class': 'reddish'});
        // reddish.style.top = textarea_div.q_height + textarea_div.negative_marginTop + 'px';
        // reddish.style.height = flashcard_height - parseFloat(reddish.style.top) + 'px';
        // card.frontpanel.append(reddish);
    
        super_duper.appendChild(textarea_div);
        const ta_above_rect = textarea_div.student_textarea.getBoundingClientRect(); // must come after appending to super_duper
        super_duper.removeChild(textarea_div);
    
        textarea_div.imaginary_start_from_card_top = textarea_div.q_height + textarea_div.negative_marginTop;
        textarea_div.initial_blank_height = flashcard_height - textarea_div.imaginary_start_from_card_top;
        textarea_div.raw_marginTop = (textarea_div.initial_blank_height - ta_above_rect.height) / 2;
        textarea_div.initial_marginTop = textarea_div.raw_marginTop * 0.93 + textarea_div.negative_marginTop + fudge_term;
        // textarea_div.reset_marginTop();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        textarea_div.initial_top = textarea_div.q_height + textarea_div.initial_marginTop 
        textarea_div.reset_top()
        card.appendChild(textarea_div)
        card.textarea_div = textarea_div
        textarea_div.style.visibility = 'inherit';
        textarea_div.student_textarea.style.visibility = 'inherit'
        textarea_div.student_textarea_screen.onclick = (() => {
            if (textarea_div.prof_div.showing && !card.answer_submitted) { textarea_div.hide_answer() }
        })
        setTimeout(() => {
            textarea_div.student_textarea.focus({ preventScroll: true });
        }, 800);
        card.virgin_textarea = true
    });
    card.remove_textarea = (() => {
        if (card.textarea_div !== null) {
            remove_focus_indicator(card.textarea_div.focus_indicator)
            card.removeChild(card.textarea_div);
            card.textarea_div = null;
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    });
    card.protrusion_from_bottom_edge_scaled = (() => {
        let bottom = card.getBoundingClientRect().bottom
        if (card.notes !== null && card.notes.style.visibility === 'inherit') { return card.notes.getBoundingClientRect().bottom - bottom }
        let ans = card.textarea_div.prof_textarea_if_showing()
        let p1 = (ans === null) ? 0 : ans.getBoundingClientRect().bottom - bottom
        let p2 = card.textarea_div.student_textarea.getBoundingClientRect().bottom - bottom
        return max(p1, p2, 0)
    })
    card.various_bottoms = (() => {
        let card_rect = card.getBoundingClientRect()
        let student_rect = card.textarea_div.student_textarea.getBoundingClientRect()
        let notes_bottom = (card.notes !== null && card.notes.style.visibility === 'inherit') ? card.notes.getBoundingClientRect().bottom : card_rect.bottom
        let prof_div = card.textarea_div.prof_div
        let prof_height = (prof_div.showing) ? prof_div.textarea.getBoundingClientRect().height : 0
        return [card_rect.top, card_rect.bottom, student_rect.top, student_rect.bottom, student_rect.bottom + prof_height, notes_bottom]
    })
    // not used right now: :/
    card.answer_is_showing = (() => { return (card.textarea_div && card.textarea_div.prof_div.showing) })
    const soln = card.getElementByClassName('flashcard_solution_div');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    card.solution_string = '';
    for (const c of soln.children) {
        assert(c.tagName.toLowerCase() === 'p');
        let par = c.textContent.trim().replace(/\s\s+/g, ' ');
        let old_par = '';
        do {
            old_par = par
            par = par.replace(/\.##/g, ' .#')
        } while (old_par !== par);
        par = par.replace(/\.#/g, ' ')
        assert(par.length > 0);
        if (card.solution_string.length > 0) {
            card.solution_string += '\n';
            if (!c.classList.contains('noline')) {
                card.solution_string += '\n';
            }
        }
        card.solution_string += par;
    }
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

function measurements_for_textarea_with_value(value) {
    const ta = flashcard_textarea_factory();
    ta.value = value;
    super_duper.appendChild(ta);
    const scroll_height = ta.scrollHeight;
    const width = ta.getBoundingClientRect().width;
    const raw_rows = (scroll_height - working_card_textarea_vertical_padding) / working_card_textarea_lineheight;
    return {
        'rows': Math.round(raw_rows),
        'scrollHeight': scroll_height,
        'width': width
    };
}

function autoExpand(field) {
    let num_rows = measurements_for_textarea_with_value(field.value)['rows'];
    field.setAttribute('rows', num_rows);
    if (field.error_div) {
        field.error_div.style.height = field.scrollHeight + 'px'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        field.textarea_div.style.height = field.scrollHeight + 'px' // huh... why?
    }
    field.style.textAlign = 'left';
}

// function initialize_working_card_textarea_lineheight_and_vertical_padding() {
function iwc_a() {
    const height_div = newElement('div', { 'class': 'flashcard_textarea' });
    height_div.style.display = 'inline-block';
    height_div.style.visibility = 'hidden';
    height_div.textContent = 'a';
    super_duper.appendChild(height_div);
    const h1 = height_div.getBoundingClientRect().height;
    const num_new_lines = 3;
    for (let i = 0; i < num_new_lines; i++) {
        height_div.appendChild(document.createElement("br"));
        height_div.appendChild(document.createTextNode("a"));
    }
    const h2 = height_div.getBoundingClientRect().height;
    working_card_textarea_lineheight = (h2 - h1) / num_new_lines;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    working_card_textarea_vertical_padding = h1 - working_card_textarea_lineheight;
    super_duper.removeChild(height_div);
}

// function initialize_working_card_textarea_char_width() {
function iwc_b() {
    const width_div = newElement('div', { 'class': 'flashcard_textarea' });
    width_div.style.display = 'inline-block';
    width_div.style.visibility = 'hidden';
    width_div.textContent = 'a';
    super_duper.appendChild(width_div);
    const w1 = width_div.getBoundingClientRect().width;
    width_div.textContent = 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf';
    const w2 = width_div.getBoundingClientRect().width;
    working_card_textarea_char_width = (w2 - w1) / (width_div.textContent.length - 1);
    super_duper.removeChild(width_div);
}

// function initialize_working_card_textarea_width_without_scaling_and_num_cols_effective_value() {
// function iwc_c() {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
//     const ta = flashcard_textarea_factory();
//     super_duper.appendChild(ta);
//     const ta_rect = ta.getBoundingClientRect();
//     working_card_textarea_width_without_scaling = ta_rect.width;
//     // console.log('working_card_textarea_width_without_scaling:', working_card_textarea_width_without_scaling)
//     super_duper.removeChild(ta);
// }

function iwc_d() {
    // assert(super_duper.style.display === 'block');
    const ta = flashcard_textarea_factory();
    super_duper.appendChild(ta);
    const initial_height = ta.scrollHeight;

    num_chars = 64
    ta.textContent = "A".repeat(num_chars)
    if (ta.scrollHeight === initial_height) {
        do {
            num_chars += 1;
            ta.textContent = "A".repeat(num_chars);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        } while (ta.scrollHeight === initial_height && num_chars < 150);
        assert(num_chars < 150)
        num_chars -= 1;
    } else {
        do {
            num_chars -= 1;
            ta.textContent = "A".repeat(num_chars);
        } while (ta.scrollHeight > initial_height && num_chars > 0);
        assert(num_chars > 0);
    }
    working_card_textarea_num_cols_effective_value = num_chars;
    super_duper.removeChild(ta);
}

function initialize_working_card_metrics() {
    iwc_a()
    iwc_b()
    iwc_d()
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
function green_checkmark() {
    let svg = newElement('svg', { 'id': 'ze_checkmark' });
    svg.style.overflow = 'inherit'
    svg.style.position = 'absolute'
    svg.appendChild(newElement('g'))
    let r1 = 40.1
    let r2 = r1 - 3.2
    let ellipse_dy = .8
    let BM1 = new Point(-30.5, 5).scaledBy(r1 / 54.1)
    let BM2 = new Point(-8, 25).scaledBy(r1 / 54.1)
    let BM3 = new Point(24, -13).scaledBy(r1 / 54.1)
    svg.setAttribute('viewBox', `${0} ${0} ${r2} ${r2}`)
    svg.setAttribute('width', `${r2}px`)
    svg.lastElementChild.appendChild(newElement('ellipse', {
        'fill': '#fdfdfd',
        'rx': r1,
        'ry': r1 + ellipse_dy,
    }))
    svg.lastElementChild.appendChild(newElement('ellipse', {
        'fill': super_duper_color,
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        'rx': r1,
        'ry': r1 + ellipse_dy,
    }));
    svg.lastElementChild.appendChild(newElement('circle', {
        'class': 'flashcard_textarea_color',
        'r': r2
    }));
    // svg.lastElementChild.appendChild(newElement('circle', {
    //     'fill': 'red',
    //     'r': 2
    // }));
    svg.lastElementChild.appendChild(newElement('path', {
        'stroke': '#7f7',
        // 'stroke': 'white',
        'fill': 'none',
        'd': 'M' + BM1.d2f() + BM2.d2f() + BM3.d2f(),
        'stroke-width': 7 * r1 / 54.1,
        'transform': 'translate(2.2,-2.4)'
    }));
    svg.lastElementChild.setAttribute('transform', 'scale(.45)');
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    return svg;
}

function time_to_check_solution() {
    let card = super_duper.current_card
    card.textarea_div.show_answer(100, '0.8s')
    card.textarea_div.student_textarea.freeze()
    card.textarea_div.focus_indicator.disable()
    card.answer_submitted = true
    peek_button.turn_screen_on()
    onward_button_check_dot.style.display = 'none';
    if (onward_button.mouse_in) {
        onward_button_check_dot.style.display = 'none';
        onward_button_next_dot.style.display = 'block';
    }
    let value = card.textarea_div.student_textarea.value;
    if (value === card.solution_string) {
        const ze_checkmark = green_checkmark();
        super_duper.current_card.textarea_div.reset_measurements()
        const height = super_duper.current_card.textarea_div.student_textarea.scrollHeight;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const width = super_duper.current_card.textarea_div.student_textarea.getBoundingClientRect().width / card.card_scale;
        ze_checkmark.style.position = 'absolute';
        ze_checkmark.style.left = width + 'px';
        ze_checkmark.style.top = (height / 2) + 'px';
        ze_checkmark.style.animationDuration = '0.7s';
        ze_checkmark.style.transformOrigin = 'top left';
        const checkmark_holder = newElement('div')
        checkmark_holder.style.position = 'absolute'
        checkmark_holder.style.width = width + 'px'
        checkmark_holder.appendChild(ze_checkmark)
        setTimeout(() => {
            ze_checkmark.classList.add('bounceIn');
            super_duper.current_card.textarea_div.student_div.appendChild(checkmark_holder);
        }, 300);
    } else {
        // txt_pt = textarea_string_last_text_point(value);
        // pt = card.textarea_div.baseline_coordinates_of_text_point(txt_pt);
        paint_mistakes_red_no_matter_what();
    }
    if (card.notes) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        onward_button_dash.style.display = 'none'
        onward_button_notes_word.style.display = 'block'
    } else {
        onward_button_dash.style.display = 'block'
        onward_button_notes_word.style.display = 'none'
    }
    onward_button.slider_left()
    const d1 = card.textarea_div.amount_of_white_above()
    const d2 = card.textarea_div.distance_to_bottom_edge()
    if (d2 > 0) {
        if (d1 > d2 + 8) {
            // d1 - dy == d2 + dy + 10
            // d1 - d2 - 10 == 2dy
            const dy = (d1 - d2 - 10) * 0.5
            card.textarea_div.style.transition = '0.3s'
            // const mT = parseFloat(card.textarea_div.style.marginTop)
            // setTimeout(() => { card.textarea_div.style.marginTop = mT - dy + 'px' }, 0)
            const T = parseFloat(card.textarea_div.style.top)
            setTimeout(() => { card.textarea_div.style.top = T - dy + 'px' }, 0)
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    } else {
        if (d1 > 60) {
            if (d1 - 60 > abs(d2) + 10) {
                const dy = (d1 - d2 - 10) * 0.5
                card.textarea_div.style.transition = '0.3s'
                // const mT = parseFloat(card.textarea_div.style.marginTop)
                // setTimeout(() => { card.textarea_div.style.marginTop = mT - dy + 'px' }, 0)
                const T = parseFloat(card.textarea_div.style.top)
                setTimeout(() => { card.textarea_div.style.top = T - dy + 'px' }, 0)
            } else {
                const max_dy = max(0, abs(d2) - 10)
                const dy = min(d1 - 60, max_dy)
                if (dy > 0) {
                    card.textarea_div.style.transition = '0.3s'
                    // const mT = parseFloat(card.textarea_div.style.marginTop)
                    // setTimeout(() => { card.textarea_div.style.marginTop = mT - dy + 'px' }, 0)
                    const T = parseFloat(card.textarea_div.style.top)
                    setTimeout(() => { card.textarea_div.style.top = T - dy + 'px' }, 0)
                }
            }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
    }
}

function paint_mistakes_red_no_matter_what() {
    let card = super_duper.current_card;
    let soln = card.solution_string;
    let answ = card.textarea_div.student_textarea.value;
    if (soln === answ) {
        card.textarea_div.clear_paint();
        return;
    }
    for (var i = 0; i < answ.length; i++) { if (soln[i] !== answ[i]) { break; } }
    if (i >= answ.length) {
        if (soln.length < answ.length) {
            let regions = regions_after(answ, soln.length);
            for (const r of regions) { card.textarea_div.paint_region(r); }
        } else {
            let regions = regions_after(answ + ' ', i);
            for (const r of regions) { card.textarea_div.paint_region(r); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
    } else {
        let regions = regions_after(answ, i);
        for (const r of regions) { card.textarea_div.paint_region(r); }
    }
}


function errorWarn() {
    let card = super_duper.current_card;
    if (!card || card.virgin_textarea) { return; }
    let student_answer = card.textarea_div.student_textarea.value;
    let solution = card.solution_string;

    for (var i = 0; i < student_answer.length; i++) {
        if (i >= solution.length || student_answer[i] !== solution[i]) {
            for (var h = i; h < student_answer.length; h++) {
                if (!")]}".includes(student_answer[h])) { break }
            }
            if (h === student_answer.length) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                var j = i;
                do {
                    let which_closing = student_answer[i]
                    let which_opening = (which_closing === ')') ? '(' : ((which_closing === ']') ? '[' : '{')
                    let paren_positivity = 0;
                    let found = false;
                    for ( ; j < solution.length; j++) {
                        if (student_answer[j] === which_opening) { paren_positivity += 1 }
                        if (student_answer[j] === which_closing) { paren_positivity -= 1 }
                        if (paren_positivity === -1) { found = true; break; }
                    }
                    if (found) { i += 1 }
                } while (found && i < student_answer.length);
            }
            break
        }
    }

    function paint_red() {
        // card.textarea_div.error_div.style.width = gcs(card.textarea_div.student_textarea).width
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let regions = regions_after(student_answer, i);
        for (const r of regions) { card.textarea_div.paint_region(r); }
        if (i !== card.last_warning_issued_at || student_answer[i] !== card.last_warning_issued_at_char) {
            card.num_warnings_issued++;
            disable_warnings_button.reset_annotation_for_current_card();
        }
        card.last_warning_issued_at = i;
        card.last_warning_issued_at_char = student_answer[i];
    }

    card.textarea_div.clear_paint();

    if (card.num_warnings_issued >= card.num_warnings_allowed) {
        if (i < student_answer.length &&
            i === card.last_warning_issued_at &&
            student_answer[i] === card.last_warning_issued_at_char) { paint_red(); }
        return;
    }

    if (i < student_answer.length && !disable_warnings_button.warnings_are_disabled) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (i < student_answer.length - 2 ||
            card.last_warning_issued_at === i ||
            student_answer.length >= solution.length - 2 ||
            student_answer[i] === '\n') {
            if (student_answer[i])
            paint_red();
        }
    } else {
        card.last_warning_issued_at = undefined;
        card.last_warning_issued_at_char = undefined;
    }

    if (student_answer === solution && card.num_warnings_issued < card.num_warnings_allowed) { time_to_check_solution(); }
}

document.addEventListener('input', function (event) {
    let target = event.target;
    if (target.tagName.toLowerCase() === 'textarea') {
        autoExpand(target);
        target.textarea_div.reset_top(false);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (target.card.virgin_textarea && 
            my_active_element === onward_button_right_focus_indicator) {
            my_active_element.deactivate()
        }
        target.card.virgin_textarea = false;
        // if (basement.style.height === '0px') { basement.style.height = '2000px'; }
        let tp = text_point_row_column(target.value, target.selectionStart)
        let [t, l] = target.textarea_div.text_point_to_top_left(tp)
        let [card_top, card_bottom, student_top, student_bottom, prof_bottom, notes_bottom] = target.card.various_bottoms()
        let caret_top = student_top + target.card.card_scale * (t + working_card_textarea_lineheight * 0.8)
        let sY = window.scrollY
        if (caret_top > window_innerHeight - 80) {
            let scroll = caret_top - window_innerHeight + 80 
            quick_to_element_scroll(sY + scroll)
        } else {
            let slack = window_innerHeight - student_bottom - 100
            if (slack > 0) {
                let dest_sY = max(super_duper.min_sY, sY - slack)
                quick_to_element_scroll(dest_sY)
            }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        }
        errorWarn();
    }
}, false);

function go_light() {
    gone_dark = false;
    let ticket_number = super_duper.increment_ticket_number()
    let transition_time = '0.2s'
    if (tutorial.style.visibility === 'inherit') {
        tutorial_frame.start_retreat(true);
        transition_time = '3s';
    }
    if (super_duper.current_card && super_duper.current_card.status !== 'leaving_stage_top') { super_duper.current_card.leave_stage_right() }
    if (my_active_element !== null && !my_active_element.hasAncestor(super_duper)) { my_active_element.focus_go_light() }
    current_slider.go_light()
    super_duper.style.transition = transition_time
    window.requestAnimationFrame(() => {
        if (super_duper.ticket_number !== ticket_number) { return }
        super_duper.style.backgroundColor = '#0000'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    })
    new_school_flashcard_buttons_go_light()
    setTimeout(() => {
        if (super_duper.ticket_number !== ticket_number) { return }
        super_duper.style.pointerEvents = 'none'
    }, 1000)
    if (window_innerHeight > basement.getBoundingClientRect().top) {
        quick_to_element_scroll(window.scrollY + basement.getBoundingClientRect().top - window_innerHeight - 1, undefined, 1000)
        setTimeout(try_to_hide_basement, 1200)
    } else {
        basement.style.height = '0px';
    }
}

function try_to_hide_basement() {
    if (gone_dark) { return }
    if (basement.style.height === '0px') { return }
    if (!quick_to_element_scroll_happening ||
        basement.getBoundingClientRect().top >= window_innerHeight - 1) {
        basement.style.height = '0px'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        return
    }
    setTimeout(try_to_hide_basement, 300)
}

function new_school_flashcard_buttons_go_light() {
    flashcard_buttons_svg.style.transition = 'left linear 0.6s';
    flashcard_buttons_svg.style.left = '-300px';
    flashcard_buttons_svg.ticket_number++
    let ticket_number = flashcard_buttons_svg.ticket_number
    try_to_hide_flashcard_buttons = (() => {
        if (ticket_number !== flashcard_buttons_svg.ticket_number) { return }
        if (gcs(flashcard_buttons_svg).left === flashcard_buttons_svg.style.left) { flashcard_buttons_svg.style.visibility = 'hidden' }
        else { setTimeout(try_to_hide_flashcard_buttons, 500) }
    })
    setTimeout(try_to_hide_flashcard_buttons, 1000)
}

function try_to_hide_flashcard_buttons() {
    if (gone_dark) { return; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let run_again = false;
    for (const button of flashcard_buttons) {
        if (button.style.visibility !== 'hidden') {
            if (gcs(button).left === button.style.left) { button.style.visibility = 'hidden'; }
            else { run_again = true; }
        }
    }
    if (run_again) { setTimeout(try_to_hide_flashcard_buttons, 400); }
}

function old_school_flashcard_buttons_go_light() {
    for (const button of flashcard_buttons) {
        button.style.transition = 'left 0.9s'
        button.style.left = -100 + 'px';
    }
    setTimeout(try_to_hide_flashcard_buttons, 1000);
}

function point_from_circle_center(ze_circle) {
    return new Point(
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        parseFloat(ze_circle.getAttribute('cx')),
        parseFloat(ze_circle.getAttribute('cy'))
    )
}

function abril_fatface_right_justified(string) {
    const g = newElement('g', {'stroke-width': 2});
    let last_x = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        c = string[i];
        next_c = (i >= 1) ? string[i - 1] : "";
        assert(abril_fatface_widths.hasOwnProperty(c));
        last_x = last_x - abril_fatface_widths[c];
        g.prependChild(newElement('use', {
            'x': last_x,
            'xlink:href': `#abril_fatface_${c}`,
        }));
        if (i === 0) { break; }
        last_x -= 6;
        if (c === '4') { last_x += 9; }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (next_c === '7') { last_x += 8; }
        if (c === '(') {
            last_x -= 20
            if (next_c === '1') { last_x += 15 }
        }
    }
    return [g, last_x];
}

function abril_fatface_top_right_justified(string) {
    [g, last_x] = abril_fatface_right_justified(string)
    g.setAttribute('transform', `translate(0,${abril_fatface_letter_height})`)
    return [g, last_x]
}

tomorrow_widths = {};
abril_fatface_widths = {};

function tomorrow_right_justified(string) {
    const g = newElement('g', { 'stroke-width': 2 });
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let last_x = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        c = string[i];
        next_c = (i >= 1) ? string[i - 1] : "";
        assert(tomorrow_widths.hasOwnProperty(c));
        last_x = last_x - tomorrow_widths[c];
        g.prependChild(newElement('use', {
            'x': last_x,
            'xlink:href': `#tomorrow_${c}`,
        }));
        if (i === 0) { break; }
        if (c === '4' && next_c === '/') { last_x += 14; }
        if (c === '/') { last_x += 2; }
        if (c === '\u221e') { last_x += 6; }
        last_x -= 12;
    }
    return [g, last_x];
}

function initialize_tomorrow_widths() {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    for (const path of SVG_defs_fAcToReD_oUt.children) {
        if (!path.hasAttribute('id')) {
            console.log("SVG_defs_fAcToReD_oUt el without id:", path)
            continue
        }
        const ze_id = path.getAttribute('id');
        if (!ze_id.startsWith('tomorrow_')) { continue; }
        const char = ze_id[ze_id.length - 1];
        assert(!tomorrow_widths.hasOwnProperty(char));
        tomorrow_widths[char] = parseFloat(path.getAttribute('measured_width'))
    }
}

function initialize_abril_fatface_widths() {
    for (const path of SVG_defs_fAcToReD_oUt.children) {
        const ze_id = path.getAttribute('id');
        if (!ze_id.startsWith('abril_fatface_')) { continue; }
        const char = ze_id[ze_id.length - 1];
        assert(!abril_fatface_widths.hasOwnProperty(char));
        abril_fatface_widths[char] = parseFloat(path.getAttribute('measured_width'))
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    }
}

function viewbox_as_dict(element) {
    const array = element.getAttribute('viewBox').split(" ").filter(x => x !== "")
    return {
        'x': parseFloat(array[0]),
        'y': parseFloat(array[1]),
        'width': parseFloat(array[2]),
        'height': parseFloat(array[3]),
    }
}

function initialize_escape_button() {
    escape_button.onclick = (event => { event.stopPropagation(); escape_button_click(); })
}

function initialize_disable_warnings_button() {
    disable_warnings_button.defs = disable_warnings_button.getElementByTagName('defs');
    disable_warnings_button.measured_widths = {};
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    disable_warnings_button.top_right = point_from_circle_center(disable_warnings_button_top_right_marker);
    disable_warnings_button.bottom_right = point_from_circle_center(disable_warnings_button_bottom_right_marker);
    disable_warnings_button.display_annotation = ((string) => {
        scale = 0.108;
        const [g, last_x] = tomorrow_right_justified(string);
        const annotation_width = abs(last_x) * scale;
        const tr = disable_warnings_button.top_right;
        const br = disable_warnings_button.bottom_right;
        const line_end = new Point(br.x, tr.y + annotation_width + 3);
        let move_up = 0;
        let min_dif = 3;
        if (br.y - line_end.y < min_dif) {
            move_up = min_dif - br.y + line_end.y;
            g.setAttribute('transform', `translate(${move_up})scale(${scale})`);
            line_end.y = br.y - min_dif;
        } else {
            g.setAttribute('transform', `scale(${scale})`);
        }
        disable_warnings_button_annotation_group.removeAllChildren();
        disable_warnings_button_annotation_group.appendChild(g);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        disable_warnings_button_lock_icon.setAttribute('transform', `translate(${tr.x - 15},${tr.y + annotation_width - 0.2 - move_up})`);
        
        // lock_height = lock.bbox(with_strokes=True).height()
        // annotation_mid = Y + line_dy + 0.5 * annotation_width
        // # lock_origin = Point(line_end.x - 15, Y + line_dy + annotation_width - 0.4)
        // lock_origin = Point(X + width - line_dy - annotation_width - lbw2 - 3, Y + height - line_dy)
        // disable_warnings_button_lock_icon.setAttribute('transform', `translate(${X + width - line_dy - annotation_width - 2 - lbw2},${Y + height - line_dy})`);
    });
    disable_warnings_button.inactivity_screen = disable_warnings_button.getElementByClassName('flashcard_button_inactivity_screen');
    assert(disable_warnings_button.inactivity_screen !== null);
    disable_warnings_button.turn_screen_on = (() => {
        disable_warnings_button.inactivity_screen.style.display = 'block';
        disable_warnings_button.focus_indicator.disable()
    });
    disable_warnings_button.turn_screen_off = (() => {
        disable_warnings_button.inactivity_screen.style.display = 'none';
        disable_warnings_button.focus_indicator.enable()
    });
    disable_warnings_button.reset_annotation_for_current_card = (() => {
        const card = super_duper.current_card;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const denominator = (card.num_warnings_allowed === Infinity) ? '\u221e' : card.num_warnings_allowed;
        disable_warnings_button.display_annotation(`${card.num_warnings_issued}/${denominator}`);
        if (card.num_warnings_issued < card.num_warnings_allowed) {
            disable_warnings_button.turn_screen_off();
            onward_button.auto_as_path.style.display = 'block'
        } else {
            disable_warnings_button.turn_screen_on();
            onward_button.auto_as_path.style.display = 'none'
        }
    });
    disable_warnings_button.use_outer_spinner = (document.getElementById('disable_warnings_button_outer_spinner') === null) ? false : true;
    disable_warnings_button.use_inner_spinner = (document.getElementById('disable_warnings_button_inner_spinner') === null) ? false : true;
    disable_warnings_button.disable_warnings = (() => {
        disable_warnings_button.warnings_are_disabled = true;
        if (disable_warnings_button.use_outer_spinner) { disable_warnings_button_outer_spinner.style.transform = `rotate(${disable_warnings_button_disabled_angle}deg)`; }
        if (disable_warnings_button.use_inner_spinner) { disable_warnings_button_inner_spinner.style.transform = `rotate(180deg)`; }
        setTimeout(() => {
            if (disable_warnings_button.warnings_are_disabled !== true) { return; }
            // ze_disable_tspan.textContent = "enable";
            disable_warnings_button_disable_word.style.visibility = 'hidden'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            disable_warnings_button_enable_word.style.visibility = 'inherit'
            // disable_warnings_button.style.zIndex = 1;
            disable_warnings_button_shut_lock_stem.style.visibility = 'inherit';
            disable_warnings_button_open_lock_stem.style.visibility = 'hidden';
        }, 400);
        if (!super_duper.current_card.answer_submitted) {
            super_duper.current_card.textarea_div.clear_paint();
        }
    });
    disable_warnings_button.enable_warnings = (() => {
        disable_warnings_button.warnings_are_disabled = false;
        if (disable_warnings_button.use_outer_spinner) { disable_warnings_button_outer_spinner.style.transform = `rotate(${disable_warnings_button_enabled_angle}deg)`; }
        if (disable_warnings_button.use_inner_spinner) { disable_warnings_button_inner_spinner.style.transform = `rotate(0deg)`; }
        setTimeout(() => {
            if (disable_warnings_button.warnings_are_disabled !== false) { return; }
            disable_warnings_button_disable_word.style.visibility = 'inherit'
            disable_warnings_button_enable_word.style.visibility = 'hidden'
            disable_warnings_button_shut_lock_stem.style.visibility = 'hidden';
            disable_warnings_button_open_lock_stem.style.visibility = 'inherit';
        }, 400);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (super_duper.current_card && !super_duper.current_card.answer_submitted) { errorWarn(); }
    });
    disable_warnings_button.toggle_disable_warnings = (() => {
        if (disable_warnings_button.warnings_are_disabled) { disable_warnings_button.enable_warnings(); }
        else { disable_warnings_button.disable_warnings(); }
    });
    disable_warnings_button.set_disable_warnings_to = ((value) => {
        if (value) { disable_warnings_button.disable_warnings(); }
        else { disable_warnings_button.enable_warnings(); }
    });
    disable_warnings_button.angle_from_disable_warnings_flag = (() => {
        if (disable_warnings_button.warnings_are_disabled) { return disable_warnings_button_disabled_angle; }
        else { return disable_warnings_button_enabled_angle; }
    });
    disable_warnings_button.onclick = ((event)  => {
        if (disable_warnings_button.inactivity_screen.style.display === 'block') { return; }
        disable_warnings_button.toggle_disable_warnings();
        event.stopPropagation()
    })
    disable_warnings_button.onmousedown = ((event) => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        event.preventDefault()  // to keep the textarea from losing focus
    })
    disable_warnings_button.enable_warnings()
}

function initialize_peek_button() {
    peek_button.onclick = (event => { peek_button_click(); event.stopPropagation(); })
    peek_button.defs = peek_button.getElementByTagName('defs');
    peek_button.display_annotation_2 = (string => {
        scale = 0.108;
        const [g, _] = tomorrow_right_justified(string);
        g.setAttribute('transform', `scale(${scale})`);
        peek_button_bottom_right_annotation_group.removeAllChildren();
        peek_button_bottom_right_annotation_group.appendChild(g);
    });
    peek_button.display_annotation_1 = ((string) => {
        scale = 0.108;
        const [g, _] = tomorrow_right_justified(string);
        g.setAttribute('transform', `scale(${scale})translate(0 ${tomorrow_letter_height})`);
        peek_button_top_left_upright_annotation_group.removeAllChildren();
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        peek_button_top_left_upright_annotation_group.appendChild(g);
    });
    peek_button.inactivity_screen = peek_button.getElementByClassName('flashcard_button_inactivity_screen');
    peek_button.turn_screen_on = (() => {
        peek_button.inactivity_screen.style.opacity = 1
        peek_button.focus_indicator.disable()
    });
    peek_button.turn_screen_off = (() => {
        peek_button.inactivity_screen.style.opacity = 0
        peek_button.focus_indicator.enable()
    });
    peek_button.reset_annotation_for_current_card = (() => {
        const card = super_duper.current_card;
        const denominator = (card.num_peeks_allowed === Infinity) ? '\u221e' : card.num_peeks_allowed;
        peek_button.display_annotation_2(`${card.num_peeks_taken}/${denominator}`);
        peek_button.display_annotation_1(current_slider.peek_duration_dial.string_value());
        (card.num_peeks_taken < card.num_peeks_allowed) ? peek_button.turn_screen_off() : peek_button.turn_screen_on()
    });
}

// AUTO-GENERATED FILE --- DO NOT EDIT ---
function initialize_onward_button() {
    onward_button.mouse_in = false
    onward_button_left_hand_rect.width1 = onward_button_left_hand_rect.getAttribute('width1')
    onward_button_left_hand_rect.width2 = onward_button_left_hand_rect.getAttribute('width2')
    onward_button_right_hand_rect.width1 = onward_button_right_hand_rect.getAttribute('width1')
    onward_button_right_hand_rect.width2 = onward_button_right_hand_rect.getAttribute('width2')
    onward_button_right_hand_rect.x1 = onward_button_right_hand_rect.getAttribute('x1')
    onward_button_right_hand_rect.x2 = onward_button_right_hand_rect.getAttribute('x2')
    onward_button.auto_as_path = onward_button.getElementByClassName('auto_as_path')
    onward_button.clear_dots = (() => {
        onward_button_check_dot.style.display = 'none'
        onward_button_next_dot.style.display = 'none'
        onward_button_notes_dot.style.display = 'none'
    })
    onward_button.left_dot_display = (() => {
        if (!super_duper.current_card.answer_submitted) {
            onward_button_check_dot.style.display = 'block'
            // onward_button_next_dot.style.display = 'none'
            // onward_button_notes_dot.style.display = 'none'
        } else {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            // onward_button_check_dot.style.display = 'none'
            onward_button_next_dot.style.display = 'block'
            // onward_button_notes_dot.style.display = 'none'
        }
    })
    onward_button.right_dot_display = (() => {
        if (!super_duper.current_card.answer_submitted) {
            // onward_button_check_dot.style.display = 'none'
            onward_button_next_dot.style.display = 'block'
            // onward_button_notes_dot.style.display = 'none'
        } else {
            // onward_button_check_dot.style.display = 'none'
            // onward_button_next_dot.style.display = 'none'
            onward_button_notes_dot.style.display = 'block'
        }
    })
    onward_button.can_support_right_hand_dot = (() => {
        if (!super_duper.current_card) { return false }
        return (
            !super_duper.current_card.answer_submitted ||
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            (super_duper.current_card.notes !== null && super_duper.current_card.notes.style.visibility === 'hidden')
        )
    })
    onward_button.recompute_dots = (() => {
        onward_button.clear_dots()
        if (!gone_dark) { return }
        if (onward_button.mouse_in_left) { onward_button.left_dot_display() }
        if (onward_button.mouse_in_right && onward_button.can_support_right_hand_dot()) { onward_button.right_dot_display() }
        if (onward_button_left_hand_rect.focus_indicator.is_activated()) { onward_button.left_dot_display() }
        if (onward_button_right_hand_rect.focus_indicator.is_activated() && onward_button.can_support_right_hand_dot()) { onward_button.right_dot_display() }
    })
    onward_button_left_hand_rect.focus_indicator.activation_callbacks.push(onward_button.recompute_dots)
    onward_button_left_hand_rect.focus_indicator.deactivation_callbacks.push(onward_button.recompute_dots)
    onward_button_right_hand_rect.focus_indicator.activation_callbacks.push(onward_button.recompute_dots)
    onward_button_right_hand_rect.focus_indicator.deactivation_callbacks.push(onward_button.recompute_dots)
    onward_button_left_hand_rect.onmouseenter = (() => { onward_button.mouse_in_left = true; onward_button.recompute_dots() })
    onward_button_left_hand_rect.onmouseleave = (() => { onward_button.mouse_in_left = false; onward_button.recompute_dots() })
    onward_button_right_hand_rect.onmouseenter = (() => { onward_button.mouse_in_right = true; onward_button.recompute_dots() })
    onward_button_right_hand_rect.onmouseleave = (() => { onward_button.mouse_in_right = false; onward_button.recompute_dots() })
    onward_button.slider_right = (() => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        onward_button_right_hand_rect.focus_indicator.enable()
        onward_button_masked_slider.setAttribute('transform', '')
        onward_button_left_hand_rect.setAttribute('width', onward_button_left_hand_rect.width1)
        onward_button_right_hand_rect.setAttribute('width', onward_button_right_hand_rect.width1)
        onward_button_right_hand_rect.setAttribute('x', onward_button_right_hand_rect.x1)
        setTimeout(onward_button.recompute_dots, 150)
    })
    onward_button.slider_left = (() => {
        onward_button_masked_slider.setAttribute('transform', 'translate(-79)')
        onward_button_left_hand_rect.setAttribute('width', onward_button_left_hand_rect.width2)
        onward_button_right_hand_rect.setAttribute('width', onward_button_right_hand_rect.width2)
        onward_button_right_hand_rect.setAttribute('x', onward_button_right_hand_rect.x2)
        if (super_duper.current_card.notes === null) { onward_button_right_hand_rect.focus_indicator.disable() }
        setTimeout(onward_button.recompute_dots, 150)
    })
    onward_button.move_to_next_card = (() => {
        if (gcs(super_duper.current_card).left !== super_duper.current_card.style.left) { return }
        if (super_duper.current_card.answer_submitted) { onward_button.slider_right() }
        super_duper.current_card.leave_stage()
        setTimeout(super_duper.try_to_dequeue, 100)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    })
    onward_button_left_hand_rect.onclick = ((event) => {
        if (event) { event.stopPropagation() }
        if (!gone_dark) { return; }
        if (!super_duper.current_card.answer_submitted) { time_to_check_solution(); return }
        onward_button.move_to_next_card()
    })
    onward_button_right_hand_rect.onclick = ((event) => {
        if (event) { event.stopPropagation() }
        if (!gone_dark) { return; }
        if (!super_duper.current_card.answer_submitted ||
            super_duper.current_card.notes === null ||
            super_duper.current_card.notes.visibility === 'inherit') {
            onward_button.move_to_next_card()
        } else {
            super_duper.current_card.display_notes()
            let ze_card = super_duper.current_card
            setTimeout(() => {
                onward_button.recompute_dots()
                if (super_duper.current_card === ze_card && ze_card.notes.style.visibility === 'inherit') { onward_button_right_hand_rect.focus_indicator.disable() }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            }, 100)
        }
    })
}

function initialize_trash_button() {
    trash_button.display_annotation = (string1 => {
        annotation_scale = 0.108;
        const [g1, _1] = abril_fatface_right_justified(string1)
        g1.setAttribute('transform', `scale(${0.85 * annotation_scale})translate(${abs(_1)/2})`)
        trash_button_annotation_group.removeAllChildren()
        trash_button_annotation_group.appendChild(g1)
    });
    trash_button.reset_annotation_for_current_card = (() => {
        let num_trashed = super_duper.current_cards.filter(x => x.is_trashed).length
        let num_original = super_duper.current_cards.length
        trash_button.display_annotation(`${num_trashed}/${num_original}`)
    })
    trash_button.onclick = (event => {
        if (event) { event.stopPropagation() }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        super_duper.current_card.is_trashed = true
        onward_button.move_to_next_card()
    })
}

function initialize_flashcard_buttons() {
    if (flashcard_buttons.length > 0) {
        flashcard_buttons_svg.ticket_number = 0;
        flashcard_buttons_svg.offset_from_flashcard_session_top = 26;
        initialize_tomorrow_widths();
        initialize_abril_fatface_widths();
        initialize_escape_button();
        initialize_disable_warnings_button();
        initialize_peek_button();
        initialize_onward_button();
        initialize_trash_button();
    }
}

function pendulum_theta_double_dot(a1_scalar, theta, theta_dot) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    const g = 0.008
    const r = 290
    const m2 = 1
    const r_hat      = new Point( cos(theta), sin(theta))
    const r_hat_perp = new Point(-sin(theta), cos(theta))
    const A = new TwoTwoMatrix(r_hat, r_hat_perp.scaledBy(m2 * r))
    const F2 = new Point(0, m2 * g)
    const a1 = new Point(a1_scalar, 0)
    const RHS = addThreePoints(F2, a1.scaledBy(-m2), r_hat.scaledBy(r * theta_dot * theta_dot))
    // console.log(RHS.x.toFixed(4), RHS.y.toFixed(4))
    const T_and_theta_dot_dot = two_two_solve(A, RHS)
    return T_and_theta_dot_dot.y
}

function go_tutorial() {
    go_dark_common_prefix('5s', 'black')
    if (!initialized_tutorial) { initialize_tutorial() }
    const scroll = super_duper.min_sY
    smuthe_recenter(scroll, 850);
    if (tutorial.style.visibility === 'inherit') {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        tutorial.state = 're-incoming'
        tutorial_frame.state = 'revealing more'
        for (const p of tutorial.planks) {
            p.state = 'adjusting to table'
            p.reset_dest_y()
        }
        tutorial_title.state = 'incoming'
        taz.init()
        super_duper.style.backgroundColor = '#000000ff'
        return
    }
    tutorial.init(scroll)
    let start_time = null;
    let last_t = 0;
    requestAnimationFrame(tutorial_main_loop);
    function tutorial_main_loop(timestamp) {
        if (start_time === null) {
            start_time = timestamp - 16;
        }
        let t = timestamp - start_time;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (t > last_t) {
            tutorial.evolve(last_t, t)
            last_t = t;
        }
        if (tutorial.state !== 'escaped' ||
            tr_corner_plank.state !== 'waiting outside' ||
            br_corner_plank.state !== 'waiting outside' ||
            tl_corner_plank.state !== 'waiting outside' ||
            bl_corner_plank.state !== 'waiting outside' ||
            tutorial_title.state !== 'settled outside') {
            requestAnimationFrame(tutorial_main_loop);
        } else {
            tutorial.style.visibility = 'hidden';
        }
    }
}

function tutorial_incoming_acc_vel_pos_functions(x_start, x_end, t0) {
    const distance = x_end - x_start;
    const max_vel = 1.2;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    const max_acc = 0.025;
    const max_dec = 0.009;

    // scenario 1: 0 time spent at max_vel
    // T_acc^2 * max_acc * 0.5 + T_dec^2 * max_dec * 0.5 = distance
    // T_dec = T_acc * max_acc / max_dec
    // T_acc^2 * max_acc + T_acc^2 * max_acc^2 / max_dec = 2 * distance
    // T_acc^2 * (max_acc + max_acc^2 / max_dec) = 2 * distance
    // T_acc = sqrt(2 * distance / (max_acc + max_acc^2 / max_dec))
    // v_peak = T_acc * max_acc

    let T_acc = sqrt(2 * distance / (max_acc + (max_acc * max_acc / max_dec)))
    let T_dec = T_acc * max_acc / max_dec;
    let v_peak = T_acc * max_acc;
    let T_zero_acc = 0;

    if (v_peak > max_vel) {
        T_acc = max_vel / max_acc;
        T_dec = max_vel / max_dec;
        const x_delta_acc = 0.5 * T_acc * max_vel;
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        const x_delta_dec = 0.5 * T_dec * max_vel;
        T_zero_acc = (distance - x_delta_acc - x_delta_dec) / max_vel;
        v_peak = max_vel;
    }

    const t1 = t0 + T_acc;
    const t2 = t1 + T_zero_acc;
    const t3 = t2 + T_dec;
    const time_budget = t3;

    assert(t0 < t1 && t1 < t2 && t2 < t3);

    function velocity_time_t(t) {
        if (t < t0) { return 0; }
        if (t < t1) { return (t - t0) * max_acc; }
        if (t < t2) { return max_vel; }
        if (t < t3) { return (t3 - t) * max_dec; }
        return 0;
    }

// AUTO-GENERATED FILE --- DO NOT EDIT ---
    function position_time_t(t) {
        if (t < t0) { return x_start; }
        if (t < t1) { return x_start + (t - t0) * velocity_time_t(t) / 2; }
        if (t < t2) { return x_start + (t1 - t0) * v_peak / 2 + max_vel * (t - t1); }
        if (t < t3) { return x_start + (t1 - t0) * v_peak / 2 + max_vel * (t2 - t1) + velocity_time_t((t + t2) / 2) * (t - t2); }
        return x_end;
    }

    function acceleration_time_t(t) {
        if (t < t0) { return 0; }
        if (t < t1) { return max_acc; }
        if (t < t2) { return 0; }
        if (t < t3) { return -max_dec; }
        return 0;
    }

    return [
        acceleration_time_t,
        velocity_time_t,
        position_time_t,
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    ]
}

function initialize_tutorial() {
    initialized_tutorial = true;
    const tutorial_t0 = 1300
    const plank_delay = tutorial_t0 + 1400
    const yellow_arrow_delay = 2000
    const neon_green = '#b0ffb0bb'
    const neon_yellow = '#fdffe0bb'
    const plank_t_delta = 400
    const plank_incoming_max_vel = 0.8
    const plank_incoming_slowdown_factor = 160
    const plank_max_vel = 1
    const plank_acc = 0.04
    const plank_slowdown_factor = 160
    const plank_outgoing_max_vel = 0.8
    const plank_outgoing_acc = 0.04
    const tutorial_title_outgoing_max_vel = 1
    const tutorial_title_outgoing_acc = 0.04
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    const tutorial_title_incoming_vel = 1.4
    const tutorial_title_slowdown_factor = 140
    const tutorial_frame_max_vel_y = 0.8
    const tutorial_frame_acc_y = 0.021
    const tutorial_frame_slowdown_factor_y = 150
    const tutorial_outgoing_acc = -0.002
    const tutorial_reveal_plank_t_dif = 500
    const tlp = tl_corner_plank
    const blp = bl_corner_plank
    const brp = br_corner_plank
    const trp = tr_corner_plank
    const has_neons = (document.getElementById('left_edge_neon') === null) ? false : true
    tutorial.ticket_number = 0
    tutorial_title.ticket_number = 0
    tutorial.planks = [tlp, trp, blp, brp ]
    frame_nails = [tl_nail, tr_nail, bl_nail, br_nail]
    for (let i = 0; i < 4; i++) {
        tutorial.planks[i].nail = frame_nails[i]
        tutorial.planks[i].delay = plank_delay + i * plank_t_delta
    }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    upper_planks = [tlp, trp]
    bottom_planks = [blp, brp]
    bottom_nails = [bl_nail, br_nail]
    tutorial.neons = (has_neons) ? [
        top_edge_neon,
        bottom_edge_neon,
        left_edge_neon,
        right_edge_neon,
        jimmy_halo,
    ] : []
    for (const nail of bottom_nails) { nail.base_cy = parseFloat(nail.getAttribute('base-cy')) }
    let rows = []
    for (let row_num = 1; row_num >= 0; row_num++) {
        let row = tutorial.getElementById(`tutorial_row_${row_num}`)
        if (row === null) { break }
        rows.push(row)
        row.batch_number = parseInt(row.getAttribute('batch-number'))
        row.height = parseInt(row.getAttribute('row-height'))
    }
    let num_batches = rows[rows.length - 1].batch_number
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    let batch_heights = []
    for (const row of rows) {
        if (row.batch_number > batch_heights.length) {
            batch_heights.push((batch_heights.length > 0) ? batch_heights[batch_heights.length - 1] : 0)
            assert(batch_heights.length === row.batch_number)
        }
        batch_heights[batch_heights.length - 1] += row.height
    }
    tutorial_frame.reveal_rows_for_batch_number = (batch_number => { rows.forEach(row => row.style.visibility = (row.batch_number <= batch_number) ? 'inherit' : 'hidden') })
    tutorial.x_recenter = (() => { tutorial.style.left = margin + 0.5 * column + 'px' })
    tutorial.reset_top = ((scroll) => {
        console.log('inside tutorial.reset_top', window_innerHeight)
        tutorial.style.top = scroll + (window_innerHeight * 0.45) - 170 + 'px'
    })
    tutorial.init = (scroll => {
        tutorial.ticket_number++
        tutorial.state = 'incoming'
        tutorial.x_recenter()
        tutorial_title.init()
        tutorial_frame.init()
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        taz.init()
        for (const p of tutorial.planks) { p.init() }
        for (const nail of frame_nails) { nail.disappear() }
        let x_end = 0
        let x_start = -(0.5 * document.body.scrollWidth + 700);
        [acc_f, vel_f, pos_f] = tutorial_incoming_acc_vel_pos_functions(x_start, x_end, tutorial_t0)
        tutorial.incoming_acc_time_t = acc_f 
        tutorial.incoming_vel_time_t = vel_f 
        tutorial.incoming_pos_time_t = pos_f
        tutorial.amt_down = 0
        tutorial.set_amt_out(x_start)
        tutorial.reset_top(scroll)
        tutorial.style.visibility = 'inherit'
        if (has_neons) { for (const n of tutorial.neons) { n.init() }}
    })
    rect_of_tutorial_table_row_mask.base_height = -parseFloat(rect_of_tutorial_table_row_mask.getAttribute('y'))
    tutorial_outer_frame.base_height = parseFloat(tutorial_outer_frame.getAttribute('base-height'))
    tutorial_inner_frame.base_height = parseFloat(tutorial_inner_frame.getAttribute('base-height'))
    if (has_neons) {
        left_edge_neon.base_height = parseFloat(left_edge_neon.firstElementChild.getAttribute('base-height'))
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        right_edge_neon.base_height = left_edge_neon.base_height
        bottom_edge_neon.base_y = parseFloat(bottom_edge_neon.getAttribute('base-y'))
        for (const c of [left_neon_circle, right_neon_circle]) {
            c.base_transform = c.getAttribute('base-transform')
            c.composeTf = (tf => { c.setAttribute('transform', tf + c.base_transform)})
            c.set_to_inner_height = (new_height => { c.composeTf(`translate(0 ${new_height})`) })
        }
    }
    tutorial_frame.set_inner_height_to = (new_height => {
        assert(Number.isNaN(new_height) === false)
        rect_of_tutorial_table_row_mask.setAttribute('height', rect_of_tutorial_table_row_mask.base_height + new_height)
        tutorial_outer_frame.setAttribute('height', tutorial_outer_frame.base_height + new_height)
        tutorial_inner_frame.setAttribute('height', tutorial_inner_frame.base_height + new_height)
        jimmy_g.composeTf(`translate(0 ${new_height})`)
        tutorial_frame.current_inner_height = new_height
        if (tutorial_frame.current_inner_height === tutorial_frame.target_inner_height) {
            for (const p of bottom_planks) { if (p.state === 'waiting') { p.nail.appear() } }
        }
        if (has_neons) {
            right_edge_neon.children[0].setAttribute('height', right_edge_neon.base_height + new_height)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            right_neon_circle.set_to_inner_height(new_height)
            left_edge_neon.children[0].setAttribute('height', right_edge_neon.base_height + new_height)
            left_neon_circle.set_to_inner_height(new_height)
            bottom_edge_neon.setAttribute('transform', `translate(0 ${bottom_edge_neon.base_y + new_height})`)
        }
    })
    for (const nail of frame_nails) {
        if (bottom_nails.includes(nail)) {
            nail.appear = (() => {
                nail.setAttribute('cy', nail.base_cy + tutorial_frame.target_inner_height)
                nail.style.visibility = 'inherit'
            })
        } else {
            nail.appear = (() => { nail.style.visibility = 'inherit' })
        }
        nail.disappear = (() => { nail.style.visibility = 'hidden' })
    }
    tutorial_frame.adjust_inner_height = (dt => {
        assert(Number.isNaN(dt) === false)
        tutorial_frame.vel_y = min(tutorial_frame_max_vel_y, tutorial_frame.vel_y + dt * tutorial_frame_acc_y)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let slowdown_vel = min(tutorial_frame.vel_y, abs(tutorial_frame.target_inner_height - tutorial_frame.current_inner_height) / tutorial_frame_slowdown_factor_y)
        let sign = (tutorial_frame.target_inner_height > tutorial_frame.current_inner_height) ? 1 : -1
        let dy = max(1, slowdown_vel * dt) * sign
        assert(Number.isNaN(dy) === false)
        let new_height = (sign > 0) ? min(tutorial_frame.target_inner_height, tutorial_frame.current_inner_height + dy) : max(tutorial_frame.target_inner_height, tutorial_frame.current_inner_height + dy);
        tutorial_frame.set_inner_height_to(new_height)
    })
    tutorial_frame.evolve = ((last_t, t) => {
        if (tutorial_frame.state === 'at rest') { return }
        if (tutorial_frame.state === 'new batch is started') {
            tutorial_frame.state = 'waiting past delay'
            tutorial_frame.wait_until = t + 2 * tutorial_reveal_plank_t_dif
            return
        }
        if (tutorial_frame.state === 'waiting past delay') {
            if (t < tutorial_frame.wait_until) { return }
            tutorial_frame.state = 'revealing more'
            tutorial_frame.vel_y = 0
            tutorial_frame.reveal_rows_for_batch_number(tutorial_frame.currently_at_batch_number)
            let rect = tutorial_frame.getBoundingClientRect()
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            let mid = 0.5 * (rect.bottom + rect.top)
            let xtra = (tutorial_frame.currently_at_batch_number === 2) ? 10 : 0;
            if (mid > 0.5 * window_innerHeight + xtra) { smuthe_recenter(window.scrollY + (mid - 0.5 * window_innerHeight - xtra), 1100) }
        }
        if (tutorial_frame.state === 'revealing more' || tutorial_frame.state === 'retreat!') {
            tutorial_frame.adjust_inner_height(t - last_t)
            if (tutorial_frame.current_inner_height === tutorial_frame.target_inner_height) {
                tutorial_frame.state = (tutorial_frame.state === 'revealing more') ? 'at rest' : 'at rest retreated!';
                setTimeout(() => {
                    if (tutorial_frame.state !== 'at rest') { return }
                    if (br_corner_plank.state === 'at rest') { br_nail.appear() }
                    if (bl_corner_plank.state === 'at rest') { bl_nail.appear() }
                }, 100)
            }
            if (tutorial_frame.state === 'retreat!') {
                let way_to_go = tutorial_frame.current_inner_height - batch_heights[0]
                tutorial.set_amt_down(max(0, 0.5 * (180 - way_to_go)))
            }
        }
    })
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    tutorial.start_outgoing = (ticket_number => {
        if (ticket_number !== tutorial.ticket_number) { return }
        tutorial.ticket_number++
        tutorial.state = 'outgoing'
        tutorial.vel_x = 0
    })
    tutorial_title.start_outgoing = ((ticket_number) => {
        if (ticket_number !== tutorial_title.ticket_number) { return }
        tutorial_title.ticket_number++
        tutorial_title.state = 'outgoing'
        tutorial_title.outgoing_vel = 0
    })
    jimmy_g.composeTf = (tf  => { jimmy_g.setAttribute('transform', tf + jimmy_g.getAttribute('base-transform')) })
    for (const p of tutorial.planks) {
        p.is_bottom_plank = (bottom_planks.includes(p))
        p.outward_direction = (upper_planks.includes(p)) ? -1 : 1
        p.base_x = parseFloat(p.getAttribute('base-x'))
        p.base_y = parseFloat(p.getAttribute('base-y'))
        p.base_angle = parseFloat(p.getAttribute('base-angle'))
        p.nailed = (() => { return (p.nail.style.visibility === 'inherit'); })
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        p.reset_dest_y = (() => { p.dest_y = p.base_y + ((p.is_bottom_plank) ? tutorial_frame.target_inner_height : 0) })
        p.set_y = (y => {
            p.cur_y = y
            p.setAttribute('transform', `translate(${p.base_x} ${p.cur_y})rotate(${p.base_angle})`)
        })
        p.init = (() => {
            p.reset_dest_y() // depends on tutorial_frame.target_inner_height
            p.state = 'adjusting to table'
            p.nail.disappear()
            p.set_y(p.outward_direction * max(window_innerHeight * 2, 1000))
            p.vel = 0
            p.last_t = null
        })
        p.git_goin = (() => {
            p.state = 'git goin'
            p.vel = 0
            p.nail.disappear()
        })
        p.evolve = ((last_t, t) => {
            if (t < p.delay) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                // ...
            } else if (p.state === 'adjusting to table' || p.state === 'incoming') {
                if (p.countdown < 0) {
                    p.countdown += 1
                } else {
                    let max_vel = (p.state === 'incoming') ? plank_incoming_max_vel : plank_max_vel
                    let slowdown_factor = (p.state === 'incoming') ? plank_incoming_slowdown_factor : plank_slowdown_factor
                    let dt = t - last_t
                    p.vel = min(p.vel + dt * plank_acc, max_vel)
                    let slowdown_vel = min(p.vel, abs(p.dest_y - p.cur_y) / slowdown_factor)
                    let dy = max(1, slowdown_vel * dt)
                    let new_y = (p.cur_y > p.dest_y) ? max(p.cur_y - dy, p.dest_y) : min(p.cur_y + dy, p.dest_y)
                    p.set_y(new_y)
                    if (p.cur_y === p.dest_y) {
                        p.state = 'waiting';
                        p.vel = 0;
                        if (tutorial_frame.current_inner_height === tutorial_frame.target_inner_height) { p.nail.appear() }
                    }
                }
            } else if (p.state === 'git goin') {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                let dt = t - last_t
                p.vel = min(p.vel + dt * plank_outgoing_acc, plank_outgoing_max_vel)
                p.set_y(p.cur_y + p.outward_direction * p.vel * dt)
                if (abs(p.cur_y) >= document.body.scrollHeight + 100) { p.state = 'waiting outside' }
            } else if (p.state === 'waiting') {
                // ...
            }
        })
    }
    for (const p of bottom_planks) {
        p.make_room_for_table_resize = (() => {
            p.nail.disappear()
            p.reset_dest_y()
            p.state = 'adjusting to table'
            p.countdown = -10
        })
    }
    taz.evolve = ((acc_func, last_t, t) => {
        taz.update_theta_and_theta_dot(acc_func, last_t, t)
        tutorial_neon_sign_rotator_g.setAttribute('transform', `rotate(${taz.theta * 90 / eta - 90})`)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    })
    taz.onmouseup = (() => {
        console.log('Hello! num_batches:', num_batches, tutorial_frame.state)
        taz.mousedown_pt = null;
        if (tutorial_frame.state !== 'at rest') { return; }
        (tutorial_frame.currently_at_batch_number === num_batches) ? tutorial_frame.start_retreat(false) : tutorial_frame.start_next_batch();
        taz.just_gone_mouseup = true;
    })
    tutorial_frame.init = (() => {
        // tutorial_frame is responsible for vertical motion (opening/closing) of frame
        tutorial_frame.currently_at_batch_number = 1
        tutorial_frame.reveal_rows_for_batch_number(tutorial_frame.currently_at_batch_number)
        tutorial_frame.target_inner_height = batch_heights[0]
        tutorial_frame.set_inner_height_to(tutorial_frame.target_inner_height)
        tutorial_frame.state = 'at rest'
        tutorial_frame.ticket_number = 0
        tutorial_frame.increment_ticket_number = (() => { tutorial_frame.ticket_number += 1; return tutorial_frame.ticket_number })
    })
    tutorial_frame.start_next_batch = (() => {
        assert(tutorial_frame.currently_at_batch_number < num_batches)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        assert(tutorial_frame.state === 'at rest')
        tutorial_frame.state = 'new batch is started'
        tutorial_frame.currently_at_batch_number += 1
        let batch_number = tutorial_frame.currently_at_batch_number
        tutorial_frame.target_inner_height = batch_heights[batch_number - 1]
        tutorial_frame.vel = 2
        brp.make_room_for_table_resize(batch_number)
        let ticket_number = tutorial_frame.increment_ticket_number()
        setTimeout(() => {
            if (tutorial_frame.ticket_number !== ticket_number) { return }
            blp.make_room_for_table_resize(batch_number)
        }, tutorial_reveal_plank_t_dif)
    })
    tutorial_frame.start_retreat = (exit_flashcards => {
        tutorial_frame.state = 'retreat!'
        tutorial_frame.increment_ticket_number()
        tutorial_frame.vel_y = 0
        tutorial_frame.target_inner_height = batch_heights[0]
        tutorial_frame.currently_at_batch_number = 1
        for (const p of bottom_planks) { p.git_goin() }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        setTimeout(() => {
            for (const p of upper_planks) { p.git_goin() }
            if (has_neons) { for (const n of tutorial.neons) { n.off() } }
        }, 180)
        let tt_ticket_number = tutorial_title.ticket_number
        setTimeout(() => {
            tutorial_title.start_outgoing(tt_ticket_number)
            focusout_element(taz.focus_indicator)
        }, 180)
        setTimeout(() => { tutorial.start_outgoing(tutorial.ticket_number) }, 180)
        if (!exit_flashcards) {
            super_duper.style.transition = '3s'
            window.requestAnimationFrame(() => { super_duper.style.backgroundColor = super_duper_color })
            smuthe_recenter(super_duper.min_sY, 1100)
            setTimeout(() => go_dark_rest(true), 600)
        }
    })
    tutorial.set_amt_out = (amt_out => {
        // tutorial is responsible for horizontal motion of tutorial_frame
        tutorial.amt_out = amt_out
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        tutorial_frame.setAttribute('transform', `translate(${tutorial.amt_out} ${tutorial.amt_down})`)
        if (has_neons) { frame_neons.setAttribute('transform', `translate(${amt_out} ${tutorial.amt_down})`) }
    })
    tutorial.set_amt_down = (amt_down => {
        // tutorial is responsible for horizontal motion of tutorial_frame
        tutorial.amt_down = amt_down
        tutorial_frame.setAttribute('transform', `translate(${tutorial.amt_out} ${tutorial.amt_down})`)
        if (has_neons) { frame_neons.setAttribute('transform', `translate(${amt_out} ${tutorial.amt_down})`) }
    })
    tutorial.evolve = ((last_t, t) => {
        // tutorial is responsible for horizontal motion of tutorial_frame
        let acc_func = (() => 0)
        if (tutorial.state === 'incoming') {
            acc_func = tutorial.incoming_acc_time_t
            const amt_out = tutorial.incoming_pos_time_t(t)
            tutorial.vel_x = tutorial.incoming_vel_time_t(t)
            tutorial.set_amt_out(amt_out)
        } else if (tutorial.state === 'outgoing') {
            acc_func = (t => tutorial_outgoing_acc)
            let dt = t - last_t
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            tutorial.vel_x = tutorial.vel_x + tutorial_outgoing_acc * dt
            let new_amt_out = tutorial.amt_out + tutorial.vel_x * dt
            tutorial.set_amt_out(new_amt_out)
            if (new_amt_out < -(0.5 * document.body.scrollWidth + 700)) {
                tutorial.vel_x = 0
                tutorial.state = 'escaped'
            }
        } else if (tutorial.state === 're-incoming') {
            // shoot me don't have patience to do this properly...
            let x_end = 0
            let x_start = -(0.5 * document.body.scrollWidth + 700);
            [acc_f, vel_f, pos_f] = tutorial_incoming_acc_vel_pos_functions(x_start, x_end, t + 20)
            tutorial.incoming_acc_time_t = acc_f 
            tutorial.incoming_vel_time_t = vel_f 
            tutorial.incoming_pos_time_t = pos_f
            tutorial.amt_down = 0
            tutorial.set_amt_out(x_start)
            tutorial.state = 'incoming'
        }
        taz.evolve(acc_func, last_t, t)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        yellow_neon_arrow.evolve(last_t, t)
        // our friends are responsible for other things:
        tutorial_frame.evolve(last_t, t)
        tutorial_title.evolve(last_t, t)
        for (const p of tutorial.planks) { p.evolve(last_t, t) }
        if (has_neons) { for (const n of tutorial.neons) { n.evolve(last_t, t); } }
    })
    tutorial_title.set_amt_out = (amt_out => {
        tutorial_title.setAttribute('transform', `translate(${amt_out})`)
        tutorial_title.amt_out = amt_out
    })
    tutorial_title.init = (() => {
        tutorial_title.arrival_time = null
        tutorial_title.state = 'incoming'
        tutorial_title.set_amt_out(margin + (column / 2) + 700)
    })
    tutorial_title.evolve = ((last_t, t) => {
        let mid = margin + (column / 2)
        if (tutorial_title.state === 'incoming') {
            let dt = t - last_t
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            let slowdown_vel = min(tutorial_title.amt_out / tutorial_title_slowdown_factor, tutorial_title_incoming_vel)
            let dif = max(1, slowdown_vel * dt)
            tutorial_title.set_amt_out(max(0, tutorial_title.amt_out - dif))
            if (tutorial_title.amt_out === 0) {
                tutorial_title.state = 'settled'
                tutorial_title.arrival_time = t
            }
        } else if (tutorial_title.state === 'outgoing') {
            assert(tutorial_title.outgoing_vel >= 0)
            let dt = t - last_t
            tutorial_title.outgoing_vel = min(tutorial_title_outgoing_max_vel, tutorial_title.outgoing_vel + dt * tutorial_title_outgoing_acc)
            let dx = tutorial_title.outgoing_vel * dt
            tutorial_title.set_amt_out(tutorial_title.amt_out + dx)
            if (tutorial_title.amt_out > totalwidth + 100) { tutorial_title.state = 'settled outside' }
        }
    })
    yellow_neon_arrow.is_on = (() => { yellow_neon_arrow.style.visibility === 'inherit' })
    yellow_neon_arrow.on = (() => { yellow_neon_arrow.style.visibility = 'inherit' })
    yellow_neon_arrow.off = (() => { yellow_neon_arrow.style.visibility = 'hidden' })
    yellow_neon_arrow.is_off = (() => { yellow_neon_arrow.style.visibility === 'hidden' })
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    yellow_neon_arrow.set_angle = (angle => {
        jimmy_dial_rotator.setAttribute('transform', `rotate(${angle})`)
        yellow_neon_arrow.angle = angle
    })
    taz.init = (() => {
        taz.yellow_arrow_last_blink_start = null
        taz.theta = eta
        taz.theta_dot = 0
        taz.mousedown_pt = null
        taz.just_gone_mouseup = false
        tutorial_pointer_hider.style.pointerEvents = 'auto'
        yellow_neon_arrow.set_angle(6)
        yellow_neon_arrow.state = 'none'
        yellow_neon_arrow.last_on_t = 0
        yellow_neon_arrow.off()
        yellow_neon_arrow.setAttribute('stroke', neon_yellow)
    })
    yellow_neon_arrow.is_off = (() => { return (yellow_neon_arrow.style.visibility === 'hidden') })
    yellow_neon_arrow.evolve = ((last_t, t) => {
        if (t < yellow_arrow_delay) { return }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        let is_on = yellow_neon_arrow.is_on()
        if ((tutorial_frame.state === 'retreat!' || tutorial_frame.state === 'at rest retreated!') && 
            yellow_neon_arrow.is_off() &&
            !yellow_neon_arrow.state.startsWith('turn')) { return }
        if (taz.yellow_arrow_last_blink_start === null) { taz.yellow_arrow_last_blink_start = parseInt(t) }
        if (taz.just_gone_mouseup) {
            taz.just_gone_mouseup = false
            if (t >= yellow_neon_arrow.last_on_t + 900) { taz.yellow_arrow_last_blink_start = parseInt(t) }
        }
        if (!yellow_neon_arrow.state.endsWith('off') &&
            (taz.mousedown_pt === null || yellow_neon_arrow.is_off())) {
            let modulus = (yellow_neon_arrow.state === 'after turn') ? 930 : 900;
            (mod(t - taz.yellow_arrow_last_blink_start, 2 * modulus) > modulus) ? yellow_neon_arrow.on() : yellow_neon_arrow.off()
            if (!is_on && yellow_neon_arrow.is_on()) { yellow_neon_arrow.last_on_t = t }
        }
        if (tutorial_frame.currently_at_batch_number === num_batches &&
            yellow_neon_arrow.state === 'none' &&
            tutorial_frame.state === 'at rest') {
                yellow_neon_arrow.start_turn_t = t
                yellow_neon_arrow.state = 'turn'
// AUTO-GENERATED FILE --- DO NOT EDIT ---
            }
        if (yellow_neon_arrow.state === 'turn' || yellow_neon_arrow.state === 'turn && off') {
            if (t < yellow_neon_arrow.start_turn_t + 900) { return }
            let da = (t - last_t) * 0.22
            let new_angle = min(360, yellow_neon_arrow.angle + da)
            yellow_neon_arrow.set_angle(new_angle)
            if (yellow_neon_arrow.style.visibility === 'hidden' &&
                t > yellow_neon_arrow.start_turn_t + 900 + 100) { yellow_neon_arrow.state = 'turn && off' }
            if (new_angle === 360) {
                yellow_neon_arrow.state = 'after turn off'
                yellow_neon_arrow.after_turn_t = t
                yellow_neon_arrow.setAttribute('stroke', neon_green)
            }
        }
        if (yellow_neon_arrow.state === 'after turn off' && t > yellow_neon_arrow.after_turn_t + 0) {
            taz.yellow_arrow_last_blink_start = t - 800
            yellow_neon_arrow.state = 'after turn'
        }
            // yellow_neon_arrow.is_off()) { yellow_neon_arrow.setAttribute('stroke', neon_green) }
    })
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    taz.update_theta_and_theta_dot = ((acc_function, t_start, t_end) => {
        if (taz.mousedown_pt !== null) { taz.theta_dot = 0; return }
        for (let t = t_start; t < t_end; t++) {
            const theta_dot_dot = pendulum_theta_double_dot(acc_function(t), taz.theta, taz.theta_dot);
            taz.theta = taz.theta + taz.theta_dot * 1 + theta_dot_dot * 1 * 1 * 0.5;
            taz.theta_dot = (taz.theta_dot + theta_dot_dot * 1) * 0.9985;
        }
    })
    taz.get_hinge_rel_point = ((clientX, clientY) => {
        let rect = wire_base_marker.getBoundingClientRect()
        let cx = rect.x + 2
        let cy = rect.y + 2
        return new Point(clientX - cx, clientY - cy)
    })
    taz.onmousedown = (event => {
        taz.mousedown_pt = taz.get_hinge_rel_point(event.clientX, event.clientY)
        taz.mousedown_pt_arg = taz.mousedown_pt.arg_in_radians()
        taz.mousedown_pt_theta = taz.theta
    })
    taz.onmousemove = (event => {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
        if (taz.mousedown_pt === null) { return; }
        let new_pt  = taz.get_hinge_rel_point(event.clientX, event.clientY)
        let new_arg = new_pt.arg_in_radians()
        taz.theta   = taz.mousedown_pt_theta + new_arg - taz.mousedown_pt_arg
    })
    taz.onmouseleave = (event => {
        if (!taz.mousedown) { return }
        // i forgot what was supposed to be here...
    })
    for (const n of tutorial.neons) {
        n.init = (() => {
            n.style.visibility = 'hidden';
            n.state = 'off';
            n.start_time = null;
            n.change_state_time = null;
            n.num_frames = 0;
            n.num_times_on = 0;
            n.intensity = Math.random();
            n.T_dif = yellow_arrow_delay + 2000 + 600 * Math.random();
            if (n === jimmy_halo) {
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                n.intensity += 1;
                n.T_dif += 6000;
            }
        })
        n.on = (() => { n.style.visibility = 'inherit'; })
        n.off = (() => { n.style.visibility = 'hidden' })
        n.change_state_to = ((t, new_state) => {
            assert(new_state !== undefined)
            n.change_state_time = t;
            n.state = new_state;
            n.num_frames = 0;
            if (new_state === 'on') { n.on() } 
            else if (new_state === 'flicker one') { n.on(); n.num_times_on++; }
            else if (new_state === 'flicker two') { n.on(); n.num_times_on++; }
            else if (new_state === 'flicker three') { n.on(); n.num_times_on++; }
            else if (new_state === 'flicker ten') { n.on(); n.num_times_on++; }
            else if (new_state === 'flicker ten off') { n.off(); n.num_times_on++; }
            else if (new_state === 'off') { n.off() }
            else {
                console.log("unknown state:", new_state);
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                assert(false);
            }
        })
        n.evolve = ((last_t, t) => {
            t *= 2
            n.num_frames++;
            let just_changed_bonus = 12000 * Math.pow(0.9, n.num_frames);
            if (n.start_time === null) { n.start_time = t; return; }
            if (n.state === 'off') {
                if ((t - n.T_dif) * (Math.random() + n.intensity) > 6000) { n.change_state_to(t, 'on'); }
                else if ((t - n.T_dif) * (Math.random() + n.intensity) > just_changed_bonus + (1000 + 3000 + 2000 * n.num_times_on)) { n.change_state_to(t, 'flicker one')}
                else if ((t - n.T_dif) * (Math.random() + n.intensity) > just_changed_bonus + (1000 + 2000 + 2000 * n.num_times_on)) { n.change_state_to(t, 'flicker two')}
                else if ((t - n.T_dif) * (Math.random() + n.intensity) > just_changed_bonus + (1000 + 1000 + 2000 * n.num_times_on)) { n.change_state_to(t, 'flicker three'); }
                else if ((t - n.T_dif) * (Math.random() + n.intensity) > just_changed_bonus + (1000 + 1000 + 2000 * n.num_times_on)) { n.change_state_to(t, 'flicker ten'); }
            } else if (n.state === 'on') {
                if (Math.random() < 0.0015 * Math.pow(0.7, n.num_times_on) / n.intensity) { n.change_state_to(t, 'flicker ten off'); }
            } else if (n.state === 'flicker one') {
                if (n.num_frames > 1) { n.change_state_to(t, 'off') }
            } else if (n.state === 'flicker two') {
                if (n.num_frames == 1) { n.off() } 
// AUTO-GENERATED FILE --- DO NOT EDIT ---
                else if (n.num_frames == 3) { n.on() } 
                else if (n.num_frames >= 5) { n.change_state_to(t, 'off') }
            } else if (n.state === 'flicker three') {
                if (n.num_frames == 1) { n.off(); } 
                else if (n.num_frames == 3) { n.on(); } 
                else if (n.num_frames == 5) { n.off() } 
                else if (n.num_frames == 7) { n.on() } 
                else if (n.num_frames >= 9) { n.change_state_to(t, 'off') }
            } else if (n.state === 'flicker ten') {
                if (n.num_frames >= 11) { n.change_state_to(t, 'off') }
                else if (n.num_frames % 2) { n.off() }
                else { n.on() }
            } else if (n.state === 'flicker ten off') {
                if (n.num_frames >= 11) { n.change_state_to(t, 'on') }
                else if (n.num_frames % 2) { n.on() }
                else { n.off() }
            }
        })
    }
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

function go_dark_set_min_sY() {
    super_duper.suggested_sY = current_slider.suggested_sY_for_flashcard_session()
    super_duper.min_sY = min(super_duper.suggested_sY, document.body.scrollHeight - basement.current_height() - window_innerHeight)
    super_duper.viewport_top_to_card_top = (window_innerHeight - working_card_scaled_height) * 0.45
    super_duper.card_bottom_to_viewport_bottom = window_innerHeight - super_duper.viewport_top_to_card_top - working_card_scaled_height - 4
    super_duper.flashcard_session_card_top = super_duper.min_sY + super_duper.viewport_top_to_card_top
}

function go_dark_common_prefix(transition_time, transition_color) {
    assert(!gone_dark);
    gone_dark = true;
    let ticket_number = super_duper.increment_ticket_number()
    super_duper.style.pointerEvents = 'auto';
    go_dark_set_min_sY();
    setTimeout(() => {
        if (ticket_number !== super_duper.ticket_number) { return }
        basement.style.height = '2000px'
    }, 100)
    if (my_active_element !== null && !my_active_element.hasAncestor(super_duper)) { my_active_element.focus_go_dark(); }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    current_slider.go_dark();
    super_duper.style.transition = transition_time
    window.requestAnimationFrame(() => { super_duper.style.backgroundColor = transition_color; })
    return ticket_number;
}

function go_dark_rest(already_recentered) {
    // paranoid
    let ticket_number = super_duper.ticket_number;
    initialize_working_card_metrics();
    if (current_slider.selected_tables().length === 0) { super_duper.current_cards = current_slider.all_working_cards; }
    else { super_duper.current_cards = current_slider.working_cards_in_selected_tables(); }
    for (const c of super_duper.current_cards) { c.is_trashed = false; }
    super_duper.queue = []
    function alo(i) {
        if (i < super_duper.current_cards.length &&
            super_duper.ticket_number === ticket_number) {
            super_duper.current_cards[i].queue()
            setTimeout(() => { alo(i+1) }, 500)
        }
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    };
    alo(0);

    // repaint
    let sY = window.scrollY;

    if (!already_recentered) { setTimeout(() => { smuthe_recenter(super_duper.min_sY, 900) }, 50) }
    setTimeout(() => {
        if (ticket_number !== super_duper.ticket_number) { return; }
        super_duper.try_to_dequeue(undefined, true);
    }, 400)

    disable_warnings_button.set_disable_warnings_to(error_warnings_disabled_by_default);
    onward_button.mouse_in = false

    flashcard_buttons_svg.ticket_number++
    flashcard_buttons_svg.style.transition = '0s';
    flashcard_buttons_svg.style.left = -200 + 'px';
    flashcard_buttons_svg.style.top = super_duper.flashcard_session_card_top + flashcard_buttons_svg.offset_from_flashcard_session_top + 'px';
    flashcard_buttons_svg.style.visibility = 'inherit'
// AUTO-GENERATED FILE --- DO NOT EDIT ---

    sX = window.scrollX;
    flashcard_buttons_svg.style.transition = 'left 1.5s'

    onward_button_check_dot.style.display = 'none'
    onward_button_next_dot.style.display = 'none'
    onward_button_notes_dot.style.display = 'none'
    onward_button_masked_slider.removeAttribute('transform')
    onward_button_left_hand_rect.setAttribute('width', onward_button_left_hand_rect.width1)
    onward_button_right_hand_rect.setAttribute('width', onward_button_right_hand_rect.width1)
    onward_button_right_hand_rect.setAttribute('x', onward_button_right_hand_rect.x1)
    onward_button.mouse_in_left = false

    peek_button_top_left_upright_annotation_group.style.visibility = 'inherit'
    trash_button_annotation_group.style.visibility = 'inherit'
    setTimeout(() => { flashcard_buttons_svg.style.left = center_left_for_flashcard_buttons() + 'px' }, 10)
}

function go_dark() {
    go_dark_common_prefix('0.2s', super_duper_color)
// AUTO-GENERATED FILE --- DO NOT EDIT ---
    if (!initialized_tutorial) { initialize_tutorial() }
    go_dark_rest(false)
}

function two_two_solve(A, V) {
    assert(A instanceof TwoTwoMatrix);
    assert(V instanceof Point);
    const ans = A.inverse().right_multiply_by_point(V);
    assert(ans instanceof Point);
    const like_V = A.right_multiply_by_point(ans);
    assert(like_V.is_close_to(V))
    return ans
}

function matrix_test() {
    A = new TwoTwoMatrix(1, 2, 3, 4);
    V = new Point(5, 4);
    W = two_two_solve(A, V);
    console.log(W)
}
// AUTO-GENERATED FILE --- DO NOT EDIT ---

// END 3.js
var xhr = new XMLHttpRequest();
console.log("fetching counter");
xhr.open("GET", "https://api.countapi.xyz/hit/little-bo-peep.onrender.com/visits");
xhr.responseType = "json";
xhr.onload = function() { console.log(this.response.value); }
xhr.send();
