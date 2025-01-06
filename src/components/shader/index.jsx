import { useRef, useEffect } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error("WebGL not supported!");
      return;
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5; // Normalize UV coordinates
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 v_uv;

      uniform vec2 iResolution;  // Resolution of the canvas
      uniform float iTime;       // Time elapsed

      // Main Shader Function
      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

        // Apply some distortion effects to the UVs based on time and position
        for(float i = 1.0; i < 10.0; i++){
            uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
            uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
        }
        
        // Set the color output, adding a pink hue (instead of white)
vec3 color = vec3(0.5, 0.0, 0.8); // Violet color
        fragColor = vec4(color / abs(sin(iTime - uv.y - uv.x)), 1.0);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    // Create shaders
    const createShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Error compiling shader: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
      }
      return shader;
    };

    const vertexShader = createShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    // Create and link program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Error linking program: " + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    // Set up vertex data
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "a_position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    // Set up uniforms
    const iResolution = gl.getUniformLocation(program, "iResolution");
    const iTime = gl.getUniformLocation(program, "iTime");

    // Set initial values for uniforms
    gl.uniform2f(iResolution, canvas.width, canvas.height);
    let time = 0;

    // Animation loop
    const render = () => {
      time += 0.01;
      gl.uniform1f(iTime, time);  // Pass time to shader
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };

    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '98.75vw',
        height: '130vh',
        zIndex: -1,  // Ensure it is behind other content
       
      }}
      className='md:h-[50vh] lg:h-[130vh]'
    />
  );
};

export default ShaderBackground;
