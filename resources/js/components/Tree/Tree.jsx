import React, { useState, useEffect, useRef } from 'react';

const Tree = ({ nodes }) => {
  const initializeExpandedNodes = (nodes) => {
    const expanded = {};
    const setExpandedRecursively = (nodes) => {
      nodes.forEach((node, index) => {
        const nodeId = `${node.label}-${index}`;
        expanded[nodeId] = true; // Set all nodes to true (expanded) by default
        if (node.children) {
          setExpandedRecursively(node.children); // Recurse for children
        }
      });
    };

    setExpandedRecursively(nodes);
    return expanded;
  };

  const [expandedNodes, setExpandedNodes] = useState(initializeExpandedNodes(nodes));
  const [showPopup, setShowPopup] = useState(null); // Track which node's popup should be shown
  const popupRef = useRef(null); // Ref for the popup container
  const treeContainerRef = useRef(null); // Ref for the tree container

  // Close the popup when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close popup only if clicked outside the popup and tree container
      if (
        treeContainerRef.current && !treeContainerRef.current.contains(event.target) &&
        popupRef.current && !popupRef.current.contains(event.target)
      ) {
        setShowPopup(null); // Close the popup if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = (nodeId) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const renderTree = (nodes, level = 0) => {
    return nodes.map((node, index) => {
      const nodeId = `${node.label}-${index}`;
      const isExpanded = expandedNodes[nodeId];
      const hasChildren = node.children && node.children.length > 0;

      return (
        <div key={nodeId} className="node text-sm text-gray-900 dark:text-gray-200">
          <div
            className={`node-header flex items-center cursor-pointer p-1 rounded-md hover:bg-theme.accent dark:hover:bg-theme.darkBackground transition-colors ${level > 0 ? 'pl-4' : ''}`}
            onClick={() => hasChildren && handleToggle(nodeId)}
          >
            {hasChildren ? (
              <i
                className={`fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} mr-3 text-gray-400 dark:text-gray-200 transition-transform duration-200`}
              />
            ) : (
              <i className="fa-regular fa-circle mr-3 text-gray-400 dark:text-gray-200" />
            )}

            <i className={`${node.icon} mr-3 text-gray-900 dark:text-gray-200`} />
            <span className="text-theme.lightText dark:text-theme.lightText">{node.label}</span>

            {/* If description exists, show info icon to toggle popup */}
            {node.description && (
              <i
                className="fa fa-info-circle ml-2 text-gray-500 dark:text-gray-300 hover:text-theme.accent transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from triggering the toggle function
                  setShowPopup(showPopup === nodeId ? null : nodeId); // Toggle popup visibility
                }}
              />
            )}
          </div>

          {/* Show child nodes if expanded */}
          {hasChildren && isExpanded && (
            <div className="children ml-6 border-l-2 border-theme.lightBorder dark:border-theme.darkBorder pl-4 mt-1">
              {renderTree(node.children, level + 1)}
            </div>
          )}

          {/* Popup description */}
          {showPopup === nodeId && node.description && (
            <div
              ref={popupRef}
              className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the popup itself
            >
              <div
                className="bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 p-4 rounded-md shadow-lg max-w-md w-auto relative"
                style={{ whiteSpace: 'pre-line' }} // Preserve white space in the description
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(null)} // Close popup on button click
                  className="absolute top-2 right-2 text-gray-500 dark:text-gray-200 hover:text-theme.accent dark:hover:text-theme.lightText"
                >
                  <i className="fa fa-times"></i>
                </button>

                {node.description}
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div ref={treeContainerRef} className="bg-theme.lightBackground dark:bg-theme.darkBackground rounded-lg shadow-sm p-4 border border-theme.lightBorder dark:border-theme.darkBorder w-full max-w-full relative">
      <div className="tree-structure">{renderTree(nodes)}</div>
    </div>
  );
};

export default Tree;