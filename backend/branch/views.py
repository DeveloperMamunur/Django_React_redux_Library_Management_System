from django.shortcuts import render
from rest_framework import generics
from .models import Branch
from .serializers import BranchSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class branch_list(generics.ListCreateAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    permission_classes = [IsAuthenticated] 

class branch_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    permission_classes = [IsAuthenticated]