from django.urls import path
from .views import Author_list, Author_detail, Publisher_list, Publisher_detail

urlpatterns = [
    path('authors/', Author_list.as_view()),
    path('authors/<int:pk>/', Author_detail.as_view()),
    path('publishers/', Publisher_list.as_view()),
    path('publishers/<int:pk>/', Publisher_detail.as_view()),
]