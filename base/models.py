import os
import uuid
from django.db import models


def profile_picture_file_path(instance: 'Profile', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"profile/picture/{instance.id}.{uuid.uuid4()}{file_extension}")


class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    picture = models.ImageField(upload_to=profile_picture_file_path, null=True, blank=True)
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    email = models.EmailField()
    github = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    discord = models.URLField(null=True, blank=True)
    twitter = models.URLField(null=True, blank=True)

    def __str__(self) -> str:
        return self.full_name()

    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"
    