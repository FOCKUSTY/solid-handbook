# Карманная книга по SOLID

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**Карманная книга по SOLID** — это интерактивное руководство по пяти принципам объектно-ориентированного проектирования, написанное с использованием [Nextra](https://nextra.site) на базе [Next.js](https://nextjs.org). Книга предназначена для программистов, которые хотят разобраться в SOLID на понятных примерах.

## 📖 Содержание

- **Вступление** — что такое SOLID и зачем он нужен.
- **Примечание** — важные соглашения и ограничения.
- **Начало**
  - Принцип единой ответственности (SRP)
  - Полиморфизм
  - Принцип открытости‑закрытости (OCP)
  - Принцип подстановки Лисков (LSP)
  - Принцип разделения интерфейсов (ISP)
  - Принцип инверсии зависимостей (DIP)
  - Заключение

Каждая глава содержит живые примеры кода на TypeScript, объяснения «на пальцах» и практические советы.

## 🚀 Технологии

- [Next.js](https://nextjs.org) 16.2.6
- [Nextra](https://nextra.site) 4.3.0 (документация из MDX)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4.2.4
- [React](https://react.dev) 19.1.0

## 📦 Установка и запуск

Для локальной работы с книгой необходимо установить [Node.js](https://nodejs.org) (рекомендуется версия 18+) и менеджер пакетов (pnpm, npm, yarn).

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/FOCKUSTY/solid-handbook.git
   cd solid-handbook
   ```

2. Установите зависимости (рекомендуется pnpm, но можно использовать npm или yarn):

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

Сборка для продакшена:

```bash
pnpm build
pnpm start
```

## 📁 Структура проекта

```
.
├── app/                     # Next.js App Router
│   ├── layout.tsx           # корневой шаблон (Nextra Layout)
│   ├── globals.css          # глобальные стили (Tailwind + Nextra)
│   └── [[...path]]/page.tsx # динамические страницы MDX
├── content/                 # всё содержимое книги
│   ├── index.mdx            # вступление
│   ├── note.mdx             # примечания
│   ├── _meta.ts             # настройки навигации для корня
│   └── start/               # главы по принципам
│       ├── single-responsibility.mdx
│       ├── polymorphism.mdx
│       ├── open-closed.mdx
│       ├── liskov-substitution.mdx
│       ├── interface-segregation.mdx
│       ├── dependency-inversion.mdx
│       ├── conclusion.mdx
│       └── _meta.ts         # порядок глав
├── public/                  # статические файлы (иконки, лого)
├── mdx-components.ts        # кастомные компоненты для MDX
├── next.config.ts           # конфигурация Next.js (подключение Nextra)
├── tsconfig.json            # настройки TypeScript
├── package.json
├── postcss.config.mjs
├── eslint.config.mjs
└── LICENSE
```

## 🤝 Вклад

Книга открыта для улучшений и дополнений. Если вы нашли ошибку, хотите предложить новый пример или просто улучшить формулировку — создавайте Issues или Pull Requests.

## 📄 Лицензия

Проект распространяется под лицензией [MIT](./LICENSE).

## ✍️ Автор

**[FOCKUSTY](https://fockusty.vercel.app)**  
Telegram: [@fockustyx](https://t.me/fockustyx)  
GitHub: [FOCKUSTY](https://github.com/FOCKUSTY)
