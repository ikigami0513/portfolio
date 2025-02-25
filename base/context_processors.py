from django.http import HttpRequest
from .models import Profile

def add_profile_to_request(request: HttpRequest) -> dict[str, Profile]:
    return {
        "profile": Profile.objects.first()
    }