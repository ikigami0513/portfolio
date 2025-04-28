from django.contrib import admin
from .models import School, Job


@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = ["name", "degrees", "start_year", "end_year"]


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ["name", "company", "start_date", "end_date"]
    