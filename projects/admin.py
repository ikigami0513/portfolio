from django.contrib import admin
from ordered_model.admin import OrderedModelAdmin
from .models import TechnologyCategory, Technology, Project


# region Technology Admin
@admin.register(TechnologyCategory)
class TechnologyCategory(OrderedModelAdmin):
    list_display = ["name", "move_up_down_links"]


@admin.register(Technology)
class Technology(admin.ModelAdmin):
    list_display = ["name"]
# endregion Technology Admin


# region Project Admin
@admin.register(Project)
class ProjectCategory(OrderedModelAdmin):
    list_display = ["name", "move_up_down_links"]
# endregion Project Admin
