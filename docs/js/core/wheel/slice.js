/**
 * @description Wheel slice
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default class Slice {
  /**
   * @type     {Object}
   * @property {number} x
   * @property {number} y
   */
  #center

  /**
   * @type {number}
   */
  #radius

  /**
   * @type {string}
   */
  #color

  /**
   * @type {number}
   */
  #startAngle

  /**
   * @type {number}
   */
  #endAngle

  /**
   * Constructor
   *
   * @param {number} centerX
   * @param {number} centerY
   * @param {number} radius
   * @param {string} color
   * @param {number} startAngle
   * @param {number} endAngle
   */
  constructor(centerX, centerY, radius, color, startAngle, endAngle) {
    this.#center = {x: centerX, y: centerY}
    this.#radius = radius
    this.#color = color
    this.#startAngle = startAngle
    this.#endAngle = endAngle
  }

  /**
   * Renders a slice in the canvas using the provided context
   *
   * @param  {CanvasRenderingContext2D} context
   * @return {void}
   */
  render(context) {
    context.beginPath()
    context.moveTo(this.#center.x, this.#center.y)
    context.arc(
      this.#center.x,
      this.#center.y,
      this.#radius,
      this.#startAngle,
      this.#endAngle,
    )
    context.fillStyle = this.#color
    context.fill()
    context.closePath()
  }

  /**
   * Updates slice
   *
   * @param  {CanvasRenderingContext2D} context
   * @param  {number}                   speed
   * @return {void}
   */
  update(context, speed) {
    this.#startAngle += speed
    this.#endAngle += speed
    this.render(context)
  }
}
