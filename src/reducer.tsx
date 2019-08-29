import React, { useReducer, createContext } from 'react'

interface IProps {
  children: React.ReactChild[] | React.ReactChild
}
interface IState {
  value: string
}
interface IAction {
  type: string
  text: string
}
interface IContext {
  state: IState
  dispatch(param: IAction): void
}

const initialState: IState = {
  value: '请输入内容',
}

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
})

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'change':
      return { ...state, value: action.text }
    default:
      return { ...state }
  }
}

export default function Provider(props: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}
