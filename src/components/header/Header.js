import { ExcelComponent } from '../../core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
      <input class="excel__header-input" type="text" value="Новая таблица">

      <div>
      
        <div class="button">
          <svg>
            <use xlink:href="#delete"/>
          </svg>
        </div>

        <div class="button">
          <svg>
            <use xlink:href="#exit"/>
          </svg>
        </div>

      </div>
    `
  }
}