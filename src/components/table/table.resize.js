import { $ } from '@core/dom'

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  let valueCol = null
  let valueRow = null

  document.onmousemove = e => {
    console.log('mousemove')
    if (type === 'column') {
      const delta = e.pageX - coords.right
      valueCol = coords.width + delta
      $resizer.css({right: -delta + 'px'})
    } else {
      const delta = e.pageY - coords.bottom
      valueRow = coords.height + delta
      $resizer.css({bottom: -delta + 'px'})
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null

    if (type === 'column') {
      $parent.css({width: valueCol + 'px'})
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = valueCol + 'px')
      $resizer.css({right: 0})
    } else {
      $parent.css({height: valueRow + 'px'})
      $resizer.css({bottom: 0})
    }
  }
}