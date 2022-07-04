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

      <div className={styles.content} id="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor
          sodales tempus. Sed ante libero, scelerisque a pulvinar non, mattis eu
          nibh. Donec bibendum euismod lorem quis laoreet. Aenean elit leo,
          pretium vel condimentum quis, porta vel lorem. Suspendisse cursus ante
          sed purus hendrerit, in porta mauris vehicula. Duis quis egestas
          ipsum, quis porta neque. Curabitur vulputate felis ac ex iaculis
          facilisis. Fusce euismod, velit ut interdum vehicula, massa ligula
          vehicula mi, in ultricies ex nulla sit amet tellus. Suspendisse
          porttitor tellus velit, id vestibulum dolor pharetra at. Nullam tempor
          mi aliquam neque rhoncus feugiat. Suspendisse id cursus velit, ac
          cursus urna. Donec ut placerat lectus. Fusce sit amet malesuada
          turpis, et posuere est. In ut congue tortor, id aliquet sapien.
        </p>
        <p>
          Suspendisse dolor ante, finibus at euismod quis, porttitor et nulla.
          In erat eros, tempus a facilisis sed, faucibus consequat est. Mauris
          venenatis enim ut ante molestie, feugiat convallis libero eleifend.
          Praesent sodales, ligula tempus fringilla iaculis, elit ex posuere
          lorem, ut lacinia turpis ex et orci. Proin varius mauris quam, sit
          amet rutrum ante dictum sed. Sed non metus sed dolor suscipit
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam ac gravida sem. Suspendisse potenti.
        </p>
        <p>
          Sed sit amet nisl sit amet lectus interdum iaculis. Proin at dolor id
          lacus rutrum suscipit. Integer vehicula urna at enim viverra
          fermentum. Pellentesque nec consectetur ipsum, eget accumsan est.
          Donec turpis risus, posuere in euismod sed, maximus a felis. Nam
          aliquet sit amet tellus vitae suscipit. Nullam varius massa id ex
          sagittis, eget pellentesque neque rhoncus. Nunc a mollis erat, sit
          amet tincidunt dui. Pellentesque tincidunt lorem ac justo aliquet
          faucibus. In hendrerit ornare mauris, in vulputate ipsum.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor
          sodales tempus. Sed ante libero, scelerisque a pulvinar non, mattis eu
          nibh. Donec bibendum euismod lorem quis laoreet. Aenean elit leo,
          pretium vel condimentum quis, porta vel lorem. Suspendisse cursus ante
          sed purus hendrerit, in porta mauris vehicula. Duis quis egestas
          ipsum, quis porta neque. Curabitur vulputate felis ac ex iaculis
          facilisis. Fusce euismod, velit ut interdum vehicula, massa ligula
          vehicula mi, in ultricies ex nulla sit amet tellus. Suspendisse
          porttitor tellus velit, id vestibulum dolor pharetra at. Nullam tempor
          mi aliquam neque rhoncus feugiat. Suspendisse id cursus velit, ac
          cursus urna. Donec ut placerat lectus. Fusce sit amet malesuada
          turpis, et posuere est. In ut congue tortor, id aliquet sapien.
        </p>
        <p>
          Suspendisse dolor ante, finibus at euismod quis, porttitor et nulla.
          In erat eros, tempus a facilisis sed, faucibus consequat est. Mauris
          venenatis enim ut ante molestie, feugiat convallis libero eleifend.
          Praesent sodales, ligula tempus fringilla iaculis, elit ex posuere
          lorem, ut lacinia turpis ex et orci. Proin varius mauris quam, sit
          amet rutrum ante dictum sed. Sed non metus sed dolor suscipit
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam ac gravida sem. Suspendisse potenti.
        </p>
        <p>
          Sed sit amet nisl sit amet lectus interdum iaculis. Proin at dolor id
          lacus rutrum suscipit. Integer vehicula urna at enim viverra
          fermentum. Pellentesque nec consectetur ipsum, eget accumsan est.
          Donec turpis risus, posuere in euismod sed, maximus a felis. Nam
          aliquet sit amet tellus vitae suscipit. Nullam varius massa id ex
          sagittis, eget pellentesque neque rhoncus. Nunc a mollis erat, sit
          amet tincidunt dui. Pellentesque tincidunt lorem ac justo aliquet
          faucibus. In hendrerit ornare mauris, in vulputate ipsum.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
        <p>
          Etiam rhoncus congue magna, nec congue eros viverra quis. Vivamus ut
          erat erat. Donec hendrerit nunc fermentum turpis sollicitudin rhoncus.
          Fusce aliquet interdum hendrerit. Vivamus laoreet ligula at pretium
          aliquam. Praesent hendrerit lorem rutrum sem tempor semper. Integer
          lacinia felis nisi, sit amet hendrerit nunc suscipit in. Pellentesque
          molestie ultrices orci, interdum vehicula augue mollis quis. Nullam at
          sodales mauris.
        </p>
      </div>
    </div>
  )
}
