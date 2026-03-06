from django.urls import path
from .views import branch_list, branch_detail

urlpatterns = [
    path('branches/', branch_list.as_view()),
    path('branches/<int:pk>/', branch_detail.as_view())
]