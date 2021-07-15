import { ExcelComponent } from '../../core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    })
  }

  toHTML() {
    return `
      <div class="button">
        <svg>
          <use xlink:href="#text-left"/>
        </svg>
      </div>

      <div class="button">
        <svg>
          <use xlink:href="#text-center"/>
        </svg>
      </div>

      <div class="button">
        <svg>
          <use xlink:href="#text-right"/>
        </svg>
      </div>

      <div class="button">
        <svg>
          <use xlink:href="#text-bold"/>
        </svg>
      </div>

      <div class="button">
        <svg>
          <use xlink:href="#text-italic"/>
        </svg>
      </div>

      <div class="button">
        <svg>
          <use xlink:href="#text-underline"/>
        </svg>
      </div>
    `
  }

  onClick(event) {
    console.log(event.target)
  }
}