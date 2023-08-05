class Star {
  posX
  posY
  size
  animationDelay
  constructor({ size, posX, posY, animationDelay }) {
    this.posX = posX
    this.posY = posY
    this.size = size
    this.animationDelay = animationDelay
  }

  render() {
    const element = document.createElement('span')

    element.classList.add('star')
    element.style.width = toPixels(this.size)
    element.style.height = toPixels(this.size)
    element.style.top = toPixels(this.posY)
    element.style.left = toPixels(this.posX)
    element.style.animationDelay = toSeconds(this.animationDelay)

    return element
  }

  distance(x, y) {
    const dx = this.posX - x
    const dy = this.posY - y
    return Math.sqrt(dx * dx + dy * dy)
  }
}

class Stars {
  $container
  stars = []
  count
  maxSize
  minSize
  minDistance
  maxAnimationDelay
  constructor(params) {
    const {
      container,
      containerCls,
      starsCount = 30,
      maxSize = 6,
      minSize = 2,
      maxAnimationDelay = 6,
      minStarDistance = 200
    } = params

    let currentContainer = document.querySelector(container)

    if (!currentContainer) {
      currentContainer = document.createElement('div')
      currentContainer.id = container
      document.body.appendChild(currentContainer)
    }

    this.$container = currentContainer
    this.$container.className = containerCls || 'stars-container'

    this.count = starsCount
    this.maxSize = maxSize
    this.minSize = minSize
    this.maxAnimationDelay = maxAnimationDelay
    this.minDistance = minStarDistance

    this.render()
  }

  render() {
    const containerWidth = this.$container.clientWidth
    const containerHeight = this.$container.clientHeight
    for(let i = 0; i < this.count; i++) {
      let posX, posY

      do {
        posX = randomize(0, containerWidth)
        posY = randomize(0, containerHeight)
      } while (!this.isCoordinateValid(posX, posY))

      const newStar = this.createStar(posX, posY)
      this.stars.push(newStar)
      this.$container.appendChild(newStar.render())
    }
  }

  createStar(posX, posY) {
    const randSize = randomize(this.minSize, this.maxSize)
    const randAnimDelay = randomize(0, this.maxAnimationDelay)

    return new Star({
      size: randSize,
      posY,
      posX,
      animationDelay: randAnimDelay
    })
  }

  isCoordinateValid(x, y) { 
    for(const element of this.stars) {
      const distanceToElement = element.distance(x, y)
      if (distanceToElement < this.minDistance) {
        // console.log('Element re-rendered')
        return false
      }
    }
    return true
  }

}

const toPixels = (_) => `${_}px`
const toSeconds = (_) => `${_}s`
const randomize = (min, max) => Math.round(Math.random() * (max - min)) + min

new Stars({
  container: '#stars-container',
  minSize: 2,
  maxSize: 6,
  maxAnimationDelay: 6,
})

// create Comet
// fisrt ver. (for test)
const wH = window.innerHeight;
const wW = window.innerWidth;
const starsContainer = document.querySelector('.stars-container');

const createComet = () => {
  const comet = document.createElement('div');
  comet.classList.add('comet');
  comet.style.top = `${Math.random() * wH}px`;
  comet.style.left = `${Math.random() * wW}px`;
  starsContainer.appendChild(comet);
  setTimeout(() => comet.remove(), 6000);
};

const generateComets = () => {
  setInterval(createComet, 5000);
};

generateComets();