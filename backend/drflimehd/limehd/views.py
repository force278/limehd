from rest_framework import generics
from .models import Channels, AdminUsers
from .serializers import ChannelsSerializer, AdminUsersSerializer


#_________Channels_________

# Получение всех каналов
class ChannelsListAPIView(generics.ListAPIView):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer

# Создание одного канала
class ChannelCreateAPIView(generics.CreateAPIView):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer

# Создание списка каналов
class ChannelsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer

# Чтение, обновление, удаление одного канала
class ChannelRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer


#_________AdminUsers_________

# Получение всех админов
class AdminUsersListAPIView(generics.ListAPIView):
    queryset = AdminUsers.objects.all()
    serializer_class = AdminUsersSerializer

# Создание одного канала
class AdminUserCreateAPIView(generics.CreateAPIView):
    queryset = AdminUsers.objects.all()
    serializer_class = AdminUsersSerializer

# Создание списка каналов
class AdminUsersListCreateAPIView(generics.ListCreateAPIView):
    queryset = AdminUsers.objects.all()
    serializer_class = AdminUsersSerializer

# Чтение, обновление, удаление одного канала
class AdminUserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AdminUsers.objects.all()
    serializer_class = AdminUsersSerializer
