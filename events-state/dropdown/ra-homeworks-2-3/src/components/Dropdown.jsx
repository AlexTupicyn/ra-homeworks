import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const DropdownItem = ({ children, isSelected, onClick }) => {
    return (
        <div 
            className={`dropdown-item ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

const DropdownList = ({ items, selectedItem, onItemClick }) => {
    return (
        <div className="dropdown-list">
            {items.map((item, index) => (
                <DropdownItem
                    key={index}
                    isSelected={item === selectedItem}
                    onClick={() => onItemClick(item)}
                >
                    {item}
                </DropdownItem>
            ))}
        </div>
    );
};

const Dropdown = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const dropdownRef = useRef(null);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside) };
    }, []);

    return (
        <div className={`dropdown-container ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedItem || 'Account Settings'}
            </button>
            <DropdownList
                items={items}
                selectedItem={selectedItem}
                onItemClick={handleItemClick}
            />
        </div>
    );
};

export default Dropdown;
