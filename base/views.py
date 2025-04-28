from django.shortcuts import render
from django.views import View
from django.http import HttpRequest, HttpResponse
from projects.models import TechnologyCategory
from base.models import Profile


class IndexView(View):
    def get(self, request: HttpRequest) -> HttpResponse:
        technologies = TechnologyCategory.get_from_profile(Profile.objects.first())
        return render(request, "index.html", {
            "technologies": technologies
        })
    