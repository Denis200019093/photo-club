# ƒ/клуб — Портфоліо фотоклубу

Сайт-портфоліо для фотоклубу побудований на **Astro 4**, **Tailwind CSS** та **DaisyUI**.

## Стек

- [Astro](https://astro.build) — статична генерація
- [Tailwind CSS](https://tailwindcss.com) — стилізація
- [DaisyUI](https://daisyui.com) — UI-компоненти та теми
- Vanilla JS — фільтрація по автору (без зайвих фреймворків)

## Запуск

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # збірка в /dist
npm run preview   # перегляд збірки
```

## Структура проекту

```
src/
├── content/
│   ├── config.ts         # схеми колекцій (Zod)
│   ├── photos/           # .md файли фотографій
│   └── members/          # .md файли учасників клубу
├── pages/
│   ├── index.astro       # галерея з фільтрами
│   ├── about.astro       # сторінка учасників
│   └── contact.astro     # контактна форма
├── components/
│   ├── FilterBar.astro   # кнопки фільтрів по автору
│   ├── PhotoCard.astro   # картка фотографії
│   └── MemberCard.astro  # картка учасника
├── layouts/
│   └── Layout.astro      # базовий layout (navbar + footer)
└── styles/
    └── global.css        # глобальні стилі + Tailwind
public/
└── photos/               # зображення (локально)
    ├── sofia/
    ├── mykola/
    └── daryna/
```

## Як додати нову фотографію

1. Покладіть файл зображення у `public/photos/<author>/`
2. Створіть `src/content/photos/your-photo.md`:

```yaml
---
title: "Назва фото"
author: "slug-автора"       # має збігатись з filename учасника
category: "street"          # street / landscape / portrait / etc.
date: "2024-05-20"
image: "/photos/author/filename.jpg"
featured: false             # true = займає 2 рядки в сітці
---
```

## Як додати нового учасника

1. Додайте аватар у `public/photos/<slug>/avatar.jpg`
2. Створіть `src/content/members/<slug>.md`:

```yaml
---
name: "Ім'я Прізвище"
role: "Жанр фотографії"
bio: "Короткий опис..."
avatar: "/photos/slug/avatar.jpg"
instagram: "instagram_handle"   # опціонально
joined: "2023-09-01"
---
```

> **Важливо:** slug учасника — це ім'я файлу без `.md` (наприклад, `ivan-koval.md` → slug `ivan-koval`). Саме це значення треба вказувати у полі `author` фотографій.

## Теми та кольори

Кольорова схема налаштована у `tailwind.config.mjs` у секції `daisyui.themes`. Основний акцент — тепла плівкова палітра (`film-*`).

## Деплой

Проект генерує статичний HTML у `/dist` — підходить для будь-якого хостингу:

- **Netlify / Vercel** — просто підключити репозиторій
- **GitHub Pages** — налаштувати `base` в `astro.config.mjs`
- **Звичайний хостинг** — завантажити вміст `/dist`
