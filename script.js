/* var isGalleryCellVisible = true;
var delay = 200; // Adjust this value as needed

document.getElementById("gallery-cell-cell").addEventListener("mouseenter", mouseEnter);
document.getElementById("gallery-cell-cell").addEventListener("mouseleave", mouseLeave);
document.getElementById("gallery-cell-cell-cell").addEventListener("mouseenter", mouseEnter);
document.getElementById("gallery-cell-cell-cell").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  if (isGalleryCellVisible) {
    setTimeout(function() {
      document.getElementById("gallery-cell-cell").style.visibility = "hidden";
      document.getElementById("gallery-cell-cell-cell").style.visibility = "visible";
    }, delay);
    isGalleryCellVisible = false;
  }
}

function mouseLeave() {
  if (!isGalleryCellVisible) {
    setTimeout(function() {
      document.getElementById("gallery-cell-cell").style.visibility = "visible";
      document.getElementById("gallery-cell-cell-cell").style.visibility = "hidden";
    }, delay);
    isGalleryCellVisible = true;
  }
}
 */