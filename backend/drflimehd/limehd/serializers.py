from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from .models import Channels, AdminUsers



class ChannelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channels
        fields = "__all__"


class AdminUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUsers
        fields = "__all__"