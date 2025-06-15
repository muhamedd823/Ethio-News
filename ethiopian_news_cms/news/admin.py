from django.contrib import admin
from .models import Category, Article

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'status', 'publication_date', 'language')
    list_filter = ('status', 'category', 'language', 'publication_date')
    search_fields = ('title', 'content', 'excerpt')
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ('author',) # Use raw_id_fields for better performance with many users
    date_hierarchy = 'publication_date'
    ordering = ('-publication_date',)

    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'content', 'excerpt', 'featured_image')
        }),
        ('Details', {
            'fields': ('category', 'tags', 'language')
        }),
        ('Publication', {
            'fields': ('author', 'status', 'publication_date')
        }),
    )

# If you don't want to use the decorator, you can do:
# admin.site.register(Category, CategoryAdmin)
# admin.site.register(Article, ArticleAdmin)
