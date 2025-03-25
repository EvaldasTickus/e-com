# Generated by Django 5.1.7 on 2025-03-24 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_size_remove_product_size_product_sizes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='sizes',
            field=models.ManyToManyField(blank=True, related_name='products', to='products.size'),
        ),
    ]
