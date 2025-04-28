from django.urls import path
from . import views


urlpatterns = [
    path('', views.CareerListView.as_view(), name="career_view")
]
