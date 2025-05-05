from django.contrib import admin
from .models import Profile


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["last_name", "first_name", "email"]
    fieldsets = [
        [
            None,
            {
                "fields": ["last_name", "first_name", "picture", "welcome_video", "description", "email", "phone_number"]
            }
        ],
        [
            "Social Network",
            {
                "fields": ["github", "linkedin", "discord", "twitter"]
            }
        ],
        [
            "Curriculum vitæ",
            {
                "fields": ["projects", "technologies", "schools", "jobs"]
            }
        ],
        [
            "Legal",
            {
                "fields": ["privacy_policy"]
            }
        ]
    ]
