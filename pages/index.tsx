import { useEffect } from 'react'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import cameraHands from '@/utils/camera-hands'

export default function Home() {
  useEffect(() => {
    cameraHands()
  }, [])

  return (
    <div>
      <Head>
        <title>Scroll vision</title>
        <meta name="description" content="Scroll sites using just your hands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <video id="input_video"></video>
        <canvas id="output_canvas" width="1280px" height="720px"></canvas>
        <div className="loading">
          <div className="spinner"></div>
          <div className="message">Loading</div>
        </div>
      </div>
      <div className={styles.controls} id="control-panel"></div>
    </div>
  )
}
