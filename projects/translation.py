from modeltranslation.translator import translator, TranslationOptions
from .models import TechnologyCategory, Project


class TechnologyCategoryTranslationOptions(TranslationOptions):
    fields = ["name"]


class ProjectTranslationOptions(TranslationOptions):
    fields = ["name"]


translator.register(TechnologyCategory, TechnologyCategoryTranslationOptions)