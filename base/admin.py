from django.contrib import admin
from .models import Profile


admin.site.site_title = Profile.objects.first().full_name()
admin.site.site_header = Profile.objects.first().full_name()


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["last_name", "first_name", "email"]
    fieldsets = [
        [
            None,
            {
                "fields": ["last_name", "first_name", "picture", "welcome_video", "description", "email"]
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
                "fields": ["projects", "technologies"]
            }
        ]
    ]
