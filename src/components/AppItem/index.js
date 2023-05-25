import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem

  return (
    <li className="list">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
