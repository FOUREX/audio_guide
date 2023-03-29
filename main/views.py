from django.http import HttpRequest, HttpResponseNotFound
from django.shortcuts import redirect, render


def index(request: HttpRequest, *args, **kwargs):
    """Головна сторінка"""

    return render(request, "main/index.html")
