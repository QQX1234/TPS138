from django.db import models

# Create your models here.
class Base(models.Model):
    img = models.CharField(max_length=100)

    class Meta:
        abstract = True
#轮播图
class Wheel(Base):
    class Meta:
        db_table = "TPS138_Wheel"
