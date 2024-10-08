/**
 * @description Wheel
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        For now, this wheel class will work as a wheel slice builder
 */
import Slice from './wheel/slice.js'

export default class Wheel {
  /**
   * @type {Slice[]} SliceCollection
   */
  #sliceCollection

  /**
   * @type {number}
   */
  #speed

  /**
   * Constructor
   *
   * @param {number}   centerX
   * @param {number}   centerY
   * @param {number}   radius
   * @param {string[]} colors
   * @param {number}   speed
   */
  constructor(centerX, centerY, radius, colors, speed) {
    this.#sliceCollection = this.#buildSlices(centerX, centerY, radius, colors)
    this.#speed = speed
  }

  /**
   * Update
   *
   * @param   {CanvasRenderingContext2D} context
   * @returns {void}
   */
  update(context) {
    context.save()
    context.globalAlpha = 0.1
    for (const slice of this.#sliceCollection) {
      for (let i = 0; i <= this.#speed; i += this.#speed / 20) {
        slice.update(context, i)
      }
    }
    context.restore()
  }

  /**
   * Build slices
   *
   * @param   {number}   centerX
   * @param   {number}   centerY
   * @param   {number}   radius
   * @param   {string[]} colors
   * @returns {Slice[]}
   */
  #buildSlices(centerX, centerY, radius, colors) {
    const slices = []
    const sliceCount = colors.length
    for (let i = 0; i < sliceCount; i++) {
      const color = colors[i]
      const startAngle = 2 * Math.PI * (i / sliceCount)
      const endAngle = 2 * Math.PI * ((i + 1) / sliceCount)
      slices.push(
        this.#buildSlice(centerX, centerY, radius, color, startAngle, endAngle),
      )
    }
    return slices
  }

  /**
   * Build slice
   *
   * @param   {number} centerX
   * @param   {number} centerY
   * @param   {number} radius
   * @param   {string} color
   * @param   {number} startAngle
   * @param   {number} endAngle
   * @returns {Slice}
   */
  #buildSlice(centerX, centerY, radius, color, startAngle, endAngle) {
    return new Slice(centerX, centerY, radius, color, startAngle, endAngle)
  }
}
