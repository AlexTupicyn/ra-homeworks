import { useState } from 'react';


function Collapse({ collapsedLabel = "Развернуть", expandedLabel = "Свернуть", children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <button 
        className="collapse-button"
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
      >
        {isCollapsed ? collapsedLabel : expandedLabel}
      </button>
      
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="collapse-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
