# Generated by Django 4.2.13 on 2024-05-26 23:50

import conf.storage_backend
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Coarse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(null=True, storage=conf.storage_backend.PublicMediaStorage(), upload_to='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='CoarseEnrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('PENDING', 'Pending'), ('REVOKED', 'Revoked'), ('COMPLETED', 'Completed')], default='PENDING', max_length=10)),
                ('progress', models.DecimalField(decimal_places=3, max_digits=3, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('coarse', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='learn.coarse')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CoarseContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('video', models.FileField(null=True, storage=conf.storage_backend.PublicMediaStorage(), upload_to='')),
                ('image', models.ImageField(null=True, storage=conf.storage_backend.PublicMediaStorage(), upload_to='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('coarse', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='learn.coarse')),
            ],
        ),
    ]
