from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

# Size Model (Stores all possible sizes)
class Size(models.Model):
    size = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.size

class Product(models.Model):
    SIZE_CHOICES = [
        ('XS', 'Extra Small'),
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
        ('XXL', 'Double Extra Large'),
    ] + [(str(size), f"EU {size}") for size in range(38, 47)]
    title = models.CharField(max_length=255)
    content = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sizes = models.ManyToManyField(Size, related_name="products", blank=True)
    image_link = models.CharField(max_length=255, null=True, blank=True)
    published_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products", null=True, blank=True, default=None)

    def __str__(self):
        return self.title
