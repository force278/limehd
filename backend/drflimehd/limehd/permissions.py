from rest_framework import permissions
from .models import AdminUsers

class ChannelsPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        print(request.user)
        if view.action == 'list' or view.action == 'retrieve':
            return True
        elif view.action in ['update', 'partial_update', 'destroy', 'create']:
            return bool(request.user) and bool(AdminUsers.objects.filter(username=request.user).first())
        else:
            return False
        
class AdminUsersPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)
    
        
