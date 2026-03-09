from django.shortcuts import render
from rest_framework import generics
from .models import Author, Publisher, Category, Item, Copy
from .serializers import AuthorSerializer, PublisherSerializer, CategorySerializer, ItemSerializer, CopySerializer
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

class Publisher_list(generics.ListCreateAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    permission_classes = [IsAuthenticated]

class Publisher_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    permission_classes = [IsAuthenticated]

class Category_list(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

class Category_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

class Item_list(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
    


class Item_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

class Copy_list(generics.ListCreateAPIView):
    queryset = Copy.objects.all()
    serializer_class = CopySerializer
    permission_classes = [IsAuthenticated]


class Copy_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Copy.objects.all()
    serializer_class = CopySerializer
    permission_classes = [IsAuthenticated]