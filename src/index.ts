import { VertexShader, FragmentShader } from './shaders'
import { createProgram } from './utils/webgl-utils'
/**
 * Implementation from
 * https://dev.opera.com/articles/raw-webgl-part-1-getting-started/
 */
document.addEventListener('DOMContentLoaded', () => {
	const c: HTMLCanvasElement =  document.getElementById('canvas') as HTMLCanvasElement
	const gl =  c.getContext('experimental-webgl') as WebGL2RenderingContext

	/**
     * vertex buffer
     * @todo Get more information vertex buffer
     */
	const vertexPosBuffer =  gl.createBuffer()

	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
	const vertices: number[] = [-0.5, -0.5, 0.5, -0.5, 0, 0.5]

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
	const program = createProgram(VertexShader, FragmentShader, gl)
	gl.useProgram(program)
	const vertexPosAttrib = gl.getAttribLocation(program, 'pos')
	gl.enableVertexAttribArray(vertexPosAttrib)
	gl.vertexAttribPointer(vertexPosAttrib, 2, gl.FLOAT, false, 0, 0)
	gl.drawArrays(gl.TRIANGLES, 0,3)

})

