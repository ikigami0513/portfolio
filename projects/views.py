from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.views import View


class ProjectsListView(View):
    def get(self, request: HttpRequest) -> HttpResponse:
        return render(request, "projects/list.html")
    