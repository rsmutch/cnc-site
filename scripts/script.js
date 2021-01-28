/* Set the width of the side navigation to 250px */
function toggleNav() {
  if (document.getElementById('menu').style.width === '100vw') {
    document.getElementById('menu').style.width = 0;
  } else {
    document.getElementById('menu').style.width = '100vw';
  }
}
