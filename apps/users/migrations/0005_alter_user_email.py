# Generated by Django 4.2.5 on 2024-05-08 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_first_name_user_last_name_alter_user_is_active_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=50, null=True, verbose_name='email'),
        ),
    ]
