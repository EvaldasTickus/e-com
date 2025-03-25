from rest_framework import serializers
from .models import Product, Category, Size

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]

class ProductSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['size',]  

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    sizes = ProductSizeSerializer(many=True) 

    class Meta:
        model = Product
        fields = "__all__"