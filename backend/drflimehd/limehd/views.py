from rest_framework import generics, viewsets
from .models import Channels, AdminUsers
from .serializers import ChannelsSerializer, AdminUsersSerializer
from .permissions import ChannelsPermissions, AdminUsersPermissions


#_________Channels_________

class ChannelsViewSet(viewsets.ModelViewSet):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer
    permission_classes = (ChannelsPermissions,)


#_________AdminUsers_________

class AdminUsersViewSet(viewsets.ModelViewSet):
    queryset = AdminUsers.objects.all()
    serializer_class = AdminUsersSerializer
    permission_classes = (AdminUsersPermissions,)
