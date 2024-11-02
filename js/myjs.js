function submitForm() {
    const form = document.getElementById('booking-form');
    const destination = form.destination.value;
    const persons = form.persons.value;
    const startDate = form['start-date'].value;
    const endDate = form['end-date'].value;
    const description = form.description.value;

    if (destination && persons && startDate && endDate && description.length >= 50 && description.length <= 500) {
        alert('Booking successful');
    } else {
        alert('Please fill all the fields correctly.');
    }
}
        // To set proper date
        
        document.addEventListener('DOMContentLoaded', function() {
        const startDateInput = document.getElementById('start-date');
        const endDateInput = document.getElementById('end-date');
    
        // Set the minimum date for the start date to today
        const today = new Date().toISOString().split('T')[0];
        startDateInput.setAttribute('min', today);
    
        // Event listener for start date changes
        startDateInput.addEventListener('change', function() {
            const startDate = new Date(startDateInput.value);
            const minEndDate = new Date(startDate);
            minEndDate.setDate(minEndDate.getDate() + 1); // Ensure end date is at least one day after start date
            endDateInput.setAttribute('min', minEndDate.toISOString().split('T')[0]);
        });
    
        // Event listener for end date changes
        endDateInput.addEventListener('change', function() {
            const startDate = new Date(startDateInput.value);
            const endDate = new Date(endDateInput.value);
            if (endDate <= startDate) {
                alert('End date must be later than start date.');
                endDateInput.value = ''; // Clear the invalid end date
            }
        });
    });

    


    