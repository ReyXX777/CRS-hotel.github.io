// Function to display AI-driven offers based on room occupancy
function showMapOffers() {
    // Simulate an AI-driven offer based on room availability
    const occupancyRate = Math.random() * 100; // Random occupancy percentage
    let offerMessage = '';

    if (occupancyRate < 80) {
        offerMessage = `AI Offer: Occupancy is low (${occupancyRate.toFixed(2)}%). Get 20% off on all rooms with ocean view!`;
    } else {
        offerMessage = 'AI Offer: Sorry, no special discounts available at the moment.';
    }

    document.getElementById('offer-result').textContent = offerMessage;
}

// Function to simulate dynamic pricing adjustments
function showDynamicPricing() {
    // Simulate pricing based on demand and occupancy
    const basePrice = 250;
    const demandFactor = Math.random(); // Simulate demand between 0 and 1
    const currentPrice = (basePrice + demandFactor * 100).toFixed(2); // Adjust price based on demand

    document.getElementById('pricing-result').textContent = `Current Price: $${currentPrice}/night (Dynamic rate applied)`;
}

// Function to simulate chat support
function contactSupport() {
    // Simulate the process of connecting to chat support
    alert('Connecting to chat support...');
}

// Function to simulate feedback collection
function collectFeedback() {
    // Simulate feedback submission
    const feedback = prompt('Please leave your feedback...');
    if (feedback) {
        alert('Thank you for your feedback!');
    } else {
        alert('Feedback submission canceled.');
    }
}

// Function to simulate social media sharing
function shareSocialMedia() {
    // Simulate sharing on social media platforms
    const shareMessage = 'Shared on social media successfully! Follow us on Instagram, Facebook, and Twitter.';
    alert(shareMessage);
}

// Function to display available rooms in the calendar section
function openCalendar() {
    // Simulate room availability
    const availableRooms = [
        { room: '101', status: 'Available' },
        { room: '202', status: 'Available' },
        { room: '303', status: 'Booked' },
    ];

    // Generate the room list dynamically
    let roomListHTML = '<p>Rooms Available:</p><ul>';
    availableRooms.forEach(room => {
        roomListHTML += `<li>Room ${room.room} - ${room.status}</li>`;
    });
    roomListHTML += '</ul>';

    document.getElementById('calendar-placeholder').innerHTML = roomListHTML;
}
