 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')[0]
}

function increaseRankBy(n) {
  const list = document.getElementsByClassName('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt((i + n).toString())
  }
}
