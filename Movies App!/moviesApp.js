$(document).ready(function() {
    // Handle form submission
    $('#itemForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Capture the input values using const since they won't be reassigned
        const title = $('#title').val();
        const rating = $('#rating').val();

        // Append the title and rating to the DOM
        $('#itemsList').append(`<li>${title} - Rating: ${rating} <button class="removeBtn">Remove</button></li>`);

        // Clear the form inputs
        $('#title').val('');
        $('#rating').val('');
    });

    // Use events to handle clicks on remove buttons
    $('#itemsList').on('click', '.removeBtn', function() {
        // Remove the parent li element of the clicked remove button
        $(this).parent().remove();
    });
});
