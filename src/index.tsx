import React from 'react'
import ReactDom from 'react-dom'
// import { gray2, gray } from "Styles/colors";
// import Content, { IContentProps } from "./content";
// import Flex from "Common/flex";
// import Icon from "Common/icon";
// import Show from "./show";
// import Provider from "./reducer";
// interface IMenuList {
//   [index: string]: boolean;
// }

interface IMDProps {
  width?: number
  height?: number
}

export default function ReactMD(props: IMDProps) {
  const { width, height } = props // // 控制菜单某一项的显隐
  // const [menuList, setMenuList] = useState<IMenuList>({
  //   header: false,
  // });

  return <div style={{ width, height }}>sds</div>

  // function renderMenu() {
  //   return React.createElement(
  //     'div',
  //     {
  //       className: 'jsx-4106692199' + ' ' + 'wrap',
  //     },
  //     React.createElement('span', {
  //       title: 'header',
  //       onMouseEnter: () => setMenuList({ ...menuList, header: true }),
  //       onMouseLeave: () => setMenuList({ ...menuList, header: false }),
  //       className: 'jsx-4106692199' + ' ' + 'button',
  //     }),
  //     React.createElement(
  //       _JSXStyle,
  //       {
  //         id: '4106692199',
  //       },
  //       '.wrap.jsx-4106692199{padding:0 10px;line-height:38px;border-bottom:1px solid green;background-color:blue;}'
  //     )
  //   )
  // }
}

ReactMD.defaultProps = {
  width: 800,
  height: 500,
}

ReactDom.render(<ReactMD />, document.getElementById('app'))
