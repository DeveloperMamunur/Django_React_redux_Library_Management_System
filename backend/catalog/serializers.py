from rest_framework import serializers
from .models import Author, Category, Publisher, Item, Copy
from branch.models import Branch
from branch.serializers import BranchSerializer

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)
    categories = CategorySerializer(many=True, read_only=True)
    publisher = PublisherSerializer(read_only=True)

    author_ids = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(),
        source="authors",
        many=True,
        write_only=True
    )

    category_ids = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source="categories",
        many=True,
        write_only=True
    )

    publisher_id = serializers.PrimaryKeyRelatedField(
        queryset=Publisher.objects.all(),
        source="publisher",
        write_only=True
    )

    class Meta:
        model = Item
        fields = [
            'id',
            'title',
            'subtitle',
            'item_type',
            'isbn',
            'issn',
            'authors',
            'categories',
            'publisher',
            'author_ids',
            'category_ids',
            'publisher_id',
            'publication_year',
            'edition',
            'classification_system',
            'classification_number',
            'pages',
            'language',
            'cover_image',
            'digital_file',
            'file_size_mb',
            'description',
            'keywords'
        ]

class CopySerializer(serializers.ModelSerializer):
    item = ItemSerializer(read_only=True)
    branch = BranchSerializer(read_only=True)

    branch_id = serializers.PrimaryKeyRelatedField(
        queryset=Branch.objects.all(),
        source="branch",
        write_only=True
    )
    item_id = serializers.PrimaryKeyRelatedField(
        queryset=Item.objects.all(),
        source="item",
        write_only=True
    )

    class Meta:
        model = Copy
        fields = [
            'id',
            'item',
            'item_id',
            'branch',
            'branch_id',
            'barcode',
            'rfid_tag',
            'location',
            'status',
            'condition',
            'acquisition_date',
            'price',
            'notes'
        ]