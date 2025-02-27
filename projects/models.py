import os
import uuid
from django.db import models
from ordered_model.models import OrderedModel
from django.utils.translation import gettext as _
from django_ckeditor_5.fields import CKEditor5Field


# region Technology
class TechnologyCategory(OrderedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50, unique=True)

    class Meta(OrderedModel.Meta):
        verbose_name = _("technologies category")
        verbose_name_plural = _("technologies categories")

    def __str__(self) -> str:
        return self.name


def technology_logo_file_path(instance: 'Technology', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"technology/logo/{instance.id}.{uuid.uuid4()}{file_extension}")


class Technology(OrderedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    logo = models.ImageField(upload_to=technology_logo_file_path)
    website = models.URLField(null=True, blank=True)
    category = models.ForeignKey(TechnologyCategory, null=True, blank=True, on_delete=models.SET_NULL)

    class Meta(OrderedModel.Meta):
        verbose_name = _("technology")
        verbose_name_plural = _("technologies")

    def __str__(self) -> str:
        return self.name
# endregion


# region Project
def project_header_picture_file_path(instance: 'Technology', filename: str):
    _, file_extension = os.path.splitext(filename)
    return os.path.join(f"technology/logo/{instance.id}.{uuid.uuid4()}{file_extension}")


class ProjectCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    header_picture = models.ImageField(upload_to=project_header_picture_file_path, null=True, blank=True)
    technologies = models.ManyToManyField(Technology, blank=True)
    page = CKEditor5Field(config_name='extends', null=True, blank=True)
    github_link = models.URLField(null=True, blank=True)
    categories = models.ManyToManyField(ProjectCategory, blank=True)

    class Meta:
        verbose_name = _("project")
        verbose_name_plural = _("projects")

    def __str__(self) -> str:
        return self.name
# endregion Project
