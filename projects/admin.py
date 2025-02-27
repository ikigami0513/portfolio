from django.contrib import admin
from django.utils.html import format_html
from django.utils.translation import gettext as _
from ordered_model.admin import OrderedModelAdmin
from .models import TechnologyCategory, Technology, Project, ProjectCategory


# region Technology Admin
@admin.register(TechnologyCategory)
class TechnologyCategoryAdmin(OrderedModelAdmin):
    list_display = ["name", "move_up_down_links"]


@admin.register(Technology)
class TechnologyAdmin(OrderedModelAdmin):
    list_display = ["name", "get_logo", "get_website", "move_up_down_links"]
    list_filter = ["category"]

    def get_logo(self, obj: Technology):
        if obj.logo:
            return format_html("""
                <img src="{}" height="50" style="border-radius: 5px;"/>
            """, obj.logo.url)
        return "-"
    
    get_logo.short_description = _("Logo")

    def get_website(self, obj: Technology):
        if obj.website:
            return format_html("""
                <a href="{}" target="_blank">{}</a>
            """, obj.website, obj.website)
        return "-"

    get_website.short_description = _("Website")
# endregion Technology Admin


# region Project Admin
@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ["name"]


@admin.register(Project)
class ProjectAdmin(OrderedModelAdmin):
    list_display = ["name", "get_github_link", "move_up_down_links"]

    def get_github_link(self, obj: Project):
        if obj.github_link:
            return format_html("""
                <a href="{}" target="_blank">{}</a>
            """, obj.github_link, obj.github_link)
        return "-"
    
    get_github_link.short_description = _("Github")
# endregion Project Admin
