/***************************************
*** Content generation documentation ***
****************************************
The content is generated using JSON and then parsed on the page via JavaScript.

Everything is optional, but that doesn't mean some things are encouraged.

| Property      | Description

title:          The title of the tile. Displayed on hover and on project popup.
description:    The description of the project, displayed on project popup.
image:          The background image of the tile. If no image, title text is used.
links:          Array of link objects, these will be links generated on the project popup
                To define a link, make an array with two objects, the first is the title of the link, the second is the destination.
                Example: ["COW!", "https://en.wikipedia.org/wiki/Cow"]

url:            When the user clicks on the tile, it will direct to the specified url. If no url specified, it will open a project popup.
onclick:        When onclick is defined, it will execute javascript inside onclick when the tile is clicked.
                Overrides project popup. (function(){...}) not necessary.

mode:           The mode of the tile. Default is childBox. Choose between box, boxBig, boxHuge - like in the grid.css class.
children:       The child tiles of the target tile.
content:        The HTML content of the tile.
tags:           The tags used for searching or categorizing your tiles.

domElement:     After the initial generation, every tile gets a pointer to the DOM element to the tile on the page.
*/

// I wonder if the wayback machine will like this
var tileData = 
[
    {
        "mode": "boxBig",
        "title": "About",
        "id": "about",
        "content": "<p>I'm Job van der Zweep, AKA joppiesaus. I'm <span id=\"joppiesausesAge\">?</span> year old. I like to program. On this page you can find stuff I programmed, along with other stuff I did.</p><p>On the top-left you can find various links of websites I like to go to. I have various stuff lying arround there, too.</p><p>Other than programming I like to play video games, paint, longboard, watching videos, eat food, mess arround with electronics, be outside, doing nothing, and other stuff. But it's a list that won't ever be up-to-date thought, it constantly changes.</p><p>If you want a chat, you can email me! <a href=\"mailto:job@function1.nl\"><code>job@function1.nl</code></a></p><p>I hope you have a lot of fun watching this page. Have a nice day!</p>"
    },
    {
        "mode": "box",
        "title": "License",
        "content": "<p>All stuff on this page - except otherwise noted - is licensed under <a href=\"http://function1.nl/p/unlicense.txt\">the unlicense</a>. This doesn't mean I don't like credit, but it does mean you can quickly \"steal\" stuff without attribution, since most of it is made to learn anyway.</p><p><a href=\"https://github.com/joppiesaus/joppiesaus.function1.nl\">This website</a> however is licensed under the <a href=\"LICENSE.md\">MIT license</a>.</p><p>I encourage to make your software <a href=\"http://www.gnu.org/philosophy/free-sw.html\">free</a>(as in not having to pay for it and as in freedom). Because, who <em>doesn't</em> like <a href=\"https://youtu.be/u6XAPnuFjJc\">freedom</a>?<p>"
    },

    {
        "mode": "box",
        "title": "Learning 3D stuff!",
        "children":
        [
            {
                "title": "3D chair",
                "image": "img/3Dlearningstuffchair.PNG",
                "url": "https://www.khanacademy.org/computer-programming/3d-learning/5194335302844416",
                "tags": ["Web", "JavaScript", "Toy"]
            },
            {
                "title": "ASCII 3D chair",
                "image": "img/3Dlearningstufftextchair.PNG",
                "url": "https://www.khanacademy.org/computer-programming/3d-out-of-text/4723472598171648",
                "tags": ["Web", "JavaScript", "Toy"]
            }
        ]
    },
 
    {
        "mode": "box",
        "title": "Hopeless console RPG's",
        "children": [
            {
                "title": "Motorcycle",
                "description": "Motorcycle is a C# console (kindof)RPG where you can do what you want. You can race, upgrade your motor, and that's it I believe. It was my first console game, and it is really boring actually. It also features bad code. Bad. Bad code. But hey! I've learned from it!",
                "image": "img/motorcycle.PNG",
                "links": [["Download", "dl/SuperSOURCE.zip"]],
                "tags": ["Windows", "Console", "C#", "Game"]
            },
            {
                "title": "SuperHero",
                "description": "SuperHero is my second C# console RPG which is a lot better than Motorcycle. With random and weird things, easter eggs, and some other geeky stuff! It was never finished actually. If you are interested, you can develop it by yourself and if you <a href=\"mailto:job@function1.nl\">send me an email</a> I will post it on my website! I'll be very happy if you do that.<br>Have fun enyoying your <u><b>SUPERPOWERRRSSS</b></u>!!!1",
                "image": "img/powerz.PNG",
                "links": [["Download", "dl/cycle_SRC.zip"]],
                "tags": ["Windows", "Console", "C#", "Game"]
            }
        ]
    },

    {
        "title": "Windows XP's 3D \"Space Cadet\" Pinball",
        "description": "YES! Another wormhole! One of my favorite games when I was 5 or something. Hours of fun! Runs on Windows 7, 8 and even Linux(via Wine)! Have fun!",
        "image": "img/Pinball.PNG",
        "links": [["English", "dl/Pinball_en.zip"], ["Dutch", "dl/Pinball_nl.zip"]],
        "tags": ["Windows", "Game"]
    },
    {                
        "title": "I AM A SPACECRAFT",
        "description": "So I browsed my projects directory, and I suddenly saw this! It's my very first (XNA) game! I remember it getting declined on indieDB... I also figured out the comets are stolen from <a href=\"http://defcom1.net/xnalessons/xnalevel1lesson05.php\">here</a>, wait... this whole game is from here! Well not completely(*relieving sigh*), because mine has enemys, and powerups, screenshots, and much, much more!<br>Unfortunatly I lost the source code for that. :( It's actually a playable game(!!!), so I decided to give it a honourfull place like here. My highscore is somewhere arround 3000. Have fun with it!",
        "image": "img/immaspacecraaft.PNG",
        "links": [["Binary", "dl/I_AM_A_SPACECRAFT.zip"]],
        "tags": ["Windows", "C#", "XNA", "Game"]
    },
    {
        "title": "chiken simulater",
        "image": "img/csgochiken.png",
        "description": "You can now be a chiken! Search your favorite streamer, enter his ID and turn auto chiken on! Made in an hour or so.",
        "links": [["Binary", "dl/chiken_simulater.zip"], ["Source", "dl/chiken_simulater_src.zip"]],
        "tags": ["Windows", "C#", "Tool"]
    },
    {
        "title": "Click Game",
        "image": "img/click.PNG", // Bad name. Bad name.
        "description": "A stupid game I made in C#. It's stupid. It yells at you. It's frustrating, and intense. But it has a degree of fun and polish. Your objective is to click the buttons in order in a certain time, which get's harder over the rounds you've played.",
        "links": [["Binary", "dl/Click_Game.zip"], ["Source", "dl/Click_Game_SRC.zip"]],
        "tags": ["Windows", "C#"]
    },
    {
        "title": "Low-Memory Candy",
        "image": "img/fry.PNG",
        "description": "You are a man, whose memory is weird. It needs candies! Otherwise it will forget stuff! Can you keep his memory intact?<br>Made for the <a href=\"http://itch.io/jam/candyjam\">Candyjam</a>!",
        "links": [["Binary", "dl/LMC_bin.zip"], ["Source", "dl/LMC_src.zip"], ["Submission page", "http://joppiesaus.itch.io/low-memory-candy"]],
        "tags": ["Windows", "C#", "XNA", "Game"]
    },
    {
        "title": "\"Zombie Game\"",
        "image": "img/zombiegaem.PNG",
        "description": "A simple little zombie game I made using <a href=\"\">these</a> tutorials to learn more about C++ game development! It was really fun to make! And the game <em>is</em> really fun too!",
        "links": [["Page", "dl/zombiegame"]],
        "tags": ["Windows", "Linux", "C++", "Game"]
    },
    {
        "title": "FAG.com",
        "image": "img/fagfagfag.PNG",
        "description": "This DOS program written in 8086 Assembly calls you a <em>fag</em>(a loser, a bundle sticks of wood) 3 times with an \"!\" after it. Since it's written in 8086 Assembly, it's only for OS-es which support 16 bit.<br>It may be violent, stupid, and ridiculous, but hey, it's only 32 bytes.",
        "links": [["FAG.com", "dl/FAG.com"], ["FAG.asm", "dl/FAG.asm"], ["FAG.asm zipped", "dl/FAG_src.zip"]]
    },
    {
        "title": "universe.zip",
        "description": "This is what happens when you give me time and confidence and a secret ingredient(which I don't know). You get things like a zip file of 295 KB, which contains 16^19 GiB(67108864 Yobibyte) of useless compressed data(all 0's).<br>It's so useless, you could even bully it because only what it does is using space. That's all.",
        "links": [["universe.zip", "dl/universe.zip"], ["1 GiB file gen cpp", "dl/Useless1GiBDataGenerator.cpp"]]
    },
    {
        "title": "Windows 7 Spider Solitaire trainer-hacker 2015 XTREME MLG EDITION",
        "image": "img/mlghckr.PNG",
        "description": "The trainer you use when you're bored. I've learned A LOT from it. I spend days working with code and even <a href=\"http://stackoverflow.com/q/26782399/2622807\">asking and answering my own stackoverflow question</a>... It's the neatest thing I've ever programmed.",
        "links": [["x64", "dl/CPPW7SSTH2015XTREMEMLGEDITIONx64.zip"], ["x86", "dl/CPPW7SSTH2015XTREMEMLGEDITIONx86.zip"], ["Source", "dl/CPPW7SSTH2015XTREMEMLGEDITION.cpp"]],
        "tags": ["Windows", "C++", "Tool"]
    },
    {
        "title": "RedBull Santa",
        "image": "img/santa.PNG",
        "description": "RedBull Santa! A C# XNA game, which is very trippy and sound-dynamic! You must prevent santa from falling-of the \"roof\", while drinking as many as possible Red Bull!<br><span class=\"warning\">Contains flashing images.</span>",
        "links": [["Binary", "dl/RedBull_Santa.zip"], ["Source", "dl/RBS_src.zip"]],
        "tags": ["Windows", "C#", "XNA", "Game"]
    },
    {
        "title": "\"Stars.EXE\"",
        "image": "img/stars.PNG",
        "description": "It was a nice \"Test project\", where I did all sorts of (useless) stuff. It was originally created to create my old website's background, but I managed to make a *nice* game from it. Comes with a *nice* *config format*, a bad name and reasonable code.",
        "links": [["Binary", "dl/Stars.zip"], ["Source", "dl/Stars_4_src.zip"]],
        "tags": ["Windows", "C#", "XNA", "Game"]
    },
    {
        "title": "Console Four in a Row",
        "image": "img/row.PNG",
        "description": "Something revolutionary... You can play four in a row on your PC! It includes the source code & executable. You can define how many columns and rows you want. You can even pick 1000!",
        "links": [["Download", "dl/4InARow_Src.zip"]],
        "tags": ["Windows", "Console", "C#", "Game"]
    },
    {
        "mode": "box",
        "title": "SuperForeverAloneInThaDungeon",
        "image": "img/sfaitdinv.PNG",
        "description": "SFAITD is a Rogue-Like made to learn more about object-oriented programming. It was another C# Console game, but this time with text as the level. I didn't now such a thing existed until I searched arround the internet. I worked on it for a long time and never finished it, but It's something!",
        "links": [["Page", "http://function1.nl/p/sfaitd/"]],
        "tags": ["Windows", "Console", "C#", "Game"]
    },
    {
        "title": "untitled.exe",
        "image": "img/untitleddotexe.PNG",
        "description": "untitled.exe. A very early programming project, which prints variants of food on the screen. Its code is bad, but that's why I learnt from it. The directory structure is also interesting. Too interesting. I give you everything. I do not even delete the <code>obj</code> folder. The exe files do not match with the code, either. The dates are weird. But mostly, the program is weird. But cool, at least.",
        "links": [["Solve that mystery!(or just have fun)", "dl/untitleddotexe.zip"]],
        "tags": ["Windows", "Console", "C#", "Toy"]
    },


    {
        "mode": "box",
        "title": "Malicious code",
        "children":
        [
            {
                "title": "C++ Apple Loser",
                "image": "img/bravepcuser.PNG",
                "description": "<span class=\"warning\">This program creates milions of apples but forgets where they are located. Notice your RAM.</span><br>I LOVE pointers! This is made to learn more about pointers. What this program does:<ol><li>Create a new apple and assign it to a pointer<li>Create a new apple and assign it to the same pointer<li>Goto 1</ol>This program will fire up your RAM and will throw a <code>bad_alloc</code>",
                "links": [["Binary(Windows)", "dl/apple_loser.zip"], ["Source", "dl/apple_loser_cpp.zip"]],
                "tags": ["Windows", "Linux", "C++"]
            },
            {
                "title": "never_thrust_batch_files.bat",
                "description": "So I thought: How can I let someone rage while not harming the whole computer? It's easy! So I came up with this: Your disk drive will open, you are unable to type correctly, you get spammed and the computer yells to you, and much more... I present to you: never_thrust_batch_files.bat!<br>Please use this for \"fun\" purposes, not to harm people. It's easy to fix, just open run and type in <code>msconfig</code>, then open the tab \"startup\" and <code>remove never_thrust_batch_files.bat</code> from the list. I still haven't tested it, thought.",
                "image": "img/ntbf.PNG",
                "links": [["Download", "dl/never_thrust_batch_files.bat"]],
                "tags": ["Windows", "Batch"]
            },
            {
                "title": "installer.bat",
                "description": "Bing bar? Conduit toolbar!? Norton Antivirus!?! That trash wouldn't be able to beat THIS! Designed just for you, to generate trash. If you have an old computer, you want to bomb, just enter -1 trash! <em>Die in style</em>.",
                "image": "img/itrash.PNG",
                "links": [["Download!", "dl/installer.bat"]],
                "tags": ["Windows", "Batch"]
            }
        ]
    },

    {
        "title": "NEON IT ALLL",
        "onclick": "var style=document.createElement('style');style.innerHTML='*{text-shadow:0 0 3px #f00, 0 0 5px #00f !important}h1,h2{text-shadow:0 0 8px #f00, 0 0 15px #00f !important}';document.getElementsByTagName('head')[0].appendChild(style)",
    },

    {
        "mode": "box",
        "title": "I like this site",
        "onclick": "var a=['github.com','glslsandbox.com','youtu.be','khanacademy.org','ludumdare.com','cachemonet.com'];window.open('http://'+a[Math.floor(Math.random()*a.length)])",
        "tags": ["Web"]
    },

    {
        "mode": "box",
        "title": "Donations",
        "content": "If you <em>really</em> like my work, you can donate me your crappy CSGO skins(I love crappy CSGO skins), give me TF2 items, give me your stupid games, or other trash or not-so-trash on <a href=\"https://steamcommunity.com/tradeoffer/new/?partner=150881846&token=LdOYlDqJ\">steam</a>!"
    }
];

var tags = [];
var smallTileHolders = [];
var smallTilesFragment;
var grid;

document.addEventListener("DOMContentLoaded", function()
{
    if (window.WebGLRenderingContext)
    {
        freq("js/background3");
    }

    // Y U NO .forEach???1! I CRY
    var projectPopups = document.querySelectorAll(".projectPopup");

    // Query all elements that have a popup defined, and give them their click listener with the data so that they function
    for (var i = 0; i < projectPopups.length; i++)
    {
        var e = projectPopups[i];

        // Is javascript ever going to have nice closures?
        e.onclick = (function(a)
            {
                return function()
                {
                    openProjectPopup(a);
                };
            })(JSON.parse(e.dataset.projectPopup));

        // And why not make a CSS class?
        // Because javascript may be disabled.
        e.style.cursor = "pointer"; 
    }


    // Create small project tiles out of the data
    grid = ge("projects");
    var currentTile = null; // The current tile to add the small tiles in(Actually the boxInner of the current tile)
    var subTileCount = 3; // How many small tiles there are in the currenTile, in order to add a new one later

    // Processes the tile to make it functional by it's properties
    var procedureTile = function(e, tile)
    {
        var parent = tile.parentNode;
        tile.style.cursor = "pointer";
        
        if (e.url)
        {
            var a = document.createElement("a");
            a.href = e.url;
            parent.removeChild(tile);
            a.appendChild(tile);
            parent.appendChild(a);
        }
        else if (e.onclick)
        {
            tile.onclick = eval("(function(){" + e.onclick + "})");
        }
        else if (e.children || e.content)
        {
            tile.style.cursor = "";
        }
        else
        {
            tile.className += " projectPopup";
            tile.onclick = (function(a)
                {
                    return function()
                    {
                        openProjectPopup(a);
                    }
                })(e);
        }

        // Image
        if (e.image)
        {
            var img = document.createElement("img");
            img.className = "tileImage";
            img.src = e.image;
            tile.appendChild(img);
            tile.style.padding = "0";
        }
        else if (e.content)
        {
            tile.innerHTML += e.content;
        }
        else if (e.children)
        {
            tile.className += " groupTile";
        }
        else // When no image provided, fall back to a title
        {
            /* TODO: Style */
            tile.innerHTML += '<span class="title">' + e.title + '</span>';
        }

        // Assign random "theme"(CSS class color)
        tile.className += " gridTheme" + Math.floor(Math.random() * 3);


        // Title box
        if (e.title && (e.image || e.children || e.content))
        {
            var tEl = document.createElement("div");
            tEl.className = "titleBox";
            tEl.innerHTML = e.title;
            tile.appendChild(tEl);
        }

        // ID
        if (e.id)
        {
            parent.id = e.id;
        }
        
        // Give the data back a reference to the DOM Element
        e.domElement = parent;
    };

    // TODO: find a way to shuffle them properly
    // Shuffle the tiles!
    tileData.forEach(function(e)
        {
            if (e.children)
            {
                e.children.shuffle();
            }
        }
    );

    tileData.shuffle();

    /* It's valid jason, so if you want to load it differently, just pass it in JSON.parse.
    JSON.parse(tileData)
    */
    tileData.forEach(function(e)
        {
            var tile;

            if (!e.mode)
            {
                tile = createTile("childBox");
            }
            else
            {
                tile = createTile(e.mode, grid);

                if (e.children)
                {
                    e.children.forEach(function(f)
                        {
                            procedureTile(f, createTile("childBox", tile));
                        }
                    );
                }
            }

            // Procedure its properties
            procedureTile(e, tile);
        }
    );

    coupleTiles();
    
    ge("joppiesausesAge").textContent = joppiesausesAge();
    

    var sb = ge("searchBox");
    sb.onkeypress = function(e)
    {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;

        if (keyCode === 13)
        {
            restore();
            filter(makeFilterFunction(this.value));
            return false;
        }
    };

    sb.onkeyup = function(e)
    {
        evaluateUserTagColors(this.value);
    };
    
    processTags();
});

// Creates the tile and appends it to parent if defined
function createTile(classes, parent)
{
    var tile = document.createElement("div");
    tile.className = classes;

    var ct = document.createElement("div");
    ct.className = "boxInner";

    tile.appendChild(ct);

    if (parent)
    {
        parent.appendChild(tile);
    }

    return ct;
}

// Executes function f for each tile, passing in the tile
function forEachTile(f)
{
    tileData.forEach(function(e)
        {
            f(e);
            if (e.children)
            {
                e.children.forEach(f);
            }
        }
    );
}

function onTagClick(a)
{
    return function()
    {
        // If that thing is still open, close it
        closeProjectPopup();

        var el = ge("searchBox");
        var text = el.value;
        var expression = "tags:has(" + a + ")";

        var i = text.indexOf(expression);

        if (i === -1)
        {
            if (text.length > 0)
            {
                for (var b = 0; text[text.length - 1 - b] === " "; b++) {}
                if (b > 1)
                {
                    el.value = text.slice(0, -(b - 1));
                }
                else if (!b)
                {
                    el.value += " ";
                }
            }

            el.value += expression;
        }
        else if (text[i - 1] !== "!")
        {
            for (var b = 0; text[i - 1 - b] === " "; b++){}
            if (b)
            {
                text = text.substring(0, i - b) + text.substring(i, text.length);
            }
            el.value = text.replace(expression, "");
        }

        applySearchboxFilter();
    }
}

function processTags()
{
    // TODO: Performance? Are there better ways to do this?
    // Loop trough all tiles
    forEachTile(function(e)
        {
            if (!e.tags) return;
            
            // Loop through their tags
            e.tags.forEach(function(tileTag)
                {
                    // And check if the tag has not be found yet
                    if (tags.every(function(globalTag)
                        {
                            return (tileTag !== globalTag); 
                        }
                    ))
                    {
                        // if so, add them to the tags
                        tags.push(tileTag);
                    }
                }
            );
        }
    );
    var appendEl = ge("tags");

    // Create visual tags
    tags.forEach(function(tag)
        {
            var e = document.createElement("span");
            e.className = "tag";
            e.id = "tag-" + tag;
            e.onclick = onTagClick(tag);
            e.textContent = tag;

            appendEl.appendChild(e);
        }
    );
}

function coupleTiles()
{
    var tile;
    var subTileCount = 3;

    // loop trough tiles
    // TODO: Find other way to go trough all small tiles
    tileData.forEach(function(e)
        {
            // If not a small tile, or not visible, continue
            if (!hasClass(e.domElement, "childBox") || e.domElement.style.display === "none")
            {
                return;
            }

            if (++subTileCount >= 4)
            {
                tile = createTile("box boxDisable", grid);
                smallTileHolders.push(tile);
                subTileCount = 0;
            }

            tile.appendChild(e.domElement);
        }
    );

    smallTilesFragment = null;
}

function decoupleTiles()
{
    smallTilesFragment = document.createDocumentFragment();

    // iterate trough the holders, leaving the childs
    smallTileHolders.forEach(function(e)
        {
            while (e.firstChild)
            {
                smallTilesFragment.appendChild(e.firstChild);
            }
            e.parentNode.remove();
        }
    );

    // Empty it, since they don't exist anymore
    smallTileHolders = [];
}

function evaluateUserTagColors(text)
{
    text = text || ge("searchBox").value;

    tags.forEach(function(tag)
        {
            var e = ge("tag-" + tag);

            if (text.indexOf("!tags:has(" + tag + ")") !== -1)
            {
                e.style.backgroundColor = "#f00";
            }
            else if (text.indexOf("tags:has(" + tag + ")") !== -1)
            {
                e.style.backgroundColor = "#00f";
            }
            else
            {
                e.style.backgroundColor = "inherit";
            }
        }
    );
}

// Please send help
// I'm drowning in javascript closures
// I will so not get this code next week
// I still feel like a genious
// Even thought this code may be terribad
function makeFilterFunction(input)
{
/***************************************
***  Input generation documentation  ***
****************************************

You have two ways of filtering:

array:function(argument)
function:variable(argument)

For example:

has:foo selects all tiles with the variable foo
has:foo(bar) selects all tiles with the variable bar equal to "bar"

Valid functions for variables:
contains: Checks if the variable contains arg
has: Checks if the tile has variable variable. If argument supplied, it will check if the variable is equal to argument


You can also supply a ! in front of the statement to add invert the result.
For example, !has:foo will select all elements without the variable foo.

Multiple functions are also possible. Just add a space.

Alternatively, you can do variable:value. It selects all variables where variable equals value.
It's the same as has:variable(value)

*/

    var hasFunc = function() /* e, variable */
    {
        return (this[0][this[1]]);
    };

    var hasArrFunc = function()
    {
        if (!this[0][this[1]])
        {
            return false;
        }
        var c = this[2];
        return (
            this[0][this[1]].some(function(e)
                {
                    return (e === c);
                }
            )
        );
    };

    var isFunc = function() /* e, variable, equals */
    {
        return (this[0][this[1]] === this[2]);
    };

    var containsFunc = function() /* e, variable, contains */
    {
        return (this[0][this[1]].indexOf(this[2]) !== -1);
    };


    var compose = function(args) /* function f, f-specific arguments */
    {
        return (function(arg)
        {
            return function()
            {
                return arg[0].apply([arguments[0]].concat(arg.slice(1)));
            };
        })(args);
    };

    // Split the input to commands
    // semi-dumb
    // I should learn regex
    // TODO: Make regex and add quotes
    var newInput = [];
    var chars = "";
    var inClosure = false, prevWasEscapeClosureChar = false;

    for (var i = 0; i < input.length; i++)
    {
        if (inClosure)
        {
            if (prevWasEscapeClosureChar && input[i] !== ")")
            {
                inClosure = false;
                prevWasEscapeClosureChar = false;
                i--;
                continue;
            }
            else if (input[i] === ")")
            {
                prevWasEscapeClosureChar = true;
            }
        }
        else
        {
            switch (input[i])
            {
                case " ":
                    newInput.push(chars);
                    chars = "";
                    continue;

                case "(":
                    inClosure = true;
                    break;
            }
        }

        chars += input[i];
    }

    // Add the remaining chars
    if (chars !== "")
    {
        newInput.push(chars);
        chars = "";
    }

    var funcs = [];

    // Go trough each filter definition
    newInput.forEach(function(put)
    {
        var things = put.split(":");

        // If just a word, replace it by searching for the title
        if (things.length < 2)
        {
            things = [ "contains", "title(" + things[0] + ")" ];
        }


        var func, variable, comparator, not;

        // If there's a ! in front of it, invert the function
        if (things[0][0] === "!")
        {
            not = true;
            things[0] = things[0].substring(1);
        }

        switch (things[0])
        {
            case "has":
                func = hasFunc;
                break;

            case "contains":
                func = containsFunc;
                break;

            case "javascript":
                // TODO: Add
                break;

            default:
                variable = things[0]; // It's not a function, it's a variable
                break;
        }

        var argInput = things[1].split("(");
        var args = [];

        if (argInput.length > 1)
        {
            // Remove ) if needed
            if (argInput[1][argInput[1].length - 1] === ")")
            {
                argInput[1] = argInput[1].slice(0, -1);
            }
        }

        if (variable) // if the first index was a variable and not a function
        {
            if (argInput.length > 1)
            {
                switch (argInput[0])
                {
                    case "has":
                        func = hasArrFunc;
                        break;

                    default:
                        return;
                }

                comparator = argInput[1];
            }
            else // if it doesn't have a parameter, it's of format variable:value
            {
                func = isFunc;
                variable = things[0];
                comparator = things[1];
            }
        }
        else
        {
            variable = argInput[0];

            if (argInput.length > 1)
            {
                // if  has is supplied with an argument, it becomes is
                if (func === hasFunc)
                {
                    func = isFunc;
                }

                comparator = argInput[1];
            }
        }

        args = [ func, variable, comparator/*doesn't matter if it's undefined, then it isn't used anyway*/ ];

        var finalFunc = compose(args);
        finalFunc.not = not;
        funcs.push(finalFunc);
    });

    return (function(arr)
    {
        return function(e)
        {
            return (arr.every(function(f)
                {
                    if (f.not)
                    {
                        return !f(e);
                    }
                    else
                    {
                        return f(e); 
                    }
                }
            ));
        };
    })(funcs);
}

function applySearchboxFilter()
{
    restore();
    evaluateUserTagColors();
    filter(makeFilterFunction(ge("searchBox").value));
}

// Filters all tiles by function ff(returns false if it should remove the tile)
function filter(ff)
{
    decoupleTiles();

    tileData.forEach(function(e)
        {
            var el = e.domElement;
            
            if (!ff(e))
            {
                if (e.children)
                {
                    var canRemove = true;
                    
                    e.children.forEach(function(f)
                        {
                            if (ff(f))
                            {
                                canRemove = false;
                            }
                            else
                            {
                                f.domElement.style.display = "none";
                            }   
                        }
                    );
                    
                    if (canRemove === true)
                    {
                        el.style.display = "none";
                    }
                }
                else
                {
                    el.style.display = "none";
                }
            }
        }
    );

    coupleTiles();
}

function restore()
{
    decoupleTiles();

    forEachTile(function(e)
        {
            e.domElement.style.display = "block";
        }
    );

    coupleTiles();
}

// Opens the project popup and fills it in with data obj
function openProjectPopup(data)
{
    var pEl = ge("projectPopup");
    
    pEl.children[0].textContent = data.title;
    pEl.children[2].innerHTML = data.description;
    
    // Erase old data if there's any
    pEl.children[1].innerHTML = "";
    pEl.children[3].innerHTML = "";
    
    
    if (data.links)
    {
        data.links.forEach(function(e){
            pEl.children[1].innerHTML += "<li><a href=\"" + e[1] + "\">" + e[0] + "</a>";
        });
    }
    
    if (data.tags)
    {
        data.tags.forEach(function(e){
            var li = document.createElement("li");
            li.className = "tag";
            li.onclick = onTagClick(e);
            li.textContent = e;

            pEl.children[3].appendChild(li);
            //pEl.children[3].innerHTML += "<li class=\"tag\" onclick=\"closeProjectPopup();searchByTag('" + e + "')\">" + e;
        });
    }

    // And display it
    var plEl = ge("projectPopupLayer");
    plEl.style.display = "block";
    plEl.style.animation = "fadeIn 0.5s";
    pEl.style.display = "block";
}

// Closes the project popup
function closeProjectPopup()
{
    var plEl = ge("projectPopupLayer");
    plEl.style.display = "none";
    plEl.style.animation = "";
    ge("projectPopup").style.display = "none";
}