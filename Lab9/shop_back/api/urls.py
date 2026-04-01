from django.urls import path, re_path
from rest_framework.routers import DefaultRouter # type: ignore

from api import views
from .views import CategoryViewSet, ProductViewSet

# urlpatterns = [
#     path('products/', views.product_list),
#     path('categories/', views.category_list),
#     path('products/<int:id>/', views.product_detail),
#     path('categories/<int:id>/', views.category_detail),
#     path('categories/<int:id>/products/', views.product_by_category),
# ]

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = router.urls
