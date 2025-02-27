from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.views import View
from base.models import Profile
from projects.models import TechnologyCategory, ProjectCategory


class ProjectsListView(View):
    def get(self, request: HttpRequest) -> HttpResponse:
        profile = Profile.objects.first()
        
        technologies = {}
        for category in TechnologyCategory.objects.all():
            technologies[category] = profile.technologies.filter(category=category)

        projects = {}
        for project_category in ProjectCategory.objects.all():
            projects[project_category] = profile.projects.filter(categories=project_category)

        return render(request, "projects/list.html", {
            "technologies": technologies,
            "projects": projects
        })
    