 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')[0]
}

function increaseRankBy(n) {
  const list = document.getElementsByClassName('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}