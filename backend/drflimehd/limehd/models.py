from django.db import models


class AdminUsers(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def str(self):
        return self.title

class Channels(models.Model):
    url = models.CharField(max_length=350)
    icon = models.CharField(max_length=350)
    name = models.CharField(max_length=50)
    stream = models.CharField(max_length=350)

    def str(self):
        return self.title
