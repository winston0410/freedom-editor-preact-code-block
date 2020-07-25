# Freedom Editor Preact Code Block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Maintainability](https://api.codeclimate.com/v1/badges/00f1edf8bd3168a6da09/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-preact-code-block/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-preact-code-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-preact-code-block?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dda5900eec4742ad92066df32044f450)](https://www.codacy.com/manual/winston0410/freedom-editor-preact-code-block?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=winston0410/freedom-editor-preact-code-block&amp;utm_campaign=Badge_Grade)

A code block built with [Reef](https://github.com/cferdinandi/reef) for Freedom Editor.

## Installation

```
npm i @freedom-editor/preact-code-block
```

## Usage

Import this block to the script where you config Freedom Editor. Create a new instance.

```
import { Code } from '@freedom-editor/preact-code-block'

const codeBlock = new Code()
```

### Register paragraph block in Freedom Editor instance

Register this block in `options.registeredBlocks`.

```
registeredBlocks: [
  codeBlock
]
```

## API Reference

TODO

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.
