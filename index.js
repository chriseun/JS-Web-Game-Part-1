function newBackground(url, height) {
  let background = document.createElement('img')
  background.src = url
  background.style.position = 'fixed'
  background.style.bottom = 0;
  background.style.width = '100%'
  background.style.height = height + 'vh'
  document.body.append(background)

}



newBackground('assets/sky.png', 100)
newBackground('assets/grass.png', 70)



function newImage(url, left, bottom) {

  let object = document.createElement('img')
  object.src = url
  object.style.position = 'fixed'
  object.style.left = left + 'px'
  object.style.bottom = bottom + 'px'
  document.body.append(object)

}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)




function newItem(url, left, bottom) {

  let object = document.createElement('img')
  object.src = url
  object.style.position = 'fixed'
  object.style.left = left + 'px'
  object.style.bottom = bottom + 'px'

  document.body.append(object)


  object.addEventListener('dblclick', function () {
    object.remove()
  })

}
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)




// newItem()


// function newTree(){

// }

// newTree()
