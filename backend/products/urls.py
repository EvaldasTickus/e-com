from django.urls import path
from .views import ProductListCreateView, ProductDetailView, ProductSizeList

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('products/<int:product_id>/sizes/', ProductSizeList.as_view(), name='product-sizes'),
]