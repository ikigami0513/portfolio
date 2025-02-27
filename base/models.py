import os
import uuid
from django.db import models
from django.core.validators import FileExtensionValidator
from projects.models import Technology, Project


def profile_picture_file_path(instance: 'Profile', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"profile/picture/{instance.id}.{uuid.uuid4()}{file_extension}")


def welcome_video_file_path(instance: 'Profile', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"profile/welcome_video/{instance.id}.{uuid.uuid4()}{file_extension}")


class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Personal informations
    picture = models.ImageField(upload_to=profile_picture_file_path, null=True, blank=True)
    welcome_video = models.FileField(upload_to=welcome_video_file_path, null=True, blank=True, validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    email = models.EmailField()

    # Social network
    github = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    discord = models.URLField(null=True, blank=True)
    twitter = models.URLField(null=True, blank=True)

    # Cv
    projects = models.ManyToManyField(Project, blank=True)
    technologies = models.ManyToManyField(Technology, blank=True)

    def __str__(self) -> str:
        return self.full_name()

    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"
    