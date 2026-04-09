{
    'name': 'Arabian_website',
    'description': 'This is i make for learning purpose',
    'category': 'Theme/Creative',
    'version': '1.0',
    'author': 'Saiful Islam Shawon',
    'depends': ['website', 'website_sale'],
    'data': [
        'views/theme.xml',
        'views/homepage.xml',
        'views/footer.xml',
        'views/header.xml',
        'views/snippets/snippets.xml',
        'views/snippets/property_agent.xml',
       
    ],
    'assets': {
         # Theme variables
        "web._assets_primary_variables": [
            "arabian_website/static/src/scss/primary_variables.scss",
        ],
        
        
        # 🟢 Frontend Assets
        'web.assets_frontend': [
            
            # Font Awesome (IMPORTANT)
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',

            # ✅ External CSS
            'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
            "arabian_website/static/src/scss/styles.scss",

            # ✅ JS Library (Swiper MUST before custom JS)
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',

            # ✅ Custom JS
            'arabian_website/static/src/js/slider.js',
        ],
    },
    'images': [],
    'application': False,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}