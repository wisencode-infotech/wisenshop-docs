import React, { useState } from 'react';

const Tree = ({ nodes }) => {
  // Function to initialize expanded state for all nodes to true (expanded)
  const initializeExpandedNodes = (nodes) => {
    const expanded = {};
    const setExpandedRecursively = (nodes) => {
      nodes.forEach((node, index) => {
        const nodeId = `${node.label}-${index}`;
        expanded[nodeId] = true;  // Set all nodes to true (expanded) by default
        if (node.children) {
          setExpandedRecursively(node.children); // Recurse for children
        }
      });
    };

    setExpandedRecursively(nodes);
    return expanded;
  };

  // Initialize the state with all nodes expanded by default
  const [expandedNodes, setExpandedNodes] = useState(initializeExpandedNodes(nodes));

  const handleToggle = (nodeId) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId], // Toggle the expanded/collapsed state of the clicked node
    }));
  };

  const renderTree = (nodes, level = 0) => {
    return nodes.map((node, index) => {
      const nodeId = `${node.label}-${index}`;
      const isExpanded = expandedNodes[nodeId]; // Checks whether the node is expanded or not
      const hasChildren = node.children && node.children.length > 0;

      return (
        <div key={nodeId} className="node text-sm text-gray-900 dark:text-gray-200">
          <div
            className={`node-header flex items-center cursor-pointer p-1 rounded-md hover:bg-theme.accent dark:hover:bg-theme.darkBackground transition-colors ${level > 0 ? 'pl-4' : ''}`}
            onClick={() => hasChildren && handleToggle(nodeId)} // Toggle expand/collapse
          >
            {/* Show collapsible icon only if the node has children */}
            {hasChildren ? (
              <i
                className={`fas ${
                  isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'
                } mr-3 text-gray-400 dark:text-gray-200 transition-transform duration-200`}
              />
            ) : (
              // Display dot/circle for nodes without children
              <i className="fa-regular fa-circle mr-3 text-gray-400 dark:text-gray-200" />
            )}

            <i
              className={`${node.icon} mr-3 text-gray-900 dark:text-gray-200`}
            />
            <span className="text-theme.lightText dark:text-theme.lightText">{node.label}</span>
          </div>
          {/* Show child nodes if expanded */}
          {hasChildren && isExpanded && (
            <div className="children ml-6 border-l-2 border-theme.lightBorder dark:border-theme.darkBorder pl-4 mt-1">
              {renderTree(node.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="bg-theme.lightBackground dark:bg-theme.darkBackground rounded-lg shadow-sm p-4 border border-theme.lightBorder dark:border-theme.darkBorder w-full max-w-full">
      <div className="tree-structure">{renderTree(nodes)}</div>
    </div>
  );
};

export default Tree;