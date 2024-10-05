# Generated by Django 5.1.1 on 2024-10-05 22:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Courses', '0001_initial'),
        ('Student', '0001_initial'),
        ('Teachers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='estudiantes',
            field=models.ManyToManyField(blank=True, related_name='cursos_en_curso', to='Student.student'),
        ),
        migrations.AddField(
            model_name='course',
            name='profesor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cursos', to='Teachers.teacher'),
        ),
    ]
