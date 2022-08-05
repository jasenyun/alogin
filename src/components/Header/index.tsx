
import { Link } from 'react-router-dom';

export const Header = () => {
  const menus = [{ label: '首页', path: '/', key: 'key1' }, { label: 'Golang文章', path: '/article', key: 'key2' },
  { label: 'OAuth认证', path: '/oauth', key: 'key3' }, { label: 'home', path: '/home', key: 'key4' }, { label: 'blog', path: '/blog', key: 'key5' }]

  return (<div className='app'>
    <div className='Logo'></div>
    <nav>
      <ul>
        {menus.map(item => <li key={item.key}><Link to={item.path}>{item.label}</Link></li>)}
      </ul>
    </nav>
  </div>)

}
