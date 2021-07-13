import { ExcelComponent } from '../../core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

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
}