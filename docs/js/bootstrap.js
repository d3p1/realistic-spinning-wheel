/**
 * @description Bootstrap
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        For now, this class will work as a wheel builder
 */
import Wheel from './core/wheel.js'

export default class Bootstrap {
  /**
   * @type {HTMLCanvasElement}
   */
  #canvas

  /**
   * @type {CanvasRenderingContext2D}
   */
  #context

  /**
   * @type {Wheel}
   */
  #wheel

  /**
   * Constructor
   *
   * @param {string}   canvasId
   * @param {string[]} wheelColors
   */
  constructor(canvasId, wheelColors) {
    this.#canvas = this.#buildCanvas(canvasId)
    this.#context = this.#canvas.getContext('2d')
    this.#wheel = this.#buildWheel(wheelColors)

    this.#context.globalAlpha = 0.1
  }

  /**
   * Render
   *
   * @returns {void}
   */
  render() {
    this.#wheel.update(this.#context)
  }

  /**
   * Animate
   *
   * @returns {void}
   */
  animate() {
    this.render()
    requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Build wheel
   *
   * @param   {string[]} colors
   * @returns {Wheel}
   */
  #buildWheel(colors) {
    return new Wheel(
      this.#canvas.width / 2,
      this.#canvas.height / 2,
      this.#canvas.height * 0.4,
      colors,
      0.01,
    )
  }

  /**
   * Build canvas
   *
   * @param   {string}            canvasId
   * @returns {HTMLCanvasElement}
   */
  #buildCanvas(canvasId) {
    const canvas = document.getElementById(canvasId)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    return canvas
  }
}
