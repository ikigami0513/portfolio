from django.shortcuts import render
from django.views import View
from django.http import HttpRequest, HttpResponse


class PrivacyPolicyView(View):
    def get(self, request: HttpRequest) -> HttpResponse:
        return render(request, "privacy_policy.html")
    