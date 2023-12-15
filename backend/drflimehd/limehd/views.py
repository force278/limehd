from rest_framework import viewsets
from .models import Channels, AdminUsers
from .serializers import ChannelsSerializer, AdminUsersSerializer
from .permissions import ChannelsPermissions, AdminUsersPermissions
from django.contrib.auth.models import User


#_________Channels_________

class ChannelsViewSet(viewsets.ModelViewSet):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer
    permission_classes = (ChannelsPermissions,)
    


#_________AdminUsers_________

class AdminUsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AdminUsersSerializer
    permission_classes = (AdminUsersPermissions,)
