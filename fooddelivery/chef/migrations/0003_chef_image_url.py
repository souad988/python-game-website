# Generated by Django 3.0.8 on 2020-07-06 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chef', '0002_deliverist'),
    ]

    operations = [
        migrations.AddField(
            model_name='chef',
            name='image_url',
            field=models.CharField(default='https://dailygeekshow.com/wp-content/uploads/2020/01/chef.jpg', max_length=3000),
            preserve_default=False,
        ),
    ]
