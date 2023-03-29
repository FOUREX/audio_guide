from django.http import HttpRequest, HttpResponse, HttpResponseNotFound
from django.shortcuts import redirect, render


def index(request: HttpRequest, *args, **kwargs):
    return render(request, "main/index.html")
