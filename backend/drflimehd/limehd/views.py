from django.forms import model_to_dict
from rest_framework import generics
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Channels
from .serializers import ChannelsSerializer


class ChannelAPIList(generics.ListCreateAPIView):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer


class ChannelAPIUpdate(generics.UpdateAPIView):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer
