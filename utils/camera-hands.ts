import DeviceDetector from 'device-detector-js'
import mpHands from '@mediapipe/hands'
import drawingUtils from '@mediapipe/drawing_utils'
import controls from '@mediapipe/control_utils'

function cameraHands() {
  testSupport([{ client: 'Chrome' }])

  function testSupport(supportedDevices: { client?: string; os?: string }[]) {
    const deviceDetector = new DeviceDetector()
    const detectedDevice = deviceDetector.parse(navigator.userAgent)

    let isSupported = false
    for (const device of supportedDevices) {
      if (device.client !== undefined) {
        const re = new RegExp(`^${device.client}$`)
        if (detectedDevice.client && !re.test(detectedDevice.client.name)) {
          continue
        }
      }
      if (device.os !== undefined) {
        const re = new RegExp(`^${device.os}$`)
        if (detectedDevice.os && !re.test(detectedDevice.os.name)) {
          continue
        }
      }
      isSupported = true
      break
    }
    if (!isSupported && detectedDevice.os && detectedDevice.client) {
      alert(
        `This demo, running on ${detectedDevice.client.name}/${detectedDevice.os.name}, is not well supported at this time, continue at your own risk.`
      )
    }
  }

  // Our input frames will come from here.
  const videoElement = document.getElementById(
    'input_video'
  ) as HTMLVideoElement
  const canvasElement = document.getElementById(
    'output_canvas'
  ) as HTMLCanvasElement
  const controlsElement = document.getElementById(
    'control-panel'
  ) as HTMLDivElement
  const canvasCtx = canvasElement.getContext('2d')!

  const config = {
    locateFile: (file: string) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${mpHands.VERSION}/${file}`
    },
  }

  // Optimization: Turn off animated spinner after its hiding animation is done.
  const spinner = document.querySelector('.loading')! as HTMLDivElement
  spinner.ontransitionend = () => {
    spinner.style.display = 'none'
  }

  function onResults(results: mpHands.Results): void {
    // Hide the spinner.
    document.body.classList.add('loaded')

    // Draw the overlays.
    canvasCtx.save()
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    )
    if (results.multiHandLandmarks && results.multiHandedness) {
      for (let index = 0; index < results.multiHandLandmarks.length; index++) {
        const classification = results.multiHandedness[index]
        const isRightHand = classification.label === 'Right'
        const landmarks = results.multiHandLandmarks[index]

        drawingUtils.drawConnectors(
          canvasCtx,
          landmarks,
          mpHands.HAND_CONNECTIONS,
          { color: '#6642f5' }
        )

        const thumb = landmarks[4]
        const indexFingerBottom = landmarks[5]
        const indexFingerTop = landmarks[6]

        const _1 = thumb
        const _2 = indexFingerBottom
        const _3 = indexFingerTop
        const area =
          (_1.x * _2.y +
            _2.x * _3.y +
            _3.x * _1.y -
            _1.x * _3.y -
            _2.x * _1.y -
            _3.x * _2.y) /
          2
        const areaF = area * 1000
        const contentElement = document.getElementById('content')
        if (contentElement) {
          const contentHeight =
            contentElement.getBoundingClientRect().height / 3

          const contentWidth = contentElement.getBoundingClientRect().width / 2

          const contentY =
            canvasElement.getBoundingClientRect().y +
            canvasElement.getBoundingClientRect().height * indexFingerBottom.y -
            contentHeight

          const contentX =
            canvasElement.getBoundingClientRect().x +
            canvasElement.getBoundingClientRect().width * indexFingerBottom.x -
            contentWidth

          contentElement.style.top = `${contentY}px`
          contentElement.style.left = `${contentX}px`
        }

        if (areaF < -16) {
          contentElement?.scrollBy(0, -10)
        } else if (areaF < -10) {
          contentElement?.scrollBy(0, -1)
        } else if (areaF > 8) {
          contentElement?.scrollBy(0, 10)
        } else if (areaF > 3) {
          contentElement?.scrollBy(0, 1)
        }

        drawingUtils.drawLandmarks(
          canvasCtx,
          [thumb, indexFingerBottom, indexFingerTop],
          {
            color: '#00FF00',
            fillColor: '#FF0000',
            radius: (data: drawingUtils.Data) => {
              return drawingUtils.lerp(data.from!.z!, -0.15, 0.1, 10, 1)
            },
          }
        )
      }
    }
    canvasCtx.restore()

    // remove video element
    const extraVideos = document.getElementsByClassName('inputs')
    if (extraVideos.length > 0) {
      const video = extraVideos[0] as HTMLElement
      video.style.display = 'none'
    }
  }

  const hands = new mpHands.Hands(config)
  hands.onResults(onResults)

  // Present a control panel through which the user can manipulate the solution
  // options.
  new controls.ControlPanel(controlsElement, {
    selfieMode: true,
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  })
    .add([
      new controls.Toggle({ title: 'Selfie Mode', field: 'selfieMode' }),
      new controls.SourcePicker({
        onFrame: async (
          input: controls.InputImage,
          size: controls.Rectangle
        ) => {
          const aspect = size.height / size.width
          let width: number, height: number
          if (window.innerWidth > window.innerHeight) {
            height = window.innerHeight
            width = height / aspect
          } else {
            width = window.innerWidth
            height = width * aspect
          }
          canvasElement.width = width
          canvasElement.height = height
          await hands.send({ image: input })
        },
      }),
      new controls.Slider({
        title: 'Max Number of Hands',
        field: 'maxNumHands',
        range: [1, 4],
        step: 1,
      }),
      new controls.Slider({
        title: 'Model Complexity',
        field: 'modelComplexity',
        discrete: ['Lite', 'Full'],
      }),
      new controls.Slider({
        title: 'Min Detection Confidence',
        field: 'minDetectionConfidence',
        range: [0, 1],
        step: 0.01,
      }),
      new controls.Slider({
        title: 'Min Tracking Confidence',
        field: 'minTrackingConfidence',
        range: [0, 1],
        step: 0.01,
      }),
    ])
    .on((x) => {
      const options = x as mpHands.Options
      videoElement.classList.toggle('selfie', options.selfieMode)
      hands.setOptions(options)
    })
}

export default cameraHands
