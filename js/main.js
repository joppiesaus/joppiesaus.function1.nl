// Gets a DOM element by id
function ge(id)
{
    return document.getElementById(id);
}

// Requires a script
function freq(f,c)
{
    var s = document.createElement("script");
    s.src = f + ".js";
    s.onreadystagechanged = s.onload = c;
    document.body.appendChild(s);
}

var LOGO_TWINKLE_OFFSET = "5px";

var logo = 
{
    width: 0,
    height: 0,
    twinklers: [],

    rnd: function(n)
    {
        return Math.floor(Math.random() * n);
    },
    
    pickRandom: function()
    {
        return ge("logo_" + this.rnd(this.width) + "," + this.rnd(this.height));
    },

    pickRandomLine: function(n)
    {
        var arr = [];
        var x = this.rnd(this.width);
        var y = this.rnd(this.height);

        for (var i = 0; i < n; i++)
        {
            arr.push(ge("logo_" + x++ + "," + y));

            if (x >= this.width)
            {
                x = 0;
                if (++y >= this.height)
                {
                    break;
                }
            }
        }

        return arr;
    },
    
    setTwinkling: function(e)
    {
        var d;

        switch (this.rnd(4))
        {
            case 0: d = "top"; break;
            case 1: d = "bottom"; break;
            case 2: d = "right"; break;
            case 3: d = "left"; break;
        }

        if (e.length)
        {
            e.forEach(function(f){
                f.direction = d;
                f.retrackted = true;
            });
        }
        else
        {
            e.direction = d;
            e.retrackted = true;
        }
        
        this.twinklers.push(e);
    },
    
    updateTwinklers: function()
    {
        this.twinklers.forEach(function(e){
            if (Math.random() < 0.33)
            {
                if (e.retrackted === true)
                {
                    e.style[e.direction] = LOGO_TWINKLE_OFFSET;
                    e.retrackted = false;
                }
                else
                {
                    e.style[e.direction] = "0";
                    e.retrackted = true;
                }
            }
        });
    },
};

function setupLogo()
{
    logo.element = ge("logo");
    var l = logo.element.innerHTML;
    
    var newHTML = "";
    
    var x = 0, y = 0;
    
    for (var i = 0; i < l.length; i++)
    {
        if (l[i] === "\n")
        {
                y++;
                x = 0;
                newHTML += "\n";
                continue;
        }
        newHTML += '<span id="logo_' + x++ + ',' + y + '">' + l[i] + '</span>'; 
    }
    
    logo.width = x;
    logo.height = y;
    
    logo.element.innerHTML = newHTML;
    
    // TODO: MOre of this crap, and make prettier
    for (i = 0; i < 5; i++)
    {
        logo.setTwinkling(logo.pickRandom());
    }
    for (var i = 0; i < 5; i++)
    {
        logo.pickRandomLine(logo.rnd(3) + 4).forEach(function(e)
            {
                logo.setTwinkling(e);
            }
        );
    }
    
    setInterval(logoInterval, 250);
};

function logoInterval()
{
    logo.updateTwinklers();
}

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