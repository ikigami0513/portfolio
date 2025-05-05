import hashlib
from django.http import HttpRequest
from .models import Visit


class VisitorTrackingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request: HttpRequest):
        ip = self.get_client_ip(request)
        user_agent = request.META.get('HTTP_USER_AGENT', '')
        path = request.path

        if not path.startswith('/admin') and not path.startswith('/static') and not path.startswith('/media'):
            Visit.objects.create(
                ip_address=ip,
                user_agent=user_agent,
                path=path
            )

        response = self.get_response(request)
        return response
    
    def get_client_ip(self, request: HttpRequest) -> str:
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
    