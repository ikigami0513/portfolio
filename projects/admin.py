from django.contrib import admin
from django.utils.html import format_html
from django.utils.translation import gettext as _
from ordered_model.admin import OrderedModelAdmin
from .models import TechnologyCategory, Technology, Project


# region Technology Admin
@admin.register(TechnologyCategory)
class TechnologyCategoryAdmin(OrderedModelAdmin):
    list_display = ["name", "move_up_down_links"]


@admin.register(Technology)
class TechnologyAdmin(OrderedModelAdmin):
    list_display = ["name", "get_logo", "move_up_down_links"]
    list_filter = ["category"]

    def get_logo(self, obj):
        if obj.logo:
            return format_html("""
                <img src="{}" height="50" style="border-radius: 5px;"/>
            """, obj.logo.url)
        return "Pas d'image"
    
    get_logo.short_description = _("Logo")
# endregion Technology Admin


# region Project Admin
@admin.register(Project)
class ProjectAdmin(OrderedModelAdmin):
    list_display = ["name", "move_up_down_links"]
# endregion Project Admin
