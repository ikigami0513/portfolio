import os
import uuid
from django.db import models
from projects.models import Project, Technology


def school_header_picture_file_path(instance: 'School', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"career/schools/{instance.id}.{uuid.uuid4()}{file_extension}")


class School(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    degrees = models.CharField(max_length=500)
    city = models.CharField(max_length=255, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    start_year = models.IntegerField()
    end_year = models.IntegerField(null=True, blank=True)
    header_picture = models.ImageField(upload_to=school_header_picture_file_path, null=True, blank=True)
    projects = models.ManyToManyField(Project, blank=True)

    def __str__(self) -> str:
        return f"{self.name} - {self.degrees}"

    class Meta:
        ordering = ["start_year"]


def job_header_picture_file_path(instance: 'Job', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"career/jobs/{instance.id}.{uuid.uuid4()}{file_extension}")


class Job(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    header_picture = models.ImageField(upload_to=job_header_picture_file_path, null=True, blank=True)
    technologies = models.ManyToManyField(Technology, blank=True)

    def __str__(self) -> str:
        return f"{self.name} - {self.company}"
