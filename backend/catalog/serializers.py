from rest_framework import serializers
from .models import Author, Category, Publisher, Item, Copy

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'
