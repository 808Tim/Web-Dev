from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.

from api.models import Product
from api.models import Category

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def product_detail(request, id):
    try:
        product_details = Product.objects.get(id=id)
        return JsonResponse(product_details.to_json(), safe=False)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    
def category_detail(request, id):
    try:
        category_details = Category.objects.get(id=id)
        return JsonResponse(category_details.to_json(), safe=False)
    except:
        return JsonResponse({'error': 'Category not found'})
    
def product_by_category(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)