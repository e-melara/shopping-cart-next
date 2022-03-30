import { FC } from 'react'
import { Slide } from 'react-slideshow-image'

import styles from './ProductSliderShow.module.css'

interface Props {
  images: string[]
}

export const ProductSliderShow: FC<Props> = ({
  images
}) => {
  return (
    <Slide
      easing='ease'
      duration={70000}
      indicators
    >
      {
        images.map((image) => {
          const url = `/products/${image}`
          return (
            <div key={url} className={styles.slider}>
              <div style={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
              }}></div>
            </div>
          )
        })
      }
    </Slide>
  )
}

