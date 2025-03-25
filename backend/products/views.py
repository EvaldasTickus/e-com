from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.pagination import PageNumberPagination
from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, ProductSizeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class ProductPagination(PageNumberPagination):
    page_size = 20  
    page_size_query_param = "page_size"
    max_page_size = 100  

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all().order_by('-published_at')
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination 

class ProductSizeList(APIView):
    def get(self, request, product_id):
        product = Product.objects.get(id=product_id)
        sizes = list(product.sizes.values_list("size", flat=True)) 
        return JsonResponse({"sizes": sizes})