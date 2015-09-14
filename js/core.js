// Gets a DOM element by id
function ge(id)
{
    return document.getElementById(id);
}

// Requires a script
function freq(f,c)
{
    // Check if script hasn't already been included
    /*if (document.querySelectorAll('script[src="' + (f += ".js") + '"]').length)
    {
        return;
    }*/
    var s = document.createElement("script");
    s.src = f + ".js";
    s.onreadystagechanged = s.onload = c;
    document.body.appendChild(s);
}

// Returns true if the element e has class c
function hasClass(e, c)
{
    return (e.className.indexOf(c) !== -1);
}

// Toggles class c on element e
function toggleClass(e,  c)
{
    e.className = hasClass(e, c) ? e.className.replace(c, "") : e.className += " " + c;
}

// Shuffles an array
Array.prototype.shuffle = function()
{
    var m = this.length, t, i;

    while (m)
    {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // Swap it
        t = this[m];
        this[m] = this[i];
        this[i] = t;
    }
};

// Returnss joppiesaus's age
function joppiesausesAge()
{
    /* My birthday is 1999-03-03 */
    var now = new Date();
    var age = now.getUTCFullYear() - 0x7CF;
    var mon = now.getMonth();/*month counted from 0...*/
    if (mon < 2/*... so 2, not 3*/ || (mon === 2 && now.getDate() < 3))
    {
        return age - 1;
    }
    return age;
    // And then do something like "ge("joppiesausesAge").textContent = age;"
}