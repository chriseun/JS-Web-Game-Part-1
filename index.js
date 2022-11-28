// function newBackground(url, height) {
//   let background = document.createElement('img')
//   background.src = url
//   background.style.position = 'fixed'
//   background.style.bottom = 0;
//   background.style.width = '100px'
//   background.style.height = '100px'
//   document.body.append(background)
// }

function tile(url, left, bottom, width, height){
  for(let i = 0; i < height; i++){
      for(let w =0; w < width; w++){
      newImage(url, left + w*100, bottom+i*100)
    }
  }
}

let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight-horizon;
let heightOfGrass = horizon;

tile('assets/sky.png', 0, horizon, window.innerWidth, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth, heightOfGrass/100)



// newBackground('assets/sky.png', 100)
// newBackground('assets/grass.png', 70)



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
newImage('assets/green-character/east.gif', 140, 430)




function newItem(url, left, bottom) {

  let object = document.createElement('img')
  object.src = url
  object.style.position = 'fixed'
  object.style.left = left + 'px'
  object.style.bottom = bottom + 'px'

  document.body.append(object)


  object.addEventListener('dblclick', () => {
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
