from django.urls import path

from .views import QuestionView

urlpatterns = [
    path('ask/', QuestionView.as_view(), name='ask_view'),
]
