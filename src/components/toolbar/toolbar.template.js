function toButton(button) {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
  `
  return `
    <div 
      class="button ${button.active ? 'active' : ''}"
      ${meta}
    >
      <svg ${meta}>
        <use ${meta} xlink:href="#text-${button.icon}"/>
      </svg>
    </div>
  `
}

export function createToolbar(s) {
  const buttons = [
    {
      value: {textAlign: 'left'},
      icon: 'left',
      active: s['textAlign'] === 'left'
    },
    {
      value: {textAlign: 'center'},
      icon: 'center',
      active: s['textAlign'] === 'center'
    },
    {
      value: {textAlign: 'right'},
      icon: 'right',
      active: s['textAlign'] === 'right'
    },
    {
      value: {fontWeight: s['fontWeight'] === 'bold' ? 'normal' : 'bold'},
      icon: 'bold',
      active: s['fontWeight'] === 'bold'
    },
    {
      value: {
        textDecoration: s['textDecoration'] === 'underline'
          ? 'none'
          : 'underline'
      },
      icon: 'underline',
      active: s['textDecoration'] === 'underline'
    },
    {
      value: {fontStyle: s['fontStyle'] === 'italic' ? 'normal' : 'italic'},
      icon: 'italic',
      active: s['fontStyle'] === 'italic'
    }
  ]
  return buttons.map(toButton).join('')
}
