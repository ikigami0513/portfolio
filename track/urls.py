from django.urls import path
from . import views


urlpatterns = [
    path('privacy_policy/', views.PrivacyPolicyView.as_view(), name="privacy_policy_view")
]
