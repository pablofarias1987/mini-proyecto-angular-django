from rest_framework import serializers
from EmployeeApp.models import Employees



class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId',
                  'EmployeeName',
                  'EmployeeNota',
                  'DateOfJoining')
            
                  