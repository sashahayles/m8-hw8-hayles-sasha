// It is always helpful to use comments in your code!
var mainNav = document.getElementsByClassName ('main-menu-labels');
//console.log(myMainNavLinks);
//function
function toggleSub() {

}
//loops
for (i=0; i < mainNav.length; i++) {
mainNav[i].addEventListener ('click', toggleSub);
}
