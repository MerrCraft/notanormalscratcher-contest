texts = ["So, welcome to NotANormalScratcher's 40+ follower anything contest! ",
     "This is a contest about anything (obvisly)", "The contest is now closed tho :'("];
textNumber = 0;
function next() {
    document.getElementById('text').innerHTML = texts[textNumber];
    textNumber = textNumber + 1;
}