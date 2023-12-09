from rest_framework import generics, viewsets
from .models import Channels, AdminUsers
from .serializers import ChannelsSerializer, AdminUsersSerializer


#_________Channels_________

class ChannelsViewSet(viewsets.ModelViewSet):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer


#_________AdminUsers_________

class AdminUsersViewSet(viewsets.ModelViewSet):
    queryset = AdminUsers.objects.all()
    serializer_class = AdminUsersSerializer
