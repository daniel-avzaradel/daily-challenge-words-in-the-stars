let regex = /^[a-z]+\s*[^\d]*$/gi
let words = prompt("Please type in a few words separated by comma");

while(regex.test(words) == false) {
    words = prompt("Please type in only words and separate them with commas")
}

let wordstrim = words.trim().replace(/,/g, "").split(" ")

let longest = 0;

for (i in wordstrim) {
    if (wordstrim[i].length > longest) {
        longest = wordstrim[i].length;
    }
}

console.log("*","*".repeat(longest+1),"*");
for(i in wordstrim) {
    console.log("*", wordstrim[i]," ".repeat((longest-wordstrim[i].length)), "*")
}
console.log("*","*".repeat(longest+1),"*");
