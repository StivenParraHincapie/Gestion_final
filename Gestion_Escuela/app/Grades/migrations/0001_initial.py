# Generated by Django 5.1.1 on 2024-10-05 22:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Grade',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('calificacion', models.DecimalField(decimal_places=2, max_digits=5)),
                ('fecha_evaluacion', models.DateField()),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='calificaciones', to='Courses.course')),
            ],
        ),
    ]
