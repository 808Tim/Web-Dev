from django.urls import path, re_path

from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('categories/', views.category_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.product_by_category),
]