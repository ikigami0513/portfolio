import html
from django import template

register = template.Library()

@register.filter
def unescape(value: str) -> str:
    return html.unescape(value)
