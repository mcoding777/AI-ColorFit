# Generated by Django 4.0.2 on 2022-02-24 08:36

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
            name='Fashion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(choices=[('SP', 'spring'), ('SU', 'summer'), ('FA', 'fall'), ('WI', 'winter')], default='SP', max_length=2)),
                ('image', models.ImageField(upload_to='fashion/')),
                ('date', models.DateField()),
                ('color_match_rate', models.IntegerField()),
                ('brightness_match_rate', models.IntegerField()),
                ('saturation_match_rate', models.IntegerField()),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(choices=[('SP', 'spring'), ('SU', 'summer'), ('FA', 'fall'), ('WI', 'winter')], default='SP', max_length=2)),
                ('image', models.ImageField(upload_to='face/')),
                ('date', models.DateField()),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
