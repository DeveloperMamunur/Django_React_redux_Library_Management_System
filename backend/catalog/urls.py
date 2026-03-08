from django.urls import path
from .views import Author_list, Author_detail, Publisher_list, Publisher_detail, Category_list, Category_detail, Item_list, Item_detail


urlpatterns = [
    path('authors/', Author_list.as_view()),
    path('authors/<int:pk>/', Author_detail.as_view()),
    path('publishers/', Publisher_list.as_view()),
    path('publishers/<int:pk>/', Publisher_detail.as_view()),
    path('categories/', Category_list.as_view()),
    path('categories/<int:pk>/', Category_detail.as_view()),
    path('items/', Item_list.as_view()),
    path('items/<int:pk>/', Item_detail.as_view()),
]