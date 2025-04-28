from django.shortcuts import render
from django.db import models
from django.http import HttpRequest, HttpResponse
from django.views import View
from base.models import Profile
from .models import School, Job


class CareerListView(View):
    def get(self, request: HttpRequest) -> HttpResponse:
        profile = Profile.objects.first()
        schools = profile.schools
        jobs = profile.jobs
        return render(request, "career/index.html", {
            "schools": schools,
            "jobs": jobs
        })
    