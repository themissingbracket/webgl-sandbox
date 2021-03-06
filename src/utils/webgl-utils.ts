export const createProgram = (vertexShader: string, fragmentShader: string, context: WebGL2RenderingContext): WebGLProgram => {
	const program = context.createProgram() as WebGLProgram
	const vsShader = createShader(vertexShader, context.VERTEX_SHADER, context)
	const fsShader = createShader(fragmentShader, context.FRAGMENT_SHADER, context)
	context.attachShader(program, vsShader)
	context.attachShader(program, fsShader)
	context.linkProgram(program)
	if (!context.getProgramParameter(program, context.LINK_STATUS)) {
		throw context.getProgramInfoLog(program);
	}
	return program
}

export const createShader = (shaderStr: string, type: number ,context: WebGL2RenderingContext): WebGLShader => {
	const shader = context.createShader(type) as WebGLShader
	context.shaderSource(shader, shaderStr)
	context.compileShader(shader)
	if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
		throw context.getShaderInfoLog(shader);
	}
	return shader
}
