import React, { useContext, useEffect } from 'react'
import marked from 'marked'

import { Context } from './reducer'

import { IProps } from './index'

// interface IShowProps extends Pick<IProps, 'defaultValue'> {}

export default function Show(props: Pick<IProps, 'defaultValue'>) {
  const { defaultValue } = props
  const { state } = useContext(Context)

  useEffect(() => {
    marked.setOptions({
      // 任何相对链接的前缀URL。
      baseUrl: undefined,
      // 如果为真，则在单个换行符上添加<br>（复制github）。要求gfm为真。
      breaks: true,
      // 如果是，请使用经批准的Github风味降价（GFM）规范。
      gfm: true,
      // 如果TRUE，包括安ID属性时发生headings（H1，H2，H3，等）。
      headerIds: true,
      // 在发出标题（h1、h2、h3等）时用作id属性前缀的字符串。
      headerPrefix: '',
      // 在<代码>块中前缀类名的字符串。用于突出显示语法。
      // highlight: function(code) {
      //   return require('highlight.js').highlightAuto(code).value
      // },
      langPrefix: 'language-',
      // 如果为真，自动链接的电子邮件地址将使用HTML字符引用转义。
      mangle: true,
      // 如果为真，则尽可能符合原始markdown.pl。不要修复原始的降价错误或行为。关闭并覆盖gfm。
      pedantic: false,
      // 包含将标记呈现为HTML的函数的对象。有关详细信息，请参阅扩展性。
      renderer: new marked.Renderer(),
      // 如果为true，则使用sanitizer函数对传递到markdownstring的HTML进行清理。
      sanitize: false,
      sanitizer: undefined,
      // 如果为true，则分析器不会引发任何异常。
      silent: false,
      // 如果为真，请使用比markdown.pl中更智能的列表行为。
      smartLists: false,
      // 如果为真，请对引号和破折号等内容使用“智能”字体标点。
      smartypants: false,
      // 如果true和gfm为true，则使用gfm表扩展。
      tables: true,
      // 如果TRUE，或自我闭幕HTML标记无效的元素（>，< IMG / >等）需要一个“/”作为由XHTML。
      xhtml: true,
    })
  }, [])

  // return <div>{renderContent()}</div>
  return <div dangerouslySetInnerHTML={{ __html: renderContent() }} />
  function renderContent() {
    const val =
      state.value === '请输入内容' && defaultValue ? defaultValue : state.value
    return marked(val)
  }
}
