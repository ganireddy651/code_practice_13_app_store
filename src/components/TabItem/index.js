import './index.css'

const TabItem = props => {
  const {eachTab, onTabClick, isActive} = props
  const {tabId, displayText} = eachTab

  const activeTabStyles = isActive ? 'activeTab' : null

  const onTab = () => {
    onTabClick(tabId)
  }

  return (
    <li>
      <button
        onClick={onTab}
        className={`button ${activeTabStyles}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
