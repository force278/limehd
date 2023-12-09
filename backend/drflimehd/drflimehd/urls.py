"""
URL configuration for drflimehd project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from limehd.views import ChannelRetrieveUpdateDestroyAPIView, ChannelsListAPIView, ChannelCreateAPIView, ChannelsListCreateAPIView, AdminUserRetrieveUpdateDestroyAPIView, AdminUsersListAPIView, AdminUserCreateAPIView, AdminUsersListCreateAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Channel
    path('channels/', ChannelsListAPIView.as_view()), # получить все каналы
    path('create_channel/', ChannelCreateAPIView.as_view()), # создать один канал
    path('create_channels_list/', ChannelsListCreateAPIView.as_view()), # создать список каналов
    path('channel/<int:pk>/', ChannelRetrieveUpdateDestroyAPIView.as_view()), # чтение, обновление, удаление одного канала

    # AdminUsers
    path('admins/', ChannelsListAPIView.as_view()), # получить всех админов
    path('create_admin/', ChannelCreateAPIView.as_view()), # создать одного админа
    path('create_admins_list/', ChannelsListCreateAPIView.as_view()), # создать список админов
    path('admin/<int:pk>/', ChannelRetrieveUpdateDestroyAPIView.as_view()), # чтение, обновление, удаление одного админа
]
