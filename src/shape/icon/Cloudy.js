import draw2d from '../../packages'


/**
 * @class draw2d.shape.icon.Cloudy

 *
 * @example
 *
 *    let icon =  new draw2d.shape.icon.Cloudy();
 *
 *    canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Cloudy = draw2d.shape.icon.Icon.extend(
  /** @lends draw2d.shape.icon.Cloudy.prototype */
  {

  NAME: "draw2d.shape.icon.Cloudy",

  /**
   *
   * Creates a new icon element which are not assigned to any canvas.
   *
   * @param {Object} attr the configuration of the shape
   */
  init: function (attr, setter, getter) {
    this._super(extend({width: 50, height: 50}, attr), setter, getter)
  },

  /**
   * @private
   * @returns
   */
  createSet: function () {
    return this.canvas.paper.path("M14.378,6.781c0.41,0.988,1.938,0.346,1.524-0.648C15.708,5.667,15.515,5.2,15.32,4.734c-0.289-0.695-0.875-3.233-2.042-2.747c-1.03,0.433-0.128,1.846,0.142,2.494C13.739,5.248,14.059,6.015,14.378,6.781M20.8,7.223c1.094,0.453,1.538-1.551,1.813-2.216c0.281-0.677,1.478-2.565,0.357-3.029c-1.092-0.453-1.537,1.548-1.813,2.216C20.876,4.872,19.68,6.757,20.8,7.223M18.137,6.692c1.183,0,0.829-2.019,0.829-2.742c0-0.732,0.383-2.935-0.829-2.935c-1.183,0-0.828,2.019-0.828,2.742C17.309,4.49,16.926,6.692,18.137,6.692M23.058,8.729c0.852,0.85,2.142-0.972,2.659-1.49c0.512-0.513,2.187-1.687,1.352-2.524c-0.834-0.836-2.013,0.843-2.522,1.353C24.028,6.585,22.198,7.874,23.058,8.729M24.565,10.986c0.448,1.091,2.183-0.01,2.849-0.286c0.676-0.28,2.858-0.771,2.394-1.89c-0.455-1.091-2.181,0.008-2.849,0.285C26.281,9.377,24.102,9.866,24.565,10.986M12.036,8.742c0.752,0.75,1.932-0.415,1.17-1.173c-0.253-0.347-0.646-0.645-0.949-0.946c-0.541-0.539-2.162-2.799-3.068-1.889c-0.79,0.791,0.586,1.755,1.083,2.25C10.859,7.57,11.447,8.156,12.036,8.742M29.365,17.397c-0.768-0.317-1.534-0.635-2.302-0.952c-0.646-0.268-2.07-1.169-2.495-0.135c-0.481,1.168,2.054,1.747,2.751,2.035c0.455,0.188,0.911,0.377,1.367,0.565C29.7,19.331,30.379,17.816,29.365,17.397M29.942,12.817c-0.83,0-1.66,0-2.49,0c-0.701,0-2.357-0.288-2.355,0.83c0,1.262,2.567,0.827,3.319,0.827c0.493,0,0.986,0,1.479-0.001C30.99,14.473,31.043,12.815,29.942,12.817M24.234,18.568c-0.673-0.673-1.773,0.189-1.281,1.007c-0.295-0.264-0.614-0.499-0.961-0.69c3.894-2.866,3.328-9.006-1.021-11.107c-2.024-0.978-4.481-0.828-6.368,0.394c-0.871,0.564-1.603,1.336-2.119,2.236c-0.262,0.456-0.468,0.943-0.612,1.449c-0.074,0.258-0.131,0.521-0.172,0.786c-0.083,0.534-0.109,0.553-0.553,0.871c-0.182-0.957-1.64-0.675-2.326-0.674c-0.815,0.001-1.963-0.217-2.752,0.046c-0.867,0.289-0.652,1.615,0.263,1.613c0.324,0.052,0.701-0.001,1.028-0.001c0.904-0.001,1.809-0.002,2.713-0.003c-0.308,0.352-0.496,0.969-0.94,0.77c-0.467-0.209-0.978-0.319-1.49-0.319c-0.951,0-1.877,0.375-2.561,1.036c-0.681,0.658-1.088,1.569-1.123,2.516c-0.944,0.31-1.791,0.891-2.421,1.658c-2.756,3.354-0.265,8.554,4.058,8.554v-0.002c3.597,0,7.194,0,10.792,0c1.341,0,2.843,0.167,4.168-0.113c3.652-0.772,5.361-5.21,3.133-8.229c0.548,0.547,1.096,1.094,1.644,1.641c0.183,0.183,0.364,0.424,0.575,0.574c0.552,0.552,1.524,0.066,1.403-0.713c-0.097-0.622-1.042-1.267-1.448-1.673C25.319,19.652,24.776,19.11,24.234,18.568M18.137,8.787c4.559,0.009,6.576,5.979,2.912,8.734c-0.637-3.505-4.161-5.824-7.629-5.03C13.943,10.367,15.852,8.792,18.137,8.787M22.895,24.08c-0.633,3.346-4.149,2.879-6.68,2.879c-3.017,0-6.033,0-9.049,0c-0.767,0-1.62,0.084-2.373-0.095c-2.274-0.538-3.416-3.242-2.172-5.235c0.678-1.087,1.568-1.19,2.626-1.67c0.604-0.273,0.456-0.807,0.456-1.331c0.002-0.597,0.284-1.169,0.756-1.533c0.787-0.608,1.943-0.497,2.611,0.234c1.098,1.205,1.96-1.346,2.507-1.893c2.025-2.025,5.475-1.708,7.068,0.684c0.344,0.516,0.581,1.102,0.693,1.712c0.097,0.529-0.115,1.341,0.188,1.796c0.291,0.47,0.943,0.463,1.397,0.68c0.508,0.23,0.963,0.591,1.304,1.034C22.834,22.125,23.064,23.107,22.895,24.08M6.906,9.917c0.881,0.364,1.763,0.727,2.644,1.091c0.353,0.146,0.707,0.292,1.06,0.437c0.997,0.412,1.637-1.119,0.642-1.526C10.47,9.441,9.456,9.177,8.609,8.828c-0.354-0.146-0.707-0.292-1.06-0.437C6.554,7.98,5.912,9.505,6.906,9.917")
  }
})

