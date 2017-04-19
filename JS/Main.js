function nameDefined(ckie, nme) {
    var splitValues;
    var i;
    for (i = 0; i < ckie.length; ++i) {
        splitValues = ckie[i].split("=");
        if (splitValues[0] == nme) return true
    }
    return false
}

function delBlanks(strng) {
    var result = "";
    var i;
    var chrn;
    for (i = 0; i < strng.length; ++i) {
        chrn = strng.charAt(i);
        if (chrn != " ") result += chrn
    }
    return result
}
function getCookieValue(ckie, nme) {
    var splitValues;
    var i;
    for (i = 0; i < ckie.length; ++i) {
        splitValues = ckie[i].split("=");
        if (splitValues[0] == nme) return splitValues[1]
    }
    return ""
}
function insertCounter() {
    readCookie();
    displayCounter()
}
function displayCounter() {
    document.write('<H3 ALIGN="CENTER">');
    document.write("You've visited this page ");
    if (counter == 1) document.write("the first time.");
    else document.write(counter + " times.");
    document.writeln('</H3>')
}
function readCookie() {
    var cookie = document.cookie;
    counter = 0;
    var chkdCookie = delBlanks(cookie);  //are on the client computer
    var nvpair = chkdCookie.split(";");
    if (nameDefined(nvpair, "pageCount"))
        counter = parseInt(getCookieValue(nvpair, "pageCount"));
    ++counter;
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 3600000 * 24 * 30;  //expires in 1 hour
    futdate.setTime(expdate);

    var newCookie = "pageCount=" + counter;
    newCookie += "; expires=" + futdate.toGMTString();
    window.document.cookie = newCookie
}

function displayTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    setTimeout(displayTime, 1000);
}

window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

function displayContent(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	alert('Name: ' +  name.value + '\n' + 'E-Mail: ' + email.value + '\n' + 'Your Message: ' + message.value);
	document.getElementById('name').value=null;
	document.getElementById('email').value=null;
	document.getElementById('message').value=null;
}