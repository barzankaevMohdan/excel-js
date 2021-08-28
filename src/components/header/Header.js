import { ExcelComponent } from '../../core/ExcelComponent'
import { $ } from '@core/dom'
import { changeTitle } from '../../redux/actions'
import {debounce} from '../../core/utils'
import { ActiveRoute } from '../../core/routes/ActiveRoute'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
      
        <div class="button" data-button="remove">
          <svg data-button="remove">
            <use xlink:href="#delete" data-button="remove"/>
          </svg>
        </div>
        <div class="button" data-button="exit">
          <svg data-button="exit">
            <use xlink:href="#exit" data-button="exit"/>
          </svg>
        </div>
      </div>
    `
  }

  onClick(event) {
    const target = $(event.target)
    if (target.data.button === 'remove') {
      const decision = confirm('Вы действительно хотите удалить эту таблицу?')
      if (decision) {
        localStorage.removeItem('excel:' + ActiveRoute.param)
        ActiveRoute.navigate('')
      }
    } else if (target.data.button === 'exit') {
      ActiveRoute.navigate('')
    }
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}