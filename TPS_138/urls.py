from django.conf.urls import url

from TPS_138 import views

urlpatterns=[
    url(r'^$',views.home,name="home"),

]