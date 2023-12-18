from rest_framework import viewsets
from .models import Channels, AdminUsers
from .serializers import ChannelsSerializer, AdminUsersSerializer
from .permissions import ChannelsPermissions, AdminUsersPermissions
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

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
    def destroy(self, request, *args, **kwargs):
        if (User.objects.filter(is_superuser=True).count() < 2):
            return Response(status=status.HTTP_403_FORBIDDEN, data='Нельзя удалить последнего админа')
        instance = self.get_object()
        token = Token.objects.filter(user=instance)
        token.delete()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
