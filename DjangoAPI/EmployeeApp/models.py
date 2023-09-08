from django.db import models

# Create your models here.

class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    EmployeeNota = models.CharField(max_length=200)
    DateOfJoining = models.DateField()
