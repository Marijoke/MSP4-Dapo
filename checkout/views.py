from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51JkQlGB1eSV6O87OcUReIyV9WWQ5zjNXXzpVM5FCZg9qC7d8i5moroqlBPPORNrBPEgBtDpTrtsUPZYoc4fESi7b005DJwMm5T',
        'client_secret': 'sk_test_51JkQlGB1eSV6O87O8pMUgfI1KObJkVS7qOJtcPLFl0ZYRqo5UiHm8hU6qYjOJnvllOSDs50iLHBblEyhtfyscAkf00MpHBIeRl',
    }

    return render(request, template, context)
