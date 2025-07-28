import Collapse from './components/Collapse'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Компонент Collapse</h1>
      
      <div className="examples">
        <div className="example">
          <h2>Стандартные кнопки</h2>
          <Collapse>
            <p>Это содержимое компонента Collapse. Оно может быть скрыто или показано при нажатии на кнопку.</p>
            <p>Здесь может быть любой React-контент: текст, изображения, другие компоненты.</p>
          </Collapse>
        </div>
        
        <div className="example">
          <h2>Кастомные кнопки</h2>
          <Collapse 
            collapsedLabel="Показать детали" 
            expandedLabel="Скрыть детали"
          >
            <ul>
              <li>Элемент списка 1</li>
              <li>Элемент списка 2</li>
              <li>Элемент списка 3</li>
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default App
