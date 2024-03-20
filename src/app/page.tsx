import React from 'react'
import stylex from '@stylexjs/stylex'

const styles = stylex.create({
  base: {
    fontSize: '4rem',
    color: 'red',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
})

export default function Page() {
  return <div {...stylex.props(styles.base)}>Hello NextJS!</div>
}
