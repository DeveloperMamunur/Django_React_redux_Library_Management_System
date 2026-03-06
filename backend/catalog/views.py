from django.shortcuts import render
from rest_framework import generics
from .models import Author
from .serializers import AuthorSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class Author_list(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated]

class Author_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated]


