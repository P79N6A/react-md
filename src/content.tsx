import React, { useContext } from 'react'

import { gray2 } from 'Styles/colors'

import { Context } from './reducer'

import { IProps } from './index'

export interface IContentProps extends Pick<IProps, 'defaultValue'> {
  onChange?: (param?: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Content(props: IContentProps) {
  const { defaultValue, onChange } = props
  const { state, dispatch } = useContext(Context)
  return (
    <section>
      <textarea
        name=""
        className="input"
        id="textarea"
        wrap="hard"
        onChange={handleChange}
        value={
          state.value === '请输入内容' && defaultValue
            ? defaultValue
            : state.value
        }
      />
      <style jsx>{`
        section {
          width: 50%;
          height: 100%;
        }
        textarea {
          width: 100%;
          height: 100%;
          border: none;
          border-right: 1px solid ${gray2};
          outline: 0;
          resize: none;
        }
      `}</style>
    </section>
  )

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (onChange && typeof onChange === 'function') {
      onChange(e)
    }
    dispatch({ type: 'change', text: e.target.value })
  }
}
