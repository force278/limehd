# Generated by Django 5.0 on 2023-12-08 14:32

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("limehd", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="AdminUsers",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=20)),
                ("password", models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name="Admin_users",
        ),
        migrations.AlterField(
            model_name="channels",
            name="icon",
            field=models.CharField(max_length=350),
        ),
        migrations.AlterField(
            model_name="channels",
            name="stream",
            field=models.CharField(max_length=350),
        ),
        migrations.AlterField(
            model_name="channels",
            name="url",
            field=models.CharField(max_length=350),
        ),
    ]