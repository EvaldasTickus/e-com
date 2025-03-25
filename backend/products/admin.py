from django.contrib import admin
from .models import Product, Category, Size

class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "price")
    filter_horizontal = ("sizes",)  # Enables multi-select for sizes

admin.site.register(Product, ProductAdmin)
admin.site.register(Category)
admin.site.register(Size)