// Inventory management functions

/**
 * Adds an item to the inventory.
 * @param {Object} inventory - The inventory array.
 * @param {Object} item - The item to add.
 */
function addItem(inventory, item) {
    inventory.push(item);
}

/**
 * Removes an item from the inventory by ID.
 * @param {Object} inventory - The inventory array.
 * @param {string} itemId - The ID of the item to remove.
 */
function removeItem(inventory, itemId) {
    const index = inventory.findIndex(item => item.id === itemId);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

/**
 * Gets an item from the inventory by ID.
 * @param {Object} inventory - The inventory array.
 * @param {string} itemId - The ID of the item to find.
 * @returns {Object|null} - The found item or null if not found.
 */
function getItem(inventory, itemId) {
    return inventory.find(item => item.id === itemId) || null;
}

/**
 * Lists all items in the inventory.
 * @param {Object} inventory - The inventory array.
 * @returns {Array} - The array of all items.
 */
function listItems(inventory) {
    return inventory;
}

// Exporting functions for use in other modules
module.exports = { addItem, removeItem, getItem, listItems };