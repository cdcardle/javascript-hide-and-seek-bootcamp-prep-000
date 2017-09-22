 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget() {
  return document.querySelectorAll('.target')
}

function increaseRankBy(n) {
  const list = dpcument.getElementsByClassName('ranked')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + 1).toString()
  }
}
