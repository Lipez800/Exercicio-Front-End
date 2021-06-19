var morelinks = document.querySelectorAll(".section > .txt-more");

for (var i = 0, j = morelinks.length; i < j; i++) {
     morelinks[0].onclick = function () {
          var container = this.parentNode.querySelector(".containerfluid");
          
          container.classList.toggle("partial");
          this.classList.toggle("txt-more");
     };
}	