from django.core.management.base import BaseCommand
from django.db import transaction


class Command(BaseCommand):
    help = 'Seed basic data: difficulty levels, signs, badges, and courses'

    def handle(self, *args, **options):
        with transaction.atomic():
            self.stdout.write('Seeding difficulty levels...')
            self.seed_difficulty_levels()
            
            self.stdout.write('Seeding sign categories...')
            self.seed_sign_categories()
            
            self.stdout.write('Seeding signs...')
            self.seed_signs()
            
            self.stdout.write('Seeding badges...')
            self.seed_badges()
            
            self.stdout.write('Seeding courses...')
            self.seed_courses()

        self.stdout.write(self.style.SUCCESS('Basic seeding completed successfully!'))

    def seed_difficulty_levels(self):
        """Create difficulty levels"""
        from apps.learning.models import DifficultyLevel
        
        difficulty_levels = [
            {
                'name': 'Beginner',
                'description': 'Perfect for young children just starting with sign language',
                'age_range_min': 3,
                'age_range_max': 6,
                'level_order': 1,
                'is_active': True,
                'color_code': '#4CAF50',
            },
            {
                'name': 'Intermediate',
                'description': 'For children who understand basic signs and want to expand their vocabulary',
                'age_range_min': 7,
                'age_range_max': 10,
                'level_order': 2,
                'is_active': True,
                'color_code': '#2196F3',
            },
            {
                'name': 'Advanced',
                'description': 'For older children ready for complex signs and conversations',
                'age_range_min': 11,
                'age_range_max': 15,
                'level_order': 3,
                'is_active': True,
                'color_code': '#FF9800',
            },
        ]

        for level_data in difficulty_levels:
            level, created = DifficultyLevel.objects.get_or_create(
                name=level_data['name'],
                defaults=level_data
            )
            if created:
                self.stdout.write(f'  Created difficulty level: {level.name}')

    def seed_sign_categories(self):
        """Create sign categories"""
        from apps.learning.models import SignCategory
        
        categories_data = [
            {'name': 'Alphabet', 'description': 'Letters of the alphabet in sign language'},
            {'name': 'Numbers', 'description': 'Numbers and counting signs'},
            {'name': 'Colors', 'description': 'Different color signs'},
            {'name': 'Shapes', 'description': 'Basic geometric shapes'},
            {'name': 'Greetings', 'description': 'Basic greeting signs'},
            {'name': 'Basic', 'description': 'Essential everyday signs'},
        ]

        for category_data in categories_data:
            category, created = SignCategory.objects.get_or_create(
                name=category_data['name'],
                defaults=category_data
            )
            if created:
                self.stdout.write(f'  Created category: {category.name}')

    def seed_signs(self):
        """Create sample signs"""
        from apps.learning.models import Sign, SignCategory, DifficultyLevel
        
        beginner = DifficultyLevel.objects.get(name='Beginner')
        intermediate = DifficultyLevel.objects.get(name='Intermediate')
        
        alphabet_cat = SignCategory.objects.get(name='Alphabet')
        numbers_cat = SignCategory.objects.get(name='Numbers')
        colors_cat = SignCategory.objects.get(name='Colors')
        shapes_cat = SignCategory.objects.get(name='Shapes')
        greetings_cat = SignCategory.objects.get(name='Greetings')
        basic_cat = SignCategory.objects.get(name='Basic')

        # Alphabet signs
        alphabet_signs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        for letter in alphabet_signs:
            sign, created = Sign.objects.get_or_create(
                word=f'Letter {letter}',
                defaults={
                    'description': f'Sign for the letter {letter}',
                    'difficulty_level': beginner,
                    'category': alphabet_cat,
                }
            )
            if created:
                self.stdout.write(f'  Created alphabet sign: {sign.word}')

        # Number signs
        number_signs = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
        for number in number_signs:
            sign, created = Sign.objects.get_or_create(
                word=number,
                defaults={
                    'description': f'Sign for the number {number}',
                    'difficulty_level': beginner,
                    'category': numbers_cat,
                }
            )
            if created:
                self.stdout.write(f'  Created number sign: {sign.word}')

        # Color signs
        color_signs = [
            {'word': 'Red', 'description': 'Sign for the color red'},
            {'word': 'Blue', 'description': 'Sign for the color blue'},
            {'word': 'Green', 'description': 'Sign for the color green'},
            {'word': 'Yellow', 'description': 'Sign for the color yellow'},
            {'word': 'Orange', 'description': 'Sign for the color orange'},
            {'word': 'Purple', 'description': 'Sign for the color purple'},
            {'word': 'Pink', 'description': 'Sign for the color pink'},
            {'word': 'Brown', 'description': 'Sign for the color brown'},
            {'word': 'Black', 'description': 'Sign for the color black'},
            {'word': 'White', 'description': 'Sign for the color white'},
        ]
        
        for color_data in color_signs:
            sign, created = Sign.objects.get_or_create(
                word=color_data['word'],
                defaults={
                    'description': color_data['description'],
                    'difficulty_level': beginner,
                    'category': colors_cat,
                }
            )
            if created:
                self.stdout.write(f'  Created color sign: {sign.word}')

        # Shape signs
        shape_signs = [
            {'word': 'Circle', 'description': 'Sign for a circle shape'},
            {'word': 'Square', 'description': 'Sign for a square shape'},
            {'word': 'Triangle', 'description': 'Sign for a triangle shape'},
            {'word': 'Rectangle', 'description': 'Sign for a rectangle shape'},
            {'word': 'Star', 'description': 'Sign for a star shape'},
            {'word': 'Heart', 'description': 'Sign for a heart shape'},
            {'word': 'Diamond', 'description': 'Sign for a diamond shape'},
            {'word': 'Oval', 'description': 'Sign for an oval shape'},
        ]
        
        for shape_data in shape_signs:
            sign, created = Sign.objects.get_or_create(
                word=shape_data['word'],
                defaults={
                    'description': shape_data['description'],
                    'difficulty_level': beginner,
                    'category': shapes_cat,
                }
            )
            if created:
                self.stdout.write(f'  Created shape sign: {sign.word}')

        # Basic greeting signs
        greeting_signs = [
            {'word': 'Hello', 'description': 'A friendly greeting gesture'},
            {'word': 'Goodbye', 'description': 'A farewell gesture'},
            {'word': 'Thank you', 'description': 'Expression of gratitude'},
            {'word': 'Please', 'description': 'Polite request gesture'},
            {'word': 'Sorry', 'description': 'Apology gesture'},
            {'word': 'Excuse me', 'description': 'Polite interruption gesture'},
        ]
        
        for greeting_data in greeting_signs:
            sign, created = Sign.objects.get_or_create(
                word=greeting_data['word'],
                defaults={
                    'description': greeting_data['description'],
                    'difficulty_level': beginner,
                    'category': greetings_cat,
                }
            )
            if created:
                self.stdout.write(f'  Created greeting sign: {sign.word}')

        # Basic everyday signs
        basic_signs = [
            {'word': 'Help', 'description': 'Request for assistance'},
            {'word': 'Water', 'description': 'Sign for water'},
            {'word': 'Food', 'description': 'Sign for food'},
            {'word': 'Home', 'description': 'Sign for home'},
            {'word': 'School', 'description': 'Sign for school'},
            {'word': 'Family', 'description': 'Sign for family'},
            {'word': 'Friend', 'description': 'Sign for friend'},
            {'word': 'Play', 'description': 'Sign for playing'},
            {'word': 'Stop', 'description': 'Sign to stop'},
            {'word': 'Go', 'description': 'Sign to go or move'},
        ]
        
        for basic_data in basic_signs:
            sign, created = Sign.objects.get_or_create(
                word=basic_data['word'],
                defaults={
                    'description': basic_data['description'],
                    'difficulty_level': beginner,
                    'category': basic_cat,
                }
            )
            if created:
                self.stdout.write(f'  Created basic sign: {sign.word}')

    def seed_badges(self):
        """Create gamification badges"""
        from apps.gamification.models import Badge
        
        badges_data = [
            {
                'name': 'Alphabet Master',
                'description': 'Learn all 26 letters of the alphabet',
                'badge_type': 'SIGN_MASTER',
                'points_required': 50,
                'is_active': True,
                'display_order': 1,
            },
            {
                'name': 'Number Expert',
                'description': 'Master numbers 1-10',
                'badge_type': 'SIGN_MASTER',
                'points_required': 30,
                'is_active': True,
                'display_order': 2,
            },
            {
                'name': 'Color Champion',
                'description': 'Learn all basic colors',
                'badge_type': 'SIGN_MASTER',
                'points_required': 40,
                'is_active': True,
                'display_order': 3,
            },
            {
                'name': 'Shape Genius',
                'description': 'Master all basic shapes',
                'badge_type': 'SIGN_MASTER',
                'points_required': 35,
                'is_active': True,
                'display_order': 4,
            },
            {
                'name': 'First Sign',
                'description': 'Learn your first sign language gesture',
                'badge_type': 'PARTICIPATION',
                'points_required': 10,
                'is_active': True,
                'display_order': 5,
            },
            {
                'name': 'Quick Learner',
                'description': 'Complete 5 lessons in one day',
                'badge_type': 'STREAK',
                'points_required': 50,
                'is_active': True,
                'display_order': 6,
            },
            {
                'name': 'Course Complete',
                'description': 'Complete your first course',
                'badge_type': 'COURSE_COMPLETION',
                'points_required': 75,
                'is_active': True,
                'display_order': 7,
            },
            {
                'name': 'Week Warrior',
                'description': 'Practice for 7 consecutive days',
                'badge_type': 'STREAK',
                'points_required': 60,
                'is_active': True,
                'display_order': 8,
            },
        ]

        for badge_data in badges_data:
            badge, created = Badge.objects.get_or_create(
                name=badge_data['name'],
                defaults=badge_data
            )
            if created:
                self.stdout.write(f'  Created badge: {badge.name}')

    def seed_courses(self):
        """Create courses for alphabet, numbers, colors, and shapes"""
        from apps.learning.models import Course, Lesson, DifficultyLevel, Sign
        
        beginner = DifficultyLevel.objects.get(name='Beginner')
        
        courses_data = [
            {
                'title': 'Learn the Alphabet',
                'slug': 'learn-alphabet',
                'description': 'Master all 26 letters of the alphabet in sign language. Perfect for beginners starting their sign language journey.',
                'short_description': 'Complete alphabet course for beginners',
                'difficulty_level': beginner,
                'age_range_min': 3,
                'age_range_max': 8,
                'estimated_duration_minutes': 60,
                'is_free': True,
                'price': 0,
                'is_published': True,
                'is_featured': True,
            },
            {
                'title': 'Numbers and Counting',
                'slug': 'numbers-counting',
                'description': 'Learn to sign numbers from 1-10 and basic counting skills. Essential for everyday communication.',
                'short_description': 'Numbers 1-10 and counting basics',
                'difficulty_level': beginner,
                'age_range_min': 3,
                'age_range_max': 8,
                'estimated_duration_minutes': 45,
                'is_free': True,
                'price': 0,
                'is_published': True,
                'is_featured': True,
            },
            {
                'title': 'Colors in Sign Language',
                'slug': 'colors-sign-language',
                'description': 'Discover vibrant colors through sign language. Learn all basic colors and how to use them in conversation.',
                'short_description': 'Basic colors for young learners',
                'difficulty_level': beginner,
                'age_range_min': 3,
                'age_range_max': 8,
                'estimated_duration_minutes': 50,
                'is_free': True,
                'price': 0,
                'is_published': True,
                'is_featured': False,
            },
            {
                'title': 'Shapes and Forms',
                'slug': 'shapes-forms',
                'description': 'Explore geometric shapes through sign language. Learn basic shapes and how to describe them.',
                'short_description': 'Basic geometric shapes',
                'difficulty_level': beginner,
                'age_range_min': 4,
                'age_range_max': 9,
                'estimated_duration_minutes': 40,
                'is_free': True,
                'price': 0,
                'is_published': True,
                'is_featured': False,
            },
        ]

        for course_data in courses_data:
            course, created = Course.objects.get_or_create(
                slug=course_data['slug'],
                defaults=course_data
            )
            if created:
                self.stdout.write(f'  Created course: {course.title}')
                
                # Create lessons for each course
                self.create_lessons_for_course(course)

    def create_lessons_for_course(self, course):
        """Create lessons for a specific course"""
        from apps.learning.models import Lesson
        
        if course.slug == 'learn-alphabet':
            lessons = [
                {'title': 'Letters A-M', 'order': 1, 'description': 'Learn the first half of the alphabet', 'duration_minutes': 30},
                {'title': 'Letters N-Z', 'order': 2, 'description': 'Learn the second half of the alphabet', 'duration_minutes': 30},
            ]
        elif course.slug == 'numbers-counting':
            lessons = [
                {'title': 'Numbers 1-5', 'order': 1, 'description': 'Learn numbers 1 through 5', 'duration_minutes': 20},
                {'title': 'Numbers 6-10', 'order': 2, 'description': 'Learn numbers 6 through 10', 'duration_minutes': 25},
            ]
        elif course.slug == 'colors-sign-language':
            lessons = [
                {'title': 'Primary Colors', 'order': 1, 'description': 'Learn red, blue, and yellow', 'duration_minutes': 25},
                {'title': 'Secondary Colors', 'order': 2, 'description': 'Learn green, orange, and purple', 'duration_minutes': 25},
            ]
        elif course.slug == 'shapes-forms':
            lessons = [
                {'title': 'Basic Shapes', 'order': 1, 'description': 'Learn circle, square, and triangle', 'duration_minutes': 20},
                {'title': 'Advanced Shapes', 'order': 2, 'description': 'Learn rectangle, star, and heart', 'duration_minutes': 20},
            ]
        else:
            return

        for lesson_data in lessons:
            lesson, created = Lesson.objects.get_or_create(
                title=lesson_data['title'],
                course=course,
                defaults={
                    'order': lesson_data['order'],
                    'description': lesson_data['description'],
                    'duration_minutes': lesson_data['duration_minutes'],
                    'is_free': True,
                    'is_published': True,
                }
            )
            if created:
                self.stdout.write(f'    Created lesson: {lesson.title}')
