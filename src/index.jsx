import {
  getSavedData
} from './utilities/helper.js'

import { h, Component, render } from 'preact'

class Code {
  constructor (customOptions) {
    const defaultOptions = {
      i18n: {
        locale: 'en-US',
        rtl: 'ltr',
        translations: {

        }
      },
      controllers: [

      ]
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  render (i18n, savedData) {
    const blockContainer = document.createElement('div')
    blockContainer.classList.add('freedom-editor-blocks', `${this.constructor.name}-block`)
    blockContainer.dataset.blockType = this.constructor.name

    render(<pre>
      <code contenteditable>{getSavedData(savedData)}</code>
    </pre>, blockContainer)

    return blockContainer
  }

  save (block) {
    const codeField = block.querySelector('code')
    if (codeField.textContent === '') {
      return
    }
    return {
      type: this.constructor.name,
      data: {
        code: codeField.textContent
      }
    }
  }
}

module.exports = {
  Code
}
