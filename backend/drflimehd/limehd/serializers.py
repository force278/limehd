from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.contrib.auth.models import User

from .models import Channels



class ChannelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channels
        fields = "__all__"


class AdminUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
    def create(self, validated_data):
        return User.objects.create_superuser(username=validated_data['username'], password=validated_data['password'])
            
