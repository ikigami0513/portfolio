from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProjectsListView.as_view(), name="projects_list_view"),
    path('<uuid:project_id>/', views.ProjectDetailView.as_view(), name='project_detail_view')
]
