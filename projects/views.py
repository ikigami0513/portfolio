import uuid
from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.views import View
from base.models import Profile
from projects.models import TechnologyCategory, ProjectCategory, Project


class ProjectsListView(View):
    def get(self, request: HttpRequest) -> HttpResponse:
        profile = Profile.objects.first()
        
        technologies = TechnologyCategory.get_from_profile(Profile.objects.first())

        projects = {}
        for project_category in ProjectCategory.objects.all():
            projects[project_category] = profile.projects.filter(categories=project_category)

        return render(request, "projects/list.html", {
            "technologies": technologies,
            "projects": projects
        })
    

class ProjectDetailView(View):
    def get(self, request: HttpRequest, project_id: uuid.UUID):
        project = Project.objects.get(id=project_id)
        return render(request, "projects/detail.html", context={
            "project": project
        })
