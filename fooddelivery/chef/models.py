from django.db import models


class Chef(models.Model):
    image_url = models.CharField(max_length=3000)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    adr = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name


class Deliverist(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    adr = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name
