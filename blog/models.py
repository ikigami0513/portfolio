import uuid
from django.db import models
from django.utils import timezone
from django_ckeditor_5.fields import CKEditor5Field
from projects.models import Project
from base.models import Profile


class BlogPost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    content = CKEditor5Field(config_name='extends', default="")
    is_public = models.BooleanField(default=False)
    published_date = models.DateTimeField(default=timezone.now)
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True, default=True)
    projects = models.ManyToManyField(Project, blank=True)
