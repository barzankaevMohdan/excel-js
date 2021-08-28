import { Page } from '../core/Page'
import { $ } from '../core/dom.js'
import {createRecordsTable} from './dashboard.functions'

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString()
    return $.create('div', 'db').html(`
      <div class="db__header">
        <h1>Excel Панель Управления</h1>
      </div>

      <div class="db__new">
        <div class="db__view">
          <a class="db__create" href="#excel/${now}">
            Новая <br> таблица
          </a>
        </div>
      </div>

      <div class="db__table db__view">
        ${createRecordsTable()}
      </div>
    `)
  }
}