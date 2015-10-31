# I love you, Nim!
import strutils, times, os

# Much wip very bug many weird
proc blameUser =
    echo "Usage: ", paramStr(0), " <files> - Archives tha website!"
    quit(QuitFailure)

if paramCount() < 1:
    blameUser()

let
    replaceCases = ["img", "dl", "lib"]
    loc = "archive/" & getDateStr() & "/"
    files = commandLineParams()

if not existsDir(loc):
    createDir(loc)

for fileName in files:
    try:
        let dirs = fileName.split({'/'})
        var currentDir = loc
        for i in 0..dirs.len - 2:
            currentDir &= dirs[i]
            if not existsDir(currentDir):
                createDir(currentDir)

        var content = readFile(fileName)

        for k in replaceCases:
            content = content.replace(k & "/", "/" & k & "/")

        writeFile(loc & fileName, content)
    except IOError:
        echo "I/O error with file ", fileName, ": ", getCurrentExceptionMsg()
        # TODO: Continue or break?

echo "Succesfully archived in ", loc
