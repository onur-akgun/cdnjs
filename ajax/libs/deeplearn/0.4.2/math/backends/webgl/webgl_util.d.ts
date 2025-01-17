export interface WebGLContextAttributes {
    alpha?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    depth?: boolean;
    stencil?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
}
export interface WebGLLoseContextExtension {
    loseContext(): void;
}
export declare function createWebGLRenderingContext(attributes: WebGLContextAttributes): WebGLRenderingContext;
export declare function createWebGLRenderingContextFromCanvas(canvas: HTMLCanvasElement, attributes: WebGLContextAttributes): WebGLRenderingContext;
export declare function callAndCheck<T>(gl: WebGLRenderingContext, func: () => T): T;
export declare function enableDebugWebGLErrorChecking(enabled: boolean): void;
export declare function checkWebGLError(gl: WebGLRenderingContext): void;
export declare function getWebGLErrorMessage(gl: WebGLRenderingContext, status: number): string;
export declare function getExtensionOrThrow(gl: WebGLRenderingContext, extensionName: string): {};
export declare function createVertexShader(gl: WebGLRenderingContext, vertexShaderSource: string): WebGLShader;
export declare function createFragmentShader(gl: WebGLRenderingContext, fragmentShaderSource: string): WebGLShader;
export declare function createProgram(gl: WebGLRenderingContext): WebGLProgram;
export declare function linkProgram(gl: WebGLRenderingContext, program: WebGLProgram): void;
export declare function validateProgram(gl: WebGLRenderingContext, program: WebGLProgram): void;
export declare function createStaticVertexBuffer(gl: WebGLRenderingContext, data: Float32Array): WebGLBuffer;
export declare function createStaticIndexBuffer(gl: WebGLRenderingContext, data: Uint16Array): WebGLBuffer;
export declare function queryMaxTextureSize(gl: WebGLRenderingContext): number;
export declare function getChannelsPerTexture(): number;
export declare function createTexture(gl: WebGLRenderingContext): WebGLTexture;
export declare function validateTextureSize(gl: WebGLRenderingContext, width: number, height: number): void;
export declare function createFramebuffer(gl: WebGLRenderingContext): WebGLFramebuffer;
export declare function bindVertexBufferToProgramAttribute(gl: WebGLRenderingContext, program: WebGLProgram, attribute: string, buffer: WebGLBuffer, arrayEntriesPerItem: number, itemStrideInBytes: number, itemOffsetInBytes: number, attribLocations?: {
    [name: string]: number;
}): void;
export declare function bindTextureUnit(gl: WebGLRenderingContext, texture: WebGLTexture, textureUnit: number): void;
export declare function unbindTextureUnit(gl: WebGLRenderingContext, textureUnit: number): void;
export declare function getProgramUniformLocationOrThrow(gl: WebGLRenderingContext, program: WebGLProgram, uniformName: string): WebGLUniformLocation;
export declare function bindTextureToProgramUniformSampler(gl: WebGLRenderingContext, program: WebGLProgram, texture: WebGLTexture, uniformSamplerLocation: WebGLUniformLocation, textureUnit: number): void;
export declare function bindCanvasToFramebuffer(gl: WebGLRenderingContext): void;
export declare function bindColorTextureToFramebuffer(gl: WebGLRenderingContext, texture: WebGLTexture, framebuffer: WebGLFramebuffer): void;
export declare function unbindColorTextureFromFramebuffer(gl: WebGLRenderingContext, framebuffer: WebGLFramebuffer): void;
export declare function validateFramebuffer(gl: WebGLRenderingContext): void;
export declare function getFramebufferErrorMessage(gl: WebGLRenderingContext, status: number): string;
export declare function getTextureShapeFromLogicalShape(gl: WebGLRenderingContext, logShape: number[]): [number, number];
