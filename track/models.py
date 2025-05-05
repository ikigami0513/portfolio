from django.db import models


class Visit(models.Model):
    ip_address = models.CharField(max_length=64)
    user_agent = models.TextField()
    path = models.CharField(max_length=512)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.ip_address} visited {self.path} at {self.timestamp}"
    