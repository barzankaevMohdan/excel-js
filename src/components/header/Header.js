import { ExcelComponent } from '../../core/ExcelComponent'
import { $ } from '@core/dom'
import { changeTitle } from '../../redux/actions'
import {debounce} from '../../core/utils'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title
    return `
      <input class="excel__header-input" type="text" value="${title}">
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

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}