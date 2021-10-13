 // Disable +/- buttons outside selected range

 function handleEnableDisable(itemId) {
    let currentValue = parseInt($(`#id_qty_${itemId}`).val());

    let minusDisabled = currentValue < 2;
    let plusDisabled = currentValue > 5;

    $(`#decrement-qty_${itemId}`).prop('disabled', minusDisabled);
    $(`#increment-qty_${itemId}`).prop('disabled', plusDisabled);
}

// enabling/disabling inputs on page load
let allQtyInputs = $('.qty_input');
for(let i = 0; i < allQtyInputs.length; i++){
    let itemId = $(allQtyInputs[i]).data('item_id');
    handleEnableDisable(itemId);
}

// Check enable/disable when input is changed
$('.qty_input').change(function() {
    let itemId = $(this).data('item_id');
    handleEnableDisable(itemId);
});

// Increase quantity
$('.increase-qty').click(function(e) {
   e.preventDefault();
   let closestInput = $(this).closest('.input-group').find('.qty_input')[0];
   let currentValue = parseInt($(closestInput).val());
   $(closestInput).val(currentValue + 1);
   let itemId = $(this).data('item_id');
   handleEnableDisable(itemId);
});

// Decrease quantity
$('.decrease-qty').click(function(e) {
   e.preventDefault();
   let closestInput = $(this).closest('.input-group').find('.qty_input')[0];
   let currentValue = parseInt($(closestInput).val());
   $(closestInput).val(currentValue - 1);
   let itemId = $(this).data('item_id');
   handleEnableDisable(itemId);
});