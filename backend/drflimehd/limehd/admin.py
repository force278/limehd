from django.contrib import admin

from .models import Channels, AdminUsers
# Register your models here.

admin.site.register(Channels)
admin.site.register(AdminUsers)
