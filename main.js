// It is always helpful to use comments in your code!
var mainNav = document.getElementsByClassName ('main-menu-labels');
//console.log(myMainNavLinks);
//function
function toggleSub() {
  this.nextElementSibling.classList.toggle('hide');

}
//loops
for (i=0; i < mainNav.length; i++) {
mainNav[i].addEventListener ('mousein', toggleSub);
}
